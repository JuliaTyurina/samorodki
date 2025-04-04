import './logo'
import './button'
import './phone'
import './scroll-to-top'
import './breadcrumbs'
import './pagination'
import './menu-button'
import './location'
import './rating'
import './chip'
import './discount'
import './stars'
import './promo'
import './copy'
import './share'
import './favorite'
import './favorite-filled'
import './hint'

import { initInputs } from "./input";
import { initDropdown } from "@shared/dropdown";
import {initCopyPromocode} from "@shared/promo";
import {initInputHint} from "@shared/hint";
// import './tooltip'

export const initShared = () => {
  initInputs()
  initDropdown()
  initCopyPromocode()
  initInputHint("[data-hint]");

}