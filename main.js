const robotron = document.querySelector('#robotron');

function dizOi () {
    console.log('oi');
}

// robotron.onclick = dizOi;
robotron.addEventListener("click", dizOi)