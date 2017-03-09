var init = 0;
var clock;

var mi = 0;
var s = 1;
var m = 1;
var h = 1;
var startBut = document.getElementById('startBut');
var resetBut = document.getElementById('resetBut');
var splitBut = document.getElementById('splitBut');

function update(){
  var thisDate = new Date();
  var t = thisDate.getTime() - startDate.getTime();
  var ms = t%1000; t-=ms; ms=Math.floor(ms/1);
  t = Math.floor (t/1000);
  var s = t%60; t-=s;
  t = Math.floor (t/60);
  var m = t%60; t-=m;
  t = Math.floor (t/60);
  var h = t%60;
  if (h<10) h='0'+h;
  if (m<10) m='0'+m;
  if (s<10) s='0'+s;
  if (ms<10) ms='0'+ms;
  if(ms<100) ms='0'+ms;
  if (init==1)
  document.timer.clock.value = h + ' : ' + m + ' : ' + s + ' . ' + ms;
  clocktimer = setTimeout("update()",10);
}

function startFunc(){
    startDate = new Date();
  if(init === 0){
    update();
    init = 1;
    startBut.value = "Stop";
  }
  else {
    clearTimeout(clock);
    init = 0;
    record();
    document.timer.clock.value = "00 : 00 : 00 . 000";
    startBut.value = "Start";
  }
  return init;
}

function record(){
  var time = document.timer.clock.value;
    if(init === 0){
    document.getElementById('data').innerHTML += " Stop: " + time + '<br>';
    }
    else{
      document.getElementById('data').innerHTML += " Split: " + time + '<br>';
    }
}

//start/stop button
startBut.addEventListener("click", startFunc);

//split button
splitBut.addEventListener("click", record);

//reset
resetBut.addEventListener("click", reset);

function reset(){
  location.reload();
}
