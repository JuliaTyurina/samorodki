import "./index.scss"

export const initInputHint = (selector) => {
    document.querySelectorAll(selector).forEach(container => {
        const input = container.querySelector("[data-hint-input]");
        const hintList = container.querySelector("[data-hint-list]");
        const clearButton = container.querySelector("[data-hint-clear]");

        if (!input || !hintList || !clearButton) return;

        // Функция обновления UI
        const updateUI = () => {
            const hasText = input.value.trim().length > 1;
            container.dataset.hintVisible = hasText;
            clearButton.style.display = hasText ? "flex" : "none";
        };

        updateUI()

        // Отображение подсказки при вводе
        input.addEventListener("input", updateUI);

        // Вставка подсказки при клике на нее
        hintList.addEventListener("click", (event) => {
            const hintLink = event.target.closest(".hint__link");
            if (!hintLink) return;

            event.preventDefault();
            input.value = hintLink.textContent.trim();
            container.dataset.hintVisible = "false";
        });

        // Очистка инпута
        clearButton.addEventListener("click", () => {
            input.value = "";
            updateUI();
            input.focus();
        });

        // Закрытие подсказки при клике вне инпута
        document.addEventListener("click", (event) => {
            if (!container.contains(event.target)) {
                container.dataset.hintVisible = "false";
            }
        });
    });
};
