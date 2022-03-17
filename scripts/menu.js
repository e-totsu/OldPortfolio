function menu_scroll(_, me) {
  document.querySelector('.menu .active').classList.remove('active')
  me.parentElement.classList.add('active')
}
