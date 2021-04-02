//ВЫПАДАЮЩЕЕ МЕНЮ
let user = document.querySelector(".user__wrapper");
let drop = document.querySelector(".drop-down");
user.addEventListener("click", function (e) {
	drop.classList.toggle("_active");
});

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.user')) {
		drop.classList.remove("_active");
	}
});


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
			autoHeight: true,
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



/*document.querySelectorAll(".servicies__link").forEach(function (el) {
	el.addEventListener("mouseover", function (ev) {
		alert('1');
		if (ev.target = el) {
			alert("2");
			let servicies = document.querySelectorAll(".servicies__button");
			alert("3");
			this.servicies.classList.add("_active");
			alert("4");
		}
	});
})*/

/*let link = document.querySelectorAll(".servicies__link");
let servicies = document.querySelectorAll(".servicies__button");

link.forEach(function (link) {
	link.addEventListener("mouseover", function (mouse) {
		servicies.forTarget(function (serv) {
			serv.classList.add("_active");
		})
	});
})

link.forEach(function (link) {
	link.addEventListener("mouseout", function (mouse) {
		servicies.forEach(function (serv) {
			serv.classList.remove("_active");
		})
	});
})*/

/*
link.forEach(function (link) {
	link.addEventListener("mouseover", function (mouse) {
		alert("0");
		if (mouse.target) {
			servicies.classList.add("_active");
			alert("1");
		}
	});
})*/







/*link.forEach(function (link) {
	link.addEventListener("mouseout", function () {
		servicies.classList.remove("_active");
	});
})*/

//СЛАЙДЕР QUOTES
let quotes = new Swiper('.quotes__slider', {
	speed: 800,
	loop: true,
	effect: 'flip',
	navigation: {
		nextEl: '.quotes__arrow',
	},
});