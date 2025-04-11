import "./index.scss";

import "./index.scss";

export const initCopyPromocode = () => {
    const promoContainers = document.querySelectorAll(".promo");

    promoContainers.forEach((container) => {
        const promoCode = container.querySelector(".promo__code");
        const tooltipText = container.querySelector(".copy__text");
        const tooltipIcon = container.querySelector(".copy__icon");

        if (promoCode && tooltipText && tooltipIcon) {
            container.addEventListener("click", () => {
                const text = promoCode.innerText.trim();

                const showTooltip = (message) => {
                    tooltipText.innerText = message;
                    tooltipIcon.style.display = "none";

                    setTimeout(() => {
                        tooltipText.innerText = "Копировать";
                        tooltipIcon.style.display = "block";
                    }, 2000);
                };

                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(text)
                        .then(() => {
                            showTooltip("Скопировано!");
                        })
                        .catch((err) => {
                            console.error("Ошибка копирования:", err);
                            showTooltip("Ошибка");
                        });
                } else {
                    // fallback для Safari / iOS
                    const textarea = document.createElement("textarea");
                    textarea.value = text;
                    textarea.setAttribute("readonly", "");
                    textarea.style.position = "absolute";
                    textarea.style.left = "-9999px";
                    document.body.appendChild(textarea);
                    textarea.select();

                    try {
                        const successful = document.execCommand("copy");
                        if (successful) {
                            showTooltip("Скопировано!");
                        } else {
                            showTooltip("Ошибка");
                        }
                    } catch (err) {
                        console.error("Ошибка execCommand:", err);
                        showTooltip("Ошибка");
                    }

                    document.body.removeChild(textarea);
                }
            });
        }
    });
};
