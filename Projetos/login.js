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