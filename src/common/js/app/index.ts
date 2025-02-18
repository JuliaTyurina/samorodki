import { AppInterface, EBodyStateClasses } from "./types";
import { Nullable } from "@js/types";
import { addClass, hasClass, removeClass } from "@js/helpers/classHelper.ts";
import { search } from "@components/search";
import { menu } from "@layouts/base/menu";

const getScrollbarWidth = () => {
  const scrollDiv = document.createElement( "div" );
  let scrollbarWidth = 0;
  scrollDiv.style.width = "100px";
  scrollDiv.style.height = "100px";
  scrollDiv.style.overflowY = "scroll";
  scrollDiv.style.position = "absolute";
  scrollDiv.style.top = "-9999px";
  document.body.appendChild( scrollDiv );
  scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild( scrollDiv );
  return scrollbarWidth
}

export const app: AppInterface = {
  scrollbarWidth: 0,
  body: null,
  bodyBlock( isBlock = true ) {
    if ( this.body ) {
      isBlock ? addClass( "no-scroll", this.body ) : removeClass( "no-scroll", this.body )
    }
  },
  searchOpen() {
    this.body && addClass( EBodyStateClasses.SearchOpen, this.body )
  },
  searchClose() {
    this.body && removeClass( EBodyStateClasses.SearchOpen, this.body )
    search.reset()
  },
  catalogOpen() {
    this.body && addClass( EBodyStateClasses.CatalogOpen, this.body )
  },
  catalogClose() {
    this.body && removeClass( EBodyStateClasses.CatalogOpen, this.body )
  },
  catalogToggle() {
    if ( this.body ) {
      hasClass( EBodyStateClasses.CatalogOpen, this.body ) ? this.catalogClose() : this.catalogOpen()
    }
  },
  catalogLvl2Open() {
    this.body && addClass( EBodyStateClasses.CatalogLvl2Open, this.body )
  },
  catalogLvl2Close() {
    this.body && removeClass( EBodyStateClasses.CatalogLvl2Open, this.body )
  },
  menuOpen() {
    menu.open()
    this.body && addClass( EBodyStateClasses.MenuOpen, this.body )
  },
  menuClose() {
    menu.close()
    this.body && removeClass( [ EBodyStateClasses.MenuOpen, EBodyStateClasses.CatalogLvl2Open, EBodyStateClasses.CatalogOpen ], this.body )
  },
  menuToggle() {
    menu.isOpen ? this.menuClose() : this.menuOpen();
  },
  initDependencies() {
    this.body = document.body
    const root: Nullable<HTMLElement> = document.querySelector( ':root' );
    const header: Nullable<HTMLElement> = document.querySelector( 'header.header' );

    if ( !this.scrollbarWidth ) this.scrollbarWidth = getScrollbarWidth()

    if ( root ) {
      if ( this.scrollbarWidth && document.body.scrollHeight > window.screen.height ) {
        root.style.setProperty( '--scrollbar-width', `${ this.scrollbarWidth }px` )
      }
      if ( header ) {
        root.style.setProperty( '--header-height', `${ header.offsetHeight }px` )
      }
    }
  },
};