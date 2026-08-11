const tabs = document.querySelectorAll('.filter-tab');
const cards = document.querySelectorAll('.course-card');

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const dropdownBtns = document.querySelectorAll('.dropdown-btn');
const backTop = document.querySelector('.back-top');

let activeFilter = 'all';

function applyFilters() {
    cards.forEach(card => {
        const matchesCategory =
            activeFilter === 'all' ||
            card.dataset.category === activeFilter;

        card.style.display = matchesCategory ? '' : 'none';
    });
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        activeFilter = tab.dataset.filter;

        applyFilters();
    });
});

menuBtn.addEventListener('click', () => {

    menu.classList.toggle('open');

    if (menu.classList.contains('open')) {
        menuBtn.innerHTML = `
            <i class="fa-solid fa-xmark text-[25px] text-secondary-text cursor-pointer"></i>
        `;
    } else {
        menuBtn.innerHTML = `
            <i class="fa-solid fa-bars text-[20px] text-secondary-text cursor-pointer"></i>
        `;
    }

});

dropdownBtns.forEach(btn => {

    const submenu = btn.nextElementSibling;

    btn.addEventListener('click', () => {

        submenu.classList.toggle('open');
        submenu.classList.toggle('hidden');

    });

});

backTop.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});