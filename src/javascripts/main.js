const navDOMEl = document.getElementById('nav')

const handleWindowScroll = navDOMEl => {
  if (window.scrollY <= 200) {
    navDOMEl.classList.remove('main-navigation--not-on-top')
  } else {
    navDOMEl.classList.add('main-navigation--not-on-top')
  }
}

window.addEventListener('scroll', () => handleWindowScroll(navDOMEl))

