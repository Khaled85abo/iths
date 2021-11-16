/**
 *
 * Model Logic
 *
 */
//#region
const state = {};
start();
//
// Initialize State
//
// score - Number
// tries - Number
// deck - Array of Cards
// currentCard - Card, The top card
// nextCard - Card, The card beneath the top card
//
//    Card Model
//    {
//      value: Number between 1 and 13
//      suite: String hearts, spades, diamonds or clubs
//    }
//
function initState() {
  state.score = 0;
  state.tries = 3;
  state.deck = generateDeck();
  state.currentCard = drawCard();
  state.nextCard = drawCard();
}

// generateDeck - Generates a 52 card deck using the Card Model
function generateDeck() {
  const suites = ["hearts", "spades", "diamonds", "clubs"];
  const deck = [];
  for (let suite of suites) {
    for (let value = 1; value <= 13; value++) {
      const card = { value, suite };
      deck.push(card);
    }
  }
  return deck;
}

// Deletes and returns one random card from the deck
function drawCard() {
  const randomIndex = Math.floor(Math.random() * state.deck.length);
  const card = state.deck[randomIndex];
  state.deck.splice(randomIndex, 1);
  return card;
}

// Resets the game
function reset() {
  initState();
  renderScore();
  renderCurrentCard();
}
//#endregion

/**
 *
 * Controller Logic
 *
 */
//#region
// initActions - setup all click listeners
function initActions() {
  const actionsContainer = document.querySelector(".actions");
  const higherBtn = actionsContainer.querySelector(".higher");
  const equalBtn = actionsContainer.querySelector(".equal");
  const lowerBtn = actionsContainer.querySelector(".lower");

  higherBtn.addEventListener("click", guessHigher);
  equalBtn.addEventListener("click", guessEquals);
  lowerBtn.addEventListener("click", guessLower);

  // Or with the closure solution for guessing
  // higherBtn.addEventListener("click", () => guess('higher'))
  // equalBtn.addEventListener("click", () => guess('equals'))
  // lowerBtn.addEventListener("click", () => guess('lower'))
}

//
// Guess Actions
//
function guessHigher() {
  if (state.nextCard.value > state.currentCard.value) {
    state.score++;
  } else {
    state.tries--;
  }
  checkTries();
}
function guessEquals() {
  if (state.nextCard.value == state.currentCard.value) {
    state.score++;
  } else {
    state.tries--;
  }
  checkTries();
}
function guessLower() {
  if (state.nextCard.value < state.currentCard.value) {
    state.score++;
  } else {
    state.tries--;
  }
  checkTries();
}

// Runs after each guess to update interface
function checkTries() {
  if (state.tries <= 0) {
    reset();
  } else {
    state.currentCard = state.nextCard;
    state.nextCard = drawCard();
    renderScore();
    renderCurrentCard();
  }
}

// Guess closure-solution
// function guess(mode){
//   let comparison;
//   switch(mode){
//     case 'higher': comparison = (a,b) => a.value > b.value; break;
//     case 'equals': comparison = (a,b) => a.value == b.value; break;
//     case 'lower': comparison = (a,b) => a.value < b.value; break;
//   }
//   if(comparison(state.nextCard, state.currentCard)){
//     state.score++;
//   }else{
//     state.tries--;
//   }
//   checkTries()
// }
//#endregion

/**
 *
 * View Logic
 *
 */

//#region
//
function renderScore() {
  const scoreBoardContainer = document.querySelector(".score-board");
  const scoreText = scoreBoardContainer.querySelector(".score");
  const triesText = scoreBoardContainer.querySelector(".tries");
  scoreText.innerHTML = "Score: <strong>" + state.score + "</strong>";
  triesText.innerHTML = "Tries left: <strong>" + state.tries + "</strong>";
}

function getCardSymbol(suite) {
  switch (suite) {
    case "hearts":
      return "&hearts;";
    case "spades":
      return "&spades;";
    case "clubs":
      return "&clubs;";
    case "diamonds":
      return "&diams;";
  }
}

// Creates a HTML template for the card
function getCardTemplate(card) {
  return `
    <article class="card ${card.suite}">
      <div class="top">
        <p class="value">${card.value}</p>
        <p class="suite">${getCardSymbol(card.suite)}</p>
      </div>
      <div class="middle">
        <p class="suite">${getCardSymbol(card.suite)}</p>
      </div>
      <div class="bottom">
        <p class="value">${card.value}</p>
        <p class="suite">${getCardSymbol(card.suite)}</p>
      </div>
    </article>
  `;
}

// Renders the current card in the DOM
function renderCurrentCard() {
  const deckContainer = document.querySelector(".deck");
  deckContainer.innerHTML = getCardTemplate(state.currentCard);
  deckContainer.innerHTML += `<p class="remaining">${state.deck.length} cards left</p>`;
}
//#endregion

/**
 *
 * Entry Point
 *
 */
function start() {
  initState();
  initActions();
  renderScore();
  renderCurrentCard();
}
