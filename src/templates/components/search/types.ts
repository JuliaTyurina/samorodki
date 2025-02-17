import { Nullable } from "@js/types";

export enum ESearchElems {
  Search = ".search",
  Input = ".search__input",
  ButtonStartSearch = ".search__button--normal",
}


export interface ISearch {
  isActive: boolean
  input: Nullable<HTMLInputElement>
  reset: () => void
  init: () => void
}