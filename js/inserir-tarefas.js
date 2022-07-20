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
    const input = document.querySelector('#textTarefaValor');
    const mensagemOriginal = 'Insira a sua tarefa aqui!'
    const erroEntradaInvalida = 'Insira uma Tarefa!';

    //monstra mensagem no placeholder e faz uma animação no input
    input.placeholder = erroEntradaInvalida
    input.classList.add('invalid');

    setTimeout( ()=>{
      input.classList.remove('invalid');
      input.placeholder = mensagemOriginal;
    }
    ,2000)// tempo seta em 2s

  }
});


// função para inserir a tarefa pelo botão
input.addEventListener('keypress', (e) => {
  const valorInput = e.target.value;
  const tecla = e.key;
  const tarefa = new Tarefa(input);// instancia da classe Tarefa

  if ((tecla === 'Enter') && (valorInput != '')) { // insere uma tarefa caso o input não esteja vazio
    e.preventDefault();
    const tarefaHTML = `
    <li class=${tarefa.class}>- ${tarefa.mensagem} </li> 
    `
    atualizarUl(tarefaHTML);

    input.value = ''; //limpando o input 
    input.focus(); //autofocus
  } else if ((tecla === 'Enter') && (valorInput === '')) {
    e.preventDefault();
    const input = document.querySelector('#textTarefaValor');
    const mensagemOriginal = 'Insira a sua tarefa aqui!';
    const erroEntradaInvalida = 'Insira uma Tarefa!';

    input.placeholder = erroEntradaInvalida
    input.classList.add('invalid');

    setTimeout( ()=>{
      input.classList.remove('invalid');
      input.placeholder = mensagemOriginal;
    }
    ,2000)// tempo seta em 2s

  }
});
