import "./section-page-header"
import "./section-cards-list"
import "./section-categories"
import "./section-seo-1"
import "./section-gifts"
import "./section-product"
import "./section-suggestion"
import "./section-feedback"
import "./section-cart-empty"
import "./section-cart"
import "./section-order"
import "./section-personal-account"
import "./section-promo-archive"
import { initSliderFull } from "./section-slider-full";
import { initCardsSlider } from "./section-cards-slider";
import { initSlider2Elems } from "./section-slider-2";
import { initCollectionSlider } from "@sections/section-collection";
import {initProductSlider, initProductOrderBar} from "@sections/section-product"
import {initFloatingBar} from "@sections/section-cart";
import { initSuggestions } from "./section-suggestion";
import { initChooseDeliveryType} from "./section-order";
import {initDeliveryTabs} from "@components/menu-delivery-point";

export const initSections = () => {
  initCollectionSlider()
  initSliderFull()
  initCardsSlider()
  initSlider2Elems()
  initProductSlider()
  initProductOrderBar("section-product__heading", "section-product__order", 768)
  initFloatingBar()
  initSuggestions()
  initChooseDeliveryType()
  initDeliveryTabs()
}