import { tempo } from "./script.js";

const C3 = document.getElementById("C3");
const Db3 = document.getElementById("Db3");
const D3 = document.getElementById("D3");
const Eb3 = document.getElementById("Eb3");
const E3 = document.getElementById("E3");
const F3 = document.getElementById("F3");
const Gb3 = document.getElementById("Gb3");
const G3 = document.getElementById("G3");
const Ab3 = document.getElementById("Ab3");
const A3 = document.getElementById("A3");
const Bb3 = document.getElementById("Bb3");
const B3 = document.getElementById("B3");
const C4 = document.getElementById("C4");
const Db4 = document.getElementById("Db4");
const D4 = document.getElementById("D4");
const Eb4 = document.getElementById("Eb4");
const E4 = document.getElementById("E4");
const F4 = document.getElementById("F4");
const Gb4 = document.getElementById("Gb4");
const G4 = document.getElementById("G4");
const Ab4 = document.getElementById("Ab4");
const A4 = document.getElementById("A4");
const Bb4 = document.getElementById("Bb4");
const B4 = document.getElementById("B4");
const C5 = document.getElementById("C5");
const Db5 = document.getElementById("Db5");
const D5 = document.getElementById("D5");
const Eb5 = document.getElementById("Eb5");
const E5 = document.getElementById("E5");

const CM = [C3, D3, E3, F3, G3, A3, B3, C4, D4, E4, F4, G4, A4, B4, C5, D5, E5];
const DbM = [
  Db3,
  Eb3,
  F3,
  Gb3,
  Ab3,
  Bb3,
  C4,
  Db4,
  Eb4,
  F4,
  Gb4,
  Ab4,
  Bb4,
  C5,
  Db5,
  Eb5
];
const DM = [
  Db3,
  D3,
  E3,
  Gb3,
  G3,
  A3,
  B3,
  Db4,
  D4,
  E4,
  Gb4,
  G4,
  A4,
  B4,
  Db5,
  D5,
  E5
];
const EbM = [
  C3,
  D3,
  Eb3,
  F3,
  G3,
  Ab3,
  Bb3,
  C4,
  D4,
  Eb4,
  F4,
  G4,
  Ab4,
  Bb4,
  C5,
  D5,
  Eb5
];
const EM = [
  Db3,
  Eb3,
  E3,
  Gb3,
  Ab3,
  A3,
  B3,
  Db4,
  Eb4,
  E4,
  Gb4,
  Ab4,
  A4,
  B4,
  Db5,
  Eb5,
  E5
];
const FM = [
  C3,
  D3,
  E3,
  F3,
  G3,
  A3,
  Bb3,
  C4,
  D4,
  E4,
  F4,
  G4,
  A4,
  Bb4,
  C5,
  D5,
  E5
];
const GbM = [
  Db3,
  Eb3,
  F3,
  Gb3,
  Ab3,
  Bb3,
  B3,
  Db4,
  Eb4,
  F4,
  Gb4,
  Ab4,
  Bb4,
  B4,
  Db5,
  Eb5
];
const GM = [C3, D3, E3, Gb3, G3, A3, B3, C4, D4, E4, Gb4, A4, B4, C5, D5, E5];
const AbM = [
  C3,
  Db3,
  Eb3,
  F3,
  G3,
  Ab3,
  Bb3,
  C4,
  Db4,
  Eb4,
  F4,
  G4,
  Ab4,
  Bb4,
  C5,
  Db5,
  Eb5
];
const AM = [
  Db3,
  D3,
  E3,
  Gb3,
  Ab3,
  A3,
  B3,
  Db4,
  D4,
  E4,
  Gb4,
  Ab4,
  A4,
  B4,
  Db5,
  D5,
  E5
];
const BbM = [
  C3,
  D3,
  Eb3,
  F3,
  G3,
  A3,
  Bb3,
  C4,
  D4,
  Eb4,
  F4,
  G4,
  A4,
  Bb4,
  C5,
  D5,
  Eb5
];
const BM = [
  Db3,
  Eb3,
  E3,
  Gb3,
  Ab3,
  Bb3,
  B3,
  Db4,
  Eb4,
  E4,
  Gb4,
  Ab4,
  Bb4,
  B4,
  Db5,
  Eb5,
  E5
];

