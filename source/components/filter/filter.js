'use strict';

let button = document.querySelector('.filter__button');
let filter = document.querySelector('.filter__form');

if (button) {
    button.addEventListener('click', () => {
        filter.classList.toggle('filter__form_active');
    });
}