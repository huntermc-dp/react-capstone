import React, { useState, useEffect } from "react";
import "./Product.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);

  const openModal = (product) => {
    setModalProduct(product);
  };

  const closeModal = () => {
    setModalProduct(null);
  };

  useEffect(() => {
    // Fetch products from the API
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="mainWrapper">
      <div className="productGrid">
        {products.length === 0 ? (
          <div>Loading...</div>
        ) : (
          products.map((product, index) => (
            <div key={index} className="Products">
              <div className="Wrapper">
                <div className="itemImage">
                  <img
                    height="150px"
                    width="100px"
                    src={product.image}
                    alt="Product Image"
                  />
                </div>
                <div className="Title">
                  <p>{product.title}</p>
                  <p>Price: ${product.price}</p>
                </div>
                <div className="Description">
                  <p>
                    {product.description.length > 100
                      ? product.description.substring(0, 100) + "..."
                      : product.description}
                  </p>
                </div>
                <div className="add">
                  <button className="info" onClick={() => openModal(product)}>
                    SEE MORE INFO
                  </button>
                  <button className="cart">ADD TO CART</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {modalProduct && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-content-inner">
              <img src={modalProduct.image} alt="Product Image" />
              <span className="close" onClick={closeModal}>
                &times;
              </span>

              <h2>{modalProduct.title} </h2>
              <p>{modalProduct.description}</p>
              <p>
                Price: ${modalProduct.price}{" "}
                <button className="cart">ADD TO CART</button>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
