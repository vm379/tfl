import { el, els, ev } from "./dom.js";

const scrolloff = "scrolloff"; // css overflow: hidden;
const display = "d"; // css display: block;
const opacity = "a"; // css opacity: 1;
const transform = "open"; // css transform: translateX(-250px);

const body = el('.body');
const mobileMenuBtn = el('.mobile-menu-btn');
const mobileMenuCloseBtn = el('.mobile-nav-panel');
const mainMenuMobile = el('.main-menu-mobile');
const mobileNavPanel = el('.mobile-nav-panel');

ev(mobileMenuBtn, 'click', mobileMenuOpen);
ev(mobileMenuCloseBtn, 'click', mobileMenuClose);

function mobileMenuOpen() {
    body.classList.add(scrolloff);
    openMenuWindow();
}

function mobileMenuClose() {
    body.classList.remove(scrolloff);
    closeMenuWindow();
}

function openMenuWindow() {
    mainMenuMobile.classList.add(display);
    setTimeout(function () {
        mainMenuMobile.classList.add(opacity);
        openPanel();
    }, 200);
}

function closeMenuWindow() {
    closePanel();
    setTimeout(function () {
        mainMenuMobile.classList.remove(opacity);
        setTimeout(function () {
            mainMenuMobile.classList.remove(display);
        }, 200);
    }, 200);
}

function openPanel() {
    mobileNavPanel.classList.add(transform);
}

function closePanel() {
    mobileNavPanel.classList.remove(transform);
}