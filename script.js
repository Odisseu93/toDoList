
/*
Botão para adicionar itens
*/
var btnInsert = document.getElementById("btnInserir");
var btnRemove = document.getElementById("btnRemover");
var cont = 0; //Variárivel para contar os elementos Filhos de #itens

btnInsert.addEventListener("click",addItems);

function addItems() {
  //criação de objetos para instanciar alguns elementos da página Index.html

  
  
  //seleciona o <input> "type=text" #textTarefaValor
  const txtTaskValue = document.getElementById("textTarefaValor");

  //cria uma variável que recebe o elemento <p>
  const task = document.createElement("li");

  //recuperando o valor do input  
  task.innerHTML = txtTaskValue.value;

  //adiciona filhos a div #itens
  document.getElementById("itens").appendChild(task);
  cont++; //adiona mais um na contagem;
}

/*
botão para remover itens
*/

btnRemove.addEventListener("click",removeItems);


function removeItems() {

  var childOfItens = document.getElementById("itens").childNodes;

  document.getElementById("itens").removeChild(childOfItens[cont]);
  cont--;

}