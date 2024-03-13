const btnSubmit = document.querySelector(".submit-btn");
const thankYouCard = document.querySelector(".thank-you");
const rateCard = document.querySelector(".container-rate");
const rateEl = document.querySelector(".rate");
const showRate = document.querySelector(".rate-info");
const rateValues = document.querySelectorAll(".value");
const btnBack = document.querySelector(".back");

btnSubmit.addEventListener("click", function () {
  thankYouCard.classList.remove("hidden");
  rateCard.classList.add("hidden");
});
btnBack.addEventListener("click", function () {
  thankYouCard.classList.add("hidden");
  rateCard.classList.remove("hidden");
  rateValues.forEach((value) => {
    value.classList.remove("color");
  });
});

rateEl.addEventListener("click", function (event) {
  if (event.target.classList.contains("value")) {
    const selectedRate = event.target.textContent;
    showRate.textContent = `You selected ${selectedRate} out of 5`;
  }
});

rateValues.forEach((value) => {
  value.addEventListener("click", function () {
    this.classList.add("color");
  });
});
