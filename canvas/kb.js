const app = document.getElementById("app");

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

const kbImg = new Image();
kbImg.src = "./assets/sprite/kb-arrows.png";

let arrTop = { x: canvas.width - 100 + 20 / 2, y: -10 };
let arrBtn = { x: canvas.width - 100 + 20 / 2, y: 20 };
let arrR = { x: canvas.width - 100 + 40, y: 20 };
let arrL = { x: canvas.width - 100 - 20, y: 20 };

function focusKb(x, y) {
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.rect(x + 8, y + 54, 25, 25);
  ctx.stroke();
}

function createKbImg() {
  const width = 100;
  const height = 100;
  const margin = 20;

  const posX = canvas.width - width - margin;
  const posY = margin;
  ctx.drawImage(kbImg, posX, posY, width, height);
}
kbImg.onload = () => {
  createKbImg();
};
document.addEventListener("keydown", (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
  createKbImg();
  switch (e.key) {
    case "ArrowUp":
      focusKb(arrTop.x, arrTop.y);
      break;

    case "ArrowDown":
      focusKb(arrBtn.x, arrBtn.y);
      break;

    case "ArrowLeft":
      focusKb(arrL.x, arrL.y);
      break;

    case "ArrowRight":
      focusKb(arrR.x, arrR.y);
      break;
  }
});
