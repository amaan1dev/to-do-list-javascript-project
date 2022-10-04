const taskItems = document.querySelector("#task-list");
const taskList = document.querySelector("#task-items");
const addTaskBtn = document.querySelector("#add-task-btn");

function addTaskToList(){
    let list = document.createElement("li")
    list.innerHTML = taskItems.value;
    taskList.appendChild(list)
    
}

addTaskBtn.addEventListener("click", addTaskToList)

taskItems.addEventListener("keydown", function(event) {
    if (!event) {
       var event = window.event;
    }
       event.preventDefault();
    if (event.keyCode == 13){
       login();
    }
 }, false);
 function login(){
    console.log("submitted successfully....");
 }


function clearTextBox (){
    taskItems.value = "";
}
