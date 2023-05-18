// cadastro.js

// Função para ler os campos do formulário e redirecionar para a página de login
function cadastrar(event) {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário

    // Obtém os valores dos campos
    var email = document.getElementById("email").value;
    var senha = document.getElementById("password").value;
    var nick = document.getElementById("nick").value;

    // Armazena os dados em um objeto ou envia para o servidor, como preferir
    var dadosCadastro = {
    email: email,
    senha: senha,
    nick: nick
    };

    // Exibe os dados no console (apenas para demonstração)
    console.log(dadosCadastro);

    // Limpa os campos do formulário
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("nick").value = "";

    // Redireciona para a página de login
    window.location.href = "login.html";
}