let attempts = 5;
let randomNumebr = Math.floor(Math.random() * 100);
const input = document.querySelector("input");
const btn = document.querySelector("button");
const p = document.querySelector(".attempts");
const previous = document.querySelector(".gusses");
const span = document.querySelector("span:nth-of-type(2)");

console.log(randomNumebr);
previous.innerHTML = "You have alredy gussed";
p.innerHTML = `You have ${attempts} attempt left`;
input.value = "";

input.addEventListener("keyup", (e) => {
  if (e.key !== "Enter") {
    return;
  }
  attempts--;
  p.innerHTML = `You have ${attempts} attempt left`;
  previous.innerHTML += " " + input.value;
  if (attempts <= 0) {
    btn.style.display = "none";
    span.innerHTML = "Can't try anymore";
    input.value = "";
    input.disabled = true;
    return;
  }
  makeGuess(input.value);
});
btn.addEventListener("click", clickStartAgain);

function clickStartAgain() {
  randomNumebr = Math.floor(Math.random() * 100);
  console.log(randomNumebr);
  attempts = 5;
  p.innerHTML = `You have ${attempts} attempt left`;
  btn.style.display = "none";
  span.innerHTML = "";
  input.value = "";
  previous.innerHTML = "You have alredy gussed";
}

function makeGuess(value) {
  btn.style.display = "none";
  input.value = "";

  if (value > randomNumebr) {
    span.innerHTML = "too high";
  }
  if (value < randomNumebr) {
    span.innerHTML = "too low";
  }
  if (value == randomNumebr) {
    span.innerHTML = "Correct";
    btn.style.display = "initial";
  }
}
