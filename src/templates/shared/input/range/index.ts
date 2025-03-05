import "./index.scss"
import { ERangeElems } from "@shared/input/range/types.ts";

export const initInputsRange = () => {
  const ranges: NodeListOf<HTMLElement> = document.querySelectorAll( ERangeElems.Range );
  const trekBgFilled = '#008BE5';
  const trekBg = '#F1F2F4';

  ranges.forEach( range => {
    const sliderFrom: HTMLInputElement | null = range.querySelector( ERangeElems.SliderFrom )
    const sliderTo: HTMLInputElement | null = range.querySelector( ERangeElems.SliderTo )
    const inputFrom: HTMLInputElement | null = range.querySelector( ERangeElems.InputFrom )
    const inputTo: HTMLInputElement | null = range.querySelector( ERangeElems.InputTo )
    const trek: HTMLElement | null = range.querySelector( ERangeElems.Trek )

    const from = range.dataset.rangeFrom
    const to = range.dataset.rangeTo
    const max = range.dataset.rangeMax

    const store = {
      from: 0,
      to: 0,
      max: 0
    }

    if ( sliderFrom && sliderTo && inputFrom && inputTo ) {
      store.max = max ? Number( max ) : 0;
      store.from = from ? Number( from ) : 0;
      store.to = to ? Number( to ) : 0;

      const updateValues = () => {
        inputFrom.value = `${ store.from }`;
        sliderFrom.value = `${ store.from }`;
        inputTo.value = `${ store.to }`;
        sliderTo.value = `${ store.to }`;
      }

      function fillColor() {
        if ( trek ) {
          window.requestAnimationFrame( () => {
            const percent1 = ( store.from / store.max ) * 100;
            const percent2 = ( store.to / store.max ) * 100;
            trek.style.background =
              `linear-gradient(to right, ${ trekBg } ${ percent1 }% , ${ trekBgFilled } ${ percent1 }% , ${ trekBgFilled } ${ percent2 }%, ${ trekBg } ${ percent2 }%)`;
          } )
        }
      }

      updateValues()
      fillColor();

      [ sliderFrom, sliderTo, inputFrom, inputTo ].forEach( rangeInput => {
        const handler =
          rangeInput === sliderFrom || rangeInput === sliderTo ?
            'oninput' : 'onchange'

        rangeInput[ handler ] = ( e ) => {
          const input = e.target as HTMLInputElement

          if ( input === sliderFrom || input === inputFrom ) {
            const newFromValue = Number( input.value )
            store.from = newFromValue >= store.to ? store.to : newFromValue
            if ( store.from < 0 ) {
              store.from = 0
            }
          }

          if ( input === sliderTo || input === inputTo ) {
            const newToValue = Number( input.value )
            store.to = newToValue <= store.from ? store.from : newToValue
            if ( store.to > store.max ) {
              store.to = store.max
            }
          }

          updateValues()
          fillColor()
        }
      } );
    }
  } )
}