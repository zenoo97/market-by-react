import "./index.css";
import axios from "axios";
import React from "react";
const MainPage = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(
        "https://dee06ecd-a7c5-42dd-9d57-13540a6fe98e.mock.pstmn.io/products"
      )
      .then((result) => {
        const products = result.data.products;
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="./images (2)/images/icons/logo.png" alt="" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="./images (2)/images/banners/banner1.png" alt="" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map(function (product, index) {
            return (
              <div className="product-card">
                <div>
                  <img className="product-img" src={product.imageUrl} alt="" />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}원</span>
                </div>
                <div className="product-seller">
                  <img
                    className="product-avatar"
                    src="./images/icons/avatar.png"
                    alt=""
                  />
                  <span>{product.seller}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
};
export default MainPage;
