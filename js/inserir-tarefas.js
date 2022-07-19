// função para inserir a tarefa pelo botão
btnInserir.addEventListener('click', () => {
  const valorInput = input.value;

  if (valorInput != '') {
    const tarefa = new Tarefa(input);
    const tarefaHTML = `
  <li class=${tarefa.class}>- ${tarefa.mensagem} </li> 
  `

    atualizarUl(tarefaHTML);

    input.value = ''; //limpando o input 
    input.focus(); //autofocus
  } else {
    const erroEntradaIvalida = 'insira um valor na caixa de entrada !';
    alert(erroEntradaIvalida); //provisório
  }
});


// função para inserir a tarefa pelo botão
input.addEventListener('keypress', (e) => {
  const valorInput = e.target.value;
  const tecla = e.key;

  if ((tecla === 'Enter') && (valorInput != '')) { // insere uma tarefa caso o input não esteja vazio
    e.preventDefault();
    const tarefa = new Tarefa(input);// instancia da classe Tarefa
    const tarefaHTML = `
    <li class=${tarefa.class}>- ${tarefa.mensagem} </li> 
    `
    atualizarUl(tarefaHTML);

    input.value = ''; //limpando o input 
    input.focus(); //autofocus
  } else if ((tecla === 'Enter') && (valorInput === '')) {
    const erroEntradaIvalida = 'insira um valor na caixa de entrada !';
    /*
    exibindo como erro no console.log
    e.preventDefault();
    console.error(erroEntradaIvalida); 
    throw new Error(erroEntradaIvalida) ; //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
    */

    alert(erroEntradaIvalida); //provisório
  }
});
