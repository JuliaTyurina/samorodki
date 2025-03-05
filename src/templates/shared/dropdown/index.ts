import './index.scss'
import { EDropdownElems } from "./types.ts";
import { mqData } from "@js/helpers/media.ts";
import { addClass, removeClass } from "@js/helpers/classHelper.ts";
import { EStateClass } from "@js/types/state.ts";

export const initDropdown = () => {
  const { isDevice } = mqData()
  const dropdowns: NodeListOf<HTMLElement> = document.querySelectorAll( EDropdownElems.Dropdown )

  dropdowns.forEach( dropdown => {
    const header: HTMLElement | null = dropdown.querySelector( EDropdownElems.Header )
    const links: NodeListOf<HTMLAnchorElement> = dropdown.querySelectorAll( 'a' )

    const store = {
      isActive: false,
      setActive( active: boolean ) {
        this.isActive = active

        if ( this.isActive ) {
          addClass( EStateClass.Active, dropdown )
        } else {
          removeClass( EStateClass.Active, dropdown )
        }
      }
    }

    const unfocusDropdownChild = ( eventTarget: EventTarget | null ) => {
      if ( !eventTarget ) {
        store.setActive( false )
      } else {
        const target = eventTarget as HTMLElement
        const newFocusedElemDropdown = target.closest && target.closest( EDropdownElems.Dropdown ) as HTMLElement | null
        ( !newFocusedElemDropdown || newFocusedElemDropdown !== dropdown ) && store.setActive( false )
      }
    }

    if ( isDevice.pc ) {
      dropdown.addEventListener( 'mouseenter', () => store.setActive( true ) )
      dropdown.addEventListener( 'mouseleave', () => store.setActive( false ) )

      header?.addEventListener( 'focusin', () => store.setActive( true ) )
      header?.addEventListener( 'focusout', ( e ) => unfocusDropdownChild( e.relatedTarget ) )
    } else {
      dropdown.addEventListener( 'click', () => store.setActive( !store.isActive ) )
    }

    header?.addEventListener( 'focusout', ( e ) => unfocusDropdownChild( e.relatedTarget ) )
    links.forEach( link => {
      link.addEventListener( 'focusout', ( e ) => unfocusDropdownChild( e.relatedTarget ) )
    } )
  } )
}