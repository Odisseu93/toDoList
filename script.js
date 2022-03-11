
/*
Botão para adicionar itens
*/
var btnInsert = document.getElementById("btnInserir");
var btnRemove = document.getElementById("btnRemover");
var cont = 0; //Variárivel para contar os elementos Filhos de #itens

btnInsert.addEventListener("click", () => {
  //criação de objetos para instanciar alguns elementos da página Index.html

  
  
  //seleciona o <input> "type=text" #textTarefaValor
  const txtTaskValue = document.getElementById("textTarefaValor");

  //cria uma variável que recebe o elemento <p>
  const task = document.createElement("li");

  //recuperando o valor do input  
  task.innerHTML = " - " +
  txtTaskValue.value;

  
  //adiciona filhos a div #itens
  document.getElementById("itens").appendChild(task);
  cont++; //adiona mais um na contagem;
  // console.log(document.getElementById("itens").childNodes.length);
})

/*
botão para remover itens
*/

//arrow function https://www.youtube.com/watch?v=S5Mn0qQzJ-0
btnRemove.addEventListener("click",() => {
  const list =  document.getElementById("itens");
  document.getElementById("itens").removeChild(list.lastChild);
})


/*
fazer depois:
- Criar função dentro do <script> do html
- Criar uma class para o Toggle no CSS, contendo a propriedade "text-decoration: line-through"
- Na função adicionar a condição : 
SE (elemento = clicado) então {
                                var element = document.getElementById("idElemento");
                                element.classList.toggle("mystyle");
                                  }
Documentação:
How TO - Toggle Class
link <https://www.w3schools.com/howto/howto_js_toggle_class.asp>

Outras informações:
Fórum: stackoverflow
Link <https://pt.stackoverflow.com/>
Questão:
"Como saber se um elemento foi clicado usando Javascript puro"
Link da pergunta respondida <https://pt.stackoverflow.com/questions/11365/como-saber-se-um-elemento-foi-clicado-usando-javascript-puro#:~:text=Uma%20outra%20op%C3%A7%C3%A3o%20%C3%A9%20adicionar,target%20.&text=Utilize%20o%20document.>
*/
// window.onload = function() {
// 	var allTasks = document.getElementsByTagName("ul");
  
// 	for(var i=0; i<allTasks.length; i++) {
// 		allTasks[i].addEventListener("click",() =>{
//     allTasks[i].classList.add("tksline-through")
      
//     alert('o elemento foi clicado');
//     console.log("o elemento foi clicado");
//     })
//   }
// }  
  