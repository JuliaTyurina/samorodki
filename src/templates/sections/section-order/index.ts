import "./index.scss"

export const initCartOrderBar = (triggerClass, flipperClass, breakpointShow = 1024) => {
    const trigger = document.querySelector(`.${triggerClass}`);
    const flipper = document.querySelector(`.${flipperClass}`);

    if (!trigger || !flipper) return;

    let ticking = false;

    const handleScroll = () => {
        if (window.innerWidth >= breakpointShow) {
            removeScrollListener();
            return;
        }

        if (!ticking) {
            requestAnimationFrame(() => {
                const rect = trigger.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (rect.bottom <= windowHeight - 100) {
                    flipper.classList.add("scrolled");
                } else {
                    flipper.classList.remove("scrolled");
                }

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
            flipper.classList.remove("scrolled");
        } else {
            document.addEventListener("scroll", handleScroll, { passive: true });
            handleScroll();
        }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
};


