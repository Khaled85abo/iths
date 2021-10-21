const SUITS = ["♠", "♣", "♥", "♦"];
const VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const cards = [];
let points = 0;
let attempts = 10;
let previousCard = { value: 0, suit: 0 };
let presentCard;
const main = document.querySelector("main");
const mainDiv = document.querySelector("main > div");
const lower = document.querySelector("footer  button:nth-of-type(1)");
const similar = document.querySelector("footer  button:nth-of-type(2)");
const higher = document.querySelector("footer  button:nth-of-type(3)");
const cardsLeft = document.querySelector("main > p > b");
const attemptsDiv = document.querySelector("header > p:nth-child(2) b");
const pointsDiv = document.querySelector("header > p:nth-child(1) b");
attemptsDiv.innerText = attempts;
pointsDiv.innerText = points;

lower.addEventListener("click", (e) => guessLower());
similar.addEventListener("click", (e) => guessSimilar());
higher.addEventListener("click", (e) => guessHigher());

for (let value of VALUES) {
  for (let suit of SUITS) {
    cards.push({ value, suit });
  }
}

console.log(cards);
takeRandomCard();

function evaluateChars(obj) {
  let value = obj.value;

  if (obj.value == "A") {
    value = 1;
  }
  if (obj.value == "J") {
    value = 11;
  }
  if (obj.value == "Q") {
    value = 12;
  }
  if (obj.value == "K") {
    value = 13;
  }
  return { value: value, suit: obj.suit };
}

function guessHigher() {
  // first we update previousCard to presentCard
  // then we choose another card
  // then we validate if the user has gussed right or wrong.
  let ValueOfA;
  previousCard = presentCard;
  console.log("previous card: ", previousCard);

  takeRandomCard();
  console.log("present card: ", presentCard);

  const presentValueNumebr = Number(presentCard.value);
  const previousValueNumber = Number(previousCard.value);
  const result = presentValueNumebr > previousValueNumber;
  result;
  //Validering
  // if(Number(presentCard.value) > Number(previousCard.value) )
  if (result) {
    console.log("higher gussed right");
    guessedRight();
  } else {
    console.log("higher gussed wrong");

    guessedWrong();
  }
}
function guessLower() {
  previousCard = presentCard;
  console.log("previous card: ", previousCard);

  takeRandomCard();
  console.log("present card: ", presentCard);

  //Validering
  const presentValueNumebr = Number(presentCard.value);
  const previousValueNumber = Number(previousCard.value);
  const result = presentValueNumebr < previousValueNumber;
  result;
  // if(Number(presentCard.value) < Number(previousCard.value) )
  if (result) {
    console.log("lower gussed right");

    guessedRight();
  } else {
    console.log("lower gussed wrong");

    guessedWrong();
  }
}
function guessSimilar() {
  previousCard = presentCard;
  console.log("previous card: ", previousCard);

  takeRandomCard();
  console.log("present card: ", presentCard);

  //Validering
  const presentValueNumebr = Number(presentCard.value);
  const previousValueNumber = Number(previousCard.value);
  const result = presentValueNumebr == previousValueNumber;
  result;
  // if(Number(presentCard.value) == Number(previousCard.value) )
  if (result) {
    console.log("similar gussed right");

    guessedRight();
  } else {
    console.log("similar gussed wrong");
    guessedWrong();
  }
}

function guessedRight() {
  points++;
  pointsDiv.innerText = points;
}
function guessedWrong() {
  attempts--;
  attemptsDiv.innerText = attempts;
  if (attempts === 0) {
    lower.disabled = true;
    higher.disabled = true;
    similar.disabled = true;
    var tryAgain = prompt(`you got ${points} points,Write again to play again`);
    if (tryAgain == "again") {
      location.reload();
    }
  }
}

function takeRandomCard() {
  const index = Math.floor(Math.random() * cards.length);
  const randomCard = cards[index];
  presentCard = evaluateChars(randomCard);

  // Updating my cards array by removing the choosen card
  cards.splice(index, 1);
  cardsLeft.innerText = cards.length;
  createArticle(randomCard);
}
function createArticle(obj) {
  let className = "black";
  if (obj.suit == "♦" || obj.suit == "♥") {
    className = "red";
  }
  const newArticle = `
      <article class="card ${className}">
        <div >
          <p >${obj.suit}</p>
          <p>${obj.value}</p>
        </div>
        <div >
          <p>${obj.suit}</p>
        </div>
        <div >
          <p>${obj.suit}</p>
          <p>${obj.value}</p>
        </div>
      </article>
      
`;

  // delete card from cards array
  //   mainDiv.innerHTML = newArticle;
  mainDiv.innerHTML = newArticle;
}
