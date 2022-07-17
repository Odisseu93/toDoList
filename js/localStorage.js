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

