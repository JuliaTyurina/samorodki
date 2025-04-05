import "./index.scss"
import { ESwiperElems } from "@js/libs/swiper";
import { Swiper } from "swiper";
import { Nullable } from "@js/types";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { mqData } from "@js/helpers/media.ts";

export const initCollectionSlider = () => {
  const { breakpoints } = mqData()
  const breakpoinstNum = breakpoints.toNumbers()
  const sections: NodeListOf<HTMLElement> = document.querySelectorAll( '.section-collection' )

  sections.forEach( section => {
    const swiperElem: Nullable<HTMLElement> = section.querySelector( ESwiperElems.Swiper )

    if ( swiperElem ) {
      new Swiper( swiperElem, {
        modules: [ EffectCoverflow, Navigation ],
        slidesPerView: 1.9,
        centeredSlides: true,
        initialSlide: 1,
        effect: "coverflow",
        loop: true,
        navigation: {
          nextEl: '.section-collection__controls-next',
          prevEl: '.section-collection__controls-prev',
        },
        coverflowEffect: {
          rotate: 50,
          stretch: 58,
          depth: 100,
          scale: .9,
          slideShadows: false,
        },
        breakpoints: {
          [ breakpoinstNum.md ]: {
            spaceBetween: 25,
            slidesPerView: 3,
            coverflowEffect: {
              rotate: 40,
              stretch: 0,
              scale: 1
            }
          },
          [ breakpoinstNum.lg ]: {
            spaceBetween: 25,
            slidesPerView: 3.6,
            coverflowEffect: {
              rotate: 30,
              stretch: 0,
              scale: 1
            }
          },
          [ breakpoinstNum.xl ]: {
            spaceBetween: 32,
            slidesPerView: 4.4,
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