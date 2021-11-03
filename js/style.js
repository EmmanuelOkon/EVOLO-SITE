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
  };
