

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 10);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


$(window).on('scroll load', function () {
  if ($(".navbar").offset().top > 60) {
    $(".fixed-top").addClass("top-nav-collapse");
  } else {
    $(".fixed-top").removeClass("top-nav-collapse");
  }
});



function rsubmitMSG(valid, msg) {
  if (valid) {
    var msgClasses = "h3 text-center tada animated";
  } else {
    var msgClasses = "h3 text-center";
  }
  $("#rmsgSubmit").removeClass().addClass(msgClasses).text(msg);
}
$(".navbar-nav li a").on("click", function (event) {
  if (!$(this).parent().hasClass('dropdown'))
    $(".navbar-collapse").collapse('hide');
});


/* Image Slider - Swiper */
var imageSlider = new Swiper('.image-slider', {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  breakpoints: {
    // when window is <= 580px
    580: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window is <= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window is <= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window is <= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 20
    },

  }
});