import { Component } from "react";
// import "../App.css";
import "./pink.jpeg";
import "./Home.css";
// import "./shop.jpeg";

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
            <a href="http://localhost:3000/products"> Cloths</a>
          </h1>
        </div>
        <div className="help">
          <h1>
            <a href="http://localhost:3000/products"> Storage</a>
          </h1>
        </div>
        <div className="random1">
          <h1>
            <a href="http://localhost:3000/products"> Jewlery</a>
          </h1>
        </div>
        <div className="random2">
          <h1>
            <a href="http://localhost:3000/products"> Monitors</a>
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
