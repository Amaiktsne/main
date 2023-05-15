const form = document.getElementById("form_dep");
const username = document.getElementById("nome");
const password = document.getElementById("cadeado");
const userError = document.getElementById("usuario");
const passError = document.getElementById("senha");

form.addEventListener("submit", function(event) {
if (username.value !== "usuario_correto") {
    userError.style.display = "block";
    event.preventDefault();
} else {
    userError.style.display = "none";
}

if (password.value !== "senha_correta") {
    passError.style.display = "block";
    event.preventDefault();
} else {
    passError.style.display = "none";
}

if (password.value !== "senha_correta") {
    passError.style.display = "block";
    event.preventDefault();
} else {
    passError.style.display = "none";
}

});

