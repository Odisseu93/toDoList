const btnAlterar = document.querySelector('#btnAlterar');
const btnCancelar = document.querySelector('#btnCancelar');
const alteracaoForm = document.querySelector('#alteracaoForm');
let tarefaSelecinada = [];

let intervalId;
let tempoClickPres = 0;


//função para observar o tempo que a tecla ficou pressionada
toDoList.addEventListener('mousedown', function (e) {
  tarefaSelecinada = e.target;
  intervalId = setInterval(function () {
    tempoClickPres++;
    console.log(tempoClickPres);
  }, 200);


})


//chamando o formulário de alteração de trefas
toDoList.addEventListener("mouseup", function () {
  clearInterval(intervalId);
  if (tempoClickPres >= 2) {
    formToDoList.classList.add('display-none'); //oculta o form da todo list
    alteracaoForm.classList.remove('display-none'); //exibe o form para a alteracao de tarefas
    alteracaoForm.input.value = tarefaSelecinada.textContent.replace(/-\s*/, ""); // recupera o valor da tarefa subtituindo os espaços vazios
  }
  tempoClickPres = 0;
});


btnAlterar.addEventListener('click', () => {
  if (alteracaoEhvalida()) {
    tarefaSelecinada.innerText = `- ${alteracaoForm.input.value}`
    formToDoList.classList.remove('display-none'); //oculta o form da todo list
    alteracaoForm.classList.add('display-none'); //exibe o form para a alteracao de tarefas
    tarefaSelecinada.classList.remove('line-through');
    tarefaSelecinada.classList.add('alterado');
    setTimeout(function(){
      tarefaSelecinada.classList.remove('alterado');//efeito na tarefa que foi selecionada
      atualizarLocalStorage()
    },2000)
    tempoClickPres = 0;

  } 
});

//validação de tarefas
function alteracaoEhvalida() {
  const reg = new RegExp(alteracaoForm.input.value.replace(/\s{2,}/g,'') , 'i'); //provisório
  console.log(reg.test(toDoList.textContent));
  if (reg.test(toDoList.textContent)) return false
  else return true

}


btnCancelar.addEventListener('click', () => {
  formToDoList.classList.remove('display-none'); //oculta o form da todo list
  alteracaoForm.classList.add('display-none'); //exibe o form para a alteracao de tarefas
  tempoClickPres = 0;
});


