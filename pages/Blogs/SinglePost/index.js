// i18n uchun yordamchi funksiya
function getTranslation(key) {
    const currentLang = localStorage.getItem('createx_lang') || 'uz';
    if (typeof translations !== 'undefined' && translations[currentLang] && translations[currentLang][key]) {
        return translations[currentLang][key];
    }
    return key;
}

const latestPosts = [
    {
        id: 1,
        type: "Podcast",
        typeIcon: `<i class="fa-solid fa-microphone"></i>`,
        image: "../../../images/blog/blogn1.png",
        category: "Marketing",
        date: "September 4, 2020",
        duration: "36 min",
        title: "What is traffic arbitrage and does it really make money?",
        description: "Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...",
        buttonKey: `blog_listen`,
        link: "https://createx.createx.studio/online-courses/blog-single.html"
    },
    {
        id: 2,
        type: "Video",
        typeIcon: `<i class="fa-regular fa-circle-play"></i>`,
        image: "../../../images/blog/blogn2.png",
        category: "Management",
        date: "August 25, 2020",
        duration: "45 min",
        title: "What to do and who to talk to if you want to get feedback on the product",
        description: "Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...",
        buttonKey: `blog_watch`,
        link: "https://createx.createx.studio/online-courses/blog-single.html"
    },
    {
        id: 3,
        type: "Article",
        typeIcon: `<i class="fa-regular fa-file-lines"></i>`,
        image: "../../../images/blog/blogn3.png",
        category: "Design",
        date: "August 8, 2020",
        duration: "",
        title: "Should you choose a creative profession if you are attracted to creativity?",
        description: "Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...",
        buttonKey: `blog_read`,
        link: "https://createx.createx.studio/online-courses/blog-single.html"
    },
    {
        id: 4,
        type: "Video",
        typeIcon: `<i class="fa-regular fa-circle-play"></i>`,
        image: "../../../images/blog/single/06.jpg",
        category: "Management",
        date: "July 15, 2020",
        duration: "45 min",
        title: "Startup: how to build a team that will live longer than a year",
        description: "Nisi, massa ut sit faucibus et diam. Faucibus at malesuada at justo scelerisque in nisi, urna...",
        buttonKey: `blog_watch`,
        link: "https://createx.createx.studio/online-courses/blog-single.html"
    }
];

// Posts map
let blogSlide = document.querySelector(".blog-slide");
if (blogSlide) {
    blogSlide.innerHTML = latestPosts.map(post => `
        <div class="swiper-slide group">
            <div class="w-full relative overflow-hidden rounded-sm">
                <a href="${post.link}"><img class="w-full group-hover:scale-110 transition ease duration-300 inline-block " src="${post.image}" alt="post-image"></a>
                <span class="absolute left-3 top-3 p-1 rounded-sm bg-white text-secondary-text flex items-center gap-1">
                    ${post.typeIcon} ${post.type}
                </span>
            </div>

            <div>
                <div class="flex justify-start mt-2 text-third-text gap-3 text-sm sm:text-md">
                    <p>${post.category}</p>|
                    <p>${post.date}</p>
                    <p>|</p>
                    <p>${post.duration}</p>
                </div>

                <div class="mt-2">
                    <h3 class="text-xl text-primary-text font-bold mb-3 hover:text-primary transition-ease duration-300"><a href="${post.link}">${post.title}</a></h3>
                    <p class="mb-4 text-third-text">${post.description}</p>
                </div>

                <div>
                    <!-- BU YERDA getTranslation ishlatilishi shart -->
                    <a href="${post.link}" class="font-bold hover:text-primary transition-ease duration-300">${getTranslation(post.buttonKey)}</a>
                    <i class="fa-solid fa-arrow-right-long text-primary ml-3"></i>
                </div>
            </div>
        </div>
    `).join("");
}

// Qolgan menyu va sidebar funksiyalari o'zgarishsiz qoladi...
let dropdownBtns = document.querySelectorAll(".dropdown-btn"),
    menuBtn = document.querySelector(".menu-btn"),
    menu = document.querySelector(".menu"),
    header = document.querySelector("header"),
    sidebar = document.querySelector(".sidebar"),
    scroller = document.querySelector(".scroller"),
    forDisplayNone = document.querySelector(".for-display-none"),
    sideBtn = document.querySelector(".side-btn"),
    closeBtn = document.querySelector(".close-btn"),
    backTop = document.querySelector(".back-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 88) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("open");
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark text-[25px] text-secondary-text cursor-pointer"></i>';
        if (!menu.classList.contains("open")) {
            menuBtn.innerHTML = '<i class="fa-solid fa-bars text-[20px] text-secondary-text cursor-pointer"></i>';
        }
    });
}

dropdownBtns.forEach((btn) => {
    const submenu = btn.nextElementSibling;
    if(submenu) {
        btn.addEventListener("click", () => {
            submenu.classList.toggle("open");
            submenu.classList.toggle("hidden");
        });
    }
});

if (sideBtn) {
    sideBtn.addEventListener("click", () => {
        forDisplayNone.classList.toggle("hidden");
        setTimeout(() => {
            scroller.classList.toggle("open-sidebar");
            sidebar.classList.toggle("opacity-100");
        }, 10);
    });
}

if (sidebar) {
    sidebar.addEventListener("click", (e) => {
        if (e.target !== sidebar) return;
        scroller.classList.remove("open-sidebar");
        sidebar.classList.remove("opacity-100");
        sidebar.classList.add("opacity-0");
        setTimeout(() => {
            forDisplayNone.classList.add("hidden");
        }, 500);
    });
}

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        scroller.classList.remove("open-sidebar");
        sidebar.classList.remove("opacity-100");
        sidebar.classList.add("opacity-0");
        setTimeout(() => {
            forDisplayNone.classList.add("hidden");
        }, 500);
    });
}

if (backTop) {
    backTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}