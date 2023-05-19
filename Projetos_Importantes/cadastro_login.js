// cadastro//

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

//login//
var dadosCadastro = {};
definirCadastro("", "");

// Função para ler os campos do formulário e validar os dados
function autenticar(event) {
  event.preventDefault(); // Evita o comportamento padrão de envio do formulário

  // Obtém os valores dos campos
var nick = document.getElementById("loginNick").value;
var senha = document.getElementById("loginPassword").value;

  // Verifica se os dados informados coincidem com os dados de cadastro
if (nick === dadosCadastro.nick && senha === dadosCadastro.senha) {
    // Redireciona para a página index.html
    window.location.href = "index.html";
} else {
    // Exibe uma mensagem de erro ou toma a ação desejada
    alert("Dados de login incorretos. Tente novamente.");
    // Limpa os campos do formulário
    document.getElementById("loginNick").value = "";
    document.getElementById("loginPassword").value = "";
}
}

// Função para definir os dados de cadastro
function definirCadastro(nick, senha) {
dadosCadastro.nick = nick;
dadosCadastro.senha = senha;
}