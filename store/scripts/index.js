//declarar variable totalApagar
let totalApagar = 0;

//preguntar cuantos productos va a comprar
let cantidadProductos = Number(prompt("¿Cuantos productos va a comprar?"));

////iteracion con for
for (let i = 0; i < cantidadProductos; i++) {
    //preguntar el nombre
    const nombreProducto = prompt("¿Cual es el nombre del producto?");
    //preguntar cuantos va a comprar
    const cantidad = Number(prompt("¿Cuantos va a comprar?"));
    //preguntar el precio de cada producto
    const precio = Number(prompt("¿Cuanto cuesta el producto?"));
    //Calcular el subtotal
    const subtotal = cantidad * precio;

     totalApagar += subtotal;
}

//Mostrar al usuario el total a pagar
alert(`El total a pagar por la compra es: $${totalApagar}`);