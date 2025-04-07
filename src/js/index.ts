import 'virtual:svg-icons-register';

import "@layouts/layout-main";
import "../templates/components"
import { search } from "@components/search";
import { initSections } from "@sections/index.ts";
import { initCard } from "@components/card";
import { initCardsList } from "@sections/section-cards-list";
import {initPreviewImage} from "@js/libs/fancybox";
import { toggleLoader } from '@components/preloader'

window.addEventListener("load", () => {
  toggleLoader()
})

document.addEventListener( 'DOMContentLoaded', () => {
  search.init()
  initSections()
  initCard()
  initCardsList()
  initPreviewImage()
} )