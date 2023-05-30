import { el, els, ev } from "./dom.js";
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

const swiper = new Swiper(".swiper", {
    loop: true,
    speed: 500,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".main-slider--nav-l",
        prevEl: ".main-slider--nav-r"
    }
});