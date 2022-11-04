const spray = new Audio("images/SprayCan_sound_effect_TubeRipper.com.mp3");
const police = new Audio("images/sound.mp3");
let domElement;
let finished = false;
let array = [];
let stopped = false;

$(window).on("load", () => {
  $("#light0").fadeOut(0);
  $("#light1").fadeOut(0);
});
//random graffiti appearing on click
$("#one, #two, #three").on("click", () => {
  if (finished === false) {
    finished = true;
    setTimeout(funi, 3800);
    spray.play();
    setTimeout(paint, 1800);
    setTimeout(song, 2400);
  }
});

function paint() {
  let num = Math.floor(Math.random() * 4);
  console.log(num);
  array.push(num);
  let lastEl = array.slice(-2, -1);
  console.log(lastEl);
  if (lastEl == num) {
    paint();
  } else {
    domElement = $('<img class="graffiti" src="images/paint' + num + '.png"/>');
    $("#graffitiContainer").append(domElement);
    $(domElement).fadeOut(0);
    $(domElement).fadeIn(2000);
  }
}

//remove graffiti on click
$("#light").on("click", () => {
  police.play();
  lightsOn0();
  setTimeout(lightsOn1, 800);
  setTimeout(fadeOut, 7000);
  setTimeout(remove, 8000);
});

function fadeOut() {
  $(".graffiti").fadeOut();
  police.pause();
  police.currentTime = 0;
}

function remove() {
  $(".graffiti").remove();
  stopped = true;
  num = 0;
}

//additional stuff
function funi() {
  finished = false;
}

function lightsOn0() {
  for (let index = 0; index < 4; index++) {
    $("#light1").fadeIn(800);
    $("#light1").fadeOut(800);
  }
}

function lightsOn1() {
  for (let index = 0; index < 4; index++) {
    $("#light0").fadeIn(800);
    $("#light0").fadeOut(800);
  }
}
