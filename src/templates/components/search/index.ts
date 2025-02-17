import "./index.scss"
import "./search-card"
import "./search-group"
import "./search-item"
import { ESearchElems, ISearch } from "./types.ts";
import { Nullable } from "@js/types";
import { app } from "@src/common";

export const search: ISearch = {
  isActive: false,
  input: null,
  reset() {
    if ( this.input ) this.input.value = ''
  },
  init() {
    const search: Nullable<HTMLElement> = document.querySelector( ESearchElems.Search )
    if ( search ) {
      if ( !this.input ) {
        this.input = search.querySelector( ESearchElems.Input )
      }

      const buttonStartSearch: Nullable<HTMLButtonElement> = search.querySelector( ESearchElems.ButtonStartSearch )

      buttonStartSearch?.addEventListener( 'click', () => {
        !this.isActive && this.input?.value.length && app.searchRun()
      } )
    }
  }
}