import React, { useState, useEffect } from "react";
import "./Product.scss";

const JProducts = () => {
  const [products, setProducts] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const openModal = (product) => {
    setModalProduct(product);
  };

  const closeModal = () => {
    setModalProduct(null);
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        const jewelery = json.filter(
          (product) => product.category === "jewelery"
        );
        setProducts(jewelery);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const sortedProducts = products.slice().sort((a, b) => {
    const compareResult = a.title.localeCompare(b.title);
    return sortOrder === "asc" ? compareResult : -compareResult;
  });

  return (
    <div className="mainWrapper3">
      <div className="miniNav">
        <a href="http://localhost:3000/jproducts">Jewlery</a>
        <a href="http://localhost:3000/eproducts">Electronics</a>
        <a href="http://localhost:3000/mproducts">Mens Clothing</a>
        <a href="http://localhost:3000/wproducts">Womens Clothing</a>
        <a href="http://localhost:3000/products">All</a>
      </div>
      <button className="sort" onClick={toggleSortOrder}>
        Sort {sortOrder === "asc" ? "A-Z" : "Z-A"}
      </button>

      <div className="productGrid">
        {sortedProducts.length === 0 ? (
          <div>Loading...</div>
        ) : (
          sortedProducts.map((product) => (
            <div key={product.id} className="Products">
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

export default JProducts;
