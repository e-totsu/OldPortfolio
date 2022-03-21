/****************************/
/***    Is In Viewport    ***/
/****************************/
function iiv(element) {
  const rect = element.getBoundingClientRect()

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.top + 10 <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

/***    List of menu options and sections    ***/
const menu_options = [
  { menu: document.querySelector('#menu-home'    ), sec: document.querySelector('#sec-home'    ) },
  { menu: document.querySelector('#menu-about'   ), sec: document.querySelector('#sec-about'   ) },
  { menu: document.querySelector('#menu-projects'), sec: document.querySelector('#sec-projects') },
  { menu: document.querySelector('#menu-socials' ), sec: document.querySelector('#sec-socials' ) },
  { menu: document.querySelector('#menu-contact' ), sec: document.querySelector('#sec-contact' ) },
]

/***************************************/
/***    Change active menu button    ***/
/***             on click            ***/
/***************************************/
function menu_scroll(_, me) { st(me) }

/***************************************/
/***    Change active menu button    ***/
/***            on scroll            ***/
/***************************************/
window.addEventListener('scroll', () =>
  menu_options.forEach((mo, index) => { if (iiv(mo.sec)) st(mo.menu) })
)

/***************************************/
/***    Change active menu button    ***/
/***************************************/
function st(menu_opt) {
  document.querySelector('.menu .active').classList.remove('active')

  menu_opt.classList.add('active')
}
