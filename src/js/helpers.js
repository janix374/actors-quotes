export const loopTextForCard = (element, array) => {
  let indexText = 0;
  function loopText() {
    if (indexText >= array.length) {
      indexText = 0;
    }
    element
      .html(array[indexText])
      .fadeIn(1500)
      .delay(15000)
      .fadeOut(4000, loopText);
    indexText += 1;
  }

  loopText();
};

export const toogleCard = () => {
  $('.card-title').on('click', () => {
    $('.card-text').slideToggle('slow');
    $('.card-link').slideToggle('slow');
  });
};
