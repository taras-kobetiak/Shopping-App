let menuBtn = document.querySelector('.burger-menu');

let menu = document.querySelector('.menu-header');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})