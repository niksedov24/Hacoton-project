const openButtons = document.querySelectorAll(".open-registration-btn");

openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById("registration-popup").style.display = "flex";
  });
});

document
  .querySelector(".close-registration")
  .addEventListener("click", function () {
    document.getElementById("registration-popup").style.display = "none";
  });

document
  .getElementById("registration-popup")
  .addEventListener("click", function (e) {
    if (e.target === this) {
      this.style.display = "none";
    }
  });

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.getElementById("registration-popup").style.display = "none";
  }
});

document
  .querySelector(".registration-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Регистрация успешно отправлена!");
    document.getElementById("registration-popup").style.display = "none";
  });

document.querySelectorAll('input[type="number"]').forEach((input) => {
  input.addEventListener("input", calculatePrice);
});

function calculatePrice() {
  const saplings =
    document.querySelector('input[placeholder="______"]').value || 0;
  const hectares =
    document.querySelectorAll('input[type="number"]')[1].value || 0;

  const price = saplings * 10 + hectares * 1000;
  document.querySelector(
    'input[placeholder="Рассчитывается автоматически"]'
  ).value = price > 0 ? price + " руб." : "";
}
