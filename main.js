const lista = document.querySelector('.lista');
const botoes = document.querySelectorAll('.botao')

botoes.forEach((elemento) => {
    elemento.addEventListener("click", () => {
        if (elemento.dataset.funcao === "mostrar") {
            lista.classList.remove("visibilidade");
        } else if (elemento.dataset.funcao === "ocultar") {
            lista.classList.add("visibilidade")
        }
    })
})