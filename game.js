document.addEventListener("DOMContentLoaded", () => {
  const menu1 = document.getElementById("menu-1");
  const menu11 = document.getElementById("menu-1.1");
  const menu111 = document.getElementById("menu-1.1.1");

  const scavengeButton = document.getElementById("scavenge");
  const backButton11 = document.getElementById("back");
  const easyButton = document.getElementById("easy");
  const backButton111 = document.getElementById("back-1-1-1");

  // Wechsel zu Menü 1.1
  scavengeButton.addEventListener("click", () => {
    menu1.style.display = "none";
    menu11.style.display = "grid";
  });

  // Zurück zu Menü 1
  backButton11.addEventListener("click", () => {
    menu11.style.display = "none";
    menu1.style.display = "grid";
  });

  // Wechsel zu Menü 1.1.1
  easyButton.addEventListener("click", () => {
    menu11.style.display = "none";
    menu111.style.display = "grid";
  });

  // Zurück zu Menü 1.1
  backButton111.addEventListener("click", () => {
    menu111.style.display = "none";
    menu11.style.display = "grid";
  });
});
