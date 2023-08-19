import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <FontAwesomeIcon icon="fa-solid fa-house" />
          </NavLink>
        </button>
        <button>
          <NavLink to="/products">Products</NavLink>
        </button>
        <button>
          <NavLink to="/shoppingCart">
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
          </NavLink>
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
