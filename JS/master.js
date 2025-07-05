// loader
// when the page load the loader will hide

window.addEventListener("load", () => {
	const loader = document.querySelector(".content-loader");
	const content = document.querySelector(".container");
	content.style.display = "none"
	loader.style.opacity = 0;
	content.style.display = "block"

	setTimeout(() => {
		loader.style.display = "none";
	}, 200);
});

// ==== Aside ====
// ==== add class active to current page ====
// ckeck when the page loading
window.addEventListener("load", () => {
	// loop for all sections
	sections.forEach((section) => {
		if (section.classList.contains("active-sec")) {
			lis.forEach((li) => {
				li.classList.remove("active");
				if (li.dataset.section == section.classList[0]) {
					li.classList.add("active");
				}
			});
		}
	});
});

// ==== add and remove class active on click event ====

const lis = document.querySelectorAll(`nav li a`);
const sections = document.querySelectorAll(`section`);

// loop for all ul lis
lis.forEach((li, n) => {
	// nest loop for all srction in web
	sections.forEach((section) => {
		// add event click for lis
		li.addEventListener("click", () => {
			// hide all sectoins
			section.classList.remove("active-sec");
			section.classList.remove("back-sec");
			// if click for current section will show
			if (section.classList.contains(li.dataset.section)) {
				section.classList.add("active-sec");
			}

			// add class back-sec to second section
			if (lis[n - 1]) {
				if (section.classList.contains(lis[n - 1].dataset.section)) {
					section.classList.add("back-sec");
				}
			} else {
				if (section.classList.contains(lis[n + 1].dataset.section)) {
					section.classList.add("back-sec");
				}
			}

			// remove class active from all lis
			lis.forEach((li) => {
				li.classList.remove("active");
			});
			// add class active for current li
			li.classList.add("active");
		});
	});
});

// ==== setting of nav-toggle ====
const aside = document.querySelector(".aside");
const navToggle = document.querySelector(".nav-toggle");

// if you click to the nav toggle show the aside or hidde
navToggle.addEventListener("click", (_) => {
	aside.classList.toggle("open");
	navToggle.classList.toggle("open");
});

// if you click out the aside, the aside will hidde
sections.forEach((section) => {
	section.addEventListener("click", (_) => {
		aside.classList.remove("open");
		navToggle.classList.remove("open");
	});
});

// if you click to the any li, the aside will hidde
lis.forEach((li) => {
	li.addEventListener("click", (_) => {
		aside.classList.remove("open");
		navToggle.classList.remove("open");
	});
});

// ==== Home ====
// ==== animation typing ====
const typed = new Typed(".typing", {
	strings: ["", "Front-End Developer", "Web Developer", "Freelancer"],
	typeSpeed: 150,
	BackSpeed: 50,
	loop: true,
});

// === About ====
// ==== progress par ====

let about = document.querySelector(".about");
const progressIn = document.querySelectorAll(`.progress-in`);

lis.forEach((li) => {
	li.addEventListener("click", (_) => {
		if (about.classList.contains("active-sec")) {
			setTimeout((_) => {
				progressIn.forEach((ele) => {
					ele.style.width = `${ele.dataset.progress}%`;
				});
			}, 500);
		} else {
			progressIn.forEach((ele) => {
				ele.style.width = `0%`;
			});
		}
	});
});

// age
let age = document.getElementById("age");

age.textContent = new Date().getFullYear() - 2003;

// ==== progress percent ====
let numPercent = document.querySelectorAll(".skill-percent span");

lis.forEach((li) => {
	li.addEventListener("click", (_) => {
		if (about.classList.contains("active-sec")) {
			numPercent.forEach((ele) => {
				let goal = ele.dataset.percent;
				if (+ele.textContent < +goal) {
					percentFull(ele);
				}
			});
		} else {
			numPercent.forEach((ele) => (ele.textContent = 0));
		}
	});
});

function percentFull(ele) {
	let goal = ele.dataset.percent;

	let count = setInterval((_) => {
		ele.textContent++;

		if (+ele.textContent >= +goal) {
			clearInterval(count);
		}
	}, 1500 / goal);
}

// ==== buttons hire me ====
const hireMe = document.querySelector(".hire");

//open the contant section
hireMe.addEventListener("click", (_) => {
	sections.forEach((section) => {
		section.classList.remove("active-sec");
		sections[4].classList.add("active-sec");

		// add class back-sec to second section
		lis.forEach((li, n) => {
			if (lis[n - 1]) {
				if (section.classList.contains(lis[n - 1].dataset.section)) {
					section.classList.add("back-sec");
				}
			} else {
				if (section.classList.contains(lis[n + 1].dataset.section)) {
					section.classList.add("back-sec");
				}
			}
		});
		lis.forEach((li) => {
			li.classList.remove("active");
			lis[4].classList.add("active");
		});
	});
});

// ==== Portfolio ====
// ==== change the images ====
let imgPor = document.querySelectorAll(`.portfolio img`);
let before = document.querySelectorAll(`.portfolio .before`);
let after = document.querySelectorAll(`.portfolio .after`);

// for left button
before.forEach((ele, n) => {
	ele.addEventListener("click", (_) => {
		// number of photo
		let currentIndex = imgPor[n].src.indexOf(".webp") - 1;
		// letter of photo
		let currentLetter = imgPor[n].src.indexOf(".webp") - 3;

		// not go out of the range
		if (imgPor[n].src[currentIndex] > 1) {
			imgPor[n].src = `img/serv-${imgPor[n].src[currentLetter]}-${--imgPor[n]
				.src[currentIndex]}.webp`;
		} else {
			imgPor[n].src = `img/serv-${imgPor[n].src[currentLetter]}-5.webp`;
		}
	});
});

// for right button
after.forEach((ele, n) => {
	ele.addEventListener("click", (_) => {
		// number of photo
		let currentIndex = imgPor[n].src.indexOf(".webp") - 1;
		// letter of photo
		let currentLetter = imgPor[n].src.indexOf(".webp") - 3;

		// not go out of the range
		if (imgPor[n].src[currentIndex] < 5) {
			imgPor[n].src = `img/serv-${imgPor[n].src[currentLetter]}-${++imgPor[n]
				.src[currentIndex]}.webp`;
		} else {
			imgPor[n].src = `img/serv-${imgPor[n].src[currentLetter]}-1.webp`;
		}
	});
});
