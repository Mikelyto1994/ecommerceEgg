//captureText para que imprima por consola “capturado”. 
const captureText = (event) => {
    console.log(event);
    console.log(`Capturado: ${event.target.value}`);
}

// definir una variable searchSelector
let searchSelector = document.querySelector("#search");
//Agregar evento
searchSelector.addEventListener("keyup", event=>captureText(event));