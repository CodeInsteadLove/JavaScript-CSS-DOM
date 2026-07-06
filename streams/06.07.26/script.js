const app = document.getElementById("app");

// links data
const links = Object.freeze([
  { name: "Home", emoji: "🏠" },
  { name: "Projects", emoji: "💼" },
  { name: "About", emoji: "👤" },
]);

const createDropdownContainer = () => {
  const dropdown = document.createElement("div");
  dropdown.classList.add("dropdown");
  app.appendChild(dropdown);

  return dropdown;
};
const dropdown = createDropdownContainer();

const createButton = () => {
  const btn = document.createElement("button");
  btn.textContent = "Menu ▼";
  btn.classList.add("btn-menu");
  dropdown.appendChild(btn);

  return btn;
};

const createMenuList = () => {
  const menuList = document.createElement("div");
  menuList.classList.add("menu-list");
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("close-btn");
  closeBtn.textContent = "✕";
  menuList.appendChild(closeBtn);
  dropdown.appendChild(menuList);

  // =============================links

  return { menuList, closeBtn };
};
const createLinks = () => {
  links.forEach((item) => {
    const linkContainer = document.createElement("div");
    linkContainer.classList.add("link-container");
    const link = document.createElement("a");
    link.textContent = item.emoji + " " + item.name;
    linkContainer.appendChild(link);
    menuList.appendChild(linkContainer);
  });
};
const btn = createButton();
const { menuList, closeBtn } = createMenuList();
createLinks();

if (btn instanceof HTMLButtonElement) {
  btn.addEventListener("click", (e) => {
    menuList.classList.add("active");
  });
}

closeBtn.addEventListener("click", (e) => {
  menuList.classList.remove("active");
});
