import { Nullable } from "@js/types";

export interface AppInterface {
  scrollbarWidth: Nullable<number>
  body?: Nullable<HTMLElement>
  device: "mobile" | "tablet" | "pc"
  bodyBlock: ( isBlock?: boolean ) => void
  initDependencies: () => void
  setWindowVariables?: () => void
  searchOpen: () => void
  searchClose: () => void
  filtersOpen: () => void
  filtersClose: () => void
  catalogOpen: () => void
  catalogToggle: () => void
  catalogClose: () => void
  catalogLvl2Open: () => void
  catalogLvl2Close: () => void
  menuOpen: () => void
  menuClose: () => void
  menuToggle: () => void
  // modalOpen: ( modalName?: string ) => void
  // modalClose: ( modalName?: string ) => void
}

export interface App extends Omit<AppInterface, 'initDependencies'> {
}

export enum EBodyStateClasses {
  SearchOpen = "search-open",
  FiltersOpen = "filters-open",
  CatalogOpen = "catalog-open",
  CatalogLvl2Open = "catalog-lvl2-open",
  MenuOpen = "menu-open",
}
