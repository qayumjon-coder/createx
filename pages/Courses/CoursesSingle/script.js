

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 88) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
  menuBtn.innerHTML = '<i class="fa-solid fa-xmark text-[25px] text-secondary-text cursor-pointer"></i>';

  if (!menu.classList.contains("open")) {
    menuBtn.innerHTML = '<i class="fa-solid fa-bars text-[20px] text-secondary-text cursor-pointer"></i>';
  }
});

dropdownBtns.forEach((btn) => {
  const submenu = btn.nextElementSibling;
  btn.addEventListener("click", () => {
    submenu.classList.toggle("open");
    submenu.classList.toggle("hidden");
  });
});

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
});
