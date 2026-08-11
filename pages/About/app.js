import { jobData, blogImg, cardData, latestPosts } from "../../data/about/collague.js";

let blogGrid = document.querySelector(".blog-grid-container");
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const dropdownBtns = document.querySelectorAll('.dropdown-btn');
const backTop = document.querySelector('.back-top');

// Tilni aniqlash va tarjimani olish uchun yordamchi funksiya
function getTranslation(key) {
  const currentLang = localStorage.getItem('createx_lang') || 'uz';
  if (typeof translations !== 'undefined' && translations[currentLang] && translations[currentLang][key]) {
    return translations[currentLang][key];
  }
  return key;
}

const Teamviewer = document.querySelector(".team-viewer");
if (Teamviewer) {
  Teamviewer.innerHTML = cardData.map((card) => `
    <div class="team-1">
        <div class="flex flex-col mb-10">
          <div class="relative group overflow-hidden rounded-md">
            <img class="w-full" src="${card.img}" alt="team-img-1">
            <div class="absolute inset-0 bg-linear-to-t from-[#1E212C] via-[#1E212C]/40 to-transparent flex items-end justify-end p-5 gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="#" class="text-white/80 hover:text-[#FFFFFF] transition-colors text-lg"><i class="fa-brands fa-facebook"></i></a>
              <a href="#" class="text-white/80 hover:text-[#FFFFFF] transition-colors text-lg"><i class="fa-brands fa-instagram"></i></a>
              <a href="#" class="text-white/80 hover:text-[#FFFFFF] transition-colors text-lg"><i class="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
          <div>
            <h4 class="text-[#424551] font-lato text-center text-xl font-bold pt-3">${card.name}</h4>
            <p class="text-[#787A80] text-center font-normal font-lato text-base">${card.job}</p>
          </div>
        </div>
      </div>
  `).join("");
}

const jobGrid = document.querySelector(".grid-wrapper");
const blogSwiper = document.querySelector(".blog-wrapper");

if (jobGrid) {
  jobGrid.innerHTML = jobData.map((jobs) => `
    <div>
      <img src="${jobs.img}" class="opacity-40 text-[#000] grayscale hover:grayscale-0 hover:opacity-100 transition duration-300 cursor-pointer" alt="job-1">
    </div>
  `).join("");
}

if (blogSwiper) {
  blogSwiper.innerHTML = blogImg.map((blogimages) => `
    <div class="swiper-slide">
      <img src="${blogimages.img}" class="opacity-40 text-[#000] grayscale hover:grayscale-0 hover:opacity-100 transition duration-300 cursor-pointer" alt="job-1">
      <img src="${blogimages.img2}" class="opacity-40 text-[#000] grayscale hover:grayscale-0 hover:opacity-100 transition duration-300 cursor-pointer" alt="job-1">
    </div>
  `).join("");
}

let header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 88) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

if (blogGrid) {
  blogGrid.innerHTML = latestPosts.map(post => `
    <div>
        <div class="w-full relative overflow-hidden">
            <a href="${post.link}"><img class="w-full inline-block hover:scale-[1.1] transition duration-300 ease-in-out" src="${post.image}" alt="post-image"></a>
            <span class="absolute left-3 top-3 p-1 rounded-sm bg-white text-secondary-text flex items-center gap-1">
                ${post.typeIcon} ${post.type}
            </span>
        </div>
        <div>
            <div class="flex justify-start mt-2 text-third-text gap-3">
                <p>${post.category}</p>|
                <p>${post.date}</p>|
                <p>${post.duration}</p>
            </div>
            <div class="mt-2">
                <h3 class="text-xl text-primary-text font-bold mb-3 hover:text-primary transition-ease duration-300"><a href="${post.link}">${post.title}</a></h3>
                <p class="mb-4 text-third-text">${post.description}</p>
            </div>
            <div>
                <a href="${post.link}" class="font-bold hover:text-primary transition-ease duration-300" data-i18n="blog_read_more">${getTranslation('blog_read_more') || 'Read'}</a>
                <i class="fa-solid fa-arrow-right-long text-primary ml-3"></i>
            </div>
        </div>
    </div>
  `).join("");
}

// Menu and submenu opening and closing

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
    menuBtn.innerHTML = '<i class="fa-solid fa-xmark text-[25px] text-secondary-text cursor-pointer"></i>';

    if (!menu.classList.contains("open")) {
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