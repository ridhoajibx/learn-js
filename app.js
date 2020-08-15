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
console.log(todoForm);
