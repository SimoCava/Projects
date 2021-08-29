const openMenu = document.querySelector('.menu__icon')
const navItems = document.querySelector('.menu__navs')
const navActions = document.querySelector('.menu__actions')

openMenu.addEventListener('click', () => {
  navItems.classList.toggle('collapsed')
  navActions.classList.toggle('collapsed')
})
