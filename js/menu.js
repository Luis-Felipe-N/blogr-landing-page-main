const menu = document.querySelector('.menu')
const btnMenu = document.querySelector('.btn-menu')
const inputMenu = document.querySelector('#input-menu')

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-show')

    if (inputMenu.checked) {
        btnMenu.innerHTML = '<img src="images/icon-hamburger.svg">'
    } else {
        btnMenu.innerHTML = '<img src="images/icon-close.svg">'
    };
});