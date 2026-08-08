const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const eventsGrid = [
  {
    id: 1,
    date: new Date(2026, 7, 05),
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

  eventsContainer.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5";

  data.forEach((event) => {
    eventsContainer.innerHTML += `
        <div class="flex flex-col hover:shadow-lg duration-300 max-w-[390px] px-[24px] h-auto">

            <div class="flex flex-col">
                <div class="flex gap-[4px] font-lat font-[700] text-[#FF3F3A] text-[28px] leading-[150%]">
                    <h2 >
                        ${event.date.getDate()}
                    </h2>

                    <p>
                        ${monthNames[event.date.getMonth()]}
                    </p>
                </div>

                <div class="max-w-[342px]">
                    <p class="font-[400] text-[16px] leading-[160%] text-[#1E212C] max-w-[98px]">
                        ${event.time}
                    </p>

                    <h2 class="text-[16px] font-bold text-[#1E212C] mt-[20px] mb-[8px]">
                        ${event.title}
                    </h2>

                    <p  class="text-[#787A80] mb-[51px]">
                        ${event.format}
                    </p>
                </div>
            </div>

            <a href="${event.link}"
               class="border  text-center border-[#FF3F3A] text-[#FF3F3A] font-bold mb-[24px] px-4 py-3 max-w-[342px] rounded hover:bg-[#FF3F3A] hover:text-white duration-300">
                View more
            </a>

        </div>
        `;
  });
}

renderEvents(eventsGrid);