const Chm = [
  C3,
  D3,
  Eb3,
  F3,
  G3,
  Ab3,
  B3,
  C4,
  D4,
  Eb4,
  F4,
  G4,
  Ab4,
  B4,
  C5,
  D5,
  Eb5
];
const Dbhm = [
  C3,
  Db3,
  Eb3,
  E3,
  Gb3,
  Ab3,
  A3,
  C4,
  Db4,
  Eb4,
  E4,
  Gb4,
  Ab4,
  A4,
  C5,
  Db5,
  Eb5,
  E5
];
const Dhm = [
  Db3,
  D3,
  E3,
  F3,
  G3,
  A3,
  Bb3,
  Db4,
  D4,
  E4,
  F4,
  G4,
  A4,
  Bb4,
  Db5,
  D5,
  E5
];
const Ebhm = [
  D3,
  Eb3,
  F3,
  Gb3,
  Ab3,
  Bb3,
  B3,
  D4,
  Eb4,
  F4,
  Gb4,
  Ab4,
  Bb4,
  B4,
  D5,
  Eb5
];
const Ehm = [
  C3,
  Eb3,
  E3,
  Gb3,
  G3,
  A3,
  B3,
  C4,
  Eb4,
  E4,
  Gb4,
  G4,
  A4,
  B4,
  C5,
  Eb5,
  E5
];
const Fhm = [
  C3,
  Db3,
  E3,
  F3,
  G3,
  Ab3,
  Bb3,
  C4,
  Db4,
  E4,
  F4,
  G4,
  Ab4,
  Bb4,
  C5,
  Db5,
  E5
];
const Gbhm = [
  Db3,
  D3,
  F3,
  Gb3,
  Ab3,
  A3,
  B3,
  Db4,
  D4,
  F4,
  Gb4,
  Ab4,
  A4,
  B4,
  Db5,
  D5
];
const Ghm = [
  C3,
  D3,
  Eb3,
  Gb3,
  G3,
  A3,
  Bb3,
  C4,
  D4,
  Eb4,
  Gb4,
  G4,
  A4,
  Bb4,
  C5,
  D5,
  Eb5
];
const Abhm = [
  Db3,
  Eb3,
  E3,
  G3,
  Ab3,
  Bb3,
  B3,
  Db4,
  Eb4,
  E4,
  G4,
  Ab4,
  Bb4,
  B4,
  Db5,
  Eb5,
  E5
];
const Ahm = [
  C3,
  D3,
  E3,
  F3,
  Ab3,
  A3,
  B3,
  C4,
  D4,
  E4,
  F4,
  Ab4,
  A4,
  B4,
  C5,
  D5,
  E5
];
const Bbhm = [
  C3,
  Db3,
  Eb3,
  F3,
  Gb3,
  A3,
  Bb3,
  C4,
  Db4,
  Eb4,
  F4,
  Gb4,
  A4,
  Bb4,
  C5,
  Db5,
  Eb5
];
const Bhm = [
  Db3,
  D3,
  E3,
  Gb3,
  G3,
  Bb3,
  B3,
  Db4,
  D4,
  E4,
  Gb4,
  G4,
  Bb4,
  B4,
  Db5,
  D5,
  E5
];

const majorScales = [CM, DbM, DM, EbM, EM, FM, GbM, GM, AbM, AM, BbM, BM];
const harmonicMinorScales = [
  Chm,
  Dbhm,
  Dhm,
  Ebhm,
  Ehm,
  Fhm,
  Gbhm,
  Ghm,
  Abhm,
  Ahm,
  Bbhm,
  Bhm
];
export const scales = majorScales.concat(harmonicMinorScales);

export function highlightNotes(randomNote) {
  if (randomNote === C3) {
    hlC3();
  }
  if (randomNote === Db3) {
    hlDb3();
  }
  if (randomNote === D3) {
    hlD3();
  }
  if (randomNote === Eb3) {
    hlEb3();
  }
  if (randomNote === E3) {
    hlE3();
  }
  if (randomNote === F3) {
    hlF3();
  }
  if (randomNote === Gb3) {
    hlGb3();
  }
  if (randomNote === G3) {
    hlG3();
  }
  if (randomNote === Ab3) {
    hlAb3();
  }
  if (randomNote === A3) {
    hlA3();
  }
  if (randomNote === Bb3) {
    hlBb3();
  }
  if (randomNote === B3) {
    hlB3();
  }
  if (randomNote === C4) {
    hlC4();
  }
  if (randomNote === Db4) {
    hlDb4();
  }
  if (randomNote === D4) {
    hlD4();
  }
  if (randomNote === Eb4) {
    hlEb4();
  }
  if (randomNote === E4) {
    hlE4();
  }
  if (randomNote === F4) {
    hlF4();
  }
  if (randomNote === Gb4) {
    hlGb4();
  }
  if (randomNote === G4) {
    hlG4();
  }
  if (randomNote === Ab4) {
    hlAb4();
  }
  if (randomNote === A4) {
    hlA4();
  }
  if (randomNote === Bb4) {
    hlBb4();
  }
  if (randomNote === B4) {
    hlB4();
  }
  if (randomNote === C5) {
    hlC5();
  }
  if (randomNote === Db5) {
    hlDb5();
  }
  if (randomNote === D5) {
    hlD5();
  }
  if (randomNote === Eb5) {
    hlEb5();
  }
  if (randomNote === E5) {
    hlE5();
  }
}

function hlC3() {
  document.querySelector(".C3").classList.add("active");
  setTimeout(() => {
    document.querySelector(".C3").classList.remove("active");
  }, tempo);
}

