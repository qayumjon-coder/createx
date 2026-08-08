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
        link: "#",
    },
    {
        id: 2,
        date: new Date(2026, 6, 24),
        time: "11:00 – 12:30",
        title: "Building a customer service department: Best Practices",
        category: "Lecture",
        format: "Online lecture",
        link: "#",
    },
    {
        id: 3,
        date: new Date(2026, 6, 16),
        time: "10:00 – 13:00",
        title: "How to apply methods of speculative design in practice. Worldbuilding prototyping",
        category: "Workshop",
        format: "Online workshop",
        link: "#",
    },
    {
        id: 4,
        date: new Date(2026, 6, 10),
        time: "9:00 – 14:00",
        title: "Find and evaluate: search and assessment tools for candidates",
        category: "Workshop",
        format: "Online workshop",
        link: "#",
    },
    {
        id: 5,
        date: new Date(2026, 5, 27),
        time: "15:00 – 19:00",
        title: "Connection to Microsoft Excel and Google Sheets. Data Visualization in Power BI",
        category: "Master-class",
        format: "Online master-class",
        link: "#",
    },
    {
        id: 6,
        date: new Date(2026, 5, 15),
        time: "10:00 – 12:00",
        title: "Marketing or growth hacking: main differences and what business needs",
        category: "Lecture",
        format: "Online lecture",
        link: "#",
    },
    {
        id: 7,
        date: new Date(2026, 5, 2),
        time: "11:00 – 13:00",
        title: "How to brief a client and present your design to approve it from the first show",
        category: "Lecture",
        format: "Online lecture",
        link: "#",
    },
    {
        id: 8,
        date: new Date(2026, 4, 29),
        time: "11:00 – 12:00",
        title: "Who is a project manager and do I want to be PM?",
        category: "Lecture",
        format: "Online lecture",
        link: "#",
    },
    {
        id: 9,
        date: new Date(2026, 4, 18),
        time: "10:00 – 12:00",
        title: "The company's business page as an additional tool to support the announcement of vacancies",
        category: "Lecture",
        format: "Online lecture",
        link: "#",
    },
];

const eventsContainer = document.getElementById("events-container");
function renderEvents(data) {
    eventsContainer.innerHTML = "";

    data.forEach((event) => {
        eventsContainer.innerHTML += `
        <div class="flex items-center justify-between gap-8 border border-[#E5E8ED] rounded-xl p-6 hover:shadow-lg duration-300">
            <div class="flex items-center gap-5">
                <div class="text-center min-w-[80px]">
                    <h2 class="text-[48px] font-black text-[#FF3F3A] leading-none">
                        ${event.date.getDate()}
                    </h2>

                    <p class="text-[20px] font-bold text-[#1E212C]">
                        ${monthNames[event.date.getMonth()]}
                    </p>
                </div>
                <div>
                    <p class="text-[#787A80] text-sm">
                        ${event.time}
                    </p>

                    <h2 class="text-[20px] font-bold text-[#1E212C] mt-2">
                        ${event.title}
                    </h2>

                    <p class="text-[#787A80] mt-2">
                        ${event.format}
                    </p>
                </div>
            </div>
            <a href="${event.link}"
               class="border border-[#FF3F3A] text-[#FF3F3A] font-bold px-8 py-3 rounded hover:bg-[#FF3F3A] hover:text-white duration-300">
                View more
            </a>

        </div>
        `;
    });
}

renderEvents(events);
