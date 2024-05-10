
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 200) {
      navbar.style.backgroundColor = '#FDE9E9'; // Cambiar a color sólido cuando el scroll pase los 200px
    } else {
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Mantener transparente por defecto
    }
  });

  window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 200) {
      navbar.style.position = 'fixed'; // Cambiar posición a fijo después de desplazarse 200px
      navbar.style.top = '0'; // Mantener en la parte superior de la ventana
    } else {
      navbar.style.position = 'absolute'; // Volver a la posición absoluta cuando no se haya desplazado lo suficiente
      navbar.style.top = '200px'; // Espacio de 200px desde la parte superior
    }
  });

/**
 * BARRA DE NAVEGACION
 */
//seleccionar con el método getElementById la etiqueta correspondiente donde se renderizará la barra de navegación.
const navSelector = document.getElementById("navbar");

//creando una variable options y la modificamos para el footer
const options = [
    {title: "Ofertas", linkTo: "./outlet.html", opts: ["Laptops", "Audio", "Auriculares"]},
    {title: "Cómo comprar", linkTo: "./how.html", opts: ["Formas de pago", "Envíos", "Devoluciones"]},
    {title: "Costos y tarifas", linkTo: "./taxs.html", opts: ["Impuestos", "Facturacion"]},
    {title: "Mis pedidos", linkTo: "./orders.html", opts: ["Pedir nuevamente", "Lista de deseos"]},
    {title: "Garantía", linkTo: "./warranty.html", opts: [""]},
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

/**
 * PIE DE PAGINA
 */
//seleccionar con el método getElementById la etiqueta correspondiente donde se renderizará el footer.
const footerSelector = document.querySelector("#footer");

//iteracion con un for of
for (let option of options) {
    //crear un elemento
    let anchor = document.createElement("ul");
    //asignarle un nombre de clase
    anchor.className = "footer-ul";
    //agregar un il
    let li = document.createElement("li");
    //asignarle una clase
    li.className = "footer-main-item";
    //crear una etiqueta a
    let a = document.createElement("a");
    //asignarle un nombre de clase
    a.className = "footer-a";
    //asignarle un texto
    a.textContent = option.title;
    //asignarle un href
    a.href = option.linkTo;

    //agregar al li
    li.appendChild(a);
    //agregar a la ul
    anchor.appendChild(li);

    //iteracion con un for of
    for (let opt of option.opts) {
        //crear un li
        let li = document.createElement("li");
        //asignarle una clase
        li.className = "footer-li";
        //crear una etiqueta a
        let a = document.createElement("a");
        //asignarle un nombre de clase
        a.className = "footer-a";
        //asignarle un texto
        a.textContent = opt;
        //agregar al li
        li.appendChild(a);
        //agregar a la ul
        anchor.appendChild(li);
    }

    //agregar un hijo
    footerSelector.appendChild(anchor);
}

// Función para actualizar la visibilidad de los elementos del carrito y "Me gusta"
function actualizarVisibilidadElementos() {
  // Obtener la información del usuario del localStorage y parsearla como un objeto JSON
  var usuarioInfo = JSON.parse(localStorage.getItem("usuarioLogueado"));

  // Obtener elementos de los iconos
  var iconoInicioSesion = document.getElementById("inicio-sesion");
  var iconoUsuario = document.getElementById("usuario");
  var iconoCarrito = document.getElementById("cart");
  var iconoFavorito = document.getElementById("favorito");

  // Si hay información de usuario almacenada en el localStorage, considerar que el usuario ha iniciado sesión
  if (usuarioInfo) {
    iconoInicioSesion.style.display = "none"; // Ocultar botón de inicio de sesión
    iconoUsuario.style.display = "block"; // Mostrar icono de usuario
    iconoCarrito.style.display = "block"; // Mostrar icono de carrito
    iconoFavorito.style.display = "block"; // Mostrar icono de favorito
  } else {
    // Si no hay información de usuario, considerar que el usuario no ha iniciado sesión
    iconoInicioSesion.style.display = "block"; // Mostrar botón de inicio de sesión
    iconoUsuario.style.display = "none"; // Ocultar icono de usuario
    iconoCarrito.style.display = "none"; // Ocultar icono de carrito
    iconoFavorito.style.display = "none"; // Ocultar icono de favorito
  }
}

// Llamar a la función de actualización al cargar la página
document.addEventListener("DOMContentLoaded", function() {
  actualizarVisibilidadElementos();
});

