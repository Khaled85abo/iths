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
const mapFunction = SUITS.flatMap((suit) => {
  return VALUES.map((value) => {
    return { suit, value };
  });
});

console.log(mapFunction);

const cards = [];
for (let value of VALUES) {
  for (let suit of SUITS) {
    cards.push({ value, suit });
  }
}

let points = 0;
let attempts = 7;
let previousCard = { value: 0, suit: 0 };
let presentCard;
const mainDiv = document.querySelector("main > div");
const leftDiv = document.querySelector(".left");
const rightDiv = document.querySelector(".right");
const cardCoverDiv = document.querySelector(".imgCover");
const cardsLeft = document.querySelector("main > p > b > span");
const attemptsDiv = document.querySelector("header > p:nth-child(2)");
const pointsDiv = document.querySelector("header > p:nth-child(1) b");
const btns = document.querySelectorAll("footer button");

pointsDiv.innerText = points;

startGame();

const checkResponse = (e) => {
  disableBtns();
  const response = e.target.innerText;
  //   const attr = e.target.getAttribute("data-response");
  //  const attr = e.target.dataset.response
  console.log(previousCard);
  previousCard = presentCard;
  console.log(previousCard);
  const card = chooseRandomCard();
  console.log(presentCard);
  showRightCard(card);
  hideCardCover();
  const pres = Number(presentCard.value);
  const prev = Number(previousCard.value);
  changePlace();

  let result = false;

  //   result = response.includes("higher")
  //     ? pres > prev
  //     : response.includes("lower")
  //     ? pres < prev
  //     : pres === prev;
  //   result ? guessedRight() : guessedWrong();

  console.log("previoius number:", prev, "present number: ", pres);
  if (response.includes("higher") && pres > prev) {
    console.log("answered right");
    result = true;
  }
  if (response.includes("lower") && pres < prev) {
    console.log("answered right");
    result = true;
  }
  if (response.includes("same") && pres === prev) {
    console.log("answered right");
    result = true;
  }

  result ? guessedRight() : guessedWrong();
};

for (let btn of btns) {
  btn.addEventListener("click", checkResponse);
}

function guessedRight() {
  points++;
  updatePoints();
}
function guessedWrong() {
  attempts--;
  updateAttempts();
  if (attempts === 0) {
    disableBtns();
    var tryAgain = prompt(`you got ${points} points,Write again to play again`);
    tryAgain === "again" && location.reload();
  }
}

function updateCardsLeft() {
  cardsLeft.innerText = cards.length;
}

function updatePoints() {
  pointsDiv.innerText = points;
}

function updateAttempts() {
  let live = "";
  for (let i = 0; i < attempts; i++) {
    live += "<span>♥</span>";
  }
  attemptsDiv.innerHTML = live;
}

function chooseRandomCard() {
  const index = Math.floor(Math.random() * cards.length);
  const randomCard = cards[index];
  presentCard = evaluateChars(randomCard);
  const suit = randomCard.suit;
  const value = randomCard.value;
  // Updating my cards array by removing the choosen card
  cards.splice(index, 1);
  updateCardsLeft();
  return { suit, value };
}

function showLeftCard(obj) {
  const suit = obj.suit;
  const value = obj.value;
  const className = suit == "♦" || suit == "♥" ? "red" : "black";

  const leftCard = `
    <article class="card ${className}">
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

  `;
  leftDiv.innerHTML = leftCard;
}

function showRightCard(obj) {
  const suit = obj.suit;
  const value = obj.value;
  const className = suit == "♦" || suit == "♥" ? "red" : "black";

  const rightCard = ` 
    <article class="card ${className}">
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
`;
  rightDiv.innerHTML = rightCard;
}

function changePlace() {
  setTimeout(() => {
    leftDiv.innerHTML = rightDiv.innerHTML;
    // const element = leftDiv.getBoundingClientRect();
    // console.log(element.top, element.right, element.bottom, element.left);
    // rightDiv.style.position = "absolute";
    // rightDiv.style.left = element.left;
    // rightDiv.style.top = element.top;

    showCardCover();
    enableBtns();
  }, 2500);
}
function hideCardCover() {
  cardCoverDiv.classList.add("card-flip-hide");
}
function showCardCover() {
  cardCoverDiv.classList.remove("card-flip-hide");
}

function disableBtns() {
  for (let btn of btns) {
    btn.disabled = true;
  }
}
function enableBtns() {
  for (let btn of btns) {
    btn.disabled = false;
  }
}

function evaluateChars(obj) {
  const o = obj.value;
  const value =
    o == "A" ? 1 : o == "J" ? 11 : o == "Q" ? 12 : o == "K" ? 13 : o;
  return { value: value, suit: obj.suit };
}

function startGame() {
  const card = chooseRandomCard();
  showLeftCard(card);
  updateAttempts();
  showCardCover();
}
