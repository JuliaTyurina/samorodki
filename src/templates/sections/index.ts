import "./section-page-header"
import "./section-cards-list"
import "./section-categories"
import "./section-seo-1"
import "./section-gifts"
import "./section-product"
import "./section-suggestion"
import "./section-feedback"
import { initSliderFull } from "./section-slider-full";
import { initCardsSlider } from "./section-cards-slider";
import { initSlider2Elems } from "./section-slider-2";
import { initCollectionSlider } from "@sections/section-collection";
import { initProductSlider, initProductOrderBar } from "@sections/section-product"
import { initSuggestions } from "./section-suggestion";

export const initSections = () => {
  initCollectionSlider()
  initSliderFull()
  initCardsSlider()
  initSlider2Elems()
  initProductSlider()
  initProductOrderBar()
  initSuggestions()
}