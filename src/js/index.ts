import 'virtual:svg-icons-register';

import "@layouts/layout-main";
import { clickButton } from "@sections/section-main";
import { search } from "@components/search";
import { initSections } from "@sections/index.ts";
import { initCard } from "@components/card";

document.addEventListener( 'DOMContentLoaded', () => {
  clickButton()
  search.init()
  initSections()
  initCard()
} )
