document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var nick = document.getElementById("nick").value;

    // Verificar se o cadastro é válido
    if (email && password && nick) {
      // Cadastro bem-sucedido, redirecionar para a página principal
    window.location.href = "index.html";
    } else {
      // Cadastro inválido, exibir mensagem de erro
    alert("Algo deu errado. Por favor, preencha todos os campos.");
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var loginNick = document.getElementById("loginNick").value;
    var loginPassword = document.getElementById("loginPassword").value;
    
    function redirectToPage() {
      // Redirecionar para outra página
      window.location.href = "outra_pagina.html";
    }
    if (loginNick && loginPassword) {
    window.location.href = "index.html";
    } else {
    alert("Algo deu errado. Por favor, preencha todos os campos.");
    }
});