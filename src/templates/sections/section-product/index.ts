import "./index.scss"
import { ESwiperElems } from "@js/libs/swiper";
import { Nullable } from "@js/types";
import { Swiper } from "swiper";
import { Navigation } from "swiper/modules";
import { mqData } from "@js/helpers/media.ts";

export const initCardsSlider = () => {
    const { breakpoints } = mqData()
    const sections = document.querySelectorAll( '.section-product' )
    const breakpointsNum = breakpoints.toNumbers()

    sections.forEach( section => {
        const sliderElem: Nullable<HTMLElement> = section.querySelector( ESwiperElems.Swiper )

        if ( sliderElem ) {
            new Swiper( sliderElem, {
                modules: [ Navigation ],
                slidesPerView: 2.1,
                spaceBetween: 8,
                navigation: {
                    prevEl: prevButton,
                    nextEl: nextButton
                },
                breakpoints: {
                    [ breakpointsNum.md ]: {
                        spaceBetween: 16,
                        slidesPerView: 3,
                    },
                    [ breakpointsNum.lg ]: {
                        slidesPerView: 4,
                    }
                }
            } )
        }
    } )
}