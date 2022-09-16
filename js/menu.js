//АНИМАЦИЯ ПРИ СКРОЛЛЕ
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_animation');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_animation');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}

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

//МЕНЮ-БУРГЕР

const burgerMenu = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
if (burgerMenu) {
	burgerMenu.addEventListener('click', function () {
		document.body.classList.toggle('_lock');
		burgerMenu.classList.toggle('_active');
		menu.classList.toggle('_active');
	})
}

//НАВИГАЦИЯ
const menuLinks = document.querySelectorAll(".nav__link[data-goto]");
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const goToBlock = document.querySelector(menuLink.dataset.goto);
			const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

			if (burgerMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				burgerMenu.classList.remove('_active');
				menu.classList.remove('_active');
			}

			window.scrollTo({
				top: goToBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}


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

//СЛАЙДЕР QUOTES
let quotes = new Swiper('.quotes__slider', {
	speed: 800,
	loop: true,
	effect: 'flip',
	navigation: {
		nextEl: '.quotes__arrow',
	},
});

let anim = document.querySelector(".quotes__bottom");
anim.addEventListener("click", function () {
	let arrow = document.querySelector(".quotes__img");
	arrow.classList.add('_active');
})

anim.addEventListener("transitionend", function () {
	let arrow = document.querySelector(".quotes__img");
	arrow.classList.remove('_active');
})




// ВАЛИДАЦИЯ ФОРМЫ

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);
	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);
		let formData = new FormData(form);

		if (error === 0) {
			form.classList.add('_sending');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				alert(result.message);
				form.reset();
				form.classList.remove('_sending');
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		} else {
			alert('Заполните обязательные поля');
		}
	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);
			if (input.value === '') {
				formAddError(input);
				error++;
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}

	//Функция теста телефона
	function phoneTest(input) {
		return !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(input.value);
	}
});


let currentSeconds;
//Обратный отсчет времени
function createCounter() {
	let currentDay = new Date();

	let nextDay = new Date();
	nextDay.setDate(nextDay.getDate() + 1);
	nextDay.setHours(00, 00, 00, 00);

	//Рассчитываю разницу в часах, минутах, секундах, миллисекундах
	let differenceOfDays = nextDay - currentDay;

	let differenceOfHours = Math.trunc(differenceOfDays / 3600000);
	let differenceOfMinutes = +((differenceOfDays / 60000) - (60 * differenceOfHours)).toString().slice(0, 2);
	let differenceOfSeconds = +((differenceOfDays / 1000) - (60 * differenceOfMinutes) - (3600 * differenceOfHours)).toString().slice(0, 2);
	let differenceOfMilliseconds = Math.trunc((differenceOfDays - (1000 * differenceOfSeconds) - (60000 * differenceOfMinutes) - (3600000 * differenceOfHours)) / 10);

	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	currentSeconds = differenceOfSeconds;

	// Добавляю результат в соответствующие блоки HTML
	document.querySelectorAll('.lots__time-hours').forEach((elem) => {
		elem.innerHTML = differenceOfHours;
		if (differenceOfHours < 10) elem.innerHTML = '0' + differenceOfHours;
	});

	document.querySelectorAll('.lots__time-minutes').forEach((elem) => {
		elem.innerHTML = differenceOfMinutes;
		if (differenceOfMinutes < 10) elem.innerHTML = '0' + differenceOfMinutes;
	});

	document.querySelectorAll('.lots__time-seconds').forEach((elem) => {
		elem.innerHTML = differenceOfSeconds;
		if (differenceOfSeconds < 10) elem.innerHTML = '0' + differenceOfSeconds;
	});

	document.querySelectorAll('.lots__time-milliseconds').forEach((elem) => {
		elem.innerHTML = differenceOfMilliseconds;
		if (differenceOfMilliseconds < 10) elem.innerHTML = '0' + differenceOfMilliseconds;
	});
}
createCounter();

let timer = setInterval(function () {
	createCounter()
}, 1);


//Переворачивание песочных часов при смене минуты
let i = 0;

let timerForImage = setInterval(function () {
	if (currentSeconds == 0) {
		i++;
		document.querySelectorAll('.slide-lots__clock').forEach((item) => {
			item.style.transform = `rotate(${180 * (i)}deg)`;
		})
	}
}, 1000)




