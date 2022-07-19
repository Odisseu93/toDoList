//apagar a tarefa
toDoList.addEventListener("dblclick", (e) => {
  e.target.remove();
  const li = document.querySelectorAll('.ToDoList__lista-tarefas__item');
  if (li.length === 0) localStorage.clear(); //verifica se não tem tem algun item ainda

  atualizarLocalStorage()
})

//apagar todas as tarefas
body.addEventListener("keypress", (e) => {
  const tecla = e.key;

  if (tecla === '!') {
    localStorage.clear();
    window.location.reload();
  }
})

//apagar todas as tarefas (botão)
btnDeletarTarefas.addEventListener('click', () => {
  localStorage.clear();
  window.location.reload();
});