(function($) {
	$(document).ready(function() {

		//top carousel
		$('.carousel').carousel({
			interval: 7000
		})

		//slick carousel
		$('.carousel .row').slick({
			dots: false,
			infinite: true,
			autoplay: false,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});

	}); //document ready ends
})(jQuery);
