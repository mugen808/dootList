const newtaskButton = document.querySelector('#new-task-button')
newtaskButton.addEventListener("click", () => {
    const modalScreen = document.querySelector('.form-modal');
    modalScreen.classList.remove("modalHide");
})

const projectsArray = [];

function getPriority () {
    const itemPriority = document.querySelector('.radio').children;
    for (let i = 0; i < itemPriority.length; i++) {
        if (itemPriority[i].children[0].checked) {
            return itemPriority[i].children[1].innerHTML;
        }
    }
    return null;
}

// returns the selected project or create a new one
function getProject () {
    const itemProjects = document.querySelector('#projects');
    const newProject = document.querySelector('#new-project');

    for (let i = 0; i < itemProjects.children.length; i++) {
        if (itemProjects.children[i].selected && itemProjects.children[i].value && !newProject.value) {
            console.log(itemProjects.children[i].innerHTML)
            return itemProjects.children[i].innerHTML;
        } else if (itemProjects.children[i].selected && !itemProjects.children[i].value && newProject.value) {
            console.log(newProject.value)
            return newProject.value;
        }
    }
}

function createNewProject () {
    const newObject = {};
    const itemTitle = document.querySelector('#item-title');
    const itemDate = document.querySelector('#item-date');
    const itemNotes = document.querySelector('#description');
    const modalScreen = document.querySelector('.form-modal');
    
    // stops user from proceding without the mandatory values
    if (!itemTitle.value || !itemDate.value || !itemNotes.value || !getPriority() || !getProject()) {
        return false;
    
    } else {
        newObject.title = itemTitle.value;
        newObject.date = itemDate.value;
        newObject.priority = getPriority();
        newObject.notes = itemNotes.value;
        newObject.project = getProject();
    }
    projectsArray.push(newObject);
    modalScreen.classList.add("modalHide");
}

const addTaskButton = document.querySelector('#addTaskButton');
addTaskButton.addEventListener("click", createNewProject)




// empty existing project/new project field when one/another is selected
const projects = document.querySelector('#projects');
projects.addEventListener("click", () => {
    formNewProject.value = "";
})
const formNewProject = document.querySelector('#new-project');
formNewProject.addEventListener("click", () => {
    projects.selectedIndex = 0;
})

const closeButton = document.querySelector('#close-modal')
closeButton.addEventListener("click", () => {
    const modalScreen = document.querySelector('.form-modal');
    modalScreen.classList.add("modalHide");
})

export { createNewProject, projectsArray }