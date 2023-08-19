import { Link } from "react-router-dom";

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

  const renderCartCard = () => {
    if (props.cartItems !== []) {
      for (let item in props.cartItems) {
        if (item.id === props.data.id) {
          return (
            <CartCard
              data={props.data}
              updateQuantity={props.updateQuantity}
              removeFromCart={props.removeFromCart}
              cartItems={props.cartItems}
            />
          );
        } else {
          return (
            <CartCard
              data={props.data}
              removeFromCart={props.removeFromCart}
              cartItems={props.cartItems}
            />
          );
        }
      }
    }
  };

  return (
    <div className="card-cont">
      <p className="name-and-link">{truncate(props.data.title, 25)}</p>
      <img src={props.data.image} alt="Product" />
      <div className="description">{truncate(props.data.description, 40)}</div>
      <div className="price">${formatPrice}</div>
      {renderCartCard()}
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
          Add to Cart
        </button>
      </div>
    </div>
  );
}
