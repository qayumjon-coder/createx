const tabs = document.querySelectorAll('.filter-tab');
const cards = document.querySelectorAll('.course-card');

let activeFilter = 'all';

function applyFilters() {
    cards.forEach(card => {
        const matchesCategory =
            activeFilter === 'all' || card.dataset.category === activeFilter;
        card.style.display = matchesCategory ? '' : 'none';
    });
}

tabs.forEach(tab    => {
    tab.addEventListener('click', () => {
        activeFilter = tab.dataset.filter;
        applyFilters();
    });
});