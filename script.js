/*
Botões
*/
var btnInsert = document.getElementById("btnInserir");

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
  /*
  adicionando o botão para remover a tarefa
  */
  const btnRemoveTask = document.createElement("input");
  btnRemoveTask.setAttribute("type", "button");
  btnRemoveTask.value = "X";
  btnRemoveTask.style.width = "30px";
  btnRemoveTask.style.height = "30px";
  btnRemoveTask.style.marginLeft = "5px";

  btnRemoveTask.addEventListener('click', () => {
    tks = document.querySelector('.tks');
    const li = btnRemoveTask.parentElement;



    let itemRemove
    // map para encontrar o index da tarefa  
    tasks.map((element, index) => {
      if (element == li.textContent)
        itemRemove = index;
    })

    // removendo o tarefa do array e localstorage 
    // tks.remove();
    tasks.splice(itemRemove, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setTimeout(() => window.location.reload(), 500);
  });


  task.setAttribute(`class`, `tks`);
  task.innerHTML = tasks[i];
  document.getElementById("itens").appendChild(task);
  task.appendChild(btnRemoveTask);
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



