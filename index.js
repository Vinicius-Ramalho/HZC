const botaoMenu = document.querySelector('.cabeçalho__menu')
const menuLateral = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menuLateral.classList.toggle('menu-lateral--ativo')
})