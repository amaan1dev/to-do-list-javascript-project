const taskItems = document.querySelector("#task-list");
const taskList = document.querySelector("#task-items");
const addTaskBtn = document.querySelector("#add-task-btn");

function addTaskToList(){
    let list = document.createElement("li")
    list.innerHTML = taskItems.value;
    taskList.appendChild(list)
}

addTaskBtn.addEventListener("click", addTaskToList)