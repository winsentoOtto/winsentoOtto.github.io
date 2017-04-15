(function($) {
//    header carousel
$('#myCarousel').carousel({});//carousel script ends

//scroll down to anchor
$(function () {
    $('a[href*=#]').anchor({
        transitionDuration : 1200
    });
});

})(jQuery);
