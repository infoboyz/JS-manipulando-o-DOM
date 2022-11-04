//Declaracao de referencias
const controle = document.querySelectorAll('.controle-ajuste');

//Funcoes
function manipulaDados (operacao, controle) {
    const peca = controle.querySelector('.controle-contador');
    
    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    }
    else if (operacao === "+") {
        peca.value = parseInt(peca.value) + 1;
    }
}

//Chamando funcoes
controle.forEach( (element) => {
    element.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
    })
});
