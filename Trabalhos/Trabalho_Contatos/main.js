const formContato = document.getElementById("form_contato");

const tabelaContatos = document.querySelector("table tbody");

formContato.addEventListener("submit", function (event) {
event.preventDefault(); 

const nome = document.getElementById("nome_contato").value;
const email = document.getElementById("email_contato").value;
const telefone = document.getElementById("telefone_contato").value;

const novaLinha = document.createElement("tr");
novaLinha.innerHTML = `
    <td>${nome}</td>
    <td>${email}</td>
    <td>${telefone}</td>
`;

tabelaContatos.appendChild(novaLinha);

formContato.reset();
});


