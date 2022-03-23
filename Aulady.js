const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

var slides = document.querySelectorAll('.slide');
var btn = document.querySelectorAll('.manual-btn');
let currentSlide = 1;

// JS for image slider nav-manual
var manualNav = function(manual) {
	slides.forEach((slide) => {
		slide.classList.remove('active');

		btn.forEach((btn) => {
			btn.classList.remove('active');
		});
	});

	slides[manual].classList.add('active');
	btn[manual].classList.add('active');
}
btn.forEach((btn, i) => {
	btn.addEventListener("click", () => {
		manualNav(i);
		currentSlide = i;
	})
})

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});