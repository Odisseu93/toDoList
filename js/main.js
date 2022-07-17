const input = document.querySelector('#textTarefaValor');
const toDoList = document.querySelector('ul');
const btnInserir = document.querySelector('#btnInserir');


// função para inserir a tarefa
btnInserir.addEventListener('click', () => {

  const tarefa = new Tarefa(input);
  const tarefaHTML = `
  <li class=\"tks\"> - ${tarefa.mensagem}</li> 
  `

  atualizarUl(tarefaHTML);

  input.value = ''; //limpando o input 
  input.focus(); //autofocus
});


//atualizar a lista
function atualizarUl(tarefa) {
  toDoList.innerHTML += tarefa; // renderiza o conteúdo da lista dinamicamente

  atualizarLocalStorage();
}

//apagar a tarefas
toDoList.addEventListener("dblclick", (e) => {
  e.target.remove();
  const li = document.querySelectorAll('li');
  if (li.length === 0) localStorage.clear(); //verifica se não tem tem algun item ainda

  atualizarLocalStorage()
})

//adicionar a efeito line-through(riscado) na tarefa
toDoList.addEventListener("click", (e) => {
  e.target.classList.toggle('line-through');

  atualizarLocalStorage()
})

//função para atulizar os dados no localStorage()
function atualizarLocalStorage() {
  const tarefasHTML = document.querySelectorAll('.tks');
  const tarefasArray = []
  tarefasHTML.forEach(tarefa => {
    tarefasArray.push(tarefa.outerHTML);
    salvar(tarefasArray);
  });
}