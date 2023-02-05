function startApp() {
  console.log(localStorage.getItem('task'));
  // return;
  var savedTask = [];
  var existingTask = JSON.parse(localStorage.getItem('task')) || [];
  console.log(existingTask);

  function createNewTask(name){
    return {name: name, id: (new Date()).getTime(), completed: false};
  }

  function addNewTask(task) {
    let name = task.name;
    let id = task.id;
    let completed = task.completed;
    // console.log(task);
    savedTask.push(task);
    localStorage.setItem('task', JSON.stringify(savedTask));
    var li = document.createElement("li");
    li.className = "taskInfo";
    li.id = 'li-'+id;

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;
    checkbox.name = name + "-" + id;
    checkbox.value = name + "-" + id;
    checkbox.id = "check" + "-" + id;
    checkbox.className = "checkbox";
    checkbox.addEventListener("change", (event) => {
      savedTask = JSON.parse(localStorage.getItem('task')) || [];
      var taskId = (event.target.id).split('-')[1];
      for(let i = 0; i < savedTask.length; i++){
        if(savedTask[i].id == taskId){
          savedTask[i].completed = event.currentTarget.checked;
          break;
        }
      }
      localStorage.setItem('task', JSON.stringify(savedTask));
    });

    var label = document.createElement("label");
    label.htmlFor = "check" + "-" + id;
    label.id = "task-" + id;
    label.appendChild(document.createTextNode(name));

    li.appendChild(checkbox);
    li.appendChild(label);

    return li;
  }
  // task list ul
  var ul = document.createElement("ul");
  ul.id = "task-list";
  ul.className = "task-list";
  for (var i=0; i < existingTask.length; i++) {
    // console.log(existingTask[i]);
    var li = addNewTask(existingTask[i]);
    ul.appendChild(li);
  }

  var container = document.createElement("div");
  container.className = "container";

  var date = new Date();
  var newTaskContainer = document.createElement("div");
  newTaskContainer.className = "task-container";

  var newTaskInput = document.createElement("input");
  newTaskInput.type = "text";
  newTaskInput.className = "input-task";
  newTaskInput.id = "task-" + date.getTime();

  var addNewTaskButton = document.createElement("input");
  addNewTaskButton.type = "button";
  addNewTaskButton.className = "add-new button";
  addNewTaskButton.id = "task-" + date.getTime();
  addNewTaskButton.value = "Add Task";

  addNewTaskButton.addEventListener("click", (event) => {
    var newTask = addNewTask(createNewTask(newTaskInput.value));
    ul.appendChild(newTask);
    newTaskInput.value = "";
  });

  newTaskContainer.appendChild(newTaskInput);
  newTaskContainer.appendChild(addNewTaskButton);
  container.appendChild(newTaskContainer);

  var hr = document.createElement("hr");
  container.appendChild(hr);

  container.appendChild(ul);

  var bottomContainer = document.createElement("div");
  bottomContainer.className = "bottom-container";

  var saveButton = document.createElement("input");
  saveButton.className = "save button";
  saveButton.type = "button";
  saveButton.value = "save";
  saveButton.id = "saveButton";

  var resetButton = document.createElement("input");
  resetButton.className = "reset button";
  resetButton.type = "button";
  resetButton.value = "reset";
  resetButton.id = "resetButton";

  saveButton.addEventListener("click", (event) => {
    console.log(event);
    var x = [];
    console.log(ul);
  });

  bottomContainer.appendChild(saveButton);
  bottomContainer.appendChild(resetButton);
  container.appendChild(bottomContainer);
  var app = document.getElementById("app");
  app.appendChild(container);
}

// app()
