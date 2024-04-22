//seleccionar con el método getElementById la etiqueta correspondiente donde se renderizarán las tarjetas de productos.
const productsSelector = document.getElementById("products");

//definir una función createCard
function createCard(product) {
  return `
      <article class="product-card">
        <a href="./details.html">
          <img class="product-img" src="${product.photo[0]}" alt="${product.id}" />
          <div class="product-info">
            <span class="product-title">${product.title}</span>
            <span class="product-description">${product.description}</span>
            <div class="product-price-block">
              <span class="price">${product.price}</span>
              <span class="discount">${product.onsale}</span>
            </div>
            <div class="product-tax-policy">${product.taxPolicy}</div>
          </div>
        </a>  
      </article>
`
}

let productsTemplate = ""

for (const element of products) {
  productsTemplate = productsTemplate + createCard(element)
}

//imprimir en el DOM
productsSelector.innerHTML = productsTemplate;