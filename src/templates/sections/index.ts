import "./section-cards-list"
import "./section-categories"
import { initSliderFull } from "./section-slider-full";
import { initCardsSlider } from "./section-cards-slider";
import { initSlider2Elems } from "./section-slider-2";

export const initSections = () => {
  initSliderFull()
  initCardsSlider()
  initSlider2Elems()
}