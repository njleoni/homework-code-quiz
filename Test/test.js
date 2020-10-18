var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#question-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
var questionObject = [
{
question: "What do you use to check conditions?",
choices: ["if else statement", "variable", "sign language", "puppies"],
answers: "if else statement"},
{
question: "Used to check code in console?",
choices: ["alert", "calculator", "finger puppets", "console log"],
answers: "console log"
},
{
question: "What are loops used for?",
choices: ["make me dizzy", "used to repeat actions", "fruit", "perform similar action in different places of the script"],
answers: "used to repeat actions"
},
{
question: "What term do you use to declare a variable?",
choices: ["var", "trumpet", "param", "notary public"],
answers: "var"
},
{
question: "What is a function used for?",
choices: ["perform similar action in different places of the script", "creat an alert message", "conjuntion junction whats your", "carrots"],
answers: "perform similar action in different places of the script"
},
]

renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = questionObject[0].choices.length;

  // Render a new li for each todo
  for (var i = 0; i < questionObject[0].choices.length; i++) {
    var todo = questionObject[0].choices[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Select";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// function init() {
//   // Write code here to check if there are todos in localStorage
//   var storedTodos = JSON.parse(localStorage.getItem("todos"));

//   // If so, parse the value from localStorage and assign it to the todos variable
//   if (storedTodos !== null) {
//     todos = storedTodos
//   }
//   // Render todos to the DOM
//   renderTodos();
// }

// function storeTodos() {
//   // Add code here to stringify the todos array and save it to the "todos" key in localStorage



// }

// // When form is submitted...
// todoForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   var todoText = todoInput.value.trim();

//   // Return from function early if submitted todoText is blank
//   if (todoText === "") {
//     return;
//   }

//   // Add new todoText to todos array, clear the input
//   todos.push(todoText);
//   todoInput.value = "";

//   // Store updated todos in localStorage, re-render the list
//   storeTodos();
//   renderTodos();
// });

//when an element inside of a todo list is clicked...
todoList.addEventListener('click', function(event){
//   var element = event.target;
    if (questionObject[0].choices[0] === questionObject[0].answers){
        alert("nice");
    }
//   // if that element is a button
//   if (element.matches("button") === true) {
//       alert("nice");
//     //get its data-index value and remove the todo element from the list
//     var index = element.parentElement.getAttribute("data-index");
//     todos.splice(index,1);

//     storeTodos();
//     renderTodos();

//   }
// questionObject[0].choices.addEventListener("click",function(e) {
//         // e.target is our targetted element.
//                     // try doing console.log(e.target.nodeName), it will result LI
//         if(e.target && e.target.nodeName == "LI") {
//             alert("nice");
//             console.log(e.target.id + " was clicked");




})