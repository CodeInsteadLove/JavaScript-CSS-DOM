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

const imgRow = 10;
const imgColumns = 7;

const scale = 0.3;
let imgPosX = 0;
let imgPosY = 0;

const imgWidth = 573;
const imgHeight = 523;

const img = new Image();
img.src = "./assets/sprite/shadow-dog.png";

// ===select
const select = document.querySelector("select");
select.addEventListener("change", (e) => {
  const value = e.target.value;
  if (value === "stay") {
    selectedAnimation(1);
  } else if (value === "jump") {
    selectedAnimation(2);
  } else if (value === "run") {
    selectedAnimation(3);
  } else if (value === "play") {
    selectedAnimation(4);
  } else {
    selectedAnimation(1);
  }
});

let interval = null;
function selectedAnimation(row) {
  interval = setInterval(() => {
    imgPosX += 1;
    imgPosY = row;
    if (imgPosX > imgColumns) {
      imgPosX = 0;
      imgPosY = 0;
      clearInterval(interval);
    }

    draw();
  }, 100);
}

function draw() {
  const spriteWidth = imgWidth * scale;
  const spriteHeight = imgHeight * scale;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const posInParentElX = canvas.width / 2 - spriteWidth / 2;
  const posInParentElY = canvas.height / 2 - spriteHeight / 2;

  ctx.drawImage(
    img,
    imgPosX * imgWidth,
    imgPosY * imgHeight,
    imgWidth,
    imgHeight,
    posInParentElX,
    posInParentElY,
    spriteWidth,
    spriteHeight,
  );
}
img.onload = () => {
  draw();
};

function animate() {
  imgPosX += 1;
  if (imgPosX >= imgColumns) {
    imgPosX = 0;
    imgPosY += 1;
  }

  if (imgPosY >= imgRow) {
    imgPosY = 0;
  }

  draw();
}
// setInterval(() => {
//   animate();
// }, 50);
