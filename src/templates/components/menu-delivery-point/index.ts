import "./index.scss"

import { mqData } from "@js/helpers/media.ts";

export const initDeliveryTabs = () => {
    const { breakpoints } = mqData();
    const breakpointsNum = breakpoints.toNumbers();

    const updateTabs = () => {
        const isMobile = window.innerWidth < breakpointsNum.md;

        document.querySelectorAll("[data-view]").forEach(container => {
            const buttons = container.querySelectorAll("[data-mode]");
            if (!buttons.length) return;

            if (!isMobile) {
                container.removeEventListener("click", handleTabClick);
                container.dataset.view = ""
                return;
            }

            container.dataset.view = container.dataset.view || buttons[0].dataset.mode;
            container.addEventListener("click", handleTabClick);
        });
    };

    const handleTabClick = (event) => {
        const clickedButton = event.target.closest("[data-mode]");
        if (clickedButton) {
            event.currentTarget.dataset.view = clickedButton.dataset.mode;
        }
    };

    updateTabs();

    window.addEventListener("resize", updateTabs);
};


