const productData = [];

const addProduct = (product) => {
  productData.push(product);
};

const removeProduct = (productId) => {
  const index = productData.findIndex((product) => product.id === productId);
  if (index !== -1) {
    productData.splice(index, 1);
  }
};

const getProductData = () => {
  return productData;
};

export { addProduct, removeProduct, getProductData };
