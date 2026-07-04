/** @type {HTMLCanvasElement | null} */
const canvas = document.getElementById("canvas");

if (!canvas) {
  throw new Error("Canvas not found");
}

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

if (!ctx) {
  throw new Error("2D context not supported");
}
canvas.style.background = "#fff";

const canvasCenterX = canvas.width / 2;
const canvasCenterY = canvas.height / 2;

let arr = [];

let isStart = false;

const img = new Image();
img.src = "./assets/girl-with-flowers.png";
img.onload = () => {
  ctx.drawImage(img, canvasCenterX - 200, canvasCenterY - 200, 400, 400);
};

function createSwordPct() {
  const storageKey = "map";
  const draws = JSON.parse(localStorage.getItem(storageKey));

  if (draws) {
    setTimeout(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      draws.forEach((obj, index) => {
        const { x, y, r, currentColor } = obj;
        width = obj.width;
        setTimeout(() => draw(x, y, r, currentColor), 2 * index);
      });
    }, 1000);
  }
}

createSwordPct();

let counter = 0;
let currentColor = "#ef4444";
let width = 4;
document.addEventListener("click", (e) => {
  const isBtn = e.target.classList.contains("color");
  if (isBtn) {
    document.querySelector(".color.active")?.classList.remove("active");

    e.target.classList.add("active");

    currentColor = e.target.dataset.color;
  } else {
    if (e.target.classList.contains("return-btn")) {
      arr.splice(-50);
      redraw();
    }
    const widthTitle = document.querySelector(".width-title");
    if (e.target.classList.contains("btn-width-increase")) {
      width += 1;
    }
    if (e.target.classList.contains("btn-width-decrease")) {
      width -= 1;
    }
    widthTitle.textContent = width;
  }
});
function redraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(img, canvasCenterX - 200, canvasCenterY - 200, 400, 400);
  arr.forEach((point, index) => {
    const { x, y, r, c } = point;
    draw(x, y, r, c);
  });
  const storageKey = "map";
  localStorage.setItem(storageKey, JSON.stringify(arr));
}
document.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    const storageKey = "map";
    isStart = !isStart;
    localStorage.setItem(storageKey, JSON.stringify(arr));
  }
});

document.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const r = width;
  const c = currentColor;
  if (isStart) {
    draw(x, y, r, c);
    counter += 1;
    arr.push({ x, y, r, c, width, currentColor });
  }
});
function draw(x, y, r, c) {
  ctx.beginPath();
  ctx.fillStyle = c;
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}
