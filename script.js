const links = document.querySelectorAll(".transition-link");
const overlay = document.querySelector(".transition-overlay");

links.forEach(link => {
	link.addEventListener("click", e => {
		e.preventDefault();
		const href = link.getAttribute("href");

		overlay.classList.add("active");

		setTimeout(() => {
			window.location.href = href;
		}, 500);
	});
});

window.addEventListener("pageshow", () => {
	overlay.classList.remove("active");
});
