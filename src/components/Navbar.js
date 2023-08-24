import { NavLink } from "react-router-dom";
import "./Styles/Navbar.scss";
import Photo from "./media/fish.png";
import Cart from "./Cart";

export default function Navbar() {
  return (
    <div className="nav">
      <img src={Photo} alt="My Image" />
      <NavLink exact to="/">
        <h1>Home</h1>
      </NavLink>
      <NavLink exact to="/products">
        <h1>Products</h1>
      </NavLink>
      <NavLink exact to="/About">
        <h1>About</h1>
      </NavLink>
      <NavLink exact to="/Contact">
        <h1>Contact</h1>
      </NavLink>
      <div className="end">
        <NavLink exact to="/Cart">
          <h1>Cart</h1>
        </NavLink>
      </div>
    </div>
  );
}
