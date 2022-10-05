const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

todoBtn.addEventListener("click", addTodo)

function addTodo(event) {

   // prevent form from submitting
   event.preventDefault();

   // create todo div

   const todoDiv = document.createElement("div");
   todoDiv.classList.add("todo");

   // create li 
   const newTodo = document.createElement("li");

   // appeding value of entered task into the newTodo li
   newTodo.innerText = todoInput.value;
   newTodo.classList.add("todo-item");
   todoDiv.appendChild(newTodo);

   // check mark button

   const completedBtn = document.createElement("button");
   completedBtn.innerHTML = '<i class = "fas fa-check"></i>submit';
   completedBtn.classList.add("complete-btn");
   todoDiv.appendChild(completedBtn);

   // check trash button

   // insert an emoji inside the todoDiv

   const emojiIcon = document.createElement("div")
   emojiIcon.innerText = "😘";
   emojiIcon.classList.add("emoji-icon");
   todoDiv.appendChild(emojiIcon);

   const trashBtn = document.createElement("button");
   trashBtn.innerHTML = '<i class = "fas fa-trash"></i>';
   trashBtn.classList.add("complete-btn");
   todoDiv.appendChild(trashBtn);

   // append to list

   todoList.appendChild(todoDiv);



}