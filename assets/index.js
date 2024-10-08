$(document).ready(function () {
	$(".slick-carousel").slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: true,
		prevArrow:
			'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
		nextArrow:
			'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
	});
});
