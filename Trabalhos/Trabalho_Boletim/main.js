const form = document.getElementById('form_atividade');
const imgAprovado = '<img src="./Midias/aprovado.png" alt="Aprovado"/>';
const imgReprovado = '<img src="./Midias/reprovado.png" alt="Reprovado"/>';

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome_atividade');
    const inputNotaAtividade = document.getElementById('nota_atividade');

    // alert(`Atividade: ${inputNomeAtividade.value}) - Nota: $(inputNotaAtividade.value)

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade >= 7 ? imgAprovado: imgReprovado}</td>`;
    linha += '</tr>'
    linhas += linha;

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;

    inputNomeAtividade.value = ' ';
    inputNotaAtividade.value = ' ';

})
