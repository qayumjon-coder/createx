import { blogdata } from "./blogData.js";

const blogs = document.querySelector(".blog-uchun");
const filterBtns = document.querySelectorAll(".filter-btn");

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
