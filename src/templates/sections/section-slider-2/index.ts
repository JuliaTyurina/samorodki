import "./index.scss"
import { ESwiperElems } from "@js/libs/swiper";
import { Swiper } from "swiper";
import { Nullable } from "@js/types";
import { mqData } from "@js/helpers/media.ts";
import { Navigation } from "swiper/modules";

export const initSlider2Elems = () => {
  const { breakpoints } = mqData()
  const breakpointsNum = breakpoints.toNumbers()
  const sections = document.querySelectorAll( '.section-slider-2' )

  sections.forEach( section => {
    const swiperElem: Nullable<HTMLElement> = section.querySelector( ESwiperElems.Swiper )
    const prevButton: Nullable<HTMLElement> = section.querySelector( '.slider-button-prev' )
    const nextButton: Nullable<HTMLElement> = section.querySelector( '.slider-button-next' )

    if ( swiperElem ) {
      new Swiper( swiperElem, {
        modules: [ Navigation ],
        slidesPerView: 2.1,
        spaceBetween: 8,
        navigation: {
          prevEl: prevButton,
          nextEl: nextButton
        },
        breakpoints: {
          [ breakpointsNum.md ]: {
            slidesPerView: 2,
            spaceBetween: 38,
          }
        }
      } )
    }
  } )
}