let todoInput = document.getElementById("todo-input");
let addBtn = document.getElementById("add-btn");
let todoList = document.getElementById("todo-list");

// let lists = [
//     {name: "Task 1", isCompleted: true},
//     {name: "Task 2", isCompleted: false},
//     {name: "Task 3", isCompleted: false},
// ]

let lists = JSON.parse(localStorage.getItem("Daily-Todo")) || [];
renderTasks();

function renderTasks(){

    todoList.innerHTML = '';  

    lists.forEach(function(item, index){
        todoList.innerHTML += `<li>
                                    <span class="${item.isCompleted ? 'completed' : ""}" onclick="toggleCompleted(${index})"> ${item.name}</span>
                                    <button class="delete-btn" onclick=deleteTask(${index})>Delete</button>
                                </li>`;
    });
}
// create a task
addBtn.addEventListener("click",function(){
    if(todoInput.value === ''){
        return;
    }
    let item = {name:todoInput.value, isCompleted: false};
    lists.push(item);
    localStorage.setItem("Daily-Todo", JSON.stringify(lists));
    renderTasks();
    todoInput.value = '';
});

// mark as complete and undo
function toggleCompleted(position) {
    lists[position].isCompleted = !lists[position].isCompleted ;
    localStorage.setItem("Daily-Todo", JSON.stringify(lists));
    renderTasks();
}

// delete a task
function deleteTask(position){
    lists.splice(position, 1);
    localStorage.setItem("Daily-Todo", JSON.stringify(lists));
    renderTasks();
}