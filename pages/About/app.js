import { jobData } from "../../data/about/collague.js";
import { cardData } from "../../data/about/collague.js";
import { latestPosts } from "../../data/about/collague.js";
let blogGrid = document.querySelector(".blog-grid-container")

const Teamviewer = document.querySelector(".team-viewer"),
  Teamitem = cardData
    .map(
      (card) => `
    <div class="team-1">
        <div class="flex flex-col mb-10">
          <div class="relative group overflow-hidden rounded-md">
            <img class="w-full" src="${card.img}" alt="team-img-1">
            <div class="absolute inset-0 bg-linear-to-t from-[#1E212C] via-[#1E212C]/40 to-transparent flex items-end justify-end p-5 gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="#" class="text-white/80 hover:text-[#FFFFFF] transition-colors text-lg">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="#" class="text-white/80 hover:text-[#FFFFFF] transition-colors text-lg">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#" class="text-white/80 hover:text-[#FFFFFF] transition-colors text-lg">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>

          </div>
          <div>
            <h4 class="text-[#424551] font-lato text-center text-xl font-bold pt-3">
                ${card.name}
            </h4>
            <p class="text-[#787A80] text-center font-normal font-lato text-base">
              ${card.job}
            </p>
          </div>
        </div>
      </div>
    `,
    )
    .join("");

Teamviewer.innerHTML = Teamitem;



const jobGrid = document.querySelector(".grid-wrapper"),
  JobItem = jobData.map(
    (jobs) => `
  <div>
        <img src="${jobs.img}" class="opacity-40 text-[#000] grayscale hover:grayscale-0  hover:opacity-100  transition duration-300 cursor-pointer" alt="job-1">
      </div>
  `
  ).join("");



jobGrid.innerHTML = JobItem;


  let header = document.querySelector("header")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 88) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

let cardItem = cardData.map(card => `
    <div class="swiper-slide team-1">
        <div class="flex flex-col mb-10">
          <div class="relative group overflow-hidden rounded-md">
            <img class="w-full" src="${card.img}" alt="team-img-1">
            <div class="absolute inset-0 bg-linear-to-t from-[#1E212C] via-[#1E212C]/40 to-transparent flex items-end justify-end p-5 gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="#" class="text-white/80 hover:text-[#FFFFFF] transition-colors text-lg">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="#" class="text-white/80 hover:text-[#FFFFFF] transition-colors text-lg">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#" class="text-white/80 hover:text-[#FFFFFF] transition-colors text-lg">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>

          </div>
          <div>
            <h4 class="text-[#424551] font-lato text-center text-xl font-bold pt-3">
                ${card.name}
            </h4>
            <p class="text-[#787A80] text-center font-normal font-lato text-base">
              ${card.job}
            </p>
          </div>
        </div>
      </div>
`).join("");

if (typeof slideBox !== "undefined") {
  slideBox.innerHTML = cardItem;
}

let blogLatest = latestPosts.map(post => `
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
                                <p>${post.date}</p>
                                <p>|</p>
                                <p>${post.duration}</p>
                            </div>

                            <div class="mt-2">
                                <h3 class="text-xl text-primary-text font-bold mb-3 hover:text-primary transition-ease duration-300"><a href="${post.link}">${post.title}</a></h3>
                                <p class="mb-4 text-third-text">${post.description}</p>
                            </div>

                            <div>
                                <a href="${post.link}" class="font-bold hover:text-primary transition-ease duration-300">${post.button}</a>
                                <i class="fa-solid fa-arrow-right-long text-primary ml-3"></i>
                            </div>
                        </div>
                    </div>
    `).join("");

blogGrid.innerHTML = blogLatest;




 





