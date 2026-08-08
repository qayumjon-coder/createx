const tabs = document.querySelectorAll('.filter-tab');
const cards = document.querySelectorAll('.course-card');


let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let dropdownBtns = document.querySelectorAll(".dropdown-btn");



let activeFilter = 'all';

function applyFilters() {
    cards.forEach(card => {
        const matchesCategory =
            activeFilter === 'all' || card.dataset.category === activeFilter;
        card.style.display = matchesCategory ? '' : 'none';
    });
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        activeFilter = tab.dataset.filter;
        applyFilters();
    });
});


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