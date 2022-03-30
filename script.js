
/*
Botão para adicionar itens
*/
var btnInsert = document.getElementById("btnInserir");
var btnRemove = document.getElementById("btnRemover");
var cont = 0; //Variárivel para contar os elementos Filhos de #itens
i = 0;
storedNames = 0;

var tasks = [];


storedNames = JSON.parse(localStorage.getItem("tasks")); 
if(storedNames!=null)
storedNames.forEach(element => {
  tasks.push(element); 
  update()
});

// function update() {
//   const task = document.createElement("li");
//     task.innerHTML = tasks[element];
//   document.getElementById("itens").appendChild(task);
  
// }



btnInsert.addEventListener("click", () => {
 

  const txtTaskValue = document.getElementById("textTarefaValor");


  
  
  text = "- " + txtTaskValue.value;
  
  console.log(tasks)
  save(text, tasks)
})

function save() {
tasks.push(text);
localStorage.setItem("tasks",JSON.stringify(tasks))
}

//arrow function https://www.youtube.com/watch?v=S5Mn0qQzJ-0
btnRemove.addEventListener("click",() => {
  const list =  document.getElementById("itens");
  document.getElementById("itens").removeChild(list.lastChild);
})
