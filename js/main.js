
$(document).ready(function () {


  var owl = $('#f-slider');
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [4000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  });

  var owl = $('#sec-slider');
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [4000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  });
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


