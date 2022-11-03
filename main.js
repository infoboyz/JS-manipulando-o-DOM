const btNotas = document.querySelector('#calcular');
const resultado = document.querySelector('.resultado');

btNotas.addEventListener("click", () => {
    resultado.innerHTML = "Fui clicado";
})

var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]; 

lista.splice(1,1);

console.log(lista);