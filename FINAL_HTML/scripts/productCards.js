//seleccionar con el método getElementById la etiqueta correspondiente donde se renderizarán las tarjetas de productos.
const productsSelector = document.getElementById("products");

let productsTemplate = `
      <article class="product-card">
        <a href="./details.html">
          <img class="product-img" src="./assets/mock2.jpg" alt="Macbook Pro" />
          <div class="product-info">
            <span class="product-title">Macbook Pro 15'4</span>
            <span class="product-description">Space Gray</span>
            <div class="product-price-block">
              <span class="price">$750.000</span>
              <span class="discount">50% Off</span>
            </div>
            <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
          </div>
        </a>
      </article>
      <article class="product-card">
        <a href="./details.html">
          <img class="product-img" src="./assets/mock2.jpg" alt="Macbook Pro" />
          <div class="product-info">
            <span class="product-title">Macbook Pro 15'4</span>
            <span class="product-description">Space Gray</span>
            <div class="product-price-block">
              <span class="price">$750.000</span>
              <span class="discount">50% Off</span>
            </div>
            <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
          </div>
        </a>
      </article>
      <article class="product-card">
        <a href="./details.html">
          <img class="product-img" src="./assets/mock2.jpg" alt="Macbook Pro" />
          <div class="product-info">
            <span class="product-title">Macbook Pro 15'4</span>
            <span class="product-description">Space Gray</span>
            <div class="product-price-block">
              <span class="price">$750.000</span>
              <span class="discount">50% Off</span>
            </div>
            <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
          </div>
        </a>
      </article>
      <article class="product-card">
        <a href="./details.html">
          <img class="product-img" src="./assets/mock2.jpg" alt="Macbook Pro" />
          <div class="product-info">
            <span class="product-title">Macbook Pro 15'4</span>
            <span class="product-description">Space Gray</span>
            <div class="product-price-block">
              <span class="price">$750.000</span>
              <span class="discount">50% Off</span>
            </div>
            <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
          </div>
        </a>
      </article>
      <article class="product-card">
        <a href="./details.html">
          <img class="product-img" src="./assets/mock2.jpg" alt="Macbook Pro" />
          <div class="product-info">
            <span class="product-title">Macbook Pro 15'4</span>
            <span class="product-description">Space Gray</span>
            <div class="product-price-block">
              <span class="price">$750.000</span>
              <span class="discount">50% Off</span>
            </div>
            <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
          </div>
        </a>
      </article>
      <article class="product-card">
        <a href="./details.html">
          <img class="product-img" src="./assets/mock2.jpg" alt="Macbook Pro" />
          <div class="product-info">
            <span class="product-title">Macbook Pro 15'4</span>
            <span class="product-description">Space Gray</span>
            <div class="product-price-block">
              <span class="price">$750.000</span>
              <span class="discount">50% Off</span>
            </div>
            <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
          </div>
        </a>
      </article>
`;

//imprimir en el DOM
productsSelector.innerHTML = productsTemplate;