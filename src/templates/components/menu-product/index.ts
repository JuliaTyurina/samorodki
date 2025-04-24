import "./index.scss"
import { ESwiperElems } from "@js/libs/swiper";
import { Swiper } from "swiper";
import { Navigation } from "swiper/modules";

import GraphTabs from 'graph-tabs';
import 'graph-tabs/dist/graph-tabs.min.css';

const tabBlocks = document.querySelectorAll('[data-tabs="tab"]');
tabBlocks.forEach((block, index) => {
    const uniqueId = `tab-${index + 1}`;
    block.setAttribute('data-tabs', uniqueId);
    new GraphTabs(uniqueId); // Инициализация табов
});




export const initMenuProductSuggestions = () => {

    const sections = document.querySelectorAll('.menu-product');

    sections.forEach(section => {
        const sliderElems = section.querySelectorAll<HTMLElement>(ESwiperElems.Swiper); // Получаем все слайдеры в этой секции

        sliderElems.forEach(sliderElem => {

            new Swiper(sliderElem, {
                modules: [Navigation],
                slidesPerView: 2.1,
                spaceBetween: 8,
                observer: true,
                observeParents: true,
                watchSlidesProgress: true,
                watchOverflow: true,
            });
        });
    });
};
