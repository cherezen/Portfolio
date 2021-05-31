let burger = document.querySelector('.menu-burger');
let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');

burger.addEventListener('click', () => {
    overlay.classList.add('overlay_visible');
    modal.classList.add('modal_visible');
});

overlay.addEventListener('click', () => {
    overlay.classList.remove('overlay_visible');
    modal.classList.remove('modal_visible');
});

modal.addEventListener('click', () => {
    overlay.classList.remove('overlay_visible');
    modal.classList.remove('modal_visible');
});