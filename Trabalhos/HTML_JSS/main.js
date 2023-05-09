function validarFormulario() {

var campoA = parseFloat(document.getElementById("campoA").value);
var campoB = parseFloat(document.getElementById("campoB").value);

if (campoB > campoA) {

    alert("Formulário válido!");
} else {

    alert("O número B deve ser maior que o número A.");
}

}
