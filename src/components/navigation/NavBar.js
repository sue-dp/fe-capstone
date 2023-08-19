import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import WhiteLogo from "../../images/whiteBackgroundLogo.png";

export default function NavBar(props) {
  return (
    <div className="navbar-cont">
      <div className="logo">
        <Link to={"/"}>
          <img src={WhiteLogo} alt="Silk Logo with moth" />
        </Link>
      </div>
      <div className="nav-links">
        <button>
          <NavLink exact to="/">
            Home
          </NavLink>
        </button>
        <button>
          <NavLink to="/products">Products</NavLink>
        </button>
        <button>
          <NavLink to="/shoppingCart">Shopping Cart</NavLink>
        </button>
        <button>
          <NavLink to="/contact">Contact Us</NavLink>
        </button>
        <button>
          <NavLink to="/about">About</NavLink>
        </button>
      </div>
    </div>
  );
}
