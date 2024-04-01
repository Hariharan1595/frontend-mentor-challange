const hamburgrMenu = document.querySelector(".hamburger-menu");
const overlay = document.querySelector(".overlay");
const errorMsg = document.querySelector(".error");
const errorIcon = document.querySelector(".error-icon");
const submitBtn = document.querySelector(".submit");
const emailInput = document.querySelector(".email-address");
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

hamburgrMenu.addEventListener("click", () => {
  if (overlay.classList.contains("hidden")) {
    overlay.classList.remove("hidden");
    hamburgrMenu.classList.add("open");
  } else {
    overlay.classList.add("hidden");
    hamburgrMenu.classList.remove("open");
  }
});
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  const header = accordion.querySelector(".accordion-header");
  const content = accordion.querySelector(".accordion-content");
  const arrow = accordion.querySelector(".arrow"); // Select arrow within the current accordion

  header.addEventListener("click", () => {
    content.classList.toggle("active");

    if (content.classList.contains("active")) {
      content.style.display = "block";
      arrow.style.transform = "rotate(180deg)"; // Rotate arrow when content is active
    } else {
      content.style.display = "none";
      arrow.style.transform = "rotate(0deg)"; // Reset arrow rotation when content is inactive
    }
  });
});
submitBtn.addEventListener("click", () => {
  if (!emailInput.value.match(mailFormat)) {
    errorMsg.classList.remove("hidden");
    errorIcon.classList.remove("hidden");
    errorMsg.textContent = `Whoops, make sure it's an email`;
  } else {
    errorMsg.classList.add("hidden");
    errorIcon.classList.add("hidden");
    emailInput.textContent = "";
  }
});
