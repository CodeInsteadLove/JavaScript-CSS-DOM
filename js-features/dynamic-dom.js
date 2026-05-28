const arr = [1, 2, 3, 4, 5];

arr.forEach((num) => {
  const el = document.createElement("span");
  el.classList.add("item-cube");
  el.textContent = num;
  document.querySelector(".container").appendChild(el);
});
