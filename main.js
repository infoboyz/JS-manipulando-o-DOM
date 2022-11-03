const robotron = document.querySelector('#robotron');

function dizOi (nome) {
    console.log("Oi " + nome);
    console.log('Bem-vindo ao Robotron 2000');
}

// robotron.onclick = dizOi;
robotron.addEventListener("click", (evento) => {
    console.log(evento);
})

dizOi("Pedro");