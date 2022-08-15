const spray = new Audio('images/SprayCan_sound_effect_TubeRipper.com.mp3');
const em = new Audio('images/em.mp3');
const police = new Audio('images/sound.mp3');
let domElement;
let finished = false;
let array = [];
let num = 0;
let stopped = false;

$(window).on('load', function () {
  $('#light0').fadeOut(0);
  $('#light1').fadeOut(0);
});
//random graffiti appearing on click
$(".one, .two, .three").click(function () {
  if (finished === false) {
    finished = true;
    setTimeout(funi, 3800);
    spray.play();
    setTimeout(paint, 1800);
    setTimeout(song, 2400);
  }
});

function song() {
  if (num === 0) {
    em.play();
    num = 1;
  } else {
    return;
  }
}

em.addEventListener('ended', function () {
  if (!stopped) {
    this.currentTime = 0;
    this.play();
  }
}, false);

function paint() {
  let num = Math.floor(Math.random() * 4);
  console.log(num);
  array.push(num);
  let lastEl = array.slice(-2, -1);
  console.log(lastEl);
  if (lastEl == num) {
    paint();
  } else {
    domElement = $('<img class="oi" src="images/paint' + num + '.png"/>');
    $("#container").append(domElement);
    $(domElement).fadeOut(0);
    $(domElement).fadeIn(2000);
  }
};

//remove graffiti on click
$(".light").on('click', function () {
  police.play();
  lightsOn0();
  setTimeout(lightsOn1, 800);
  setTimeout(fadeOut, 7000);
  setTimeout(remove, 8000);
});

function fadeOut() {
  $(".oi").fadeOut();
  police.pause();
  police.currentTime = 0;
}

function remove() {
  $(".oi").remove();
  stopped = true;
  num = 0;
  em.pause();
  em.currentTime = 0;
}

//additional stuff
function funi() {
  finished = false;
}

function lightsOn0() {
  for (let index = 0; index < 4; index++) {
    $('#light1').fadeIn(800);
    $('#light1').fadeOut(800);
  }
}

function lightsOn1() {
  for (let index = 0; index < 4; index++) {
    $("#light0").fadeIn(800);
    $("#light0").fadeOut(800);
  }
}
