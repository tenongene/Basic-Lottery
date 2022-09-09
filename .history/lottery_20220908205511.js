"use strict";

// let beginValue = 2;
// let endValue = 70;
// let qty = 6;

document.querySelector(".btn").addEventListener("click", function () {
  let beginValue = Number(document.querySelector(".start").value);
  let endValue = Number(document.querySelector(".end").value);
  let qty = Number(document.querySelector(".qty").value);
  let randNums = new Set();

  while randNums.siz
  for (let i = 0; i < qty; i++) {
    randNums.push(Math.trunc(Math.random() * endValue) + 1);
    document.querySelector(".lucky").textContent = randNums;
  }
});
