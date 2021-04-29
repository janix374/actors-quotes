import alPacinoHTML from './al-pacino.html';
import './al-pacino.scss';
import { loopTextForCard } from '../../js/helpers';

export function alPacino(quotes) {
  // quotes loop
  $('#actor2').html(alPacinoHTML);
  let element = $('#alPacinoQuotes');
  loopTextForCard(element, quotes);

  // Gun. On complete activateClickEventForAlPacino can be call again
  let alPacinoGun = () => {
    $('#alPacinoGun')
      .velocity(
        {
          rotateZ: '35deg',
          translateY: '-30px',
          translateX: '-100px',
          opacity: 1,
        },
        {
          duration: 6000,
          delay: 3000,
          easing: 'ease-out',
          complete: () => {
            activateClickEventForAlPacino();
          },
        }
      )
      .velocity('reverse');
  };

  // Text
  let alPacinoFirstText = () => {
    $('#alPacinoFirstText')
      .velocity('fadeIn', { duration: 3000 })
      .velocity('fadeOut', {
        duration: 4000,
      });
  };

  // Al Pacino head
  let alPacinoHead = () => {
    $('#alPacinoHead')
      .velocity(
        { scaleX: 0.97 },
        {
          duration: 1000,
          complete: () => {
            alPacinoFirstText();
            alPacinoGun();
          },
        }
      )
      .velocity('reverse');
  };

  // animation
  function animations() {
    alPacinoHead();
  }

  // on click action
  let activateClickEventForAlPacino = () => {
    $('#actor2>.actorsSVG').on('click', () => {
      $('#actor2>.actorsSVG').off();
      animations();
    });
  };

  activateClickEventForAlPacino();
}
