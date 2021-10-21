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

const labelDiv = document.querySelector("label");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// input.insertAdjacentHTML(
//   "afterend",
//   `<select name="cars" id="options">
//    </select>`
// );
input.addEventListener("input", provideSuggestions);
input.addEventListener("keydown", changeBackground);

function provideSuggestions() {
  let colorsSuggestion = [];
  labelDiv.innerHTML = "Type a Color";
  labelDiv.style.color = "#3aabf1";

  const inputValue = input.value.toLowerCase();
  if (inputValue.length < 3) {
    for (let color of colors) {
      if (color[0] == inputValue[0]) {
        colorsSuggestion.push(color);
      }
    }
  } else {
    // Get matching colors with custimized function
    for (let color of colors) {
      if (contains(color, inputValue)) {
        colorsSuggestion.push(color);
      }
    }

    // Get matching colors with methods
    // colorsSuggestion = colors.filter(color => color.includes(input))
  }
  console.log(colorsSuggestion);

  const options = colorsSuggestion.map(
    (color) =>
      `<li>${color} <div  data-background="${color}" class="div" style="background:${color}"></div></li>`
  );
  console.log("options: ", options);
  ul.innerHTML = options.join("");
  // ul.style.visibility = "visible";
  // ul.style.opacity = "1";
  // ul.style.display = "block";
  const listItems = document.querySelectorAll("li");
  for (let item of listItems) {
    item.addEventListener("click", (e) => {
      document.body.style.background = e.target.innerText;
    });
  }
}

function changeBackground(e) {
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
    : manageError();

  labelDiv.style.color = "red";
}

const manageError = () => {
  labelDiv.innerHTML = "Color doesn't exist";
  setTimeout(() => {
    labelDiv.innerHTML = "Try again!";
  }, 1500);
};

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
