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
	speed: 700,
	parallax: true,
	navigation: {
		nextEl: '.main__next',
		prevEl: '.main__prev',
	},
});

let lots = new Swiper('.lots__slider', {
	slidesPerView: 3,
	navigation: {
		nextEl: '.navigation__next',
		prevEl: '.navigation__prev',
	},
});
