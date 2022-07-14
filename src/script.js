import { scales } from "./notes";
import { highlightNotes } from "./notes";
export const tempo = 225;

function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;
  return result;
}

var getRandomScale = getRandomNumber(0, scales.length - 1);
var randomScale = scales[getRandomScale];

function newRandomScale() {
  getRandomScale = getRandomNumber(0, scales.length - 1);
  randomScale = scales[getRandomScale];
}

function playRandomNote() {
  let getRandomNote = getRandomNumber(0, randomScale.length - 1);
  let randomNote = randomScale[getRandomNote];
  randomNote.currentTime = 0;
  randomNote.play();
  highlightNotes(randomNote);
}

const playButton = document.querySelector(".play-button");
playButton.addEventListener("click", playSong);

var loop1;
var loop2;
var loop3;
var loop4;
var loop5;
var loop6;
var loop7;
var loop8;
var loopScale;
var A = 2;
var B = 5;
var C = 6;
var D = 9;
var E = 12;
var F = 15;
var G = 20;
var H = 23;
var S = 24;

function playSong() {
  loopScale = setInterval(newRandomScale, tempo * S);
  loop1 = setInterval(playRandomNote, tempo * A);
  loop2 = setInterval(playRandomNote, tempo * B);
  loop3 = setInterval(playRandomNote, tempo * C);
  loop4 = setInterval(playRandomNote, tempo * D);
  loop5 = setInterval(playRandomNote, tempo * E);
  loop6 = setInterval(playRandomNote, tempo * F);
  loop7 = setInterval(playRandomNote, tempo * G);
  loop8 = setInterval(playRandomNote, tempo * H);
  playButton.classList.add("active");
}

const stopButton = document.querySelector(".stop-button");
stopButton.addEventListener("click", stopSong);

function stopSong() {
  clearInterval(loop1);
  clearInterval(loop2);
  clearInterval(loop3);
  clearInterval(loop4);
  clearInterval(loop5);
  clearInterval(loop6);
  clearInterval(loop7);
  clearInterval(loop8);
  clearInterval(loopScale);
  playButton.classList.remove("active");
}
