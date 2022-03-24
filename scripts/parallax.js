const root      = document.querySelector(':root')
const container = document.querySelector('.con-me')

window.addEventListener('scroll', () => {
  if (window.innerWidth > 768) {
    const distance = window.scrollY * .005

    root.style.setProperty     ("--con-me-size", `${ 1 + distance }`)
    container.style.setProperty('top'          , `${ distance * 4  }rem`)
  } else {
    root.style.setProperty     ("--con-me-size", `1`)
    container.style.setProperty('top'          , `0`)
  }
})

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    root.style.setProperty     ("--con-me-size", `1`)
    container.style.setProperty('top'          , `0`)
  }
})
