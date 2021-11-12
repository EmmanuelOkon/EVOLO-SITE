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

// $('input').on('focusin', function () {
//   $(this).parent().find('label').addClass('active');
// });
// $('input').on('focusin', function () {
//   if (!this.click) {
//     $(this).parent().find('label').removeClass('active');
//   }
// });


// let test = document.querySelector('.test');

var swiper = new Swiper('.test', {
  loop: true,
  spaceBetween: 100,

  centeredSlides: true,
  autoplay: {
    delay: 1400,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const form = document.getElementById('formInput');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const fullNameValue = fullName.value.trim();
	const emailValue = email.value.trim();
	// const passwordValue = password.value.trim();
	// const password2Value = password2.value.trim();
	
	if(fullNameValue === '') {
		setErrorFor(fullName, 'Please fill out this field.');
	} else {
		setSuccessFor(fullName);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Please fill out this field.');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Please fill out this field.');
	} else {
		setSuccessFor(email);
	}
	
	// if(phoneValue === '') {
	// 	setErrorFor(password, 'Password cannot be blank');
	// } else {
	// 	setSuccessFor(password);
	// }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});
