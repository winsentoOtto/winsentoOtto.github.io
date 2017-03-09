'use strict;'

$(function($){

  //template
  var $rest = $('#profile').html();
  var $test = [
    {question: '"Success is not final, failure is not fatal: it is the courage to continue that counts" was said by:',
     options: ['Winston Churchill',
               'Walt Disney',
               'Lao Tzu'],
    correct: 1
    },
    {question: '"The journey of a thousand miles begins with one step" was said by:',
     options: ['Muhammad Ali',
               'Lao Tzu',
               'Henry Ford'],
    correct: 2
    },
    {question: '"Do not take life too seriously. You will never get out of it alive" was said by:',
     options: ['Erich Fromm',
               'Dalai Lama',
               'Elbert Hubbard'],
    correct: 3
    }
  ];
  var content = tmpl($rest, {
    data: $test
  });
  $('.template').append(content);

  //type in JSON
  var str = JSON.stringify($test);

  //type in localStorage
  localStorage.setItem("store", str);
  localStorage.removeItem("store");

  //button click
  var $button = $('#check');
  $button.on('click', showModal);

  var $okButton = $('#okButton');
  $okButton.one('click', hideModal);


  var $body = $('body');
  var $modalOverlay = $('<div class = "modal-overlay"></div>');
  var $modal = $('<div class = "modal"></div>');
  var $modalHeader = $('<div class = "modal__header"><p>Results</p></div>');
  var $modalContent = $('<div class = "modal__content"></div>');
  var $result = $('<div class = "result"></div>');
  var $count = 0;
  var $okButton = $('<form class="" action="index.html" method="post"><input type="button" name="okButton" value="ok" id="okButton"></form>');

  //append modal
  function showModal(e){
    e.preventDefault();
  //check for answers
    //check if all answers done
  var $answer = $('input:checked');
  if($answer.length < 3){
    $modalContent.append('<p class = "error">oops, check your anwers - looks like you missed something<p>');
  }else {
    //check for correct answers
    for (var k = 0; k < $test.length; k++){
      if($($answer[k]).val() == $test[k].correct){
        $count+=1;
        $modalContent.append('<p class="correct">'+(+k+1) + ' answer is correct;</p>');
      }else {
        $modalContent.append('<p class="incorrect">'+(+k+1) + ' answer is incorrect;</p>')
      }
    }
    var $comment
    if($count <= 1){
      $comment = " Not passed, try again."
    }else {
      $comment = " Well done!"
    }
    if($count == 1){
      $result.append("<p>your gave "+ $count + " write answer.</p>" + $comment);
    }else{
    $result.append("<p>your gave "+ $count + " write answers</p>" + $comment);
    }
  }

  //forming modal
  $body.append($modalOverlay);
  $modalOverlay.append($modal);
  $modal.append($modalHeader);
  $modal.append($modalContent);
  $modal.append($result);
  $result.append($okButton);
};

//hide modal. Clear page
$modalOverlay.one('click', hideModal);

function hideModal(){
  location.reload()
};

});
