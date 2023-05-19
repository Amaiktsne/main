function adicionarTarefa() {
    var tarefaInput = document.getElementById("tarefaInput");
    var tarefaTexto = tarefaInput.value;

    if (tarefaTexto === "") {
    alert("Digite uma tarefa");
    return;
    }

    var listaTarefas = document.getElementById("listaTarefas");

    var novaTarefa = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = function() {
    if (checkbox.checked) {
        novaTarefa.classList.add("completed");
    } else {
        novaTarefa.classList.remove("completed");
    }
    };

    var label = document.createElement("label");
    label.innerText = tarefaTexto;

    novaTarefa.appendChild(checkbox);
    novaTarefa.appendChild(label);

    listaTarefas.appendChild(novaTarefa);

    tarefaInput.value = "";
}