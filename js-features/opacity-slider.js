const container = document.querySelector(".container");
const btnLeft = document.createElement("button");
const btnRight = document.createElement("button");

const imgSrcArr = [
  "./assets/img1.png",
  "./assets/img2.png",
  "./assets/img3.png",
];

btnLeft.textContent = "<";
btnRight.textContent = ">";
container.appendChild(btnLeft);
container.appendChild(btnRight);
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
  img.style.transition = "opacity 0.5s ease-in-out";
  container.appendChild(img);
});
document.addEventListener("click", (e) => {
  if (e.target === btnLeft) {
    currentIndex = (currentIndex - 1 + imgSrcArr.length) % imgSrcArr.length;
  }
  if (e.target === btnRight) {
    currentIndex = (currentIndex + 1) % imgSrcArr.length;
  }
  imgSrcArr.forEach((item, index) => {
    if (index === currentIndex) {
      document.getElementById(`img-${index}`).style.opacity = "1";
    } else {
      document.getElementById(`img-${index}`).style.opacity = "0";
    }
  });
});
