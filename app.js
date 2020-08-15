const headingTitle = (title) => {
    const heading = document.querySelector("#up");
    if (typeof title === 'string') {
        heading.textContent = title;
    } else {
        alert("Your title is not type of string");
        // console.error("Your title is not type of string");
    }
}
headingTitle ("Create New Title here!");

// Collect UI element for todos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearBtn = document.querySelector("#clear-todos");

todoForm.addEventListener("submit", addTodo);

function addTodo(e) {
    e.preventDefault();
    // Create element li with DOM
    const li = document.createElement("li");
    // Add class to element li
    li.className = "list-group-item d-flex justify-content-between align-items-center mb-1";
    // Add child (value) to element li
    li.appendChild(document.createTextNode("Value yang di input"));

    // Create element a with DOM
    const a = document.createElement("a");
    a.href = "#";
    a.className = "badge badge-danger";
    a.innerHTML = "Delete";

    // input element a to li children
    li.appendChild(a); 
    console.log(li);
}
