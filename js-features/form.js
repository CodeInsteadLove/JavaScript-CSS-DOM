const container = document.querySelector(".container");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = form.querySelector("input");
  const newElement = document.createElement("p");
  newElement.textContent = input.value;
  form.appendChild(newElement);
  form.reset();
});
