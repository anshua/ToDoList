var task = document.querySelector("task");
var para = document.getElementById("para");
var ul = document.querySelector("#task-list");
var tasks = ["React JS", "Angular", "Coding"];
var app = document.querySelector('#app');
// app.appendChild(list);
console.log(app);
function init() {
	app = document.querySelector('#app');
// app.appendChild(list);
console.log(app);
	for (let i = 0; i < tasks.length; i++) {
		var li = createNewTask(tasks[i], i);
		ul = document.getElementById("#task-list");
		ul.appendChild(li);
	}
}

function createNewTask(name, id) {
  console.log(name, id);
  var li = document.createElement("li");
  li.className = "taskInfo";

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = name + "-" + id;
  checkbox.value = name + "-" + id;
  checkbox.id = "check" + "-" + id;
  checkbox.className = "checkbox";

  var label = document.createElement("label");
  label.htmlFor = "check" + "-" + id;
  label.appendChild(document.createTextNode(name));
  li.appendChild(checkbox);
  li.appendChild(label);

  // ul = document.getElementById("task-list");
  // ul.appendChild(li);
  return li;
}

function addTask() {
  var taskName = document.getElementById("task-name").value;
  var li = createNewTask(taskName, tasks.length);
  tasks.push(taskName);
  ul = document.getElementById("task-list");
//   console.log(ul);
  ul.appendChild(li);
}

init();
