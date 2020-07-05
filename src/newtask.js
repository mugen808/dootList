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
    const itemNotes = document.querySelector('#description')
    
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
    console.log(projectsArray)
}

const addTaskButton = document.querySelector('#addTaskButton');
addTaskButton.addEventListener("click", createNewProject)




// empty existing project/new project field when one/another is selected
const projects = document.querySelector('#projects');
const formNewProject = document.querySelector('#new-project');
projects.addEventListener("click", () => {
    formNewProject.value = "";
})
formNewProject.addEventListener("click", () => {
    projects.selectedIndex = 0;
})

export { createNewProject, projectsArray }