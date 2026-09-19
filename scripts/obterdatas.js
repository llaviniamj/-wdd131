// Preenche o ano atual dinamicamente no footer
const campoAno = document.querySelector("#anoatual");
if (campoAno) {
    const anoAtual = new Date().getFullYear();
    campoAno.textContent = anoAtual;
}

// Preenche a data da última modificação do documento no footer
const campoUltimaModificacao = document.querySelector("#ultimaModificacao");
if (campoUltimaModificacao) {
    campoUltimaModificacao.textContent = `Última Modificação: ${document.lastModified}`;
}