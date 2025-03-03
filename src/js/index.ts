import 'virtual:svg-icons-register';

import "@layouts/layout-main";
import { search } from "@components/search";
import { initSections } from "@sections/index.ts";
import { initCard } from "@components/card";

document.addEventListener( 'DOMContentLoaded', () => {
  search.init()
  initSections()
  initCard()
} )
