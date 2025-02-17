import '@layouts/base/header'
import '@layouts/base/footer'
import '@layouts/base/catalog-menu'
import '@shared'

import { app, initGlobalAction } from "@src/common";

document.addEventListener( 'DOMContentLoaded', () => {
  app.initDependencies()
  initGlobalAction()
} )