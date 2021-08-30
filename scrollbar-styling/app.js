const DARK = "dark";
const LIGHT = "light";
const bodyBackgroundColor = "--body-background-color";
const bodyTextColor = "--body-text-color";
const lightGray = "#ccc";
const darkGray = "#333";
const headerColor = "--header-color";
var theme = LIGHT;
var inputColor = "#555";

const pickedColor = document.querySelector("input[type=color]");
pickedColor.addEventListener("change", (e) => {
  inputColor = e.target.value;
});

document.querySelector(".input-btn").addEventListener("click", () => {
  document.documentElement.style.setProperty(headerColor, inputColor);
});

document.getElementById("btn").addEventListener("click", () => {
  switch (theme) {
    case LIGHT:
      setThemeColor(lightGray, darkGray);
      theme = DARK;
      break;
    case DARK:
      setThemeColor(darkGray, lightGray);
      theme = LIGHT;
      break;
    default:
      theme = LIGHT;
  }
});

function setThemeColor(backgroundColor, textColor) {
  document.documentElement.style.setProperty(
    bodyBackgroundColor,
    backgroundColor
  );
  document.documentElement.style.setProperty(bodyTextColor, textColor);
}
