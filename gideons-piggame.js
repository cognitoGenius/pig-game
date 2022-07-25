'use strict';
const player_0 = document.querySelector('.player--0');
const player_1 = document.querySelector('.player--1');
const player_0_CurrentScore = document.getElementById('current--0');
const player_1_CurrentScore = document.getElementById('current--1');
const player_0_OverallScore = document.getElementById('score--0');
const player_1_OverallScore = document.getElementById('score--1');
// const diceImg = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceImg = document.querySelector('.dice');
// converting iniial overall scores to zero
player_0_OverallScore.textContent = 0;
player_1_OverallScore.textContent = 0;

let activePlayer = 0;
let currentScore = 0;
let playing = true;
let scores = [0, 0];

//keeping dice hidden before game commences
diceImg.classList.add('hidden');

// swtich player function
const changePlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player_0.classList.toggle('player--active');
  player_1.classList.toggle('player--active');
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    const diceRoll = Math.trunc(Math.random() * 6) + 1;
    diceImg.classList.remove('hidden');
    diceImg.src = `dice-${diceRoll}.png`;

    if (diceRoll !== 1) {
      currentScore += diceRoll;
      // player_0_CurrentScore.textContent = currentScore;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      changePlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
  }
  if (scores[activePlayer] >= 30) {
    playing = false;
    document.getElementById(`score--${activePlayer}`).textContent = `Winner🥇`;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    diceImg.classList.add('hidden');
  } else {
    changePlayer();
  }
});

btnNew.addEventListener('click', function () {
  playing = true;
  activePlayer = 0;
  currentScore = 0;
  scores = [0, 0];
  diceImg.classList.add('hidden');

  player_0_OverallScore.textContent = 0;
  player_1_OverallScore.textContent = 0;
  player_0_CurrentScore.textContent = 0;
  player_1_CurrentScore.textContent = 0;

  player_0.classList.add('player--active');
  console.log('remove');
  player_1.classList.remove('player--active');
  player_0.classList.remove('player--winner');
  player_1.classList.remove('player--winner');
});

// // return the initial scores to zero
// player_0_OverallScore.textContent = 0;
// player_1_OverallScore.textContent = 0;
// //hide the dice image
// diceImg.classList.add('hidden');
// //updating the currentscore
// let currentScore = 0;
// let currentPlayer = 0;
// const OverallScore = [0, 0];
// let playing = true;

// // adding and eventhandler to the diceroll button
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     const diceNumber = Math.trunc(Math.random() * 6) + 1;
//     diceImg.classList.remove('hidden');
//     diceImg.src = `dice-${diceNumber}.png`;

//     if (diceNumber !== 1) {
//       currentScore += diceNumber;
//       document.getElementById(`current--${currentPlayer}`).textContent =
//         currentScore;
//       // player_0_CurrentScore.textContent = currentScore;
//     } else {
//       document.getElementById(`current--${currentPlayer}`).textContent = 0;
//       //checking current player  using if statement or tenary operator
//       // currentPlayer = currentPlayer === 0 ? 1 : 0;
//       if (currentPlayer === 0) {
//         currentPlayer = 1;
//       } else {
//         currentPlayer = 0;
//       }
//       // player_0_CurrentScore.textContent = 0;
//       // currentScore += diceNumber;
//       currentScore = 0;
//       player_0.classList.toggle('player--active');
//       player_1.classList.toggle('player--active');
//       document.getElementById(`current--${currentPlayer}`).textContent =
//         currentScore;
//     }
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     OverallScore[currentPlayer] += currentScore;
//     document.getElementById(`score--${currentPlayer}`).textContent =
//       OverallScore[currentPlayer];

//     if (OverallScore[currentPlayer] >= 15) {
//       playing = false;
//       diceImg.classList.add('hidden');
//       HTMLFormControlsCollection.log;
//       document.getElementById(
//         `score--${currentPlayer}`
//       ).textContent = `Winner🥇`;
//       document
//         .querySelector(`.player--${currentPlayer}`)
//         .classList.add('player--winner');
//       document.getElementById(`current--${currentPlayer}`).textContent = 0;
//     } else {
//       document.getElementById(`current--${currentPlayer}`).textContent = 0;
//       currentPlayer = currentPlayer === 0 ? 1 : 0;
//       currentScore = 0;
//       player_0.classList.toggle('player--active');
//       player_1.classList.toggle('player--active');
//       document.getElementById(`current--${currentPlayer}`).textContent =
//         currentScore;
//     }
//   }
// });