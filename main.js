let theInput = document.querySelector(".add-task input");

let addButton = document.querySelector(".add-task .plus");

let tasksContainer = document.querySelector(".tasks-content");

let noTasksMSG = document.querySelector(".tasks-content .no-tasks-message");

let tasksCount = document.querySelector(".tasks-count span");

let tasksCompleted = document.querySelector(".tasks-completed span");

window.onload = function() {
    theInput.focus();
}

addButton.onclick = function() {
    if(theInput.value == "") {
       // console.log("No Values")
       window.alert("The Input Is Empty")
    }else{
       // noTasksMSG.remove();

       let noTasksMSG = document.querySelector(".tasks-content .no-tasks-message");

      if( document.body.contains(document.querySelector(".tasks-content .no-tasks-message"))) {
        noTasksMSG.remove();
      }

        let mainSpan = document.createElement("span");

        mainSpan.className = "task-box";

        let text = document.createTextNode(theInput.value);

        let deletedSpan = document.createElement("span");

        deletedSpan.className = "delete";

        let textdeleted = document.createTextNode("Delete");

        mainSpan.appendChild(text);

        deletedSpan.appendChild(textdeleted);

        mainSpan.appendChild(deletedSpan);

        tasksContainer.appendChild(mainSpan);

        window.localStorage.setItem("Task Content", theInput.value)

        theInput.value = "";

        theInput.focus();

        calculateTasks();

    }
}


document.addEventListener("click", function(e) {
    if(e.target.className == "delete") {
        e.target.parentNode.remove();

        if(tasksContainer.childElementCount == 0) {
            noTasksToShow();
        }
        calculateTasks();
    }
    if(e.target.classList.contains("task-box")) {
        e.target.classList.toggle("finished")
    }
    calculateTasks();
})

function noTasksToShow() {
    let mySpan = document.createElement("span");

    mySpan.className = "no-tasks-message";

    let myText = document.createTextNode("No Tasks To Show");

    mySpan.appendChild(myText);

    tasksContainer.appendChild(mySpan);
}

function calculateTasks() {

    tasksCount.innerHTML = document.querySelectorAll(".tasks-content .task-box").length;

    tasksCompleted.innerHTML = document.querySelectorAll(".tasks-content .finished").length;
}

let mydiv = document.createElement("div");

mydiv.className = "my-div";

let deletedAllTasks = document.createElement("span");

deletedAllTasks.className = "deleteTasks";

let text = document.createTextNode("Deleted All Tasks");

deletedAllTasks.appendChild(text);

mydiv.appendChild(deletedAllTasks);

let deletedAllFinished = document.createElement("span");

deletedAllFinished.className = "deleteFinish";

let textFinish = document.createTextNode("Deleted All Finish");

deletedAllFinished.appendChild(textFinish);

mydiv.appendChild(deletedAllFinished)

document.body.appendChild(mydiv);

let deleteTasks = document.querySelector(".deleteTasks");

let deleteFinish = document.querySelector(".deleteFinish");

deleteFinish.addEventListener("click", function() {
    if(document.querySelector(".task-box").classList.contains("finished")) {
        (document.querySelector(".task-box")).remove();
    }
})

deleteTasks.addEventListener("click", function() {
    if(!(document.querySelector(".task-box").classList.contains("finished"))) {
        (document.querySelector(".task-box")).remove();
    }
})