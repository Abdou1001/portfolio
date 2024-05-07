    // ==== start style switcher toggle (show and hidde it) ====
const styleSwitcherToggle = document.querySelector(`.style-switcher-toggle`);
const switcher = document.querySelector(".style-switcher");

// on click on the icon will open the style switcher 
styleSwitcherToggle.addEventListener("click", _ => {
    switcher.classList.toggle("open");
    styleSwitcherToggle.classList.toggle("fa-spin");
})


    // ==== hidde the style switcher on scroll or click on the screen ====
const sectionsPage = document.querySelectorAll("section");

sectionsPage.forEach(section => {
        //hide on scroll 
        section.addEventListener("scroll", _ => {
            if (switcher.classList.contains("open")){
                switcher.classList.remove("open")
                styleSwitcherToggle.classList.remove("fa-spin")
            }
        })
        
        //hide on click 
        section.addEventListener("click", _ => {
            if (switcher.classList.contains("open")){
                switcher.classList.remove("open")
                styleSwitcherToggle.classList.remove("fa-spin")
            }
        })
    })


    // ==== switcher the colors page ====
const colors = document.querySelectorAll(`.colors span`);

// if click on the color optoins change the page color
colors.forEach(color => {
    // add click event
    color.addEventListener("click", _ => {
        // loop for rove class active from all spans
        colors.forEach(color => {
            color.classList.remove("active")
        })
        // add class active for current sapn
        color.classList.add("active")
        // add the color to the page
        document.documentElement.style.setProperty(`--main-color`, color.dataset.color)
    })
})


    // ==== light and dark mood ====
const divMood = document.querySelector(`.light-dark`);
const iconMood = document.querySelector(`#mood`);

// change the icon in click
divMood.addEventListener("click", _ => {
    // dark mood
    iconMood.classList.toggle("fa");
    iconMood.classList.toggle("fa-moon");
    // light mood
    iconMood.classList.toggle("fa");
    iconMood.classList.toggle("fa-sun");
    // 
    document.body.classList.toggle("dark")
})
// when load the page if in light mood or not
window.addEventListener('load', _ => {
    if (document.body.classList.contains("dark")) {
        iconMood.classList.add("fa")
        iconMood.classList.add("fa-moon")
    }else{
        iconMood.classList.add("fa")
        iconMood.classList.add("fa-sun")
    }
});

