import { AppInterface, EBodyStateClasses } from "./types";
import { Nullable } from "@js/types";
import { addClass, removeClass } from "@js/helpers/classHelper.ts";
import { search } from "@components/search";
import { menu } from "@src/templates/menu";

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
  searchRun() {
    this.body && addClass( EBodyStateClasses.SearchActive, this.body )
  },
  searchStop() {
    this.body && removeClass( EBodyStateClasses.SearchActive, this.body )
    search.reset()
  },
  catalogOpen() {
    this.body && addClass( EBodyStateClasses.CatalogOpen, this.body )
  },
  catalogClose() {
    this.body && removeClass( EBodyStateClasses.CatalogOpen, this.body )
  },
  menuOpen() {
    menu.open()
    this.body && addClass( EBodyStateClasses.MenuOpen, this.body )
  },
  menuClose() {
    menu.close()
    this.body && removeClass( EBodyStateClasses.MenuOpen, this.body )
  },
  menuToggle() {
    if ( this.body ) {
      if ( menu.isOpen ) {
        menu.close()
        removeClass( EBodyStateClasses.MenuOpen, this.body )
      } else {
        menu.open()
        addClass( EBodyStateClasses.MenuOpen, this.body )
      }
    }
  },
  // modalOpen() {
  //   this.body && addClass( "modal-open", this.body )
  // },
  // modalClose() {
  //   this.body && removeClass( "modal-open", this.body )
  // },
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