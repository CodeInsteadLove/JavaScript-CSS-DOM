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
canvas.style.background = "#111";

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const planetRadius = 60;
let angle = 0;
const scale = 0.6;
const lands = [
  { x: -20, y: 10 },
  { x: -30, y: 10 },
  { x: 20, y: -30 },
];
const eurasia = [
  [-45, -18],
  [-35, -30],
  [-15, -35],
  [10, -32],
  [32, -22],
  [45, -5],
  [38, 10],
  [22, 20],
  [0, 18],
  [-18, 22],
  [-35, 12],
  [-48, 2],
];

const africa = [
  [-18, 25],
  [0, 18],
  [18, 10],
  [20, 25],
  [14, 42],
  [2, 50],
  [-12, 42],
  [-25, 25],
];
function createStars() {
  for (let index = 0; index < 60; index++) {
    const posX = Math.random() * canvas.width;
    const posY = Math.random() * canvas.height;
    ctx.beginPath();
    ctx.arc(posX, posY, 2, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
  }
}
function drawContinent(points, offsetX = 0, offsetY = 0) {
  ctx.beginPath();

  ctx.moveTo(points[0][0] + offsetX, points[0][1] + offsetY);

  for (let i = 1; i < points.length; i++) {
    const x = points[i][0] + offsetX;
    const y = points[i][1] + offsetY;

    const controlX = (points[i][0] + points[i - 1][0]) / 2 + offsetX;

    const controlY = (points[i][1] + points[i - 1][1]) / 2 + offsetY;

    ctx.quadraticCurveTo(controlX, controlY, x, y);
  }

  ctx.closePath();

  ctx.fillStyle = "green";
  ctx.fill();
}
function createPlanet() {
  ctx.save();

  ctx.translate(centerX, centerY);
  // oceans
  ctx.beginPath();
  ctx.arc(0, 0, planetRadius, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.clip();

  drawContinent(africa, 5, 0);
  drawContinent(eurasia, 5, -15);

  ctx.restore();
  // circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, planetRadius, 0, Math.PI * 2);
  ctx.strokeStyle = "#fff";
  ctx.stroke();
}

function createSun() {
  const sunPosX = canvas.width - 100;
  const sunPosY = -100;
  const sunRadius = 200;
  ctx.beginPath();
  ctx.arc(sunPosX, sunPosY, sunRadius, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();
}

function anim() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  createStars();
  createPlanet();
  createSun();
}
anim();
