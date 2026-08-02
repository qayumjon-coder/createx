const contentBox = document.querySelector(".content-box");
let actionBtns = document.querySelectorAll(".action-btn");

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

function community(){
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