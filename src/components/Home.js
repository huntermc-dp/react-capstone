import { Component } from "react";
import "./Styles/Home.scss";

class Home extends Component {
  render() {
    const { users } = this.props;

    return (
      <div className="background">
        <div className="shop">
          <h1>
            <a href="http://localhost:3000/products">Shop</a>
          </h1>
        </div>
        <div className="about">
          <h1>
            <a href="http://localhost:3000/mproducts"> Mens</a>
          </h1>
        </div>
        <div className="help">
          <h1>
            <a href="http://localhost:3000/wproducts"> Womens</a>
          </h1>
        </div>
        <div className="random1">
          <h1>
            <a href="http://localhost:3000/jproducts"> Jewlery</a>
          </h1>
        </div>
        <div className="random2">
          <h1>
            <a href="http://localhost:3000/eproducts"> Electronics</a>
          </h1>
        </div>
        <div className="random3">
          <h1>
            <a href="http://localhost:3000/contact"> Contact Us</a>
          </h1>
        </div>
        <div className="random4">
          <h1>
            <a href="http://localhost:3000/cart"> Shopping Cart</a>
          </h1>
        </div>
        <div className="random5">
          <h1>
            <a href="http://localhost:3000/about"> About The Awesome Creator</a>
          </h1>
        </div>
      </div>
    );
  }
}

export default Home;
