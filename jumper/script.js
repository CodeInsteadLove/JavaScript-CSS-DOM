const app = document.getElementById("app");
const game = document.createElement("div");
const obstacle = document.createElement("div");
const player = document.createElement("div");
const event = document.createElement("div");

event.classList.add("event");
player.innerHTML = "🏃‍➡️";
player.classList.add("player");
obstacle.classList.add("obstacle");
obstacle.classList.add("obstacleAnim");
obstacle.innerHTML = "👾";
game.classList.add("game");
game.appendChild(player);
game.appendChild(obstacle);
app.appendChild(game);
function jump() {
  if (!player.classList.contains("jumpAnim")) {
    player.classList.add("jumpAnim");
  }
  player.innerHTML = "🏃‍➡️";

  setTimeout(() => {
    player.innerHTML = "🏃‍➡️";
    player.classList.remove("jumpAnim");
  }, 1000);
}
document.addEventListener("click", () => {
  jump();
  event.innerHTML = "Click";
  game.appendChild(event);
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    jump();
    event.innerHTML = "Keydown";
    game.appendChild(event);
  }
});
setInterval(() => {
  const playerBottom = parseInt(
    getComputedStyle(player).getPropertyValue("bottom"),
  );

  const obstacleLeft =
    obstacle.getBoundingClientRect().left - player.getBoundingClientRect().left;
  console.log(obstacleLeft);

  if (obstacleLeft > 0 && obstacleLeft < 40 && playerBottom < 40) {
    alert("Game Over!");
    location.reload();
  }
}, 20);