function hlDb3() {
  document.querySelector(".Db3").classList.add("active");
  setTimeout(() => {
    document.querySelector(".Db3").classList.remove("active");
  }, tempo);
}

function hlD3() {
  document.querySelector(".D3").classList.add("active");
  setTimeout(() => {
    document.querySelector(".D3").classList.remove("active");
  }, tempo);
}

function hlEb3() {
  document.querySelector(".Eb3").classList.add("active");
  setTimeout(() => {
    document.querySelector(".Eb3").classList.remove("active");
  }, tempo);
}

function hlE3() {
  document.querySelector(".E3").classList.add("active");
  setTimeout(() => {
    document.querySelector(".E3").classList.remove("active");
  }, tempo);
}
function hlF3() {
  document.querySelector(".F3").classList.add("active");
  setTimeout(() => {
    document.querySelector(".F3").classList.remove("active");
  }, tempo);
}
function hlGb3() {
  document.querySelector(".Gb3").classList.add("active");
  setTimeout(() => {
    document.querySelector(".Gb3").classList.remove("active");
  }, tempo);
}
function hlG3() {
  document.querySelector(".G3").classList.add("active");
  setTimeout(() => {
    document.querySelector(".G3").classList.remove("active");
  }, tempo);
}
function hlAb3() {
  document.querySelector(".Ab3").classList.add("active");
  setTimeout(() => {
    document.querySelector(".Ab3").classList.remove("active");
  }, tempo);
}
function hlA3() {
  document.querySelector(".A3").classList.add("active");
  setTimeout(() => {
    document.querySelector(".A3").classList.remove("active");
  }, tempo);
}
function hlBb3() {
  document.querySelector(".Bb3").classList.add("active");
  setTimeout(() => {
    document.querySelector(".Bb3").classList.remove("active");
  }, tempo);
}
function hlB3() {
  document.querySelector(".B3").classList.add("active");
  setTimeout(() => {
    document.querySelector(".B3").classList.remove("active");
  }, tempo);
}
function hlC4() {
  document.querySelector(".C4").classList.add("active");
  setTimeout(() => {
    document.querySelector(".C4").classList.remove("active");
  }, tempo);
}

function hlDb4() {
  document.querySelector(".Db4").classList.add("active");
  setTimeout(() => {
    document.querySelector(".Db4").classList.remove("active");
  }, tempo);
}
function hlD4() {
  document.querySelector(".D4").classList.add("active");
  setTimeout(() => {
    document.querySelector(".D4").classList.remove("active");
  }, tempo);
}
function hlEb4() {
  document.querySelector(".Eb4").classList.add("active");
  setTimeout(() => {
    document.querySelector(".Eb4").classList.remove("active");
  }, tempo);
}
function hlE4() {
  document.querySelector(".E4").classList.add("active");
  setTimeout(() => {
    document.querySelector(".E4").classList.remove("active");
  }, tempo);
}
function hlF4() {
  document.querySelector(".F4").classList.add("active");
  setTimeout(() => {
    document.querySelector(".F4").classList.remove("active");
  }, tempo);
}
function hlGb4() {
  document.querySelector(".Gb4").classList.add("active");
  setTimeout(() => {
    document.querySelector(".Gb4").classList.remove("active");
  }, tempo);
}
function hlG4() {
  document.querySelector(".G4").classList.add("active");
  setTimeout(() => {
    document.querySelector(".G4").classList.remove("active");
  }, tempo);
}
function hlAb4() {
  document.querySelector(".Ab4").classList.add("active");
  setTimeout(() => {
    document.querySelector(".Ab4").classList.remove("active");
  }, tempo);
}
function hlA4() {
  document.querySelector(".A4").classList.add("active");
  setTimeout(() => {
    document.querySelector(".A4").classList.remove("active");
  }, tempo);
}
function hlBb4() {
  document.querySelector(".Bb4").classList.add("active");
  setTimeout(() => {
    document.querySelector(".Bb4").classList.remove("active");
  }, tempo);
}
function hlB4() {
  document.querySelector(".B4").classList.add("active");
  setTimeout(() => {
    document.querySelector(".B4").classList.remove("active");
  }, tempo);
}
function hlC5() {
  document.querySelector(".C5").classList.add("active");
  setTimeout(() => {
    document.querySelector(".C5").classList.remove("active");
  }, tempo);
}

function hlDb5() {
  document.querySelector(".Db5").classList.add("active");
  setTimeout(() => {
    document.querySelector(".Db5").classList.remove("active");
  }, tempo);
}
function hlD5() {
  document.querySelector(".D5").classList.add("active");
  setTimeout(() => {
    document.querySelector(".D5").classList.remove("active");
  }, tempo);
}
function hlEb5() {
  document.querySelector(".Eb5").classList.add("active");
  setTimeout(() => {
    document.querySelector(".Eb5").classList.remove("active");
  }, tempo);
}
function hlE5() {
  document.querySelector(".E5").classList.add("active");
  setTimeout(() => {
    document.querySelector(".E5").classList.remove("active");
  }, tempo);
}
