//classe para a tarefa
class Tarefa {
  constructor(input) {
    this.mensagem = input.value;
    this.class = "ToDoList__lista-tarefas__item";
  }
  
  tarefaEhvalida() {
    const reg = new RegExp('(\\s)' + this.mensagem + '(\\s)', 'i');
    //https://stackoverflow.com/questions/17863066/why-do-regex-constructors-need-to-be-double-escaped

    if (toDoList.textContent.search(reg) < 0) return true
    else return false

  }
}



