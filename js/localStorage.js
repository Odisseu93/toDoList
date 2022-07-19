dados = JSON.parse(localStorage.dados);

recuperarDados();

function recuperarDados() {
  dados.forEach(tarefa => {
    atualizarUl(tarefa);
    console.log('Dado recuperado:', tarefa);
  });
}

function salvar(tarefas) {
  localStorage.dados = JSON.stringify(tarefas);

}

//função para atulizar os dados no localStorage()
function atualizarLocalStorage() {
  const tarefasHTML = document.querySelectorAll('.ToDoList__lista-tarefas__item');
  const tarefasArray = []
  tarefasHTML.forEach(tarefa => {
    tarefasArray.push(tarefa.outerHTML);
    salvar(tarefasArray);
  });
}
