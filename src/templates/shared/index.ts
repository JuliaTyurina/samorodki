import './logo'
import './button'
import './phone'
import './scroll-to-top'
import './breadcrumbs'
import './pagination'
import './table'
import './menu-button'
import './location'
import './rating'
import './chip'

import { initInputs } from "./input";
import { initDropdown } from "@shared/dropdown";
// import './tooltip'

export const initShared = () => {
  initInputs()
  initDropdown()
}