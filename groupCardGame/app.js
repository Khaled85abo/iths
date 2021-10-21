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
for (let value of VALUES) {
  for (let suit of SUITS) {
    cards.push({ value, suit });
  }
}

let points = 0;
let attempts = 10;
let previousCard = { value: 0, suit: 0 };
let presentCard;
const main = document.querySelector("main");
const attemptsDiv = document.querySelector("header > p:nth-child(2) b");
const pointsDiv = document.querySelector("header > p:nth-child(1) b");
const btns = document.querySelectorAll("footer button");

attemptsDiv.innerText = attempts;
pointsDiv.innerText = points;

console.log(cards);
chooseAndDeployCard();

const checkResponse = (e) => {
  let result;
  const response = e.target.innerText;

  previousCard = presentCard;
  chooseAndDeployCard();
  const prev = Number(presentCard.value);
  const pres = Number(previousCard.value);

  result = response.includes("högre")
    ? prev > pres
    : response.includes("lägre")
    ? prev < pres
    : prev == pres;
  result ? guessedRight() : guessedWrong();
};

for (let btn of btns) {
  btn.addEventListener("click", checkResponse);
}

function guessedRight() {
  points++;
  pointsDiv.innerText = points;
}
function guessedWrong() {
  attempts--;
  attemptsDiv.innerText = attempts;
  if (attempts === 0) {
    for (let btn of btns) {
      btn.disabled = true;
    }
    var tryAgain = prompt(`you got ${points} points,Write again to play again`);
    if (tryAgain == "again") {
      location.reload();
    }
  }
}

function chooseAndDeployCard() {
  const index = Math.floor(Math.random() * cards.length);
  const randomCard = cards[index];
  presentCard = evaluateChars(randomCard);
  const suit = randomCard.suit;
  const value = randomCard.value;

  // Updating my cards array by removing the choosen card
  cards.splice(index, 1);

  let className = "black";
  if (suit == "♦" || suit == "♥") {
    className = "red";
  }
  const newArticle = `   <article class="card ${className}">
        <div >
          <p >${suit}</p>
          <p>${value}</p>
        </div>
        <div >
          <p>${suit}</p>
        </div>
        <div >
          <p>${suit}</p>
          <p>${value}</p>
        </div>
      </article>
      <p><b>${cards.length}</b> Cards Left</p>`;
  main.innerHTML = newArticle;
}

function evaluateChars(obj) {
  let o = obj.value;
  let value = o == "A" ? 1 : o == "J" ? 11 : o == "Q" ? 12 : o == "K" ? 13 : o;
  return { value: value, suit: obj.suit };
}
