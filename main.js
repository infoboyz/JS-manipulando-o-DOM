//Declaracao de referencias
const controle = document.querySelectorAll('[data-controle]');

//Funcoes
function manipulaDados (operacao, controle) {
    const peca = controle.querySelector('[data-contador]');
    
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
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    })
});
