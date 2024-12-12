import Splide from "@splidejs/splide";

document.addEventListener("DOMContentLoaded", function () {
  // Change heqading on button click
  const button = document.querySelector("#testinappi");
  if (!button) return;
  button.addEventListener("click", function () {
    const heading = document.querySelector("#testiotsikko");
    if (!heading) return;
    heading.textContent = "joko joko joo joo";
  });

  // Initialize Splide
  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 3,
  });
  splide.mount();
});

console.log(" najy jee?");
