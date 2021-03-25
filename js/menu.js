//ВЫПАДАЮЩЕЕ МЕНЮ
let user = document.querySelector(".user__wrapper");
user.addEventListener("click", function (e) {
	let drop = document.querySelector(".drop-down");
	drop.classList.toggle("_active");
});

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.user')) {
		let drop = document.querySelector(".drop-down");
		drop.classList.remove("_active");
	}
});

/*//АНИМАЦИЯ ЗАГРУЗКИ
let arrow = document.querySelector(".main__slider");
let load = document.querySelector(".main__load");
arrow.addEventListener("click", function () {
	//alert("Hi");
	load.classList.toggle("_active");
});*/

//СЛАЙДЕР MAIN
let swiper = new Swiper('.main__slider', {
	speed: 800,
	parallax: true,
	navigation: {
		nextEl: '.main__next',
		prevEl: '.main__prev',
	},
});

let lots = new Swiper('.lots__slider', {
	speed: 500,
	keyboard: true,
	loop: true,
	effect: 'coverflow',
	navigation: {
		nextEl: '.navigation__next',
		prevEl: '.navigation__prev',
	},
	breakpoints: {
		280: {
			slidesPerView: 1,
			effect: 'slide',
		},
		600: {
			slidesPerView: 2,
			effect: 'slide',
			spaceBetween: 50,
		},
		970: {
			initialSlide: 1,
			centeredSlides: true,
			effect: 'coverflow',
			slidesPerView: 3,
			spaceBetween: 130,
			coverflowEffect: {
				rotate: 20,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: true,
			},
		},
	},
});
