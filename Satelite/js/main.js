(function($) {
//    header carousel
    $('#myCarousel').carousel({});

//    gallery
    $('ul.first').bsPhotoGallery({
        "classes" : "col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xxs-6",
        "hasModal" : true
    });

//    gallery carousel
    $('#carouselGallery').carousel({
        interval: false
    });

//form

    //name check
    var name = $('.name');

    name.blur(nameCheck);
    function nameCheck(){
        var userName = $(this).val();
        var name;

        if(userName == ''){
            $(this).css('border', '1px solid red');
            return false;
        }else{
            $(this).css('border', '1px solid green');
            return true;
        }
    }; //name check

    //phone check
    var r = /^([+]?[0-9\s-\(\)]{10,12})*$/i;
    var phone = $('.phone');

    phone.blur(phoneCheck);
    function phoneCheck(){
        var userPhone = $(this).val();

        if(userPhone == '' || userPhone.search(r) == -1){
            $(this).css('border', '1px solid red');
            return false;
        }else{
            $(this).css('border', '1px solid green');
            return true;
        }
    }; //phone check

    //mail check
    var reg = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;
    var mail = $('.mail');

    mail.blur(mailCheck);
    function mailCheck(){
        var userMail = $(this).val();

        if(userMail == '' || userMail.search(reg) == -1){
            $(this).css('border', '1px solid red');
            return false;
        }else{
            $(this).css('border', '1px solid green');
            return true;
        }
    }; //mail check

//    manipulation with gallery
    //ajax
    (function(){
        $.ajax({
        url: 'https://pixabay.com/api',
        method: 'GET',
        dataType: 'jsonp',
        data:{
            key: '2745755-bc692754531960a8fc0e56dd1',
            q: 'space',
            image_type: 'photo',
            per_page: 10,
        },
        success: function(data){
            var $results = data.hits;
            for (var i = 0; i<8; i++){
                $('.grid .item'+i).html('<img src="'+$results[i].previewURL+'">');
            }
        },
        error: function(){
            alert('error occured');
        }
    });})();//ajax end


    $(window).load(function() {
//    masonry
        $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: 5
        });
    });

})(jQuery);
