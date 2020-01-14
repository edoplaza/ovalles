import { TimelineLite, Power1 } from 'gsap';
import ScrollMagic from 'scrollmagic';

const scroll = () => {
  const moveUp = document.querySelectorAll('.move-up');
  const controllerMove = new ScrollMagic.Controller();

  if(moveUp[0] !== null) {
   console.log(moveUp);
    moveUp.forEach(upItem => {

      const tweenUp = new TimelineLite({paused: true})
      tweenUp.fromTo(upItem, 0.7, {y: 50, opacity: 0}, {y: 0, opacity: 1, ease: Power1.easeOut });

      new ScrollMagic.Scene({
        triggerElement: upItem,
        offset: -(window.innerHeight * 0.4)
      })
      .on('enter', () => {
        tweenUp.play();
        console.log('moveup');
      })
      .addTo(controllerMove);
    });
  }



}

export default scroll;
