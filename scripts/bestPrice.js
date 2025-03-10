import { products } from "./products.js";
import { cartQuantity } from "./cart.js";

const productsGrid = document.querySelector('.products-grid');
const displayFullYear = document.querySelector('.fullYear');
const fullYear = new Date().getFullYear();
const cartItemQuantity = document.querySelector('.cart-quantity')

console.log(products);


products.forEach(product => {
  productsGrid.innerHTML += `
     <div class="product-container">
    <div class="product-image-container">
            <img
              class="product-image"
              src='${product.img}'
              style='width: 60%;'
            />
          </div>

          <div class="product-name limit-text-to-2-lines">
          ${product.product_name}
          </div>

          <div class="product-rating-container">
            <img
              class="product-rating-stars"
              src='./images/ratings/rating-15.png'
              style='width: 80px;'
            />
            <div class="product-rating-count link-primary"></div>
          </div>

          <div class="product-price">R${Math.floor(product.price / 100).toFixed(2)}</div>

          <div class="product-quantity-container">
            <select class='js-quantity-selector-${product.product_id}' id='js-quantity'>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>
          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id ="${product.id}">Add to Cart</button>
        </div>
        </div>
`     
})

cartItemQuantity.innerHTML = cartQuantity();

displayFullYear.innerHTML = fullYear;




