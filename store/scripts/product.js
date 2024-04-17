class Product {
    //constructor
    constructor(id, name, price, stock, photo, onsale) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.photo = photo;
        this.onsale = onsale;
    }
}

//instanciamos un objeto
const product1 = new Product();
//variable prod2 para crear una instancia de Product con las propiedades id, title y price.
const product2 = new Product("0002", "Tablet", 1200);
//variable prod3 para crear una instancia de Product con todas las propiedades que requiere la clase.
const product3 = new Product("0003", "Smartphone", 800, 5, "https://granhogar.com.ec/imagenes/productos/7988:49:d0?v=0", true);

//impresion por consola
console.log("Productos: ");
console.log(product1);
console.log(product2);
console.log(product3);

console.log(`Nombre del producto 2: ${product2.name}`);
console.log(`Se encuentra en oferta el producto 3: ${product3["onsale"]}`);