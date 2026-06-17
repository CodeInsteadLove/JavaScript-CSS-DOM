const container = document.querySelector(".container");
const btn = document.createElement("button");
btn.classList.add("btn");
btn.textContent = "change text";
container.appendChild(btn);
const p = document.createElement("p");
p.textContent = "This is a paragraph.";
p.style.position = "absolute";
p.style.top = "70%";
container.appendChild(p);
btn.addEventListener("click", () => {
  p.textContent = "The text has been changed!";
});
