/*
Botões
*/
var btnInsert = document.getElementById("btnInserir");
var btnRemove = document.getElementById("btnRemover");

storedNames = 0;

var tasks = [];

//resgatar valores salvos no LocalStorage
storedNames = JSON.parse(localStorage.getItem("tasks"));
if (storedNames != null)
  storedNames.forEach(function (element, index) {
    tasks.push(element);
    i = index;
    update(i);
  });


//inserir elemento na página
function update() {
  const task = document.createElement("li");
  task.setAttribute(`class`,`tks`);
  task.innerHTML = tasks[i];
  document.getElementById("itens").appendChild(task);

}

//inserir tarefa
const insertTask = btnInsert.addEventListener("click", () => {

  const txtTaskValue = document.getElementById("textTarefaValor");
  text = "- " + txtTaskValue.value;

  console.log(tasks)
  save(text, tasks)
})

//salvar na tarefa no localStorage
function save() {
  tasks.push(text);
  localStorage.setItem("tasks", JSON.stringify(tasks))
  setTimeout(() => window.location.reload(), 500);
}

//remover tarefa
const removeTask = btnRemove.addEventListener("click", () => {
  const list = document.getElementById("itens");
  document.getElementById("itens").removeChild(list.lastChild);
  console.log(tasks)
  tasks.splice(-1, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks))
})


