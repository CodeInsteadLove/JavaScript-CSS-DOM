const container = document.querySelector(".container");
const btnLeft = document.createElement("button");
const btnRight = document.createElement("button");

const imgSrcArr = [
  "./assets/img1.png",
  "./assets/img2.png",
  "./assets/img3.png",
];

const slider = document.createElement("div");
slider.style.position = "relative";
slider.style.width = "400px";
slider.style.height = "300px";
slider.style.overflow = "hidden";
container.appendChild(slider);

btnLeft.textContent = "<";
btnRight.textContent = ">";
slider.appendChild(btnLeft);
slider.appendChild(btnRight);
const createImg = (src) => {
  const img = document.createElement("img");
  img.src = src;
  return img;
};

let currentIndex = 0;

imgSrcArr.forEach((src, index) => {
  const img = createImg(src);
  img.style.position = "absolute";
  img.setAttribute("id", `img-${index}`);
  img.style.top = "50%";
  img.style.left = "50%";
  img.style.transform = "translate(-50%, -50%)";
  img.style.transition = "all 1s ease-in-out";
  slider.appendChild(img);
});
document.addEventListener("click", (e) => {
  if (e.target === btnLeft) {
    currentIndex = (currentIndex - 1 + imgSrcArr.length) % imgSrcArr.length;
  } else if (e.target === btnRight) {
    currentIndex = (currentIndex + 1) % imgSrcArr.length;
  }
  imgSrcArr.forEach((item, index) => {
    if (index === currentIndex) {
      document.getElementById(`img-${index}`).style.transform =
        "translate(-50%, -50%) scale(1)";
    } else {
      document.getElementById(`img-${index}`).style.transform =
        "translate(-50%, -50%) scale(0)";
    }
  });
});
