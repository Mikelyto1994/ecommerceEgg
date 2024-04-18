// clase Producto
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

//instanciamos Los objetos
const product1 = new Product("001", "Laptop", 1500, 20, "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08484411.png", true, "HP");
const product2 = new Product("002", "Mouse", 20, 50, "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/accessories/wireless-mouse-gt/specs-img.jpg", false, "Genius");
const product3 = new Product("003", "Keyboard", 50, 30, "https://media.wired.com/photos/65b0438c22aa647640de5c75/master/pass/Mechanical-Keyboard-Guide-Gear-GettyImages-1313504623.jpg", true, "Logitech");
const product4 = new Product("004", "Monitor", 300, 10, "https://media.es.wired.com/photos/63b59dd32984c2acd03054a8/16:9/w_1280,c_limit/Samsung-%20Odyssey-Neo-G9-Gaming-Monitor-G95NC.png", false, "Samsung");


//Creamos el array de los productos
let products = [product1, product2, product3, product4];

console.log(products);

//Definiendo variables product5 y product6
const product5 = new Product("005", "Headphones", 100, 25, "https://www.sony.com/image/7d5f0d8f6e3b6f0b1c5e4a5c7e7e3f4d?fmt=pjpeg&wid=330&hei=330&bgcolor=FFFFFF&bgc=FFFFFF", true, "Sony");
const product6 = new Product("006", "Webcam", 70, 15, "https://www.logitech.com/content/dam/logitech/en/products/webcams/streamcam/streamcam-gallery-1.png", false, "Logitech");

//Agregar product5 al inicio del array
products.unshift(product5);

//Agregar product6 al final del array
products.push(product6);

//Imprimir por consola el array
console.log("Array de productos luego de agregar: ");
console.log(products);

//Quitar el primer elemento del array
products.shift();

//Quitar el último elemento del array
products.pop();

//Imprimir por consola el array
console.log("Array de productos luego de quitar: ");
console.log(products);

