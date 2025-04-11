import "./index.scss"
import {ESwiperElems} from "@js/libs/swiper";
import {Nullable} from "@js/types";
import {Swiper} from "swiper";
import {Pagination} from "swiper/modules";

export const initContactsGallerySlider = () => {
    const sections = document.querySelectorAll('.contacts')

    if (sections) {
        sections.forEach(section => {
            const sliderElem: Nullable<HTMLElement> = section.querySelector(ESwiperElems.Swiper)

            if (sliderElem) {
                new Swiper(sliderElem, {
                    modules: [Pagination],
                    slidesPerView: 1,
                    pagination: {
                        el: ".swiper-pagination",
                    },
                })
            }

        })
    }
}
