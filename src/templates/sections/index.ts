import "./section-cards-list"
import "./section-categories"
import { initSliderFull } from "./section-slider-full";
import { initCardsSlider } from "./section-cards-slider";

export const initSections = () => {
  initSliderFull()
  initCardsSlider()
}