import "./index.scss"
import { ESwiperElems } from "@js/libs/swiper";
import { Swiper } from "swiper";
import { Nullable } from "@js/types";
import { EffectCoverflow } from "swiper/modules";
import { mqData } from "@js/helpers/media.ts";

export const initCollectionSlider = () => {
  const { breakpoints } = mqData()
  const breakpoinstNum = breakpoints.toNumbers()
  const sections: NodeListOf<HTMLElement> = document.querySelectorAll( '.section-collection' )

  sections.forEach( section => {
    const swiperElem: Nullable<HTMLElement> = section.querySelector( ESwiperElems.Swiper )

    if ( swiperElem ) {
      new Swiper( swiperElem, {
        modules: [ EffectCoverflow ],
        slidesPerView: 3.1,
        initialSlide: 1,
        effect: "coverflow",
        loop: true,
        coverflowEffect: {
          rotate: 30,
          stretch: 25,
          depth: 100,
          scale: .9,
          slideShadows: false,
        },
        breakpoints: {
          [ breakpoinstNum.xl ]: {
            spaceBetween: 25,
            slidesPerView: 5,
            coverflowEffect: {
              rotate: 30,
              stretch: 0,
              scale: 1
            }
          }
        }
      } )
    }
  } )
}