"use strict"

// МЕНЮ-БУРГЕР
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').
			toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function () {
	$('.header__link').click(function (event) {
		$('.header__burger, .header__menu').removeClass('active');
		$('body').removeClass('lock')
	});
});

// ПЛАВНАЯ НАВИГАЦИЯ
$(function () {
	$("a[href^='#']").click(function () {
		var _href = $(this).attr("href");
		var fixed_offset = 50;
		$("html, body").animate({ scrollTop: $(_href).offset().top - fixed_offset }, 500);
		return false;
	});
});


$(function () {
	$('.footer__logo').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 'slow');
	});
});











