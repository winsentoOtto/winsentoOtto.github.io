$(function(){
  $('.carousel').carousel();

  //template
  var html = $('#profile').html();
  var data = {
      name : 'Will travel',
      photo: {
          src: 'img/travel-to-escape.jpg',
          alt: 'some cool image',
          width:'800px;'
      },
      why: 'Well, you should take some rest, because:',
      reasons: ['1. Why not? : )',
                '2. It is awesome',
                '3. Any way, any person should take some rest'],
      number: '00-00-00-00',
      fb_link: '<a href="">fb.com</a>',
      feedback_text: 'That will be cool'
      };
  var content = tmpl(html, data);
  $('.template').append(content);

  //LoDash
  var loDashTemplate = $('#LoDash').html();
  var loDashContent = {
    question: 'so, what do you think about...',
    country: 'Shri Lanka',
    photo: {
      src: 'img/shri-lanka.jpg',
      alt: 'Shri-Lanka',
      width: '800px',
    },
    why: 'You should try, because:',
    reasons: ['1. It is beautiful',
              '2. Everyone one knows english',
              '3. It is cheap enought'],
  };
  var loDashContent = _.template(loDashTemplate)(loDashContent);
  $('.template').append(loDashContent);
});
