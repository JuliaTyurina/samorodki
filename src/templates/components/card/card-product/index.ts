import "./index.scss"
import { ECardProductElems } from "@components/card/card-product/types.ts";
import { addClass, removeClass } from "@js/helpers/classHelper.ts";
import { EStateClass } from "@js/types/state.ts";
import { Nullable } from "@js/types";
import { mqData } from "@js/helpers/media.ts";

const addImageAction = ( entry: HTMLElement, src: string ) => {
  const image = document.createElement( 'img' )
  image.src = src
  entry.append( image )
}

const addVideoAction = ( entry: HTMLElement, src: string ) => {
  const video = document.createElement( 'video' )
  video.src = src
  video.muted = true
  entry.append( video )
  return video
}

const playVideo = async ( videoElem: HTMLVideoElement ) => {
  try {
    await videoElem.play()
    return true
  } catch ( e ) {
    console.error( e )
    return false
  }
}

export const addMediaActionToCardsProduct = () => {
  const { isDevice } = mqData()

  if ( isDevice.pc ) {
    const cards: NodeListOf<HTMLElement> = document.querySelectorAll( `${ ECardProductElems.Card }:not(.${ EStateClass.Inited })` )
    const delay: number = 800

    cards.forEach( card => {
      const mediaEntry: Nullable<HTMLElement> = card.querySelector( ECardProductElems.MediaEntry )
      const actionImageSrc = card.dataset.productImage2
      const actionVideoSrc = card.dataset.productVideo

      if ( mediaEntry && ( !!actionImageSrc || !!actionVideoSrc ) ) {
        let timer: Nullable<ReturnType<typeof setTimeout>> = null
        let video: Nullable<HTMLVideoElement> = null;
        addClass( EStateClass.Inited, card )

        card.addEventListener( 'mouseenter', () => {
          timer = setTimeout( () => {
            if ( actionImageSrc ) {
              addImageAction( mediaEntry, actionImageSrc )
            }

            if ( actionVideoSrc ) {
              if ( !video ) video = addVideoAction( mediaEntry, actionVideoSrc )

              playVideo( video )
            }

            addClass( EStateClass.Play, card )
          }, delay )
        } )

        card.addEventListener( 'mouseleave', () => {
          if ( timer ) {
            clearTimeout( timer )
            timer = null

            if ( video ) {
              video.pause();
              video.currentTime = 0;
            }
            removeClass( EStateClass.Play, card )
          }
        } )
      }
    } )
  }
}

export const initCardProduct = addMediaActionToCardsProduct