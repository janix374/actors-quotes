import liamNeesonHTML from './liam-neeson.html';
import './liam-neeson.scss';
import { loopTextForCard, toogleCard } from '../../js/helpers';

export function liamNeeson(quotes) {
  // quotes loop
  $('#actor3').html(liamNeesonHTML);
  let element = $('#liamNeesonquotes');
  loopTextForCard(element, quotes);

  //  mobile phone show
  let liamNeesonMobileShow = () => {
    $('#liamNeesonMobile').velocity(
      { opacity: 1 },
      {
        duration: 1000,
        complete: () => {
          liamNeesonMobileShaking();
          liamNeesonMobileLineB();
          liamNeesonMobileLineA();
          liamNeesonEye();
          liamNeesonRest();
        },
      }
    );
  };

  // mobile phone line
  let liamNeesonMobileLineA = () => {
    $('#liamNeesonMobileLineA').velocity(
      { opacity: 1 },
      {
        duration: 1000,
        loop: 4,
      }
    );
  };

  let liamNeesonMobileLineB = () => {
    $('#liamNeesonMobileLineB').velocity(
      { opacity: 1 },
      {
        duration: 500,
        delay: 500,
        loop: 4,
      }
    );
  };

  // mobile phone shaking
  let liamNeesonMobileShaking = () => {
    $('#liamNeesonMobile').velocity(
      { rotateZ: '1deg' },
      {
        duration: 100,
        loop: 30,
        complete: () => {
          liamNeesonMobileDisappears();
        },
      }
    );
  };

  // mobile phone disappears
  let liamNeesonMobileDisappears = () => {
    $('#liamNeesonMobile').velocity(
      { opacity: 0 },
      {
        duration: 2000,
        complete: () => {
          liamNeesonTextOne();
        },
      }
    );
  };

  // Taken text
  let liamNeesonTextOne = () => {
    $('#liamNeesonTextOne')
      .velocity('fadeIn', { duration: 1000 })
      .velocity('fadeOut', {
        delay: 8000,
        duration: 2000,
        complete: () => {
          liamNeesonTextTwo();
        },
      });
  };

  let liamNeesonTextTwo = () => {
    $('#liamNeesonTextTwo')
      .velocity('fadeIn', { duration: 1000 })
      .velocity('fadeOut', {
        delay: 10000,
        duration: 2000,
        complete: () => {
          liamNeesonTextThree();
        },
      });
  };

  let liamNeesonTextThree = () => {
    $('#liamNeesonTextThree')
      .velocity('fadeIn', { duration: 1000 })
      .velocity('fadeOut', {
        delay: 8000,
        duration: 2000,
        complete: () => {
          liamNeesonTextFour();
        },
      });
  };

  // activateClickEventForLiamNeeson can be run again, after liamNeesonTextFour finish
  let liamNeesonTextFour = () => {
    $('#liamNeesonTextFour')
      .velocity('fadeIn', { duration: 1000 })
      .velocity('fadeOut', {
        delay: 8000,
        duration: 2000,
        complete: () => {
          activateClickEventForLiamNeeson();
        },
      });
  };

  // liam Neeson body
  let liamNeesonEye = () => {
    $('#liamNeesonEye').velocity(
      { scaleX: 1.2, scaleY: 1.2 },
      {
        duration: 15000,
        delay: 5000,
        complete: () => {
          liamNeesonEyeReverse();
        },
      }
    );
  };

  let liamNeesonEyeReverse = () => {
    $('#liamNeesonEye').velocity(
      { scaleX: 1, scaleY: 1 },
      {
        duration: 3000,
        delay: 30000,
      }
    );
  };

  let liamNeesonRest = () => {
    $('#liamNeesonRest').velocity(
      { scaleX: 1.2, scaleY: 1.2 },
      {
        duration: 15000,
        delay: 5000,
        complete: () => {
          liamNeesonRestReverse();
        },
      }
    );
  };

  let liamNeesonRestReverse = () => {
    $('#liamNeesonRest').velocity(
      { scaleX: 1, scaleY: 1 },
      {
        duration: 3000,
        delay: 30000,
      }
    );
  };

  // animations
  function animations() {
    liamNeesonMobileShow();
  }

  // on click action
  let activateClickEventForLiamNeeson = () => {
    $('#actor3>.actorsSVG').on('click', () => {
      $('#actor3>.actorsSVG').off();
      animations();
    });
  };

  activateClickEventForLiamNeeson();

  // toogle card
  toogleCard();
}
