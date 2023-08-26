import React, { Component } from "react";
import { getProductData } from "./productData";
import { removeProduct } from "./productData";
import "./Styles/Product.scss";

class Cart extends Component {
  removeFromCart = (productId) => {
    removeProduct(productId);
    this.forceUpdate();
  };

  calculateTotal = () => {
    const cartItems = getProductData();
    return cartItems.reduce((total, product) => total + product.price, 0);
  };

  render() {
    const cartItems = getProductData();
    const itemCount = cartItems.length;
    const totalCost = this.calculateTotal();

    return (
      <div className="mainWrapper4">
        <div className="totals">
          <h2>Cart Items {itemCount}</h2>
          <h2>Total: ${totalCost}</h2>
        </div>
        <ul className="cartItems">
          {cartItems.map((product) => (
            <div key={product.id} className="deco">
              <img
                height="150px"
                width="100px"
                src={product.image}
                alt="Product"
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
