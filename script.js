const botaoCriaTarefa = document.querySelector('#criar-tarefa');
const inputTarefa = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');

function mudaCor(event) {
  const li = document.querySelectorAll('li.elementoLista');

  for (let indexLi = 0; indexLi < li.length; indexLi += 1) {
    li[indexLi].id = '';
  }
  event.target.id = 'selected';
}

function mudaCorTodos() {
  const li = document.querySelectorAll('li.elementoLista');

  for (let index = 0; index < li.length; index += 1) {
    li[index].addEventListener('click', mudaCor);
  }
}

function riscaDesrriscaElemento(event) {
  const li = event.target;
  if (li.className === 'elementoLista completed') {
    li.classList.remove('completed');
  } else {
    li.className = 'elementoLista completed';
  }
}

function riscaDesrriscaTodos() {
  const li = document.querySelectorAll('li.elementoLista');
  for (let index = 0; index < li.length; index += 1) {
    li[index].addEventListener('dblclick', riscaDesrriscaElemento);
  }
}

function criaLiLista() {
  const texto = inputTarefa.value;
  if (texto.length === 0) { alert('Digite uma tarefa'); } else {
    const li = document.createElement('li');
    li.innerText = texto;
    li.className = 'elementoLista';
    listaTarefas.appendChild(li);
    inputTarefa.value = '';
    mudaCorTodos();
    riscaDesrriscaTodos();
  }
}

botaoCriaTarefa.addEventListener('click', criaLiLista);

const butaoApaga = document.querySelector('#apaga-tudo');

function apagaTudo() {
  const li = document.querySelectorAll('li.elementoLista');
  for (let index = 0; index < li.length; index += 1) {
    li[index].remove();
  }
}

butaoApaga.addEventListener('click', apagaTudo);
