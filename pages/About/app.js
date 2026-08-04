const Teamviewer = document.querySelector(".team-viewer"),
Teamitem = cardData.map(card => `
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
    `).join("")

Teamviewer.innerHTML = Teamitem

const Directionviewer = document.querySelector(".direction-viewer"),
directionItem = directionData.map(direct => `
  <div class="w-full rounded-sm group hover:shadow-xl shadow-[#00000010] transition duration-300">
    <div class="border-[#E5E8ED] border-solid border overflow-hidden rounded-sm">
      <a href="#" class="overflow-hidden h-[215px] inline-block">
        <img src="${direct.img}" class="rounded-sm group-hover:transform group-hover:scale-[1.1] transition-all duration-300">
      </a>
      <div class="hover:shadow-sm bg-[#fff] pt-5">
        <span class="bg-[#03CEA4] text-[#fff] font-lato rounded-sm font-bold ml-6 pt-1 inline-block pr-3 pb-1 pl-3">Marketing</span>
        <p class="font-lato font-normal text-[#424551] p-5">
         ${direct.directText}
        </p>

        <div>
          <div class="pb-5 flex items-center gap-3">
            <a href="#" class="pl-5 hover:text-[#FF3F3A] transition-all duration-300 ease-in font-lato font-bold text-base">${direct.checkBtn}</a>
            <i class="fa-solid fa-arrow-right text-[#FF3F3A]"></i>
          </div>
        </div>
      </div>

    </div>
  </div>
  `).join("")

Directionviewer.innerHTML = directionItem
