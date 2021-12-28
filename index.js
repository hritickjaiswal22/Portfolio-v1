// Wrap every letter in a span
var textWrapper = document.querySelector(
  ".animatedHeading .animatedHeading__letters"
);
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".animatedHeading .letter",
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".animatedHeading",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navList = document.querySelector(".navList");

const toggleHandler = (e) => {
  hamburgerMenu.classList.toggle("change");
  if (navList.style.display === "" || navList.style.display === "none")
    navList.style.display = "flex";
  else navList.style.display = "none";
};

hamburgerMenu.addEventListener("click", toggleHandler);
