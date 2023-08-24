import React, { Component } from "react";
import { getProductData } from "./productData";
import { removeProduct } from "./productData"; // Add the removeProduct function
import "../App.scss";
import "./Product.scss";

class Cart extends Component {
  removeFromCart = (productId) => {
    removeProduct(productId); // Call the removeProduct function from productData.js
    this.forceUpdate(); // Force a re-render to update the UI
  };

  render() {
    const cartItems = getProductData();

    return (
      <div className="mainWrapper4">
        <h2>Cart Items</h2>
        <ul className="cartItems">
          {cartItems.map((product) => (
            <div key={product.id} className="deco">
              <img
                height="150px"
                width="100px"
                src={product.image}
                alt="Product Image"
              />
              <div className="txt">
                <h4>{product.title}</h4>
                <h4>${product.price}</h4>
                <button onClick={() => this.removeFromCart(product.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cart;
