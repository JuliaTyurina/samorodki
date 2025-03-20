import "./index.scss"

document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.section-feedback__progress-indicator');
    const counters = document.querySelectorAll('.section-feedback__chart-value');

    if (progressBars && counters) {
        progressBars.forEach((progressBar, index) => {
            const busynessValue = parseFloat(counters[index].textContent);
            progressBar.style.width = `${busynessValue}%`;
        });
    }

    document.querySelectorAll(".section-feedback__card").forEach((card, reviewIndex) => {
        let images = card.querySelectorAll(".section-feedback__card-photos img");
        let overlay = card.querySelector(".section-feedback__card-photos-overlay");

        images.forEach((img, imgIndex) => {
            img.setAttribute("data-fancybox", `product-feedback-${reviewIndex}`);
            img.setAttribute("data-index", imgIndex);
        });

        overlay.setAttribute("data-fancybox-trigger", `product-feedback-${reviewIndex}`)
    });
});

