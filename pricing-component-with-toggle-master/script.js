const btn = document.querySelector("label");
const basicPlan = document.querySelector(".basic-plan");
const proPlan = document.querySelector(".pro-plan");
const masterPlan = document.querySelector(".master-plan");

btn.addEventListener("click", () => {
  if (!basicPlan.classList.toggle("plans")) {
    basicPlan.innerHTML = 199.99;
    proPlan.innerHTML = 249.99;
    masterPlan.innerHTML = 399.99;
  } else {
    basicPlan.innerHTML = 19.99;
    proPlan.innerHTML = 24.99;
    masterPlan.innerHTML = 39.99;
  }
});
