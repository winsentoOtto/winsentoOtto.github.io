(function($){
$.fn.carousel = function(){
  var $carLeft = $('.carousel-arrow-left');
  var $carRight = $('.carousel-arrow-right');
  var $elementList = $('.carousel-list');

  var pixelOffset = 320;
  var currentLeftValue = 0;
  var elementCount = $elementList.find('li').length;
  var minimumOffset = -((elementCount-3)*pixelOffset);
  var maximumOffset = 0;

  $carLeft.on('click', function(){
    if(currentLeftValue != maximumOffset){
      currentLeftValue += pixelOffset;
      $elementList.animate({left:currentLeftValue + 'px'}, 500);
    }
  });
  $carRight.on('click', function(){
    if(currentLeftValue != minimumOffset){
      currentLeftValue -= pixelOffset;
      $elementList.animate({left:currentLeftValue + 'px'}, 500);
    }
  });
}
}(jQuery));
