import { el, els, ev } from "./dom.js";

function equipmentSlider(obj) {
    const menu = els(obj.menu + '> .item');
    const slides = els(obj.slides + '> .item');

    for (let i = 0; i < menu.length; i++) {
        menu[i].setAttribute('data-slide', i);

        menu[i].addEventListener("click", function () {
            const slide = this.getAttribute('data-slide');

            slides[slide].classList.add('active-slide');
            menu[slide].classList.add('active-item');

            for (let i = 0; i < slides.length; i++) {
                if (slide != i) {
                    slides[i].classList.remove('active-slide');
                    menu[i].classList.remove('active-item');
                }
            }
        });
    }
}

equipmentSlider({ menu: '#esl-1--menu', slides: '#esl-1--slides' });
equipmentSlider({ menu: '#esl-2--menu', slides: '#esl-2--slides' });
equipmentSlider({ menu: '#esl-3--menu', slides: '#esl-3--slides' });