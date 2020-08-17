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
todoForm.addEventListener("submit", addTodo);
todoList.addEventListener("click", deleteTodo);
clearBtn.addEventListener("click", clearTodos);
filterInput.addEventListener("keyup", filterTodos); //method keyup is to search query or data from up to down and back to up again by typing

// Ini adalah DOM Functions


function addTodo(e) {
    e.preventDefault();
    if (todoInput.value) {
        // Create element li with DOM
        const li = document.createElement("li");
        // Add class to element li
        li.className = "todo-item list-group-item d-flex justify-content-between align-items-center mb-1";
        // Add child (value) to element li
        li.appendChild(document.createTextNode(todoInput.value));

        // Create element a with DOM
        const a = document.createElement("a");
        a.href = "#";
        a.className = "badge badge-danger delete-todo";
        a.innerHTML = "Delete";

        // input element a to li children
        li.appendChild(a);

        // add elemen li to todoList element
        todoList.appendChild(li);

        addToLocalstorage(todoInput.value);

        todoInput.value = "";
    } else {
        alert("Todo cannot empty!");
    }
}

function addToLocalstorage(todoInputValue) {
    let todos;

    if (localStorage.getItem("todos") == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
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
        }
    }
}

function clearTodos() {
    todoList.innerHTML = "";
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