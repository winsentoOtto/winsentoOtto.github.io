$(function() {
//tabs
	$('.tabs li').on('click', addActive);
	 function addActive(e) {
		$(this).addClass('active').siblings().removeClass('active');
		$('.content').find('p').eq($(this).index('li')).addClass('box')
		.fadeIn(1500).siblings('p').hide();
		e.preventDefault();
	} 

//tooltip
	$('.first input').hover(
		function() {
    $(this).addClass("hover")
		$('.first p').animate({opacity:"0.5"}, "slow");
  }, function() {
    $(this).removeClass("hover");
		$('.first p').animate({opacity:"0"}, "slow");
  });

	$('.last input').hover(
		function() {
		$(this).addClass("hover")
		$('.last p').animate({opacity:"0.5"}, "slow");
	}, function() {
		$(this).removeClass("hover");
		$('.last p').animate({opacity:"0"}, "slow");
	});
});
