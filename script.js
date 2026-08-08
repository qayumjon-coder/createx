const contentBox = document.querySelector(".content-box");
let actionBtns = document.querySelectorAll(".action-btn"),
    coursesGrid = document.querySelector(".courses_grid"),
    header = document.querySelector(".header"),
    slideBox = document.querySelector(".slide-box"),
    blogGrid = document.querySelector(".blog-grid-container"),
    dropdownBtns = document.querySelectorAll(".dropdown-btn"),
    drLink1 = document.querySelector(".dr-link"),
    drLink2 = document.querySelector(".dr-link2"),
    drLink3 = document.querySelector(".dr-link3"),
    menuBtn = document.querySelector(".menu-btn"),
    menu = document.querySelector(".menu"),
    showMenu = document.querySelector(".show-menu"),
    showMenu2 = document.querySelector(".show-menu2"),
    showMenu3 = document.querySelector(".show-menu3"),
    toggleMenuBtn = document.querySelector(".toggle-menu-btn"),
    toggleMenuBtn2 = document.querySelector(".toggle-menu-btn2"),
    toggleMenuBtn3 = document.querySelector(".toggle-menu-btn3"),
    backTop = document.querySelector(".back-top");

actionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.add('active');

        btn.parentElement.querySelectorAll(".action-btn").forEach(otherBtn => {
            if (otherBtn !== btn) otherBtn.classList.remove('active');
        });

        const tabKey = btn.dataset.tab;
        if (tabFunctions[tabKey]) tabFunctions[tabKey]();
    });
});

const tabFunctions = {
    tutors: expTutors,
    feedback: feedback,
    library: library,
    community: community
};

function expTutors() {
    contentBox.innerHTML = `
                    <div class="md:w-[50%] w-full md:mr-30">
                        <h2 class="md:text-[32px] text-2xl mb-6 font-black text-primary-text">Only practicing tutors</h2>

                        <p class="text-secondary-text">
                            Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi
                            mauris
                            cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa.
                            Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet
                            enim, nisi tempus vehicula.
                        </p>
                    </div>

                    <div class="md:w-[50%] w-full">
                        <img class="md:w-[85.72%] w-full" src="./images/benefits/01.svg" alt="benefits.img">
                    </div>`;
}

function feedback() {
    contentBox.innerHTML = `
                    <div class="md:w-[50%] w-full md:mr-30">
                        <h2 class="md:text-[32px] text-2xl mb-6 font-black text-primary-text">Always in touch, ready to support</h2>

                        <p class="text-secondary-text">
                            Faucibus erat massa elementum nec fermentum augue. Ante pellentesque dis et malesuada
                            mauris, faucibus est et a. Gravida malesuada ut varius eu pretium vitae eu. Volutpat nullam
                            posuere eget felis at dui neque. Neque vitae, pulvinar donec integer lacus, fermentum,
                            faucibus. Lorem porttitor hendrerit vel interdum arcu arcu mollis massa. Velit nulla felis
                            ornare elit a platea malesuada.
                        </p>
                    </div>

                    <div class="md:w-[50%] w-full">
                        <img class="md:w-[85.72%] w-full" src="./images/benefits/02.svg" alt="benefits.img">
                    </div>`;
}

function library() {
    contentBox.innerHTML = `
                    <div class="md:w-[50%] w-full md:mr-30">
                        <h2 class="md:text-[32px] text-2xl mb-6 font-black text-primary-text">The most carefully selected materials
                        </h2>

                        <p class="text-secondary-text">
                            Senectus magnis diam tellus nibh elit ac ac. Elit eget faucibus urna, feugiat arcu mattis
                            viverra tempor id. Vivamus nunc quam donec non amet nulla etiam ullamcorper posuere.
                            Venenatis commodo molestie eleifend nulla faucibus in. In sed felis adipiscing pharetra,
                            etiam. Molestie euismod consectetur eu sed. Sit magnis sed sed ipsum vulputate pellentesque
                            nullam faucibus.
                        </p>
                    </div>

                    <div class="md:w-[50%] w-full">
                        <img class="md:w-[85.72%] w-full" src="./images/benefits/03.svg" alt="benefits.img">
                    </div>`;
}

function community() {
    contentBox.innerHTML = `
                    <div class="md:w-[50%] w-full md:mr-30">
                        <h2 class="md:text-[32px] text-2xl mb-6 font-black text-primary-text">Student communication
                        </h2>

                        <p class="text-secondary-text">
                            Eu placerat magna elementum nulla egestas id. Non sit enim tortor massa id tristique vel
                            tincidunt sit. Tellus, ridiculus dictum purus nibh sed bibendum. In eleifend ac convallis
                            convallis lectus. Urna semper ac non eros, donec accumsan egestas ipsum. Arcu at morbi.
                        </p>
                    </div>

                    <div class="md:w-[50%] w-full">
                        <img class="md:w-[85.72%] w-full" src="./images/benefits/04.svg" alt="benefits.img">
                    </div>`;
}

// Courses map

let courseItem = courses.map(course => `
                    <a href="#"
                        class="flex flex-col sm:flex-row sm:h-60 border border-[#e5e8ed] shadow-xl shadow-black/4 group hover:shadow-xl hover:shadow-black/10 transition duration-300 transition-ease rounded-sm">
                        <div
                            class="bg-[url(${course.image})] h-100 sm:h-auto bg-center bg-cover w-full sm:w-[40%] rounded-tl-xs rounded-bl-xs">

                        </div>
                        <div class="p-8 sm:w-[60%]" w-full>
                            <span
                                class="inline-block py-1 px-2 mb-4 bg-${course.tagColor} text-white text-sm rounded-md">${course.category}</span>

                            <h5
                                class="group-hover:text-primary transition duration-300 transition-ease text-xl font-bold py-1 mb-4">
                                ${course.name}</h5>

                            <div class="flex items-center gap-1 text-[#e5e8ed]"><span
                                    class="text-primary font-semibold">$${course.price}</span>|<p class="text-[#787A80]">by ${course.by}</p>
                            </div>
                        </div>
                    </a>
    `
).join("");

coursesGrid.innerHTML = courseItem;


// Header scroll event

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

slideBox.innerHTML = cardItem;

let blogLatest = latestPosts.map(post => `
                    <div class="group">
                        <div class="w-full relative overflow-hidden">
                            <a href="${post.link}"><img class="w-full group-hover:scale-110 transition ease duration-300 inline-block " src="${post.image}" alt="post-image"></a>
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
