import { getEventData } from "./event";
import { EGlobalActions } from "./types"
import { app } from "../app";

export const initGlobalAction = () => {
  document.addEventListener( 'click', ( event ) => {
    const { target, action } = getEventData( event )

    if ( target ) {
      event.stopPropagation()

      if ( action === EGlobalActions.SearchStop ) app.searchStop()
      if ( action === EGlobalActions.CatalogOpen ) app.catalogOpen()
      if ( action === EGlobalActions.CatalogClose ) app.catalogClose()
      if ( action === EGlobalActions.MenuOpen ) app.menuOpen()
      if ( action === EGlobalActions.MenuClose ) app.menuClose()
      if ( action === EGlobalActions.MenuToggle ) app.menuToggle()
    }
  } )
}