import React, { useState, useEffect } from "react";
import "./Styles/Product.scss";
import { addProduct } from "./productData";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [priceSortOrder, setPriceSortOrder] = useState("asc");

  const openModal = (product) => {
    setModalProduct(product);
  };

  const closeModal = () => {
    setModalProduct(null);
  };

  const toggleTitleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const togglePriceSortOrder = () => {
    setPriceSortOrder(priceSortOrder === "asc" ? "desc" : "asc");
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const sortedProducts = products.slice().sort((a, b) => {
    const compareTitle = a.title.localeCompare(b.title);

    if (compareTitle !== 0) {
      return sortOrder === "asc" ? compareTitle : -compareTitle;
    }
    const priceComparison = parseFloat(a.price) - parseFloat(b.price);
    return priceComparison * (priceSortOrder === "asc" ? 1 : -1);
  });

  return (
    <div className="mainWrapper">
      <div className="miniNav">
        <a href="http://localhost:3000/jproducts">Jewlery</a>
        <a href="http://localhost:3000/eproducts">Electronics</a>
        <a href="http://localhost:3000/mproducts">Mens Clothing</a>
        <a href="http://localhost:3000/wproducts">Womens Clothing</a>
        <a href="http://localhost:3000/products">All</a>
      </div>
      <button className="sort" onClick={toggleTitleSortOrder}>
        Sort {sortOrder === "asc" ? "A-Z" : "Z-A"}
      </button>
      <button className="sort2" onClick={togglePriceSortOrder}>
        $ {priceSortOrder === "asc" ? "Lowest" : "Highest"}
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
                <button className="info" onClick={() => openModal(product)}>
                  SEE MORE INFO
                </button>
                <button
                  className="cart"
                  onClick={() => {
                    addProduct(product);
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {modalProduct && (
        <div className="modal">
          <div className="modal-content">
            <img src={modalProduct.image} alt="Product Image" />
            <div className="modal-content-inner">
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
