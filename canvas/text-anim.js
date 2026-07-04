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
canvas.style.background = "#43";
const canvasCenterX = canvas.width / 2;
const canvasCenterY = canvas.height / 2;

const particles = [];
const targets = [];
ctx.font = "88px serif";
ctx.fillStyle = "tomato";
ctx.textAlign = "center";
ctx.fillText("CODE", canvasCenterX, canvasCenterY);
const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
for (let y = 0; y < imageData.height; y += 4) {
  for (let x = 0; x < imageData.width; x += 4) {
    const index = (y * imageData.width + x) * 4;

    const alpha = imageData.data[index + 3];
    if (alpha > 0) {
      targets.push({ x, y });
    }
  }
}
function createParticles() {
  console.log(targets);

  targets.forEach((target) => {
    const r = 3;
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const c = "#923";
    const velocity = 0.05;
    const angle = Math.random() * 50;
    const range = 60;
    const speedX = Math.random();
    const speedY = Math.random();
    particles.push({
      r,
      range,
      velocity,
      angle,
      x,
      targetX: target.x,
      targetY: target.y,
      speedX,
      speedY,
      y,
      c,
    });
  });
}
createParticles();
function draw(x, y, c, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.strokeStyle = c;
  ctx.fillStyle = c;
  ctx.fill();
}

for (let index = 0; index < targets.length; index++) {
  function anim() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // ======================
    particles.forEach((p, i) => {
      const dx = p.targetX - p.x;
      const dy = p.targetY - p.y;
      p.x += dx * 0.05;
      p.y += dy * 0.05;
      if (p.x > canvas.width || p.x < 0) {
        p.speedX *= -1;
      }
      if (p.y > canvas.height || p.y < 0) {
        p.speedY *= -1;
      }

      draw(p.x, p.y, p.c, p.r);
    });
  }
  setTimeout(() => {
    anim();
  }, 50 * index);
}
