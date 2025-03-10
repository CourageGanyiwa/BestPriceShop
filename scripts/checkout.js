import { products } from "./products.js";
import {cart, cartQuantity} from "./cart.js";

const cartContainer = document.querySelector('.cart-item-container')

if (!cart) {
    console.log('Theres nothing in the cart')
} else {   
        cart.map((item) => {
        cartContainer.innerHTML += `
        <div class="delivery-date">Delivery date: Wednesday, June 15</div>
        <div class="cart-item-details-grid">
          <img class="product-image" src='${item.img}' />

          <div class="cart-item-details">
            <div class="product-name">${item.product_name}</div>
            <div class="product-price">
              R${item.price.toFixed(2) / 100}
            </div>
            <div class="product-quantity">
              <span>
                Quantity:
                <span class="quantity-label">${2}</span>
              </span>
              <span class="update-quantity-link js-delete-link"> Update </span>
              <span
                class="delete-quantity-link link-primary js-delete-link"
                data-product-id="${item.product_id}"
              >
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">Choose a delivery option:</div>

            <div class="delivery-option">
              <input
                type="radio"
                class="delivery-option-input"
                name="delivery-option-${item.id}"
              />
              <div>
                <div class="delivery-option-date">Tuesday, June 21</div>
                <div class="delivery-option-price">FREE Shipping</div>
              </div>
            </div>
            <div class="delivery-option">
              <input
                type="radio"
                checked
                class="delivery-option-input"
                name="delivery-option-${item.id}"
              />
              <div>
                <div class="delivery-option-date">Wednesday, June 15</div>
                <div class="delivery-option-price">$4.99 - Shipping</div>
              </div>
             </div>
             <div class="delivery-option">
              <input
                type="radio"
                class="delivery-option-input"
                name="delivery-option-${item.id}"
              />
              <div>
                <div class="delivery-option-date">Monday, June 13</div>
                <div class="delivery-option-price">$9.99 - Shipping</div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `
    })
}


