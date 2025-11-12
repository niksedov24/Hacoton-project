const openButtons = document.querySelectorAll(".open-registration-btn");

openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById("registration-popup").style.display = "flex";
  });
});

document.querySelector(".close-registration").addEventListener("click", () => {
  document.getElementById("registration-popup").style.display = "none";
});

document.getElementById("registration-popup").addEventListener("click", (e) => {
  if (e.target === this) {
    this.style.display = "none";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("registration-popup").style.display = "none";
  }
});

document.querySelector(".registration-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Регистрация успешно отправлена!");
  document.getElementById("registration-popup").style.display = "none";
});

const levels = [
  { min: 0, max: 5, name: "Ур.1", discount: 0 },
  { min: 6, max: 15, name: "Ур.2", discount: 5 },
  { min: 16, max: 50, name: "Ур.3", discount: 10 },
  { min: 51, max: 150, name: "Ур.4", discount: 15 },
  { min: 151, max: 999999999, name: "Ур.5", discount: 20 },
];

const saplingPrice = 100;
const hectarePrice = 1100;

document.querySelectorAll('input[type="number"]').forEach((input) => {
  input.addEventListener("input", calculateAll);
});

function calculateAll() {
  const saplings =
    parseInt(document.querySelectorAll('input[type="number"]')[0].value) || 0;
  const hectares =
    parseInt(document.querySelectorAll('input[type="number"]')[1].value) || 0;

  const currentLevel =
    levels.find((level) => hectares >= level.min && hectares <= level.max) ||
    levels[0];

  updateLevelDisplay(currentLevel);

  calculatePrice(saplings, hectares, currentLevel);
}

function updateLevelDisplay(level) {
  const levelLabel = document.querySelector(".level-label");
  levelLabel.textContent = `${level.name} (${level.discount}% скидка)`;

  const colors = ["#666", "#84A425", "#2E8B57", "#1E6FA9", "#8B4513"];
  levelLabel.style.color = colors[levels.indexOf(level)] || "#666";
}

function calculatePrice(saplings, hectares, level) {
  const baseCost = saplings * saplingPrice + hectares * hectarePrice;
  const finalPrice = baseCost * (1 - level.discount / 100);

  const priceInput = document.querySelector(
    'input[placeholder="Рассчитывается автоматически"]'
  );

  if (finalPrice > 0) {
    priceInput.value = `${Math.round(finalPrice)} руб.`;
    priceInput.title = `Скидка ${level.discount}% применена`;
  } else {
    priceInput.value = "";
    priceInput.title = "";
  }
}

document.addEventListener("DOMContentLoaded", calculateAll);
