const subscribBtn = document.querySelector(".subscribe-btn");
const mainPage = document.querySelector("main");
const thankYouCard = document.querySelector(".thank-you-card");
const msgBtn = document.querySelector(".msg");
const emailInput = document.querySelector(".email");
const error = document.querySelector(".error");
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const mailBox = document.querySelector(".mail-box");

subscribBtn.addEventListener("click", function () {
  if (emailInput.value.match(mailformat)) {
    if (!mainPage.classList.contains("hidden")) {
      mainPage.classList.add("hidden");
      thankYouCard.classList.remove("hidden");
      mailBox.textContent = emailInput.value;
      error.textContent = "";
    }
  } else {
    error.textContent = "Valid email required";
  }
});
msgBtn.addEventListener("click", function () {
  if (!thankYouCard.classList.contains("hidden")) {
    thankYouCard.classList.add("hidden");
    mainPage.classList.remove("hidden");
  }
});
