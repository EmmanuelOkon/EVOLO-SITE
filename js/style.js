let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

// Hamburger Menu start
menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
};

// Hamburger Menu ends

window.onscroll = () => {
  navbar.classList.remove('active');

  if (window.scrollY > 50) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }

  if (window.scrollY > 60) {
    document.querySelector('#scroll-top').classList.add('active');
  } else {
    document.querySelector('#scroll-top').classList.remove('active');
  }
};

// window.onscroll = () =>{

//   menu.classList.remove('fa-times');
//   navbar.classList.remove('active');

//   if(window.scrollY > 60){
//     document.querySelector('#scroll-top').classList.add('active');
//   }else{
//     document.querySelector('#scroll-top').classList.remove('active');
//   }

// }

var swiper = new Swiper('.trusted-slider', {
  spaceBetween: 20,
  loop: true,

  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  grabCursor: false,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 5,
    },
  },
});

$('input').on('focusin', function(){
  $(this).parent().find('label').addClass('active');
})
$('input').on('focusin', function(){
  if(!this.click){
    $(this).parent().find('label').removeClass('active');
  }
});
