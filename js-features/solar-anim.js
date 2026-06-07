const app = document.getElementById("app");

const div = document.createElement("div");
div.classList.add("solar-ecl-anim");
app.appendChild(div);

const arr = Array.from({ length: 100 });

arr.forEach((item) => {
  const star = document.createElement("div");
  star.innerHTML = "⭐";
  star.style.position = "absolute";
  star.style.top = Math.random() * 100 + "%";
  star.style.zIndex = "-1";
  star.style.left = Math.random() * 100 + "%";
  app.appendChild(star);
});
