const sub = document.querySelector('#subtrair');
const add = document.querySelector('#somar');
const braco =document.querySelector('#braco');

const controle = document.querySelectorAll('.controle-ajuste');

sub.addEventListener("click", () => {
    manipulaDados("sub");
})

add.addEventListener("click", () => {
    manipulaDados("add");
})

function manipulaDados (operacao) {
    if(operacao === "sub") {
        braco.value = parseInt(braco.value) - 1;
    }
    else if (operacao === "add") {
        braco.value = parseInt(braco.value) + 1;
    }
}