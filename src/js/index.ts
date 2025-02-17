import 'virtual:svg-icons-register';

import "@layouts/layout-main";
import { clickButton } from "@sections/section-main";
import { search } from "@components/search";

document.addEventListener( 'DOMContentLoaded', () => {
  clickButton()
  search.init()
} )
