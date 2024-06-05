const btn = document.querySelector("#btn");
let textBoxContent = document.querySelector("#text-box");
let pendingBox = document.querySelector("#left");
let doneBox = document.getElementById("right");

function AddTask() {
    if (textBoxContent.innerHTML === '') {
        alert("Write Something First!");
    } else {
        console.log("Success");
        console.log(textBoxContent.value);
        let newTask = document.createElement('div');
        newTask.setAttribute("draggable", "true");
        newTask.className = 'task';
        newTask.innerHTML = textBoxContent.innerHTML;
        pendingBox.append(newTask);
        addDragAndDropHandlers(newTask);

    }
}

function addDragAndDropHandlers(task) {
    task.addEventListener("dragstart", function(e) {
        let selected = e.target;

        doneBox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });

        doneBox.addEventListener("drop", function() {
            doneBox.appendChild(selected);
            selected = null;
        });

        pendingBox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });

        pendingBox.addEventListener("drop", function() {
            pendingBox.appendChild(selected);
            selected = null;
        });
    });
}


let lists = document.getElementsByClassName("task");
for (let list of lists) {
    addDragAndDropHandlers(list);
}
