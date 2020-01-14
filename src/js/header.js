import {TimelineLite, Expo} from 'gsap';

const header = () => {
  const body = document.body;
  const nav = document.querySelector('.nav');
  const logo = document.querySelector('.header__logo');
  const brand = document.querySelector('.header__brand');
  const pull = document.querySelector('.header__pull');
  const navItem = document.querySelectorAll('.nav__item');
  const cta = document.querySelector('.nav-hero__cta');

  let distance;

  window.addEventListener('scroll', () => {
    distance = window.pageYOffset;
    brand.style.transform = 'translate(-50%,' +(-distance * 0.5)+'px)';

    if (distance > 100) {
      logo.classList.add('header__logo--scroll');
      pull.classList.add('header__pull--scroll');

    } else {
      logo.classList.remove('header__logo--scroll');
      pull.classList.remove('header__pull--scroll');
    }


  })


  const openMenu = () => {
    nav.classList.add('open');
    body.classList.add('isMenuOpened');

    const tweenNavOpen = new TimelineLite({paused: true});
    tweenNavOpen
    .fromTo(nav, 0.7, {left: '-100%'}, {left: 0, ease: Expo.easeIn})
    .staggerFromTo(navItem, 0.3, {y: '50px', opacity: 0}, {y: 0, opacity: 1, ease: Expo.easeOut}, 0.05, "+= 0.2")
    .to(pull, 0.1, {css:{className:'+=closed'}}, "-=0.8")
    tweenNavOpen.restart();
  }

  const closeMenu = () => {
    pull.classList.add('closed');
    nav.classList.remove('open');
    body.classList.remove('isMenuOpened');

    const tweenNavClose = new TimelineLite({paused: true});
    tweenNavClose
    .to(navItem, 0.3, {y: '-200px', opacity: 0, ease: Expo.easeOut})
    .fromTo(nav, 0.8, {left: '0'}, {left: '100%', ease: Expo.easeIn}, "-=1.4")
    .to(pull, 0.1, {css:{className:'-=closed'}}, "-=1.4")
    tweenNavClose.restart();
  }

  pull.addEventListener('click', () => {

    if (document.body.classList.contains('isMenuOpened')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navItem.forEach(item => {
    item.addEventListener('click', () => {
      closeMenu();
    })
  })

  cta.addEventListener('click', () => {
    closeMenu();
  });

}

export default header;
