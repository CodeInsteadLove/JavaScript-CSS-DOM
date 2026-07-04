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
// canvas.style.background = "#fff";

const canvasCenterX = canvas.width / 2;
const canvasCenterY = canvas.height / 2;

const circleConfigs = [];
function createConfig() {
  for (let index = 0; index < 200; index++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const r = 4;
    const spedX = Math.random() / 22;
    const spedY = Math.random() / 22;
    const c = `rgba(255,155,155,${index + 1 - Math.floor(Math.random() / 100)})`;
    circleConfigs.push({
      x,
      y,
      r,
      angle: Math.random() * 10,
      c,
      spedX,
      spedY,
      velocity: Math.random() / 100,
    });
  }
}
createConfig();
function createCircle(x, y, r, c) {
  ctx.beginPath();
  ctx.fillStyle = c;
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}

function createWeb() {
  for (let index = 0; index < circleConfigs.length; index++) {
    for (let j = 1; j < circleConfigs.length - 1; j++) {
      const xI =
        150 * Math.cos(circleConfigs[index].angle) + circleConfigs[index].x;
      const yI =
        150 * Math.sin(circleConfigs[index].angle) + circleConfigs[index].y;
      const xJ = 150 * Math.cos(circleConfigs[j].angle) + circleConfigs[j].x;
      const yJ = 150 * Math.sin(circleConfigs[j].angle) + circleConfigs[j].y;

      const dx = xI - xJ;
      const dy = yI - yJ;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 110) {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = circleConfigs[index].c;
        ctx.moveTo(xI, yI);
        ctx.lineTo(xJ, yJ);
        ctx.stroke();
        ctx.closePath();
      }
    }
  }
}

function anim() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  circleConfigs.forEach((obj, index) => {
    obj.angle += obj.velocity;
    const posX = 150 * Math.cos(obj.angle) + obj.x;
    const posY = 150 * Math.sin(obj.angle) + obj.y;
    createCircle(posX, posY, obj.r, obj.c);
  });
  createWeb();
  requestAnimationFrame(anim);
}

anim();
