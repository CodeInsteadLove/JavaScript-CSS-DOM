const obj = {
  name: "John",
  age: 30,
  city: "New York",
};

const { name, city } = obj;

document.querySelector(".container").textContent = name + ", " + city;
