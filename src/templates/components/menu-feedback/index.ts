import "./index.scss"

const starsContainer = document.querySelector('.menu-feedback__stars .stars');
const uploadTrigger = document.querySelector('.photo-upload__trigger');

if (starsContainer) {
    const stars = starsContainer.querySelectorAll('.stars__item');

    stars.forEach((star, index) => {

        // Наведение мышью
        star.addEventListener('mouseenter', () => {
            starsContainer.dataset.hover = index + 1;
        });

        star.addEventListener('mouseleave', () => {
            starsContainer.removeAttribute('data-hover');
        });

        // Наведение через клавиатуру
        star.addEventListener('focus', () => {
            starsContainer.dataset.hover = index + 1;
        });

        star.addEventListener('blur', () => {
            starsContainer.removeAttribute('data-hover');
        });

        // Выбор рейтинга по клику
        star.addEventListener('click', () => {
            starsContainer.dataset.rating = index + 1;
            uploadTrigger?.focus();
        });

        // Выбор по Enter или навигация стрелками
        star.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                starsContainer.dataset.rating = index + 1;
                starsContainer.removeAttribute('data-hover');
                uploadTrigger?.focus();
                return;
            }

            // Навигация по стрелкам
            if (e.key === 'ArrowRight' && index < stars.length - 1) {
                stars[index + 1].focus();
            }

            if (e.key === 'ArrowLeft' && index > 0) {
                stars[index - 1].focus();
            }
        });

    });
    uploadTrigger?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            fileInput.click();
        }
    });

}
