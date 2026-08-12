const tabs = document.querySelectorAll('.filter-tab');
const cards = document.querySelectorAll('.course-card');
// i18n uchun yordamchi funksiya
function getTranslation(key) {
  const currentLang = localStorage.getItem('createx_lang') || 'uz';
  if (typeof translations !== 'undefined' && translations[currentLang] && translations[currentLang][key]) {
    return translations[currentLang][key];
  }
  return key;
}

const monthNamesKeys = [
  "month_jan", "month_feb", "month_mar", "month_apr", 
  "month_may", "month_jun", "month_jul", "month_aug", 
  "month_sep", "month_oct", "month_nov", "month_dec"
];

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const dropdownBtns = document.querySelectorAll('.dropdown-btn');
const backTop = document.querySelector('.back-top');

const events = [
    {
        id: 1,
        date: new Date(2026, 7, 5),
        time: "11:00 – 14:00",
        titleKey: "event_title_1",
        formatKey: "event_format_online_master",
        link: "../Events.html",
    },
    {
        id: 2,
        date: new Date(2026, 6, 24),
        time: "11:00 – 12:30",
        titleKey: "event_title_2",
        formatKey: "event_format_online_lecture",
        link: "../Events.html",
    },
    {
        id: 3,
        date: new Date(2026, 6, 16),
        time: "10:00 – 13:00",
        titleKey: "event_title_3",
        formatKey: "event_format_online_workshop",
        link: "../Events.html",
    },
    {
        id: 4,
        date: new Date(2026, 6, 10),
        time: "9:00 – 14:00",
        titleKey: "event_title_4",
        formatKey: "event_format_online_workshop",
        link: "../Events.html",
    },
    {
        id: 5,
        date: new Date(2026, 5, 27),
        time: "15:00 – 19:00",
        titleKey: "event_title_5",
        formatKey: "event_format_online_master",
        link: "../Events.html",
    },
    {
        id: 6,
        date: new Date(2026, 5, 15),
        time: "10:00 – 12:00",
        titleKey: "event_title_6",
        formatKey: "event_format_online_lecture",
        link: "../Events.html",
    },
    {
        id: 7,
        date: new Date(2026, 5, 2),
        time: "11:00 – 13:00",
        titleKey: "event_title_7",
        formatKey: "event_format_online_lecture",
        link: "../Events.html",
    },
    {
        id: 8,
        date: new Date(2026, 4, 29),
        time: "11:00 – 12:00",
        titleKey: "event_title_8",
        formatKey: "event_format_online_lecture",
        link: "../Events.html",
    },
    {
        id: 9,
        date: new Date(2026, 4, 18),
        time: "10:00 – 12:00",
        titleKey: "event_title_9",
        formatKey: "event_format_online_lecture",
        link: "../Events.html",
    },
];

// Global miqyosda saqlaymiz, changeLanguage funksiyasi topishi uchun
window.eventsGridData = events;

const eventsContainer = document.getElementById("events-container");

function renderEvents(data) {
    if (!eventsContainer) return;
    eventsContainer.innerHTML = "";

    data.forEach((event) => {
        const titleText = getTranslation(event.titleKey);
        const formatText = getTranslation(event.formatKey);
        const viewMoreText = getTranslation('btn_view_more') || 'View more';
        const monthKey = monthNamesKeys[event.date.getMonth()];
        const monthName = getTranslation(monthKey);

        eventsContainer.innerHTML += `
        <div class="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-6 border border-[#E5E5E5] rounded-lg p-6 lg:p-8 hover:shadow-lg transition duration-300 bg-white">

            <!-- Date -->
            <div class="flex items-center gap-4 lg:min-w-[180px]">
                <h2 class="text-[48px] font-black text-[#FF3F3A] leading-none">
                    ${String(event.date.getDate()).padStart(2, "0")}
                </h2>

                <div>
                    <p class="text-[20px] font-bold text-[#1E212C] leading-none">
                        ${monthName}
                    </p>

                    <p class="text-[#787A80] text-[16px] mt-2">
                        ${event.time}
                    </p>
                </div>
            </div>

            <!-- Content -->
            <div class="flex-1">
                <h2 class="text-[20px] font-bold text-[#1E212C] leading-[150%] transition duration-300">
                    <a href="${event.link}" class="hover:text-[#FF3F3A] cursor-pointer">${titleText}</a>
                </h2>

                <p class="text-[#787A80] mt-2">
                    ${formatText}
                </p>
            </div>

            <!-- Button -->
            <a href="${event.link}"
                class="w-full lg:w-auto text-center border border-[#FF3F3A] text-[#FF3F3A] font-bold px-8 py-3 rounded hover:bg-[#FF3F3A] hover:text-white transition duration-300">
                ${viewMoreText}
            </a>

        </div>`;
    });
}

window.renderEvents = renderEvents;
renderEvents(events);

// Menu va boshqa interaktiv tugmalar
if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("open");
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark text-[25px] text-secondary-text cursor-pointer"></i>';

        if(!menu.classList.contains("open")){
            menuBtn.innerHTML = '<i class="fa-solid fa-bars text-[20px] text-secondary-text cursor-pointer"></i>';
        }
    });
}

if (dropdownBtns) {
    dropdownBtns.forEach((btn) => {
        const submenu = btn.nextElementSibling;
        if (submenu) {
            btn.addEventListener("click", () => {
                submenu.classList.toggle("open");
                submenu.classList.toggle("hidden");
            });
        }
    });
}

if (backTop) {
    backTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

const gridViewBtn = document.getElementById('grid-view-btn');
const listViewBtn = document.getElementById('list-view-btn');

if (gridViewBtn) {
    gridViewBtn.addEventListener('click', () => {
        window.location.href = '../EventsGrid/EventsGrid.html';
    });
}

if (listViewBtn) {
    listViewBtn.addEventListener('click', () => {
        window.location.href = '../EventsList/EventesList.html';
    });
}