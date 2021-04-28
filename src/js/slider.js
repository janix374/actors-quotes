export function slider() {
  // Open the Modal
  $('.actor-image').on('click', function () {
    $('#myModal').css('display', 'block');
    let currentIndex = $(this).index() + 1;
    currentSlide(currentIndex);
  });

  // Close the Modal
  $('#close-cursor').on('click', () => {
    $('#myModal').css('display', 'none');
  });

  // Next/previous controls
  $('.next').on('click', () => {
    plusSlides(1);
  });
  $('.prev').on('click', () => {
    plusSlides(-1);
  });

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let slides = $('.mySlides');
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides.eq(i).css('display', 'none');
    }
    slides.eq(slideIndex - 1).css('display', 'block');
  }

  let slideIndex = 1;
  showSlides(slideIndex);
}
