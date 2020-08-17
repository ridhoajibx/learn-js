const headingTitle = (title) => {
    const heading = document.querySelector("#up");
    if (typeof title === 'string') {
        heading.textContent = title;
    } else {
        alert("Your title is not type of string");
        // console.error("Your title is not type of string");
    }
}
headingTitle ("Learn JavaScripts more deeply");

// Collect UI element for todos

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearBtn = document.querySelector("#clear-todos");

// Ini adalah kumpulan EventListerner
immediateLoadEventListener();
function immediateLoadEventListener() {
    
    // mendapatkan todo yang berada dalam local storage dan di render ke dalam browser
    document.addEventListener("DOMContentLoaded", getTodos);
    // ini adalah event untuk menambahkan todo
    todoForm.addEventListener("submit", addTodo);
    // ini adalah event untuk menghapus 1 todo
    todoList.addEventListener("click", deleteTodo);
    // ini adalah event untuk menghapus keseluruhan todo
    clearBtn.addEventListener("click", clearTodos);
    // ini adalah event untuk memfilter todo
    filterInput.addEventListener("keyup", filterTodos); //method keyup is to search query or data from up to down and back to up again by typing
}

// Reuseable codes w/ funtion (refactor)
function createTodosElement(value) {
    // Create element li with DOM
    const li = document.createElement("li");
    // Add class to element li
    li.className = "todo-item list-group-item d-flex justify-content-between align-items-center mb-1";
    // Add child (value) to element li
    li.appendChild(document.createTextNode(value));

    // Create element a with DOM
    const a = document.createElement("a");
    a.href = "#";
    a.className = "badge badge-danger delete-todo";
    a.innerHTML = "Delete";

    // input element a to li children
    li.appendChild(a);

    // add elemen li to todoList element
    todoList.appendChild(li);
}

function getTodosFromLocalStorage() {
    let todos;

    if (localStorage.getItem("todos") == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

// Ini adalah DOM Functions
function getTodos() {
    const todos = getTodosFromLocalStorage();

    todos.forEach((todo) => {
        createTodosElement(todo);
    })
}

function addTodo(e) {
    e.preventDefault();
    if (todoInput.value) {
        createTodosElement(todoInput.value);
        addToLocalstorage(todoInput.value);

        todoInput.value = "";
    } else {
        alert("Todo cannot empty!");
    }
}

function addToLocalstorage(todoInputValue) {
    const todos = getTodosFromLocalStorage();
    todos.push(todoInputValue);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(e) {
    e.preventDefault();
    // Conditional to delete todolist
    if (e.target.classList.contains("delete-todo")) {
        // show alert
        if (confirm(`Are you sure to delete?`)) {
            const parent = e.target.parentElement;
            parent.remove();
            deleteTodoLocalStorage(parent);
        }
    }
}

function deleteTodoLocalStorage(deleteElement) {
    const todos = getTodosFromLocalStorage();

    todos.forEach((todo, index) => {
        if (deleteElement.firstChild.textContent === todo) {
            todos.splice(index, 1);
        }
    })
    localStorage.setItem("todos", JSON.stringify(todos));


}

function clearTodos() {
    todoList.innerHTML = "";
    clearTodosLocalStorage();
}

function clearTodosLocalStorage() {
    localStorage.clear();
}

function filterTodos(e) {
    const filterText = e.target.value.toLowerCase();
    const todoItems = document.querySelectorAll(".todo-item");

    todoItems.forEach((item)=> {
        const itemText = item.firstChild.textContent.toLowerCase();
        if (itemText.indexOf(filterText) !== -1) {
            item.setAttribute("style", "display:block;")
        } else {
            item.setAttribute("style", "display:none!important;")
        }
    })
}