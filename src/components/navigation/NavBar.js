import { NavLink } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div className="navbar-cont">
      <div>Welcome to our Website:</div>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/shoppingCart">Shopping Cart</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
}
