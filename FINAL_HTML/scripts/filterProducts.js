//captureText para que imprima por consola “capturado”. 
const captureText = () => {
    console.log('capturado');
}

// definir una variable searchSelector
let searchSelector = document.querySelector("#search");
//Agregar evento
searchSelector.addEventListener("keyup", captureText);