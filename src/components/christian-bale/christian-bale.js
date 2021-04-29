import christianBaleHTML from './christian-bale.html';
import './christian-bale.scss';
import { loopTextForCard } from '../../js/helpers';

export function christianBale(quotes) {
  // quotes loop
  $('#actor4').html(christianBaleHTML);
  let element = $('#christianBaleQuotes');
  loopTextForCard(element, quotes);

  let christianBaleBetmenStartPosition = () => {
    $('#christianBaleBetmen').velocity(
      {
        translateY: '-500px',
      },
      {
        complete: () => {
          christianBaleBetmenGetBetmenMask();
        },
      }
    );
  };

  let christianBaleBetmenGetBetmenMask = () => {
    $('#christianBaleBetmen').velocity(
      {
        opacity: 1,
        translateY: '0px',
      },
      {
        duration: 4000,
        complete: () => {
          christianBaleBetmenGothom();
        },
      }
    );
  };

  let christianBaleBetmenGothom = () => {
    $('#christianBaleGotham').velocity(
      {
        opacity: 1,
      },
      {
        duration: 3000,
        complete: () => {
          christianBaleEyeLeft();
          christianBaleEyeRight();
          christianBaleMouthDown();
          christianBaleMouthUp();
        },
      }
    );
  };

  let christianBaleEyeLeft = () => {
    $('#christianBaleEyeLeft')
      .velocity(
        {
          translateY: '3px',
        },
        {
          duration: 3000,
        }
      )
      .velocity('reverse');
  };

  let christianBaleEyeRight = () => {
    $('#christianBaleEyeRight')
      .velocity(
        {
          translateY: '3px',
        },
        {
          duration: 3000,
        }
      )
      .velocity('reverse');
  };

  let christianBaleMouthDown = () => {
    $('#christianBaleMouthDown')
      .velocity(
        {
          scaleX: 1.1,
        },
        {
          duration: 4000,
        }
      )
      .velocity('reverse');
  };

  let christianBaleMouthUp = () => {
    $('#christianBaleMouthUp')
      .velocity(
        {
          scaleX: 1.1,
        },
        {
          duration: 4000,
          complete: () => {
            christianBaleBetmenMaskFade();
            christianBaleBetmenGothomFade();
          },
        }
      )
      .velocity('reverse');
  };

  let christianBaleBetmenMaskFade = () => {
    $('#christianBaleBetmen').velocity(
      {
        opacity: 0,
      },
      {
        duration: 2000,
      }
    );
  };

  // activateClickEventForChristianBale can be run again, after christianBaleBetmenGothomFade finish
  let christianBaleBetmenGothomFade = () => {
    $('#christianBaleGotham').velocity(
      {
        opacity: 0,
      },
      {
        duration: 4000,
        complete: () => {
          activateClickEventForChristianBale();
        },
      }
    );
  };

  // animation
  function animations() {
    christianBaleBetmenStartPosition();
  }

  // on click action
  let activateClickEventForChristianBale = () => {
    $('#actor4>.actorsSVG').on('click', () => {
      $('#actor4>.actorsSVG').off();
      animations();
    });
  };

  activateClickEventForChristianBale();
}
