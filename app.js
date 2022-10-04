const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

todoBtn.addEventListener("click", addTodo)

function addTodo(event){

   // prevent form from submitting
   event.preventDefault();

   // create todo div

   const todoDiv = document.createElement("div");
   todoDiv.classList.add("todo");
   
   // create li 
   const newTodo = document.createElement("li");
   newTodo.innerText = "hey";
   newTodo.classList.add("todo-item");
   todoDiv.appendChild(newTodo);

   // check mark button

   const completedBtn =  document.createElement("button");
   completedBtn.innerHTML = '<i class = "fas fa-check"></i>';
   completedBtn.classList.add("complete-btn");
   todoDiv.appendChild(completedBtn);

 // check trash button

   const trashBtn =  document.createElement("button");
   trashBtn.innerHTML = '<i class = "fas fa-trash"></i>';
   trashBtn.classList.add("complete-btn");
   todoDiv.appendChild(trashBtn);

   // append to list

todoList.appendChild(todoDiv);
   
   

}