import { getEventData } from "./event";
import { EGlobalActions } from "./types"
import { app } from "../app";

export const initGlobalAction = () => {
  document.addEventListener( 'click', ( event ) => {
    const { target, action } = getEventData( event )

    if ( target ) {
      event.stopPropagation()

      if ( action === EGlobalActions.SearchOpen ) app.searchOpen()
      if ( action === EGlobalActions.SearchClose ) app.searchClose()
      if ( action === EGlobalActions.CatalogToggle ) app.catalogToggle()
      if ( action === EGlobalActions.CatalogOpen ) app.catalogOpen()
      if ( action === EGlobalActions.CatalogClose ) app.catalogClose()
      if ( action === EGlobalActions.CatalogLvl2Open ) app.catalogLvl2Open()
      if ( action === EGlobalActions.CatalogLvl2Close ) app.catalogLvl2Close()
      if ( action === EGlobalActions.MenuOpen ) app.menuOpen()
      if ( action === EGlobalActions.MenuClose ) app.menuClose()
      if ( action === EGlobalActions.MenuToggle ) app.menuToggle()
      if ( action === EGlobalActions.FiltersOpen ) app.filtersOpen()
      if ( action === EGlobalActions.FiltersClose ) app.filtersClose()
      if ( action === EGlobalActions.SortOpen ) app.sortOpen()
      if ( action === EGlobalActions.SortClose ) app.sortClose()
    }
  } )
}