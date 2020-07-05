import { createNewProject, projectsArray } from './newtask';



// change left-menu buttons cosmetic on click
const leftButtons = document.querySelector('.menu')
leftButtons.addEventListener("click", changeButtons)
function changeButtons (e) {
    const currentActive = document.querySelector('.menu-left-active')
    if (e.target.classList.contains("menu-button") && !e.target.classList.contains("menu-left-active")) {
        currentActive.classList.remove('menu-left-active');
        e.target.classList.add("menu-left-active");
    } else if (e.target.parentElement.classList.contains("menu-button") && !e.target.parentElement.classList.contains(".menu-left-active")) {
        currentActive.classList.remove('menu-left-active');
        e.target.parentElement.classList.add("menu-left-active");
    }
}

leftButtons.addEventListener("click", displayPeriod)
function displayPeriod (e) {
    console.log(e.target)
    const title = document.querySelector('#title')
    title.innerHTML = "This week";
}
