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

// SignUpIn modal
function ensureSignUpModal() {
    if (document.querySelector("#signUpModal")) return;
    const modalMarkup = `
        <div id="signUpModal" class="fixed inset-0 z-100 flex items-center justify-center px-4">
            <div id="modalOverlay" class="modal-overlay absolute inset-0 bg-gray-900/60"></div>
            <div class="relative bg-white shadow-2xl w-full max-w-md p-8 sm:p-10">
                <button id="closeSignUp" class="absolute top-5 right-5 text-gray-400 hover:text-gray-700" type="button">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 class="text-[28px] font-[700] text-[#1E212C] text-center mb-2">Sign up</h2>
                <p class="text-[14px] font-[400] text-[#787A80] text-center mb-8 leading-relaxed max-w-[390px] mx-auto">
                    Registration takes less than a minute but gives you full control over your studying.
                </p>
                <form id="signUpForm" class="space-y-5">
                    <div>
                        <label for="fullName" class="block text-[14px] font-[400] text-[#424551] mb-1.5">Full Name</label>
                        <input id="fullName" type="text" placeholder="Your full name" class="w-full border border-[#D7DADD] rounded-[4px] px-4 py-2.5 text-[14px] text-gray-700 placeholder-gray-400" />
                    </div>
                    <div>
                        <label for="email" class="block text-[14px] font-[400] text-[#424551] mb-1.5">Email</label>
                        <input id="email" type="email" placeholder="Your working email" class="w-full border border-[#D7DADD] rounded-[4px] px-4 py-2.5 text-[14px] text-gray-700 placeholder-gray-400" />
                    </div>
                    <div>
                        <label for="password" class="block text-[14px] font-[400] text-[#424551] mb-1.5">Password</label>
                        <div class="relative">
                            <input id="password" type="password" placeholder="Your password" class="w-full border border-[#D7DADD] rounded-[4px] px-4 py-2.5 pr-10 text-[14px] text-gray-700" />
                        </div>
                    </div>
                    <div>
                        <label class="block text-[14px] font-[400] text-[#424551] mb-1.5">Confirm Password</label>
                        <div class="relative">
                            <input type="password" placeholder="Confirm your password" class="w-full border border-[#D7DADD] rounded-[4px] px-4 py-2.5 pr-10 text-[14px] text-gray-700" />
                        </div>
                    </div>
                    <label class="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                        <input type="checkbox" checked class="w-4 h-4 rounded border-gray-300 text-red-500 focus:ring-red-400" />
                        Remember me
                    </label>
                    <button type="submit" class="w-full bg-[#ff3f3a] text-white font-semibold py-3 shadow-sm hover:bg-[#E63A35] hover:shadow-lg">Sign up</button>
                    <p class="text-sm text-gray-500">
                        Already have an account?
                        <button type="button" class="signIn-btn text-primary font-bold">Sign in</button>
                    </p>
                </form>
                <div class="flex items-center gap-3 my-6">
                    <span class="flex-1 h-px bg-gray-200"></span>
                    <span class="text-xs text-gray-400">Or sign up with</span>
                    <span class="flex-1 h-px bg-gray-200"></span>
                </div>
                <div class="flex items-center justify-center gap-6">
                    <a href="#" class="text-gray-400 hover:text-red-600"><svg class="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.5 9.87v-6.98H7.9V12h2.6V9.8c0-2.57 1.53-4 3.87-4 1.12 0 2.3.2 2.3.2v2.5h-1.3c-1.28 0-1.68.8-1.68 1.6V12h2.86l-.46 2.89h-2.4v6.98A10 10 0 0022 12z" /></svg></a>
                    <a href="#" class="text-gray-400 hover:text-red-600"><svg class="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24"><path d="M21.35 11.1h-9.17v2.92h5.27c-.23 1.4-1.62 4.1-5.27 4.1-3.17 0-5.76-2.62-5.76-5.85s2.59-5.85 5.76-5.85c1.8 0 3.01.77 3.7 1.43l2.52-2.43C16.9 3.7 14.87 2.7 12.18 2.7 6.94 2.7 2.7 6.94 2.7 12.18s4.24 9.48 9.48 9.48c5.47 0 9.1-3.84 9.1-9.25 0-.62-.07-1.1-.13-1.31z" /></svg></a>
                    <a href="#" class="text-gray-400 hover:text-red-600"><svg class="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24"><path d="M22 5.9c-.77.34-1.6.57-2.46.68a4.3 4.3 0 001.88-2.38 8.6 8.6 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9A12.14 12.14 0 013 4.9a4.28 4.28 0 001.33 5.71 4.24 4.24 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.2 4.3 4.3 0 01-1.93.07 4.28 4.28 0 004 2.97A8.58 8.58 0 012 18.57 12.1 12.1 0 008.29 20.5c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.53A8.35 8.35 0 0022 5.9z" /></svg></a>
                    <a href="#" class="text-gray-400 hover:text-red-600"><svg class="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 8.98h4v12H3v-12zm7 0h3.83v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.04 0 4.78 2.66 4.78 6.12v6.3h-4v-5.59c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.69h-4v-12z" /></svg></a>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalMarkup);
    bindModalEvents();
}

function showSignInContent(modal) {
    const inner = modal.querySelector(".relative.bg-white");
    if (!inner) return;
    inner.innerHTML = `
        <button id="closeSignUp" class="absolute top-5 right-5 text-gray-400 hover:text-gray-700" type="button">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <h2 class="text-[28px] font-[700] text-[#1E212C] text-center mb-2">Sign in</h2>
        <p class="text-[14px] font-[400] text-[#787A80] text-center mb-8 leading-relaxed max-w-[390px]">
            Sign in to your account using email and password provided during registration.
        </p>
        <form id="signInForm" class="space-y-5">
            <div>
                <label for="signInEmail" class="block text-[14px] font-[400] text-[#424551] mb-1.5">Email</label>
                <input id="signInEmail" type="email" placeholder="Your working email" class="w-full border border-[#D7DADD] rounded-[4px] px-4 py-2.5 text-[14px] text-gray-700 placeholder-gray-400" />
            </div>
            <div>
                <label for="signInPassword" class="block text-[14px] font-[400] text-[#424551] mb-1.5">Password</label>
                <div class="relative">
                    <input id="signInPassword" type="password" placeholder="Password" class="w-full border border-[#D7DADD] rounded-[4px] px-4 py-2.5 pr-10 text-[14px] text-gray-700" />
                    <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="flex items-center justify-between text-sm">
                <label class="flex items-center gap-2 text-gray-600 cursor-pointer">
                    <input type="checkbox" checked class="w-4 h-4 rounded border-gray-300 text-red-500 focus:ring-red-400" />
                    Keep me signed in
                </label>
                <a href="#" class="text-red-500 font-medium hover:underline">Forgot password?</a>
            </div>
            <button type="submit" class="w-full bg-[#ff3f3a] text-white font-semibold py-3 shadow-sm hover:bg-[#E63A35] hover:shadow-lg">Sign in</button>
            <p class="text-sm text-gray-500">
                Don't have an account? <button type="button" class="signUpIn-btn-inner text-primary font-bold cursor-pointer">Sign up</button>
            </p>
        </form>
        <div class="flex items-center gap-3 my-6">
            <span class="flex-1 h-px bg-gray-200"></span>
            <span class="text-xs text-gray-400">Or sign in with</span>
            <span class="flex-1 h-px bg-gray-200"></span>
        </div>
        <div class="flex items-center justify-center gap-6">
            <a href="#" class="text-gray-400 hover:text-red-600"><svg class="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.5 9.87v-6.98H7.9V12h2.6V9.8c0-2.57 1.53-4 3.87-4 1.12 0 2.3.2 2.3.2v2.5h-1.3c-1.28 0-1.68.8-1.68 1.6V12h2.86l-.46 2.89h-2.4v6.98A10 10 0 0022 12z" /></svg></a>
            <a href="#" class="text-gray-400 hover:text-red-600"><svg class="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24"><path d="M21.35 11.1h-9.17v2.92h5.27c-.23 1.4-1.62 4.1-5.27 4.1-3.17 0-5.76-2.62-5.76-5.85s2.59-5.85 5.76-5.85c1.8 0 3.01.77 3.7 1.43l2.52-2.43C16.9 3.7 14.87 2.7 12.18 2.7 6.94 2.7 2.7 6.94 2.7 12.18s4.24 9.48 9.48 9.48c5.47 0 9.1-3.84 9.1-9.25 0-.62-.07-1.1-.13-1.31z" /></svg></a>
            <a href="#" class="text-gray-400 hover:text-red-600"><svg class="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24"><path d="M22 5.9c-.77.34-1.6.57-2.46.68a4.3 4.3 0 001.88-2.38 8.6 8.6 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9A12.14 12.14 0 013 4.9a4.28 4.28 0 001.33 5.71 4.24 4.24 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.2 4.3 4.3 0 01-1.93.07 4.28 4.28 0 004 2.97A8.58 8.58 0 012 18.57 12.1 12.1 0 008.29 20.5c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.53A8.35 8.35 0 0022 5.9z" /></svg></a>
            <a href="#" class="text-gray-400 hover:text-red-600"><svg class="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 8.98h4v12H3v-12zm7 0h3.83v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.04 0 4.78 2.66 4.78 6.12v6.3h-4v-5.59c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.69h-4v-12z" /></svg></a>
        </div>
    `;
    document.querySelector("#closeSignUp").addEventListener("click", () => {
        modal.classList.add("hidden");
        document.body.style.overflow = "";
    });
    inner.querySelector(".signUpIn-btn-inner").addEventListener("click", () => {
        showSignUpContent(modal);
    });
}

function showSignUpContent(modal) {
    const inner = modal.querySelector(".relative.bg-white");
    if (!inner) return;
    inner.innerHTML = `
        <button id="closeSignUp" class="absolute top-5 right-5 text-gray-400 hover:text-gray-700" type="button">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <h2 class="text-[28px] font-[700] text-[#1E212C] text-center mb-2">Sign up</h2>
        <p class="text-[14px] font-[400] text-[#787A80] text-center mb-8 leading-relaxed max-w-[390px] mx-auto">
            Registration takes less than a minute but gives you full control over your studying.
        </p>
        <form id="signUpForm" class="space-y-5">
            <div>
                <label for="fullName" class="block text-[14px] font-[400] text-[#424551] mb-1.5">Full Name</label>
                <input id="fullName" type="text" placeholder="Your full name" class="w-full border border-[#D7DADD] rounded-[4px] px-4 py-2.5 text-[14px] text-gray-700 placeholder-gray-400" />
            </div>
            <div>
                <label for="email" class="block text-[14px] font-[400] text-[#424551] mb-1.5">Email</label>
                <input id="email" type="email" placeholder="Your working email" class="w-full border border-[#D7DADD] rounded-[4px] px-4 py-2.5 text-[14px] text-gray-700 placeholder-gray-400" />
            </div>
            <div>
                <label for="password" class="block text-[14px] font-[400] text-[#424551] mb-1.5">Password</label>
                <div class="relative">
                    <input id="password" type="password" placeholder="Your password" class="w-full border border-[#D7DADD] rounded-[4px] px-4 py-2.5 pr-10 text-[14px] text-gray-700" />
                </div>
            </div>
            <div>
                <label class="block text-[14px] font-[400] text-[#424551] mb-1.5">Confirm Password</label>
                <div class="relative">
                    <input type="password" placeholder="Confirm your password" class="w-full border border-[#D7DADD] rounded-[4px] px-4 py-2.5 pr-10 text-[14px] text-gray-700" />
                </div>
            </div>
            <label class="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" checked class="w-4 h-4 rounded border-gray-300 text-red-500 focus:ring-red-400" />
                Remember me
            </label>
            <button type="submit" class="w-full bg-[#ff3f3a] text-white font-semibold py-3 shadow-sm hover:bg-[#E63A35] hover:shadow-lg">Sign up</button>
            <p class="text-sm text-gray-500">
                Already have an account?
                <button type="button" class="signIn-btn-inner text-primary font-bold cursor-pointer">Sign in</button>
            </p>
        </form>
        <div class="flex items-center gap-3 my-6">
            <span class="flex-1 h-px bg-gray-200"></span>
            <span class="text-xs text-gray-400">Or sign up with</span>
            <span class="flex-1 h-px bg-gray-200"></span>
        </div>
        <div class="flex items-center justify-center gap-6">
            <a href="#" class="text-gray-400 hover:text-red-600"><svg class="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.5 9.87v-6.98H7.9V12h2.6V9.8c0-2.57 1.53-4 3.87-4 1.12 0 2.3.2 2.3.2v2.5h-1.3c-1.28 0-1.68.8-1.68 1.6V12h2.86l-.46 2.89h-2.4v6.98A10 10 0 0022 12z" /></svg></a>
            <a href="#" class="text-gray-400 hover:text-red-600"><svg class="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24"><path d="M21.35 11.1h-9.17v2.92h5.27c-.23 1.4-1.62 4.1-5.27 4.1-3.17 0-5.76-2.62-5.76-5.85s2.59-5.85 5.76-5.85c1.8 0 3.01.77 3.7 1.43l2.52-2.43C16.9 3.7 14.87 2.7 12.18 2.7 6.94 2.7 2.7 6.94 2.7 12.18s4.24 9.48 9.48 9.48c5.47 0 9.1-3.84 9.1-9.25 0-.62-.07-1.1-.13-1.31z" /></svg></a>
            <a href="#" class="text-gray-400 hover:text-red-600"><svg class="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24"><path d="M22 5.9c-.77.34-1.6.57-2.46.68a4.3 4.3 0 001.88-2.38 8.6 8.6 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9A12.14 12.14 0 013 4.9a4.28 4.28 0 001.33 5.71 4.24 4.24 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.2 4.3 4.3 0 01-1.93.07 4.28 4.28 0 004 2.97A8.58 8.58 0 012 18.57 12.1 12.1 0 008.29 20.5c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.53A8.35 8.35 0 0022 5.9z" /></svg></a>
            <a href="#" class="text-gray-400 hover:text-red-600"><svg class="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 8.98h4v12H3v-12zm7 0h3.83v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.04 0 4.78 2.66 4.78 6.12v6.3h-4v-5.59c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.69h-4v-12z" /></svg></a>
        </div>
    `;
    document.querySelector("#closeSignUp").addEventListener("click", () => {
        modal.classList.add("hidden");
        document.body.style.overflow = "";
    });
    const signInBtnInner = inner.querySelector(".signIn-btn-inner");
    if (signInBtnInner) { signInBtnInner.addEventListener("click", () => { showSignInContent(modal); }); }
}


function bindModalEvents() {
    const modal = document.querySelector("#signUpModal");
    const closeBtn = document.querySelector("#closeSignUp");
    if (!modal || !closeBtn) return;
    closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
        document.body.style.overflow = "";
    });
    const signInBtn = modal.querySelector(".signIn-btn");
    if (signInBtn) { signInBtn.addEventListener("click", () => { showSignInContent(modal); }); }
}

function bindSignButtons() {
    document.querySelectorAll(".signUpIn-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            ensureSignUpModal();
            const modal = document.querySelector("#signUpModal");
            if (modal) {
                modal.classList.remove("hidden");
                document.body.style.overflow = "hidden";
            }
        });
    });
}

bindSignButtons();
