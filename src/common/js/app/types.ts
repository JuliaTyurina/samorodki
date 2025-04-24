import {Nullable} from "@js/types";

export interface AppInterface {
    scrollbarWidth: Nullable<number>
    body?: Nullable<HTMLElement>
    mobileBottomMenu: Nullable<HTMLElement>
    drawer: Nullable<HTMLElement>
    device: "mobile" | "tablet" | "pc"
    bodyBlock: (isBlock?: boolean) => void
    initDependencies: () => void
    initSmoothScroll(headerHeight: number): void;
    setWindowVariables?: () => void
    searchOpen: () => void
    searchClose: () => void
    mobileBottomMenuOpen: (className: string) => void
    mobileBottomMenuClose: () => void
    drawerOpen: (className: string) => void
    drawerClose: () => void
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
    MobileBottomMenuOpen = "mobile-bottom-menu-open",
    DrawerOpen = "drawer-open",
    SearchOpen = "search-open",
    FiltersOpen = "filters-open",
    CatalogOpen = "catalog-open",
    CatalogLvl2Open = "catalog-lvl2-open",
    MenuOpen = "menu-open",
}

export enum EMobileBottomMenuClasses {
    SortCatalog = "sort-catalog",
    SortFeedback = "sort-feedback",
    Product = "product",
    ProductAdded = "product-added",
    Support = "support",
    Locality = "locality",
    DeliveryPoint = "delivery-point",
}

export enum EDrawerClasses {
    Product = "product",
    ProductAdded = "product-added",
    Support = "support",
    Locality = "locality",
    DeliveryPoint = "delivery-point",
    Feedback = "feedback",
    FeedbackNotAuth = "feedback-not-auth",
    LoginNumber = "login-number",
    LoginNumberConfirmationStep1 = "login-number-confirmation-step-1",
    LoginNumberConfirmationStep2 = "login-number-confirmation-step-2",
    LoginCaptcha = "login-captcha",
}
