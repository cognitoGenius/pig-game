`use strict`;
let diceImg = document.querySelector(`.dice`);
let newGamebtn = document.querySelector(`.btn--new`)
let rollbtn = document.querySelector(`.btn--roll`)
let holdbtn = document.querySelector(`.btn--hold`)
let section1 = document.querySelector(`.player--0`)
let section2 = document.querySelector(`.player--1`)
let tscore1 = document.querySelector(`#score--0`)
let tscore2 = document.querySelector(`#score--1`)
let score1 = document.querySelector(`#current--0`)
let score2 = document.querySelector(`#current--1`)

function diceRoll1() {
  score2.textContent = 0;
  let guess = Math.trunc(Math.random() * 6 + 1)
  diceImg.classList.remove(`hidden`)
  section2.classList.remove(`player--active`)
  section1.classList.add(`player--active`)
  diceImg.setAttribute(`src`, `dice-${guess}.png`)

  if (guess === 1) {
    rollbtn.removeEventListener(`click`, diceRoll1)
    score1.textContent = 0;
    section1.classList.remove(`player--active`)
    section2.classList.add(`player--active`)
    rollbtn.addEventListener(`click`, diceRoll2)
  } else score1.textContent = Number(score1.textContent) + guess
}

function diceRoll2() {

  score1.textContent = 0;
  let guess = Math.trunc(Math.random() * 6 + 1)
  diceImg.classList.remove(`hidden`)
  section1.classList.remove(`player--active`)
  section2.classList.add(`player--active`)
  diceImg.setAttribute(`src`, `dice-${guess}.png`)
  if (guess === 1) {
    rollbtn.removeEventListener(`click`, diceRoll2)
    score2.textContent = 0;
    section2.classList.remove(`player--active`)
    section1.classList.add(`player--active`)
    rollbtn.addEventListener(`click`, diceRoll1)
  } else score2.textContent = Number(score2.textContent) + guess
}

function hold() {
  if (section1.classList.contains(`player--active`)) {
    tscore1.textContent = Number(tscore1.textContent) + Number(score1.textContent)
    score1.textContent = 0
    section1.classList.remove(`player--active`)
    section2.classList.add(`player--active`)
    if (Number(tscore1.textContent) >= 100) {
      section2.classList.remove(`player--active`)
      section1.classList.add(`player--winner`)
      diceImg.classList.add(`hidden`)
      rollbtn.removeEventListener(`click`, diceRoll1)
      rollbtn.removeEventListener(`click`, diceRoll2)
      holdbtn.removeEventListener(`click`, hold)
    } else {
      rollbtn.removeEventListener(`click`, diceRoll1)
      rollbtn.addEventListener(`click`, diceRoll2)
    }
  } else if (section2.classList.contains(`player--active`)) {
    tscore2.textContent = Number(tscore2.textContent) + Number(score2.textContent)
    score2.textContent = 0
    section2.classList.remove(`player--active`)
    section1.classList.add(`player--active`)
    if (Number(tscore2.textContent) >= 100) {
      section1.classList.remove(`player--active`)
      section2.classList.add(`player--winner`)
      diceImg.classList.add(`hidden`)
      rollbtn.removeEventListener(`click`, diceRoll1)
      rollbtn.removeEventListener(`click`, diceRoll2)
      holdbtn.removeEventListener(`click`, hold)
    } else {
      rollbtn.removeEventListener(`click`, diceRoll2)
      rollbtn.addEventListener(`click`, diceRoll1)
    }
  }
}

function newGame() {
  score1.textContent = 0, score2.textContent = 0;
  tscore1.textContent = 0, tscore2.textContent = 0;
  diceImg.classList.add(`hidden`)
  section1.classList.remove(`player--winner`)
  section2.classList.remove(`player--winner`)
  section2.classList.remove(`player--active`)
  section1.classList.add(`player--active`)
  rollbtn.removeEventListener(`click`, diceRoll2)
  rollbtn.addEventListener(`click`, diceRoll1)
  holdbtn.addEventListener(`click`, hold)
}

diceImg.classList.add(`hidden`)
rollbtn.addEventListener(`click`, diceRoll1);
holdbtn.addEventListener(`click`, hold);
newGamebtn.addEventListener(`click`, newGame)