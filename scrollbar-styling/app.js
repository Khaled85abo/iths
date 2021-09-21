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

// fixing a nice navbar

const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");
const gardients = [
  "linear-gradient(to right top, #f46b45, #eea849)",
  "linear-gradient(to right top, #005c97, #363795)",
  "linear-gradient(to right top, #e539335, #e35d5b)",
];

const options = {
  threshold: 0.7,
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  const bubble = document.querySelector(".bubble");

  entries.forEach((entry) => {
    const className = entry.target.className;
    const gradientIndex = entry.target.getAttribute("data-index");
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    console.log(activeAnchor);
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left,
    };
    console.log(directions);

    if (entry.isIntersecting) {
      bubble.style.setProperty("left", `${directions.left}px`);
      bubble.style.setProperty("top", `${directions.top}px`);
      bubble.style.setProperty("height", `${directions.height}px`);
      bubble.style.setProperty("width", `${directions.width}px`);
      bubble.style.background = gardients[gradientIndex];
    }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});
