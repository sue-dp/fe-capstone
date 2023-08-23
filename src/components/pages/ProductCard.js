import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { successfulToast } from "../../util/toastNotifications";
import CartCard from "./CartCard";

export default function ProductCard(props) {
  const truncate = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  const formatPrice = props.data.price.toFixed(2);

  return (
    <div className="card-cont">
      <p className="name-and-link">{truncate(props.data.title, 25)}</p>
      <img src={props.data.image} alt="Product" />
      <div className="description">{truncate(props.data.description, 40)}</div>
      <div className="price">${formatPrice}</div>
      <div className="action-btns">
        <Link to={`/products/${props.data.id}`}>
          <button className="more-info-btn">More Info</button>
        </Link>
        <button
          className="add-cart-btn"
          onClick={() => {
            props.addToCart(props.data);
            successfulToast("Item Added To Cart");
          }}
        >
          <FontAwesomeIcon icon="fa-solid fa-cart-plus" />
        </button>
      </div>
    </div>
  );
}
