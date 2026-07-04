const app = document.getElementById("app");

const textContainer = document.createElement("div");
textContainer.classList.add("text-container");
textContainer.style.position = "relative";
textContainer.style.width = "100px";
textContainer.style.height = "100px";
const text = "Beautiful";

const i = document.createElement("i");
i.classList.add("fa-solid");
i.classList.add("fa-heart");
app.appendChild(i);
app.appendChild(textContainer);

// ============

// states
let letters = "";
const colorsObj = {};
let sizeStep = 0.15;
let iconSize = 0.3;

// -----------------------create random color
const getRandomColor = () => {
  return `rgba(${255 * Math.random()},${255 * Math.random()},${255 * Math.random()})`;
};

// make typing effect==========================
const animation = () => {
  for (let index = 0; index < text.length; index++) {
    setTimeout(() => {
      iconSize += sizeStep;
      const color = getRandomColor();
      const span = document.createElement("span");
      i.style.fontSize = iconSize + "rem";
      span.id = index;
      span.style.color = color;
      span.style.padding = "0.1rem";
      span.textContent = text.split("")[index];
      textContainer.appendChild(span);
    }, 300 * index);
  }
};
animation();

// change color and size by click and toggle
document.addEventListener("click", (e) => {
  const el = e.target.closest("span");
  if (el instanceof HTMLElement) {
    if (el.style.color === "red") {
      el.style.fontSize = "1.2rem";
      //   i.style.color = colorsObj[el.id].color;
      document.querySelector("body").style.background = colorsObj[el.id].color;
      el.style.color = colorsObj[el.id].color;
    } else {
      colorsObj[el.id] = {
        color: el.style.color,
      };
      el.style.fontSize = "2rem";
      el.style.color = "red";
    }
  }
});
