import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { errorToast } from "../../util/toastNotifications";

export default function CartCard(props) {
  const totalPrice = (props.data.price * props.data.quantity).toFixed(2);

  const truncate = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  const handleMinus = () => {
    if (props.data.quantity > 1) {
      props.updateQuantity(props.data.id, props.data.quantity - 1);
    } else if (props.data.quantity <= 1) {
      const errorMessage = (
        <div>
          Please click the <FontAwesomeIcon icon="fa-solid fa-trash-can" /> to
          remove this item from your cart!
        </div>
      );
      errorToast(errorMessage);
    }
  };

  const handlePlus = () => {
    props.updateQuantity(props.data.id, props.data.quantity + 1);
  };

  return (
    <div className="cart-item">
      <div className="item-wrapper">
        <div className="item-image">
          <img src={props.data.image} alt="Product" />
        </div>
        <p className="name-and-link">{truncate(props.data.title, 25)}</p>

        <div className="price">${totalPrice}</div>
        <div className="btn-wrapper">
          <button className="minus-btn" onClick={handleMinus}>
            <FontAwesomeIcon icon="fa-solid fa-minus" />
          </button>
          <div className="item-quantity">{props.data.quantity}</div>
          <button className="add-btn" onClick={handlePlus}>
            <FontAwesomeIcon icon="fa-solid fa-plus" />
          </button>
        </div>
      </div>
      <div className="remove-from-cart">
        <button
          className="remove-btn"
          onClick={() => props.removeFromCart(props.data.id)}
        >
          <FontAwesomeIcon icon="fa-solid fa-trash-can" />
        </button>
      </div>
    </div>
  );
}
