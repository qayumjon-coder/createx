const cards = document.querySelectorAll('.course-card');

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const dropdownBtns = document.querySelectorAll('.dropdown-btn');
const backTop = document.querySelector('.back-top');

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");

    if (!menu.classList.contains("hidden")) {
      menuBtn.innerHTML = '<i class="fa-solid fa-xmark text-[25px] text-secondary-text cursor-pointer"></i>';
    } else {
      menuBtn.innerHTML = '<i class="fa-solid fa-bars text-[20px] text-secondary-text cursor-pointer"></i>';
    }
  });
}

dropdownBtns.forEach((btn) => {
  const submenu = btn.nextElementSibling;
  btn.addEventListener("click", () => {
    submenu.classList.toggle("hidden");
  });
});

if (backTop) {
  backTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
