window.addEventListener('scroll', () => {
  const distance = (window.scrollY / 2) * .01;

  const root = document.querySelector(':root')
  const container = document.querySelector('.con-me')

  root.style.setProperty     ("--con-me-size", `${ 1 + distance }`);
  container.style.setProperty('top'          , `${ distance * 4  }rem`)
})
