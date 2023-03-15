//Select elements
let form = document.querySelector("#task_form");
let taskList = document.querySelector("ul");
let taskInput = document.querySelector("#new_task");
let taskFilter = document.querySelector("#task_filter");
let clearTask = document.querySelector("#clear_task");

//Define addEventListener
form.addEventListener("submit", addTask);
taskList.addEventListener("click", removeList);
clearTask.addEventListener("click", clearItem);
taskFilter.addEventListener("keyup", filterTask);
document.addEventListener("DOMContentLoaded", getTasks);

//Define functions
//01 - addTask() function
function addTask(e) {
  if (taskInput.value === "") {
    alert("Please add a task!");
  } else {
    //create ele
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(taskInput.value + " ")); //input value
    let link = document.createElement("a");
    link.setAttribute("href", "#");
    link.innerHTML = "x";
    li.appendChild(link);
    taskList.appendChild(li);

    //call
    storeTaskLocalStorage(taskInput.value);

    taskInput.value = "";
  }
  e.preventDefault();
}

//02 - removeList() function
function removeList(e) {
  if (e.target.hasAttribute("href")) { //so didn't work for li
    if (confirm("Are You Sure?")) {
      let ele = e.target.parentElement;
      ele.remove();

      //call
      removeFromLs(ele);
    }
  }
}

//03 - clearItem() function
function clearItem() {
  //taskList.innerHTML = "";
  //or
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }

  localStorage.clear();
}

//04 - filterTask() function
function filterTask(e) {
  let text = e.target.value.toLowerCase(); //user input

  document.querySelectorAll("li").forEach((task) => { //looping for check
    let item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) { //if not get -1
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

//05 - storeTaskLocalStorage(task) function
function storeTaskLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) { 
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task); //tasks push in LS

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//06 - getTasks() function
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks")); //hold saved tasks
  }

  tasks.forEach((task) => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(task + " ")); //input value
    let link = document.createElement("a");
    link.setAttribute("href", "#");
    link.innerHTML = "x";
    li.appendChild(link);
    taskList.appendChild(li);
  });
}

//07 - removeFromLs() function
function removeFromLs(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  let li = taskItem;
  li.removeChild(li.lastChild); //<a>x</a>

  tasks.forEach((task, index) => {
    if (li.textContent.trim() === task) {
      tasks.splice(index, 1); //remove
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}