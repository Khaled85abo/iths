let attempts = 5;
let dummyAI = false;
let realAI = false;
let stopCode;
let randomNumebr = Math.floor(Math.random() * 10);
const input = checkSelector("input");
const btn = checkSelector("button:nth-of-type(1)");
// const btn = document.querySelector("button:nth-of-type(1)");
// const btns = checkSelector("button", true);
// console.log(btns);
// const dummyAIBtn = document.querySelector("div > button:first-child");
const dummyAIBtn = checkSelector("div > button:first-child");
const smartAI = document.querySelector("div > button:last-child");
// const p = document.querySelector(".attempts");
const p = checkSelector(".attempts");
const previous = checkSelector(".gusses");
// const span = document.querySelector("span:nth-of-type(2)");
const span = checkSelector("span:nth-of-type(2)");

btn.addEventListener("click", clickStartAgain);
console.log(randomNumebr);
previous.innerHTML = "You have alredy gussed";
p.innerHTML = `You have ${attempts} attempt left`;
input.value = "";

input.addEventListener("keyup", (e) => {
  if (e.key !== "Enter") {
    return;
  }
  eventFunction();
});

function eventFunction() {
  attempts--;
  p.innerHTML = `You have ${attempts} attempt left`;
  previous.innerHTML += " " + input.value;
  if (attempts <= 0) {
    return gameOver();
  }
  makeGuess(input.value);
}

function gameOver() {
  btn.style.display = "initial";
  span.innerHTML = "Can't try anymore";
  console.log("inside game over");
  console.log(btn.innerHTML);
  input.value = "";
  input.disabled = true;
  dummyAI && clearInterval(stopCode);

  return;
}

function clickStartAgain() {
  randomNumebr = Math.floor(Math.random() * 10);
  console.log(randomNumebr);
  attempts = 5;
  p.innerHTML = `You have ${attempts} attempt left`;
  btn.style.display = "none";
  span.innerHTML = "";
  input.value = "";
  input.disabled = false;

  previous.innerHTML = "You have alredy gussed";
}

function makeGuess(value) {
  btn.style.display = "none";

  if (value > randomNumebr) {
    span.innerHTML = "too high";
    if (!dummyAI) {
      input.value = "";
    }
  }
  if (value < randomNumebr) {
    span.innerHTML = "too low";
    if (!dummyAI) {
      input.value = "";
    }
  }
  if (value == randomNumebr) {
    input.disabled = true;
    span.innerHTML = "Correct";
    btn.style.display = "initial";
    dummyAI && clearInterval(stopCode);
  }
}

dummyAIBtn.addEventListener("click", () => {
  dummyAI = true;
  stopCode = setInterval(() => {
    const aiRandom = Math.floor(Math.random() * 10);
    input.value = aiRandom;
    eventFunction();
  }, 1000);
});

smartAI.addEventListener("click", () => {
  console.log("inside smart ai");
});

function checkSelector(selector, arr = false) {
  let element = arr
    ? [...document.querySelectorAll(selector)]
    : document.querySelector(selector);
  if ((arr && element.length > 1) || (!arr && element)) return element;

  throw new Error(`selector ${selector} doesn't match any existing element!`);
}
