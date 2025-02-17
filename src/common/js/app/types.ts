import { Nullable } from "@js/types";

export interface AppInterface {
  scrollbarWidth: Nullable<number>
  body?: Nullable<HTMLElement>
  bodyBlock: ( isBlock?: boolean ) => void
  initDependencies: () => void
  setWindowVariables?: () => void
  searchRun: () => void
  searchStop: () => void
  catalogOpen: () => void
  catalogClose: () => void
  menuOpen: () => void
  menuClose: () => void
  menuToggle: () => void
  // modalOpen: ( modalName?: string ) => void
  // modalClose: ( modalName?: string ) => void
}

export interface App extends Omit<AppInterface, 'initDependencies'> {
}

export enum EBodyStateClasses {
  SearchActive = "search-active",
  CatalogOpen = "catalog-open",
  MenuOpen = "menu-open",
}
