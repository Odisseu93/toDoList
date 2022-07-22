const btnAlterar = document.querySelector('#btnAlterar');
const btnCancelar = document.querySelector('#btnCancelar');
const alteracaoForm = document.querySelector('#alteracaoForm');
let tarefaSelecinada = [];

let intervalId;
let tempoClickPres = 0;


toDoList.addEventListener('mousedown', function (e) {
  tarefaSelecinada = e.target;
  intervalId = setInterval(function () {
    tempoClickPres++;
    console.log(tempoClickPres);
  }, 500);


})


toDoList.addEventListener("mouseup", function () {
  clearInterval(intervalId);
  if (tempoClickPres >= 2) {
    formToDoList.classList.add('display-none'); //oculta o form da todo list
    alteracaoForm.classList.remove('display-none'); //exibe o form para a alteracao de tarefas
    alteracaoForm.placeholder = tarefaSelecinada.textContent.replace('-', ""); // recupera o valor da tarefa
  }
  tempoClickPres = 0;
});




console.log(tarefaSelecinada);
btnAlterar.addEventListener('click', () => {
  if (alteracaoEhvalida(tarefaSelecinada)) {
    tarefaSelecinada.innerText = `- ${alteracaoForm.input.value}`
    formToDoList.classList.remove('display-none'); //oculta o form da todo list
    alteracaoForm.classList.add('display-none'); //exibe o form para a alteracao de tarefas
    tempoClickPres = 0;
    atualizarLocalStorage()
  } 
});

function alteracaoEhvalida() {
  const reg = new RegExp('(\\s)' + alteracaoForm.input.value.replace(/\s{2,}/, '') + '(\\s)', 'i');

  if (toDoList.textContent.search(reg) < 0) return true
  else return false

}


btnCancelar.addEventListener('click', () => {
  // clearInterval(intervalId);
  formToDoList.classList.remove('display-none'); //oculta o form da todo list
  alteracaoForm.classList.add('display-none'); //exibe o form para a alteracao de tarefas
  tempoClickPres = 0;
});


