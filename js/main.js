const input = document.querySelector('#textTarefaValor');
const formToDoList = document.querySelector('.frmList');
const toDoList = document.querySelector('#lista_tarefas');
const btnInserir = document.querySelector('#btnInserir');
const btnDeletarTarefas = document.querySelector('#btnDeletarAllTasks');
const ulInstrucoes = document.querySelector('.utilizacao__lista-Acoes');
const tituloInstrucoes = document.querySelector('.utilizacao__titulo');
const body = document.body;


//atualizar a lista
function atualizarUl(tarefa) {
  toDoList.innerHTML += tarefa; // renderiza o conteúdo da lista dinamicamente

  atualizarLocalStorage();
}


//adicionar a efeito line-through(riscado) na tarefa
toDoList.addEventListener("click", (e) => {
  e.target.classList.toggle('line-through');

  atualizarLocalStorage()
})


// mostra as instrucoes
tituloInstrucoes.addEventListener('click', ()=>{
  ulInstrucoes.classList.toggle('mostrar-display');
})