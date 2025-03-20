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

                navigator.clipboard.writeText(text)
                    .then(() => {
                        tooltipText.innerText = "Скопировано!";
                        tooltipIcon.style.display = "none"

                        setTimeout(() => {
                            tooltipText.innerText = "Копировать";
                            tooltipIcon.style.display = "block"

                        }, 2000);
                    })
                    .catch((err) => {
                        console.error("Ошибка копирования:", err);
                    });
            });
        }
    });
};
