import { blogdata } from "./blogData.js";

const blogs = document.querySelector(".blog-uchun");
const filterBtns = document.querySelectorAll(".filter-btn");
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const dropdownBtns = document.querySelectorAll(".dropdown-btn");
const backTop = document.querySelector(".back-top");

function renderBlogs(data) {
	let blogsMap = data.map(blogsItems => `<div class="group ${blogsItems.class || ''}">
						<div class="w-full relative overflow-hidden">
							<a href="${blogsItems.link}"><img class="w-full group-hover:scale-110 transition ease duration-300 inline-block rounded-md" src="${blogsItems.image}" alt="post-image"></a>
							<span class="absolute left-3 top-3 p-1 rounded-sm bg-white text-secondary-text flex items-center gap-1">
								${blogsItems.typeIcon} ${blogsItems.type}
							</span>
						</div>

						<div>
							<div class="flex justify-start mt-2 text-third-text gap-3">
								<p>${blogsItems.category}</p>|
								<p>${blogsItems.date}</p>
								<p>|</p>
								<p>${blogsItems.duration}</p>
							</div>

							<div class="mt-2">
								<h3 class="text-xl text-primary-text font-bold mb-3 hover:text-primary transition-ease duration-300"><a href="${blogsItems.link}">${blogsItems.title}</a></h3>
								<p class="mb-4 text-third-text">${blogsItems.description}</p>
							</div>

							<div>
								<a href="${blogsItems.link}" class="font-bold hover:text-primary transition-ease duration-300">${blogsItems.button}</a>
								<i class="fa-solid fa-arrow-right-long text-primary ml-3"></i>
							</div>
						</div>
					</div>`).join("");

	blogs.innerHTML = blogsMap;
}

filterBtns.forEach(btn => {
	btn.addEventListener("click", () => {
		filterBtns.forEach(b => b.classList.remove("filter-active"));
		btn.classList.add("filter-active");

		const type = btn.dataset.type;
		const filtered = type === "all" ? blogdata : blogdata.filter(item => item.type === type);
		renderBlogs(filtered);
	});
});

renderBlogs(blogdata);


const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 88) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

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