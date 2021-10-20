// function main() {
//   const btn = document.querySelector("button");
//   btn.insertAdjacentHTML("beforebegin", "<p>0</p>");
//   btn.addEventListener("click", handleClick);
// }
// main();

// function handleClick() {
//   let count = Number(document.querySelector("p").innerText);
//   count++;
//   document.querySelector("p").innerText = count;
// }

// function main() {
//   const input = document.querySelector("input");
//   input.insertAdjacentHTML("afterend", "<p>0</p>");
//   input.addEventListener("change", handleClick);
// }
// main();

// function handleClick(event) {
//   console.log(event);
//   document.querySelector("p").innerText;
// }

// Countdown timer
// Skapa en sekundräknare som tickar nedåt tills den nått noll och visar hur många sekunder det är kvar.
// När den har räknat klart, visa ett meddelande.
// let count = 10;
// function main() {
//   const btn = document.querySelector("button");
//   btn.insertAdjacentHTML("afterend", `<p>${count}</p>`);
//   btn.addEventListener("click", startCountDown);
// }
// main();

// function startCountDown() {
//   if (count > 0) {
//     count--;
//     document.querySelector("p").innerHTML = count;
//     setTimeout(startCountDown, 1000);
//   }

//   if (count === 0) {
//     alert("Count is zero");
//   }
// }

function main() {
  const input = document.querySelector("input");

  // input.insertAdjacentHTML(
  //   "afterend",
  //   `<select name="cars" id="options">
  //    </select>`
  // );
  input.addEventListener("input", provideSuggestions);
  input.addEventListener("keydown", changeBackground);
}
main();

function provideSuggestions() {
  let colorsSuggestion = [];
  document.querySelector("p").innerHTML = "";
  const input = document.querySelector("input").value;
  if (input.length < 3) {
    for (let color of colors) {
      if (color[0] == input[0]) {
        colorsSuggestion.push(color);
      }
    }
  } else {
    for (let color of colors) {
      if (contains(color, input)) {
        colorsSuggestion.push(color);
      }
    }
  }
  console.log(colorsSuggestion);
  const list = document.querySelector("ul");

  const options = colorsSuggestion.map((color) => `<li>${color}</li>`);
  console.log("options: ", options);
  list.innerHTML = options.join("");

  const listItems = document.querySelectorAll("li");
  for (let item of listItems) {
    item.addEventListener("click", (e) => {
      document.body.style.background = e.target.innerText;
    });
  }
}

function changeBackground(e) {
  const errorDiv = document.querySelector("p");
  if (e.code !== "Enter") {
    return;
  }
  let colorExist = false;
  for (let color of colors) {
    if (color == e.target.value) {
      colorExist = true;
    }
  }

  colorExist
    ? (document.body.style.background = e.target.value)
    : (errorDiv.innerHTML = "color doesn't exist");

  errorDiv.style.color = "red";
}

// function contains(color, input) {
//   for (let i = 0; i < color.length; i++) {
//     let sub = "";
//     for (let j = i; j < i + input.length; j++) {
//       sub += color[j];
//     }
//     if (sub === input) {
//       return true;
//     }
//   }

//   return false;
// }

function contains(color, input) {
  for (let i = 0; i < color.length; i++) {
    if (color[i] === input[0]) {
      if (checkAllChars(color, input, i)) return true;
    }
  }
  return false;
}

function checkAllChars(str1, str2, start) {
  for (let i = 0; i < str2.length; i++) {
    if (str1[i + start] !== str2[i]) {
      return false;
    }
  }

  return true;
}

// const input = document.querySelector("input");
// input.oninput = handleInput;

// // 1
// const p = document.createElement("p");
// const body = document.body;
// body.appendChild(p);

// function handleInput(e) {
//   console.log(e.target.value);
//   p.innerHTML = e.target.value;
// }
/*
function createPassword() {
  const numbers = "123456789";
  const capitalLetters = "ABCDEFGHIJKLMNOQRSTUVWXYZ";
  const smallLetters = "abcdefghijklmnopqrstuvwxyz";
  const specialChars = "!@#$%^&*()_+=-[]/'";
  const noNumbers =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+=-[]/'";

  const allChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789123456789!@#$%^&*()_+=-[]/'";
  let pwd = "";

  for (let i = 0; i < 8; i++) {
    if (i === 0) {
      const index = Math.floor(Math.random() * noNumbers.length);
      pwd += noNumbers[index];
    }
    const index = Math.floor(Math.random() * allChars.length);
    pwd += allChars[index];
  }
  if (!containsNumber(pwd)) {
    const numberIndex = Math.floor(Math.random() * numbers.length);
    pwd += numbers[numberIndex];
  }
  if (!containsCaptialLetter(pwd)) {
    const captialIndex = Math.floor(Math.random() * capitalLetters.length);
    pwd += capitalLetters[captialIndex];
  }
  if (!containsLowerLetter(pwd)) {
    const smalIndex = Math.floor(Math.random() * smallLetters.length);
    pwd += smallLetters[smalIndex];
  }
  if (!containsSpecialCharacter(pwd)) {
    const specialIndex = Math.floor(Math.random() * specialChars.length);
    pwd += specialChars[specialIndex];
  }

  console.log(pwd.length);
  console.log(pwd);
  return pwd;
}

// The following function create a forever loop sometimes
function create_password() {
  const allChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789123456789!@#$%^&*()_+=-[]/'";
  let pwd = "";
  for (let i = 0; i < 25; i++) {
    if (i === 1 && Number.isInteger(Number(pwd[0]))) {
      create_password();
    }

    const index = Math.floor(Math.random() * allChars.length);
    pwd += allChars[index];
  }
  if (!containsNumber(pwd)) {
    create_password();
  }
  if (!containsCaptialLetter(pwd)) {
    create_password();
  }
  if (!containsLowerLetter(pwd)) {
    create_password();
  }
  if (!containsSpecialCharacter(pwd)) {
    create_password();
  }
  console.log(pwd);
  return pwd;
}

const pss = createPassword();

function containsNumber(pwd) {
  for (let letter of pwd) {
    if (Number.isInteger(Number(letter))) {
      return true;
    }
  }
  return false;
}

function containsCaptialLetter(pwd) {
  for (let letter of pwd) {
    if (letter == letter.toUpperCase() && letter != letter.toLowerCase()) {
      return true;
    }
  }
  return false;
}

function containsLowerLetter(pwd) {
  for (let letter of pwd) {
    if (letter == letter.toLowerCase() && letter != letter.toUpperCase()) {
      return true;
    }
  }

  return false;
}

function containsSpecialCharacter(pwd) {
  const chrs = "!@#$%^&*()_+=-[]/'";
  for (let letter of pwd) {
    for (let chr of chrs) {
      if (letter == chr) {
        return true;
      }
    }
  }

  return false;
}

*/
