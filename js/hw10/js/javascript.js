$(function(){
//menu
  var $li = $('.menu li');
    $li.mouseenter(function(){
      $(this).animate({
        backgroundColor: "#D1935F"
      }, 200);
  });
  $li.mouseleave(function(){
    $(this).animate({
      backgroundColor: "#EAC19C"
      }, 200);
  });

var $team = $('menu li:nth-child(3)');
  $team.hover(function(){
    var $submenu = $(this).find('.submenu');
    $submenu.slideToggle(500);
});

var $designers = $('.submenu li:nth-child(2)');
  $designers.hover(function(){
    var $subsubmenu = $(this).find('.subsubmenu');
    $subsubmenu.slideToggle(300);
});

var $worker = $('.subsubmenu li:nth-child(2)');
  $worker.hover(function(){
    var $subsubmenu2 = $(this).find('.subsubmenu2');
    $subsubmenu2.slideToggle(300);
});

//slider
var $prev = $('.jcarousel-control-prev');
var $next = $('.jcarousel-control-next');
var clickPrev = $prev.bind('click', goPrev);
function goPrev(e){
  $('.jcarousel li').eq($('li[class=active]').index('.jcarousel li')-1).addClass('active').css({opacity: 0}).animate({opacity: 1}, 1000).siblings().removeClass('active');
  e.preventDefault();
}

var clickNext = $next.bind('click', goNext);
function goNext(e){
  //check if index of an element > then element's length
  var $index = function(){
    var $i = $('li[class=active]').index('.jcarousel li')+1;
    if( $i < $('.jcarousel li').length){
      $i = $('li[class=active]').index('.jcarousel li')+1;
    }else {
      $i = 0;
    }
    return $i;
  }
  $('.jcarousel li').eq($index()).addClass('active').css({opacity: 0}).animate({opacity: 1}, 1000).siblings().removeClass('active');
  e.preventDefault();
}

//selectbox

  $("#usage-select").selectbox();
  $(".jBox").mousedown(
	function() {
    changeCheck(jQuery(this));
	});
	$(".jBox").each(
	function() {
	     changeCheckStart(jQuery(this));
	});

});
