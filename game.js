const mainMenu = document.getElementById("main-menu");
const plunderMenu = document.getElementById("plunder-menu");
const weaponMenu = document.getElementById("weapon-menu");

document.getElementById("btn-plunder").addEventListener("click", () => {
  mainMenu.style.display = "none";
  plunderMenu.style.display = "block";
});

document.getElementById("btn-back").addEventListener("click", () => {
  plunderMenu.style.display = "none";
  weaponMenu.style.display = "none";
  mainMenu.style.display = "block";
});

document.getElementById("btn-difficulty-light").addEventListener("click", () => {
  plunderMenu.style.display = "none";
  weaponMenu.style.display = "block";
});
