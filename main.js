const sub = document.querySelector('#subtrair');
const add = document.querySelector('#somar');
const braco =document.querySelector('#braco');

add.addEventListener("click", (evento) => {
    braco.value = parseInt(braco.value) + 1;
})

sub.addEventListener("click", (evento) => {
    braco.value = parseInt(braco.value) - 1;
})