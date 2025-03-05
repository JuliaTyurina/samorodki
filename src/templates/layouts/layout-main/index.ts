import '@layouts/base/header'
import '@layouts/base/footer'
import '@layouts/base/catalog-menu'
import '@layouts/base/tabbar'

import { app, initGlobalAction } from "@src/common";
import { initShared } from "@shared/index.ts";

document.addEventListener( 'DOMContentLoaded', () => {
  app.initDependencies()
  initGlobalAction()
  initShared()
} )