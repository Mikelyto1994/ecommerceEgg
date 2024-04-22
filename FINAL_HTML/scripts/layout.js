//seleccionar con el método getElementById la etiqueta correspondiente donde se renderizará la barra de navegación.
const navSelector = document.getElementById("navbar");

//creando una variable options
const options = [
    {title: "ofertas", linkTo: "./outlet.html"},
    {title: "Cómo comprar", linkTo: "./how.html"},
    {title: "Costos y tarifas", linkTo: "./taxs.html"},
    {title: "Mis pedidos", linkTo: "./orders.html"},
    {title: "Garantía", linkTo: "./warranty.html"},
]

//Iteracion con un for of
for (let option of options) {
    //crear un elemeto
    let anchor = document.createElement("a");
    //asignarle un nombre de clase
    anchor.className = "nav-a";
    //asignarle un texto
    anchor.textContent = option.title;
    //asignarle un href
    anchor.href = option.linkTo;
    //agregar un hijo
    navSelector.appendChild(anchor);
}