let dropdownBtns = document.querySelectorAll(".dropdown-btn"),
    drLink1 = document.querySelector(".dr-link"),
    drLink2 = document.querySelector(".dr-link2"),
    drLink3 = document.querySelector(".dr-link3"),
    menuBtn = document.querySelector(".menu-btn"),
    menu = document.querySelector(".menu"),
    showMenu = document.querySelector(".show-menu"),
    showMenu2 = document.querySelector(".show-menu2"),
    showMenu3 = document.querySelector(".show-menu3"),
    toggleMenuBtn = document.querySelector(".toggle-menu-btn"),
    toggleMenuBtn2 = document.querySelector(".toggle-menu-btn2"),
    toggleMenuBtn3 = document.querySelector(".toggle-menu-btn3");

    // Menu and submenu opening and closing

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
    menuBtn.innerHTML = '<i class="fa-solid fa-xmark text-[25px] text-secondary-text cursor-pointer"></i>';

    if(!menu.classList.contains("open")){
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


