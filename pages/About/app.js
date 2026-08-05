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
  JobItem = Jobdata.map(
    (jobs) => `
  <div>
        <img src="${jobs.Jobimg}" class="opacity-40 text-[#000] grayscale hover:grayscale-0  hover:opacity-100  transition duration-300 cursor-pointer" alt="job-1">
      </div>
  `
  ).join("");

  jobGrid.innerHTML = JobItem;
