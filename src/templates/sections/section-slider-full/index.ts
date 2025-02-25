import 'swiper/css/bundle'
import "./index.scss"

import { Swiper } from "swiper"
import { ESliderFullElems } from "@sections/section-slider-full/types.ts";
import { Nullable } from "@js/types";
import { ESwiperElems } from "@js/libs/swiper";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

export const initSliderFull = () => {
  const slidersFull: NodeListOf<HTMLElement> = document.querySelectorAll( ESliderFullElems.SliderFull )

  slidersFull.forEach( slider => {
    const swiperElem: Nullable<HTMLElement> = slider.querySelector( ESwiperElems.Swiper )
    const swiperPagination: Nullable<HTMLElement> = slider.querySelector( ESliderFullElems.SliderPagination )

    if ( swiperElem ) {
      new Swiper( swiperElem, {
        slidesPerView: 1,
        modules: [ EffectFade, Pagination, Autoplay ],
        effect: "fade",
        autoplay: {
          delay: 3000
        },
        pagination: {
          el: swiperPagination
        },
      } )
    }
  } )
}