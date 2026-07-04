const app = document.getElementById("app");

/** @type {HTMLCanvasElement | null} */
const canvas = document.getElementById("canvas");
canvas.style.borderRadius = "0.3rem";

if (!canvas) {
  throw new Error("Canvas not found");
}

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

if (!ctx) {
  throw new Error("2D context not supported");
}
canvas.style.background = "#f5f5f5";

const canvasCenterX = canvas.width / 2;
const canvasCenterY = canvas.height / 2;

const arr = [];

let isStart = false;

const img = new Image();
img.src = "./assets/love-1.png";
img.onload = () => {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

function createLands() {
  const storageKey = "map";
  const draws = JSON.parse(localStorage.getItem(storageKey));

  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draws.forEach((obj, index) => {
      const { x, y, r, c } = obj;
      setTimeout(() => draw(x, y, r, c), 20 * index);
    });
  }, 1000);
}
document.addEventListener("mouseup", () => {
  const storageKey = "map";
  isStart = false;

  localStorage.setItem(storageKey, JSON.stringify(arr));
});
createLands();
document.addEventListener("mousedown", () => {
  isStart = true;
});
document.addEventListener("mousemove", (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  const r = 2;
  const c = "#222";
  if (isStart) {
    draw(x, y, r, c);
    draw(x + 2, y + 2, r, c);
    draw(x - 2, y - 2, r, c);

    arr.push({ x, y, r, c });
  }
});
function draw(x, y, r, c) {
  ctx.beginPath();
  ctx.fillStyle = c;
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}
