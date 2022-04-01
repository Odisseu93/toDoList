/*
Botões
*/
var btnInsert = document.getElementById("btnInserir");
var btnRemove = document.getElementById("btnRemover");

storedNames = 0;

var tasks = [];

storedNames = JSON.parse(localStorage.getItem("tasks"));
if (storedNames != null)
  storedNames.forEach(function (element, index) {
    tasks.push(element);
    i = index;
    update(i);
  });

function update() {
  const task = document.createElement("li");
  task.innerHTML = tasks[i];
  document.getElementById("itens").appendChild(task);

}

const insertTask = btnInsert.addEventListener("click", () => {

  const txtTaskValue = document.getElementById("textTarefaValor");
  text = "- " + txtTaskValue.value;

  console.log(tasks)
  save(text, tasks)
})

function save() {
  tasks.push(text);
  localStorage.setItem("tasks", JSON.stringify(tasks))
  setTimeout(() => window.location.reload(), 500);
}

const removeTask = btnRemove.addEventListener("click", () => {
  const list = document.getElementById("itens");
  document.getElementById("itens").removeChild(list.lastChild);
  console.log(tasks)
  tasks.splice(-1, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks))
})

