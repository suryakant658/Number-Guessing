"use strict";

/*
console.log(document.querySelector(".heading"));

document.querySelector(".heading").textContent = "Hello World";
console.log(document.querySelector(".heading"));

document.querySelector(".guess").value = 12;
*/

//* Handling click events

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let chances = 20;
console.log(randomNumber);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (guess == 0) {
    document.querySelector(".message").textContent = "No Number 🚫";
  } else if (guess === randomNumber) {
    document.querySelector(".message").textContent = "Correct Number 🏆";
  } else if (guess > randomNumber) {
    if (chances > 1) {
      document.querySelector(".message").textContent = "Too High ☝️";
      chances--;
      document.querySelector(".chance").textContent = chances;
    } else {
      chances = 0;
      document.querySelector(".chance").textContent = chances;
      document.querySelector(".message").textContent = "You lost the game ❌";
    }
  } else if (guess < randomNumber) {
    if (chances > 1) {
      document.querySelector(".message").textContent = "Too Low 👇";
      chances--;
      document.querySelector(".chance").textContent = chances;
    } else {
      chances = 0;
      document.querySelector(".chance").textContent = chances;
      document.querySelector(".message").textContent = "You lost the game ❌";
    }
  }
});

// handling click events

let rando = Math.trunc ( Math.random() * 20 ) + 1;
let chances = 20;
document.querySelector(".numer").textContent = randomNumber;
document.querySelector(".numer").textContent = ;

