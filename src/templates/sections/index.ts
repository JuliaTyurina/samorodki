import "./section-cards-list"
import "./section-categories"
import "./section-seo-1"
import "./section-gifts"
import "./section-page-header"
import { initSliderFull } from "./section-slider-full";
import { initCardsSlider } from "./section-cards-slider";
import { initSlider2Elems } from "./section-slider-2";
import { initCollectionSlider } from "@sections/section-collection";

export const initSections = () => {
  initCollectionSlider()
  initSliderFull()
  initCardsSlider()
  initSlider2Elems()
}