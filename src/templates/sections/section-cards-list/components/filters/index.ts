import "./index.scss"
import "./filters-accept"
import "./filters-handler"
import { Nullable } from "@js/types";
import { addClass, hasClass, removeClass } from "@js/helpers/classHelper.ts";
import { EStateClass } from "@js/types/state.ts";

export const initFilters = () => {
  const groups: NodeListOf<HTMLElement> = document.querySelectorAll( '.filters-group' )

  groups.forEach( group => {
    const headerButton: Nullable<HTMLElement> = group.querySelector( '.filters-group__title' )

    if ( headerButton ) {
      headerButton.addEventListener( 'click', () => {
        hasClass( EStateClass.Open, group ) ? removeClass( EStateClass.Open, group ) : addClass( EStateClass.Open, group )
      } )
    }
  } )
}