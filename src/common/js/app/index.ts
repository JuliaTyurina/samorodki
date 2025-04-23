import {AppInterface, EBodyStateClasses, EDrawerClasses, EMobileBottomMenuClasses} from "./types";
import {Nullable} from "@js/types";
import {addClass, hasClass, removeClass} from "@js/helpers/classHelper.ts";
import {search} from "@components/search";
import {menu} from "@layouts/base/menu";
import {mqData} from "@js/helpers/media.ts";

const getScrollbarWidth = () => {
    const scrollDiv = document.createElement("div");
    let scrollbarWidth = 0;
    scrollDiv.style.width = "100px";
    scrollDiv.style.height = "100px";
    scrollDiv.style.overflowY = "scroll";
    scrollDiv.style.position = "absolute";
    scrollDiv.style.top = "-9999px";
    document.body.appendChild(scrollDiv);
    scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth
}

export const app: AppInterface = {
    scrollbarWidth: 0,
    device: "mobile",
    body: null,
    mobileBottomMenu: null,
    drawer: null,
    bodyBlock(isBlock = true) {
        if (this.body) {
            isBlock ? addClass("no-scroll", this.body) : removeClass("no-scroll", this.body)
        }
    },
    searchOpen() {
        this.body && addClass(EBodyStateClasses.SearchOpen, this.body)
    },
    searchClose() {
        this.body && removeClass(EBodyStateClasses.SearchOpen, this.body)
        search.reset()
    },
    mobileBottomMenuOpen(className: string) {
        this.body && addClass(EBodyStateClasses.MobileBottomMenuOpen, this.body)
        this.mobileBottomMenu && addClass(className, this.mobileBottomMenu)
    },
    mobileBottomMenuClose() {
        this.body && removeClass(EBodyStateClasses.MobileBottomMenuOpen, this.body)
        this.mobileBottomMenu && removeClass([
            EMobileBottomMenuClasses.SortCatalog,
            EMobileBottomMenuClasses.SortFeedback,
            EMobileBottomMenuClasses.Product,
            EMobileBottomMenuClasses.Support,
            EMobileBottomMenuClasses.Locality,
            EMobileBottomMenuClasses.DeliveryPoint,
        ], this.mobileBottomMenu)
    },
    drawerOpen(className: string) {
        this.body && addClass(EBodyStateClasses.DrawerOpen, this.body)
        this.drawer && addClass(className, this.drawer)
    },
    drawerClose() {
        this.body && removeClass(EBodyStateClasses.DrawerOpen, this.body)
        this.drawer && removeClass([
            EDrawerClasses.Product,
            EDrawerClasses.Support,
            EDrawerClasses.Locality,
            EDrawerClasses.DeliveryPoint,
            EDrawerClasses.Feedback,
            EDrawerClasses.FeedbackNotAuth,
            EDrawerClasses.LoginNumber,
            EDrawerClasses.LoginNumberConfirmationStep1,
            EDrawerClasses.LoginNumberConfirmationStep2,
            EDrawerClasses.LoginCaptcha,
        ], this.drawer)
    },
    filtersOpen() {
        this.body && addClass(EBodyStateClasses.FiltersOpen, this.body)
    },
    filtersClose() {
        this.body && removeClass(EBodyStateClasses.FiltersOpen, this.body)
    },
    catalogOpen() {
        this.body && addClass(EBodyStateClasses.CatalogOpen, this.body)
    },
    catalogClose() {
        this.body && removeClass(EBodyStateClasses.CatalogOpen, this.body)
    },
    catalogToggle() {
        if (this.body) {
            hasClass(EBodyStateClasses.CatalogOpen, this.body) ? this.catalogClose() : this.catalogOpen()
        }
    },
    catalogLvl2Open() {
        if (this.device === 'mobile' || this.device === "tablet") {
            this.body && addClass(EBodyStateClasses.CatalogLvl2Open, this.body)
        }
    },
    catalogLvl2Close() {
        if (this.device === 'mobile' || this.device === "tablet") {
            this.body && removeClass(EBodyStateClasses.CatalogLvl2Open, this.body)
        }
    },
    menuOpen() {
        menu.open()
        this.body && addClass(EBodyStateClasses.MenuOpen, this.body)
    },
    menuClose() {
        menu.close()
        this.body && removeClass([EBodyStateClasses.MenuOpen, EBodyStateClasses.CatalogLvl2Open, EBodyStateClasses.CatalogOpen], this.body)
    },
    menuToggle() {
        menu.isOpen ? this.menuClose() : this.menuOpen();
    },
    initDependencies() {
        const {isDevice, addMediaAction} = mqData()
        this.body = document.body
        this.mobileBottomMenu = document.querySelector(".mobile-bottom-menu")
        this.drawer = document.querySelector(".drawer")
        const root: Nullable<HTMLElement> = document.querySelector(':root');
        const header: Nullable<HTMLElement> = document.querySelector('header.header');

        if (isDevice.tablet) this.device = "tablet"
        if (isDevice.pc) this.device = "pc"

        if (!this.scrollbarWidth) this.scrollbarWidth = getScrollbarWidth()

        if (root) {
            if (this.scrollbarWidth && document.body.scrollHeight > window.screen.height) {
                root.style.setProperty('--scrollbar-width', `${this.scrollbarWidth}px`)
            }
            if (header) {
                const menu: HTMLElement | null = document.querySelector('.menu')
                const tabbarHeight = +getComputedStyle(document.documentElement).getPropertyValue('--tabbar-height').replace(/\D/g, "")

                const headerHeight = header.offsetHeight - 3

                if (menu && tabbarHeight && !isDevice.pc) {
                    root.style.setProperty('--content-space', `${window.innerHeight - headerHeight - tabbarHeight}px`)
                }

                root.style.setProperty('--header-height', `${headerHeight}px`)
            }
        }
    },
};