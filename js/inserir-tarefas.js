// função para inserir a tarefa pelo botão
btnInserir.addEventListener('click', () => {
  const valorInput = input.value;
  const tarefa = new Tarefa(input);

  if ((valorInput != '') && (tarefa.tarefaEhvalida())) {
    const tarefaHTML = `
  <li class=${tarefa.class}>- ${tarefa.mensagem} </li> 
  `

    atualizarUl(tarefaHTML);

    input.value = ''; //limpando o input 
    input.focus(); //autofocus
  } 
//tarefas repididas
  else if((!tarefa.tarefaEhvalida()) && (valorInput !='')) { 
    // e.preventDefault();
    const mensagemOriginal = 'Insira a sua tarefa aqui!';
    const erroTarefaJahExiste= 'Esta tarefa já existe!';

    input.value = '';
    input.placeholder = erroTarefaJahExiste
    input.classList.add('invalid');

    setTimeout( ()=>{
      input.classList.remove('invalid');
      input.placeholder = mensagemOriginal;
    }
    ,2000)// tempo seta em 2s

  } 
// input vazio
   else if ((valorInput === '')) {
    const mensagemOriginal = 'Insira a sua tarefa aqui!';
    const erroEntradaInvalida = 'Insira uma Tarefa!';

    input.placeholder = erroEntradaInvalida;
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
  
  if ((tecla === 'Enter') && (valorInput != '') && (tarefa.tarefaEhvalida())) { // insere uma tarefa caso o input não esteja vazio
    e.preventDefault();
    const tarefaHTML = `
    <li class=${tarefa.class}>- ${tarefa.mensagem} </li> 
    `
    atualizarUl(tarefaHTML);

    input.value = ''; //limpando o input 
    input.focus(); //autofocus
  }
  //tarefas repididas
  else if((tecla === 'Enter') && (!tarefa.tarefaEhvalida()) && (input.value !='')) { 
    e.preventDefault();
    const mensagemOriginal = 'Insira a sua tarefa aqui!';
    const erroTarefaJahExiste = 'Esta tarefa já existe!';

    input.value = '';
    input.placeholder = erroTarefaJahExiste;
    input.classList.add('invalid');

    setTimeout( ()=>{
      input.classList.remove('invalid');
      input.placeholder = mensagemOriginal;
    }
    ,2000)// tempo seta em 2s

  } 
  // input vazio
   else if ((tecla === 'Enter') && (valorInput === '')) {
    e.preventDefault();
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
