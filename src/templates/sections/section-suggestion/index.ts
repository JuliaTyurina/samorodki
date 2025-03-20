import "./index.scss"
import { ESwiperElems } from "@js/libs/swiper";
import { Nullable } from "@js/types";
import { Swiper } from "swiper";
import { Navigation } from "swiper/modules";
import { mqData } from "@js/helpers/media.ts";

export const initSuggestions = () => {
  const { breakpoints } = mqData()
  const sections = document.querySelectorAll( '.section-suggestion' )
  const breakpointsNum = breakpoints.toNumbers()

  sections.forEach( section => {
    const sliderElem: Nullable<HTMLElement> = section.querySelector( ESwiperElems.Swiper )
    const prevButton: Nullable<HTMLElement> = section.querySelector( '.slider-button-prev' )
    const nextButton: Nullable<HTMLElement> = section.querySelector( '.slider-button-next' )

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