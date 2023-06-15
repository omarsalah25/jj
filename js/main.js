
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


var owl = $('#event-slider');
owl.owlCarousel({
  items: 3,
  loop: true,
  margin: 10,
  nav: false,
  smartSpeed: 1000,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 3,
      nav: false,
    }
  }

});



var owl = $('#news-slider');
owl.owlCarousel({
  items: 3,
  loop: true,
  margin: 10,
  nav: false,
  smartSpeed: 1000,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 3,
      nav: false,
    }
  }
});
$('.play').on('click', function () {
  owl.trigger('play.owl.autoplay', [4000])
})
$('.stop').on('click', function () {
  owl.trigger('stop.owl.autoplay')
});

//project-page-slider

var owl = $('#project-slider');
owl.owlCarousel({
  items: 1,
  loop: true,
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




// ======================================
// construction vedios 
// ================================
let videoList = document.querySelectorAll('.video-list-container .lists');

videoList.forEach(vid => {
  vid.onclick = () => {
    videoList.forEach(remove => { remove.classList.remove('.active') });
    vid.classList.add('.active');
    let src = vid.querySelector('.list-video').src;
    let title = vid.querySelector('.list-title').innerHTML;
    document.querySelector('.main-video-container .main-video').src = src;
    document.querySelector('.main-video-container .main-video').play();
    document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
  };
});