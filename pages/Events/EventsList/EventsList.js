const tabs = document.querySelectorAll('.filter-tab');
const cards = document.querySelectorAll('.course-card');

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const dropdownBtns = document.querySelectorAll('.dropdown-btn');
const backTop = document.querySelector('.back-top');


const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const events = [
    {
        id: 1,
        date: new Date(2026, 7, 5),
        time: "11:00 – 14:00",
        title: "Formation of the organizational structure of the company in the face of uncertainty.",
        category: "Master-class",
        format: "Online master-class",
        link: "../Events.html",
    },
    {
        id: 2,
        date: new Date(2026, 6, 24),
        time: "11:00 – 12:30",
        title: "Building a customer service department: Best Practices",
        category: "Lecture",
        format: "Online lecture",
        link: "../Events.html",
    },
    {
        id: 3,
        date: new Date(2026, 6, 16),
        time: "10:00 – 13:00",
        title: "How to apply methods of speculative design in practice. Worldbuilding prototyping",
        category: "Workshop",
        format: "Online workshop",
        link: "../Events.html",
    },
    {
        id: 4,
        date: new Date(2026, 6, 10),
        time: "9:00 – 14:00",
        title: "Find and evaluate: search and assessment tools for candidates",
        category: "Workshop",
        format: "Online workshop",
        link: "../Events.html",
    },
    {
        id: 5,
        date: new Date(2026, 5, 27),
        time: "15:00 – 19:00",
        title: "Connection to Microsoft Excel and Google Sheets. Data Visualization in Power BI",
        category: "Master-class",
        format: "Online master-class",
        link: "../Events.html",
    },
    {
        id: 6,
        date: new Date(2026, 5, 15),
        time: "10:00 – 12:00",
        title: "Marketing or growth hacking: main differences and what business needs",
        category: "Lecture",
        format: "Online lecture",
        link: "../Events.html",
    },
    {
        id: 7,
        date: new Date(2026, 5, 2),
        time: "11:00 – 13:00",
        title: "How to brief a client and present your design to approve it from the first show",
        category: "Lecture",
        format: "Online lecture",
        link: "../Events.html",
    },
    {
        id: 8,
        date: new Date(2026, 4, 29),
        time: "11:00 – 12:00",
        title: "Who is a project manager and do I want to be PM?",
        category: "Lecture",
        format: "Online lecture",
        link: "../Events.html",
    },
    {
        id: 9,
        date: new Date(2026, 4, 18),
        time: "10:00 – 12:00",
        title: "The company's business page as an additional tool to support the announcement of vacancies",
        category: "Lecture",
        format: "Online lecture",
        link: "../Events.html",
    },
];

const eventsContainer = document.getElementById("events-container");
function renderEvents(data) {
    eventsContainer.innerHTML = "";

    data.forEach((event) => {
        eventsContainer.innerHTML += `
     <div class="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-6 border border-[#E5E5E5] rounded-lg p-6 lg:p-8 hover:shadow-lg transition duration-300">

    <!-- Date -->
    <div class="flex items-center gap-4 lg:min-w-[180px]">
        <h2 class="text-[48px] font-black text-[#FF3F3A] leading-none">
            ${String(event.date.getDate()).padStart(2, "0")}
        </h2>

        <div>
            <p class="text-[20px] font-bold text-[#1E212C] leading-none">
                ${monthNames[event.date.getMonth()]}
            </p>

            <p class="text-[#787A80] text-[16px] mt-2">
                ${event.time}
            </p>
        </div>
    </div>

    <!-- Content -->
    <div class="flex-1">
        <h2 class="text-[20px] font-bold text-[#1E212C] leading-[150%] transition duration-300">
            <a href="${event.link}" class="hover:text-[#FF3F3A] cursor-pointer">${event.title}</a>
        </h2>

        <p class="text-[#787A80] mt-2">
            ${event.format}
        </p>
    </div>

    <!-- Button -->
    <a href="${event.link}"
        class="w-full lg:w-auto text-center border border-[#FF3F3A] text-[#FF3F3A] font-bold px-8 py-3 rounded hover:bg-[#FF3F3A] hover:text-white transition duration-300">
        View more
    </a>

</div>      `;
    });
}

renderEvents(events);

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

backTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
});
