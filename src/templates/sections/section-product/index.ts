import "./index.scss"
import {ESwiperElems} from "@js/libs/swiper";
import {Nullable} from "@js/types";
import {Swiper} from "swiper";
import {Pagination, Thumbs, FreeMode} from "swiper/modules";
import {mqData} from "@js/helpers/media.ts";

export const initProductSlider = () => {
    const {breakpoints} = mqData()
    const breakpointsNum = breakpoints.toNumbers()
    const sections = document.querySelectorAll('.section-product')

    if (sections) {
        sections.forEach(section => {
            const sliderElem: Nullable<HTMLElement> = section.querySelector(ESwiperElems.Swiper)
            const thumbsSliderElem: Nullable<HTMLElement> = section.querySelector(".thumbs-slider");


            if (sliderElem && thumbsSliderElem) {
                const thumbsSwiper = new Swiper(thumbsSliderElem, {
                    modules: [FreeMode],
                    spaceBetween: 8,
                    slidesPerView: 4,
                    freeMode: true,
                    // watchSlidesProgress: true,
                    breakpoints: {
                        [breakpointsNum.lg]: {
                            direction: "vertical",
                            slidesPerView: 4,
                            spaceBetween: 12,
                        },
                        [breakpointsNum.xxl]: {
                            direction: "vertical",
                            slidesPerView: 6.5,
                            spaceBetween: 12,
                            slideToClickedSlide: true,
                        },
                    }
                });

                const mainSwiper = new Swiper(sliderElem, {
                    modules: [Pagination, Thumbs],
                    slidesPerView: 1,
                    centeredSlides: true,
                    grabCursor: true,
                    pagination: {
                        el: ".swiper-pagination",
                    },
                    thumbs: {
                        swiper: thumbsSwiper,
                    },
                })

                mainSwiper.on("slideChange", () => {
                    const activeIndex = mainSwiper.activeIndex;
                    thumbsSwiper.slideTo(activeIndex);
                });
            }
        })
    }
    }


export const initProductOrderBar = (triggerClass, flipperClass, breakpointShow) => {
    const trigger = document.querySelector(`.${triggerClass}`);
    const flipper = document.querySelector(`.${flipperClass}`);

    if (!trigger || !flipper) return;

    const checkScroll = () => {
        flipper.classList.toggle("scrolled", trigger.getBoundingClientRect().top <= 56);
    };

    const handleScrollToggle = () => {
        if (window.innerWidth < breakpointShow) {
            if (!window.onscroll) window.addEventListener("scroll", checkScroll);
            checkScroll();
        } else {
            window.removeEventListener("scroll", checkScroll);
            flipper.classList.remove("scrolled");
        }
    };

    handleScrollToggle();
    window.addEventListener("resize", handleScrollToggle);
};

