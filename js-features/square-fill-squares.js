const app = document.getElementById("app");
const el = document.createElement("div");
el.classList.add("round-el");
app.appendChild(el);

const elWidth = el.offsetWidth;
const elHeight = el.offsetHeight;

const childElWidth = elWidth / 8;
const childElHeight = elHeight / 8;

const sqNumber = (elWidth / childElWidth) * (elHeight / childElHeight);

for (let index = 0; index < Math.round(sqNumber); index++) {
  const sq = document.createElement("div");
  sq.style.width = childElWidth + "px";
  sq.style.height = childElHeight + "px";
  sq.innerHTML = index + 1;

  sq.style.border = "2px solid #876";
  el.appendChild(sq);
}
