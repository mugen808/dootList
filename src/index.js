import { createNewProject, projectsArray } from './newtask';
// IMPORT THE RENDER FUNCTION FROM ANOTHER MODULE FOR EACH PERIOD (FOR MAIN SCREEN)?


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

// changes the main screen title and toggles style through selected menu option
const menuButtons = document.querySelectorAll(".menu-button")
    function displayPeriod () {
        const title = document.querySelector('#title')
        title.innerHTML = this.children[1].innerText;
    }
    // iterates through the buttons to attach event listeners 
    for (let i = 0; i < menuButtons.length - 1; i++) {
        menuButtons[i].addEventListener("click", displayPeriod)
    }

// changes project list cosmetics on click
const projectList = document.querySelectorAll(".project");
for (let i = 0; i < projectList.length; i++) {
    projectList[i].addEventListener("click", changeProject)
}
function changeProject(e) {
    const currentProject = document.getElementsByClassName("project selected")
    console.log(currentProject[0])
    if (!e.path[1].classList.contains(".selected") && currentProject[0]) {
        currentProject[0].classList.remove("selected");
        e.path[1].classList.add("selected");
    } else {
        e.path[1].classList.add("selected");
    }
}

