const addTaskButton = document.querySelector('#addTaskButton');

const projectsArray = [];

function checkPriority () {
    const itemPriority = document.querySelector('.radio').children;
    for (let i = 0; i < itemPriority.length; i++) {
        if (itemPriority[i].children[0].checked) {
            return itemPriority[i].children[1].innerHTML;
        }
    }
    return null;
}

addTaskButton.addEventListener("click", () => {
    const newObject = {};
    const itemTitle = document.querySelector('#item-title');
    const itemDate = document.querySelector('#item-date');
    const newProject = document.querySelector('#new-project');

    // add project value to the object
    const itemProjects = document.querySelector('#projects');
    for (let i = 0; i < itemProjects.children.length; i++) {
        if (itemProjects.children[i].selected && itemProjects.children[i].value) {
            newObject.project = itemProjects.children[i].innerHTML;
        } else if (itemProjects.children[i].selected && !itemProjects.children[i].value && newProject.value) {
            newObject.project = newProject.value;
        }
    }
    

    if (!itemTitle.value || !itemDate.value || !checkPriority()) {
        console.log("Gotcha")
        return false;
    } else {
        newObject.title = itemTitle.value;
        newObject.date = itemDate.value;
        newObject.priority = checkPriority();
    }
    projectsArray.push(newObject);
    console.log(projectsArray)
})
