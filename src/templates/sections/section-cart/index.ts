import "./index.scss"

export const initFloatingBar = () => {
    document.querySelectorAll("[data-float-wrapper]").forEach(wrapper => {
        const trigger = wrapper.querySelector("[data-float-trigger]");
        const bar = wrapper.querySelector("[data-float-bar]");
        const breakpointShow = parseInt(wrapper.dataset.floatBreakpoint, 10) || 1024;

        if (!trigger || !bar) return;

        let ticking = false;

        const handleScroll = () => {
            if (window.innerWidth >= breakpointShow) {
                removeScrollListener();
                wrapper.dataset.floatVisible = "false";
                return;
            }

            if (!ticking) {
                requestAnimationFrame(() => {
                    const rect = trigger.getBoundingClientRect();
                    const windowHeight = window.innerHeight;

                    wrapper.dataset.floatVisible = rect.bottom <= windowHeight - 100 ? "false" : "true";

                    ticking = false;
                });

                ticking = true;
            }
        };

        const removeScrollListener = () => {
            document.removeEventListener("scroll", handleScroll);
        };

        const handleResize = () => {
            if (window.innerWidth >= breakpointShow) {
                removeScrollListener();
                wrapper.dataset.floatVisible = "false";
            } else {
                document.addEventListener("scroll", handleScroll, { passive: true });
                handleScroll();
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();
    });
};
