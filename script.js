const botaoCriaTarefa = document.querySelector('#criar-tarefa');
const inputTarefa = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

function criaLiLista() {
  const texto = inputTarefa.value;
  if (texto.length === 0) { alert('Digite uma tarefa'); } else {
    const li = document.createElement('li');
    li.innerText = texto;
    listaTarefas.appendChild(li);
    inputTarefa.value = '';
  }
}

botaoCriaTarefa.addEventListener('click', criaLiLista);
