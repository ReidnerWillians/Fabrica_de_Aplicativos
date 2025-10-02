
let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let tarefas = []

function adicionarTarefa() {
    if (inputElement.value === '') {
        alert('Digite alguma coisa')
        return false; // Funções podem retornar false para sinalizar que uma operação não teve sucesso ou que uma determinada condição não foi satisfeita. 
    } else {
        let novaTarefa = inputElement.value;
        tarefas.push(novaTarefa);//adicionando valores ao input
        inputElement.value = '';//depois de adicionado, limpa o que foi adicionado
        renderTarefas();
    }    
}

function renderTarefas() {
    listElement.innerHTML = '';

    tarefas.map((todo) => {
        let liElement = document.createElement('li');
        let tarefaText = document.createTextNode(todo);

        liElement.appendChild(tarefaText);
        listElement.appendChild(liElement)
    })    
}
buttonElement.onclick = adicionarTarefa;
