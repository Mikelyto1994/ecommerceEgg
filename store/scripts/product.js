class Product {
    //constructor
    constructor(id, name, price, stock, photo, onsale, supplier) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.photo = photo;
        this.onsale = onsale;
        //Atributo privado
        this._supplier = supplier;
    }

    //metodos getter y setter del atributo privado
    get supplier() {
        return this._supplier;
    }

    set supplier(newSupplier) {
        this._supplier = newSupplier;
    }

    // define el método sellUnits para que cumpla los requerimientos
    sellUnits(units) {
        if (units > this.stock) {
            console.log("No hay suficiente stock");
            return;
        }
		this.stock = this.stock - units
	}
}

//instanciamos un objeto
const product1 = new Product();
//variable prod2 para crear una instancia de Product con las propiedades id, title y price.
const product2 = new Product("0002", "Tablet", 1200);
//variable prod3 para crear una instancia de Product con todas las propiedades que requiere la clase.
const product3 = new Product("0003", "Smartphone", 800, 5, "https://granhogar.com.ec/imagenes/productos/7988:49:d0?v=0", true);
//prod4 para crear una instancia de Product con todas las propiedades que requiere la clase. 
const product4 = new Product("0004", "Smartwatch", 300, 10, "https://granhogar.com.ec/imagenes/productos/7988:49:d0?v=0", false, "Samsung");
//variable prod5 para crear una instancia de Product con todas las propiedades que requiere la clase. Debe tener 12 unidades de stock.
const product5 = new Product("0005", "Smartwatch", 300, 12, "https://granhogar.com.ec/imagenes/productos/7988:49:d0?v=0", false, "Samsung");


//modificar valor de atributo privado
product4.supplier = "Samsung Electronics";
//Programa la impresión en consola del getter de prod4. 
console.log(`El proveedor del producto 4 es: ${product4.supplier}`);

//Ejecuta el método sellUnits para vender 10 unidades
product5.sellUnits(10);
//Ejecuta el método sellUnits para vender 5 unidades
product5.sellUnits(5);

//impresion por consola
console.log("Productos: ");
console.log(product1);
console.log(product2);
console.log(product3);
console.log(product4);
console.log(product5);

console.log(`Nombre del producto 2: ${product2.name}`);
console.log(`Se encuentra en oferta el producto 3: ${product3["onsale"]}`);