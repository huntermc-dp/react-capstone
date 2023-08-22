import { Component } from "react";
import "../App.css";
import "./pink.jpeg";

class Cart extends Component {
  render() {
    const { users } = this.props;

    return <div className="mainWrapper">what do we have in out cart here?</div>;
  }
}

export default Cart;
