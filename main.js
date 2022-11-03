//Declaracao de referencias
const controle = document.querySelectorAll('.controle-ajuste');
const braco =document.querySelector('#braco');

//Funcoes
function manipulaDados (operacao) {
    if(operacao === "-") {
        braco.value = parseInt(braco.value) - 1;
    }
    else if (operacao === "+") {
        braco.value = parseInt(braco.value) + 1;
    }
}

//Chamando funcoes
controle.forEach( (element) => {
    element.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent)
    })
});
