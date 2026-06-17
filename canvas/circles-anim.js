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

function createCircle(x, y, r, color, type) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  if (type === "stroke") {
    ctx.strokeStyle = color;
    ctx.stroke();
  } else {
    ctx.fillStyle = color;
    ctx.fill();
  }
}

const circles = [];
let prevCoordinate = {
  x: 0,
  y: 0,
};

let counter = 20;

for (let index = 0; index < counter; index++) {
  circles.push({
    r: Math.random() * 22,
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speedX: Math.random(),
    speedY: Math.random(),
  });
}
function createLines(x, y, prevX, prevY) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(prevX, prevY);
  ctx.stroke();
}
function update() {
  for (let index = 0; index < circles.length; index++) {
    const circle = circles[index];

    circle.x += circle.speedX;
    circle.y += circle.speedY;
    if (circle.x < circle.r || circle.x > canvas.width - circle.r) {
      circle.speedX *= -1;
    }
    if ((circle.y < circle.r) | (circle.y > canvas.height - circle.r)) {
      circle.speedY *= -1;
    }
  }
}
function handleCircles() {
  for (let index = 0; index < circles.length; index++) {
    const circle = circles[index];
    if (index % 2 === 0) {
      createCircle(circle.x, circle.y, circle.r, "#2222", "fill");
    } else {
      createCircle(circle.x, circle.y, circle.r, "#111", "stroke");
    }
  }
}

function anim() {
  update();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleCircles();
  requestAnimationFrame(anim);
}
document.addEventListener("click", (e) => {
  for (let index = 0; index < 10; index++) {
    circles.push({
      r: Math.random() * 22,
      x: e.offsetX,
      y: e.offsetY,
      speedX: Math.random(),
      speedY: Math.random(),
    });
  }
});
anim();
