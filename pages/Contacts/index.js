
const header = document.querySelector(".header");
const backTop = document.querySelector(".back-top")

window.addEventListener("scroll", () => {
  if (window.scrollY > 88) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

backTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});
