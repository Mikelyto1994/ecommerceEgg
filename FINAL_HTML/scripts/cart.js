const $checkoutProducts = document.getElementById('checkoutProducts');
const $checkoutTotal = document.getElementById('checkoutTotal');

const checkoutProductTemplate = (product, index) => {
    const { title, image, color, quantityProduct, price } = product;
    return `
        <article>
            <div>
                <img src="${image}" alt="${title.toUpperCase()}">
                <div>
                    <p><b>${title}</b></p>
                    <p>Color: ${color}</p>
                    <p>Cantidad: 
                    <input type="number" value="${quantityProduct}" min="0" onchange="changeQuantity(event, ${index})">
                    </p>
                    <button class="btn-favorite" onclick="addToFavorites(${index})">Agregar a Favoritos</button>
                    <button class="btn-delete" data-index="${index}">Eliminar</button>
                </div>
            </div>
            <p>Precio unit: <b>S/ ${price}</b></p>
        </article>
    `;
};

const loadCheckoutProducts = () => {
    let total = 0;
    const cart = JSON.parse(localStorage.getItem('cart'));
  
    if (!cart || cart.length === 0) {
        $checkoutProducts.innerHTML = '<p style="font-size: 40px; width: 200px; ">Todavía no has querido colocar algún producto al carrito. 😢</p>';
        $checkoutTotal.textContent = `S/ 0.00`;
        return;
    }

    // Limpiar el contenido del contenedor antes de agregar los productos
    $checkoutProducts.innerHTML = '';
  
    for (const [index, item] of cart.entries()) {
        const totalPriceForItem = item.price * item.quantityProduct;
        total += totalPriceForItem;
        $checkoutProducts.innerHTML += checkoutProductTemplate(item, index);
    }
  
    $checkoutTotal.textContent = `S/ ${total.toFixed(2)}`;

    // Agregar evento de click a los botones "Eliminar"
    const deleteButtons = document.querySelectorAll('.btn-delete');
    deleteButtons.forEach(button => {
        button.addEventListener('click', event => {
            const indexToRemove = parseInt(event.target.dataset.index);
            deleteProduct(indexToRemove);
        });
    });
};

const deleteProduct = (index) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCheckoutProducts(); // Actualizar la lista de productos del carrito
};


const changeQuantity = (event, index) => {
    const newQuantity = parseInt(event.target.value);
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart[index].quantityProduct = newQuantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCheckoutProducts();
};

document.addEventListener('DOMContentLoaded', () => {
    loadCheckoutProducts();
});

const buyButton = document.querySelector('.btn-primary');
buyButton.addEventListener('click', () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart || cart.length === 0) {
        Swal.fire({
            icon: 'info',
            title: 'Falta productos en el carrito',
            text: `No hay productos en el carrito. Agrega al menos un producto antes de enviar el formulario.`,
          });
        return;
    }

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    if (name.trim() === '' || phone.trim() === '' || email.trim() === '') {
        Swal.fire({
            icon: 'info',
            title: 'Completa los campos',
            text: `Por favor, completa todos los campos antes de enviar el formulario.😢`,
          });
        return;
    }

    const cartData = getCartData();

    const mensaje = `¡Hola! Soy ${name}. Estoy interesado en comprar los siguientes productos:\n\n${cartData.cartContent}\nMi número de celular es ${phone} y mi correo electrónico es ${email}.`;

    const mensajeCodificado = encodeURIComponent(mensaje);

    const numeroWhatsApp = '+51940467555'; // Número de WhatsApp al que se enviará el mensaje

    const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

    window.open(enlaceWhatsApp, '_blank');

    alert('Se ha generado un mensaje de WhatsApp con los detalles del carrito y los datos del usuario.');

    deleteLocalStorage();
});

const getCartData = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart || cart.length === 0) {
        return {
            cartContent: 'El carrito está vacío',
            itemCount: 0,
            totalAmount: 0
        };
    }

    let itemCount = 0;
    let totalAmount = 0;
    let cartContent = 'Contenido del carrito:\n\n';
    cart.forEach((item, index) => {
        itemCount += item.quantityProduct;
        totalAmount += item.price * item.quantityProduct;

        cartContent += `Producto ${index + 1}:\n`;
        cartContent += `  Título: ${item.title}\n`;
        cartContent += `  Color: ${item.color}\n`;
        cartContent += `  Cantidad: ${item.quantityProduct}\n`;
        cartContent += `  Precio: S/ ${item.price}\n\n`;
    });

    const initialMessage = `Han seleccionado ${itemCount} items y suma un total de S/ ${totalAmount.toFixed(2)}\n\n`;

    return {
        cartContent: initialMessage + cartContent,
        itemCount: itemCount,
        totalAmount: totalAmount
    };
};

const deleteButton = document.getElementById('deleteLocalStorage');
deleteButton.addEventListener('click', () => {
    localStorage.removeItem('cart');
    Swal.fire({
        icon: 'success',
        title: 'Productos eliminados del carrito',
        text: 'Los datos del carrito han sido eliminados del almacenamiento local.',
    }).then((result) => {
        // Después de que se cierre la notificación, recargar la página
        if (result.isConfirmed) {
            location.reload();
        }
    });
});

const pruebaForm = document.getElementById('pruebaForm');
pruebaForm.addEventListener('submit', (event) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart || cart.length === 0) {
        event.preventDefault();
        alert('No hay productos en el carrito. Agrega al menos un producto antes de enviar el formulario.');
        return;
    }

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    if (name.trim() === '' || phone.trim() === '' || email.trim() === '') {
        event.preventDefault();
        alert('Por favor, completa todos los campos antes de enviar el formulario.');
        return;
    }
});

const deleteLocalStorage = () => {
    localStorage.removeItem('cart');
    Swal.fire({
        icon: 'success',
        title: 'Productos eliminados del carrito',
        text: `Los datos del carrito han sido eliminados del almacenamiento local.`,
      });
    location.reload();
};

const addToFavorites = (index) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const cart = JSON.parse(localStorage.getItem('cart'));
    const productToAdd = cart[index];

    // Verificar si el producto ya está en favoritos
    const isAlreadyInFavorites = favorites.some(favorite => favorite.id === productToAdd.id);

    if (isAlreadyInFavorites) {
        Swal.fire({
            icon: 'info',
            title: 'Producto ya añadido',
            text: `El producto ya está agregado a tus favoritos.`,
          });
    } else {
        favorites.push(productToAdd);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        Swal.fire({
            icon: 'success',
            title: 'Productos agregado a FAVORITOS!',
            text: `El producto ha sido agregado a tus favoritos.`,
          });
    }
};


