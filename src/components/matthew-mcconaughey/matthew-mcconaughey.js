import matthewMcconaugheyHTML from './matthew-mcconaughey.html';
import './matthew-mcconaughey.scss';
import { loopTextForCard } from '../../js/helpers';

export function matthewMcconaughey(quotes) {
  // quotes loop
  $('#actor1').html(matthewMcconaugheyHTML);
  let element = $('#matthewMcconaugheyquotes');
  loopTextForCard(element, quotes);

  //  Matthew Mcconaughey mouth
  let matthewMcconaugheyMouthA = (callback) => {
    $('#matthewMcconaugheyMoutha')
      .velocity(
        { translateY: 3 },
        {
          duration: 600,
          complete: () => {
            callback();
          },
        }
      )
      .velocity('reverse');
  };

  let matthewMcconaugheyMouthB = () => {
    $('#matthewMcconaugheyMouthb')
      .velocity(
        { translateY: -4 },
        {
          duration: 600,
        }
      )
      .velocity('reverse');
  };

  //  Matthew Mcconaughey cheeks
  let matthewMcconaugheyCheekB = () => {
    $('#matthewMcconaugheyCheekb')
      .velocity({ translateY: 2 }, { duration: 600 })
      .velocity('reverse');
  };

  let matthewMcconaugheyCheekA = () => {
    $('#matthewMcconaugheyCheeka')
      .velocity({ translateY: 1, rotateZ: '-2deg' }, { duration: 600 })
      .velocity('reverse');
  };

  let matthewMcconaugheyCheekC = () => {
    $('#matthewMcconaugheyCheekc')
      .velocity(
        { translateY: 2 },
        {
          duration: 600,
        }
      )
      .velocity('reverse');
  };

  //  Matthew Mcconaughey eyebrows
  let matthewMcconaugheyEyebrowsA = () => {
    $('#matthewMcconaugheyEyebrowsa')
      .velocity(
        { translateY: 1, rotateY: '-1deg', rotateX: '1deg' },
        { duration: 600 }
      )
      .velocity('reverse');
  };

  let matthewMcconaugheyEyebrowsB = () => {
    $('#matthewMcconaugheyEyebrowsb')
      .velocity(
        { translateY: 1, rotateY: '-1deg', rotateX: '1deg' },
        { duration: 600 }
      )
      .velocity('reverse');
  };

  // callback functions for text alrigh, activateClickEventForMatthewMcconaughey can be run after matthewMcconaugheyalrightC finish
  let matthewMcconaugheyalrightA = () => {
    $('#alrightA')
      .velocity('fadeIn', { duration: 600 })
      .velocity('fadeOut', { duration: 4000 });
  };

  let matthewMcconaugheyalrightB = () => {
    $('#alrightB')
      .velocity('fadeIn', { duration: 600 })
      .velocity('fadeOut', { duration: 4000 });
  };

  let matthewMcconaugheyalrightC = () => {
    $('#alrightC')
      .velocity('fadeIn', {
        duration: 600,
      })
      .velocity(
        'fadeOut',
        {
          duration: 4000,
          complete: () => {
            activateClickEventForMatthewMcconaughey();
          },
        },
        {}
      );
  };

  // animations - all functions run independently.
  function animations(callback) {
    matthewMcconaugheyMouthA(callback);
    matthewMcconaugheyMouthB();
    matthewMcconaugheyCheekB();
    matthewMcconaugheyCheekA();
    matthewMcconaugheyCheekC();
    matthewMcconaugheyEyebrowsA();
    matthewMcconaugheyEyebrowsB();
  }

  // on click action
  let activateClickEventForMatthewMcconaughey = () => {
    $('#actor1>.actorsSVG').on('click', () => {
      $('#actor1>.actorsSVG').off();
      animations(matthewMcconaugheyalrightA);
      animations(matthewMcconaugheyalrightB);
      animations(matthewMcconaugheyalrightC);
    });
  };

  activateClickEventForMatthewMcconaughey();
}
