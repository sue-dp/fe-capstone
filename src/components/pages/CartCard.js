import { errorToast } from "../../util/toastNotifications";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      errorToast(
        "Please click the Trash Icon to remove this item from your cart!"
      );
    }
  };

  const handlePlus = () => {
    props.updateQuantity(props.data.id, props.data.quantity + 1);
  };

  console.log(props.data.quantity);

  return (
    <div className="cart-item">
      {console.log(props.data.quantity)}
      <div className="item-wrapper">
        <img src={props.data.image} alt="Product" />
        <p className="name-and-link">{truncate(props.data.title, 25)}</p>

        <div className="price">${totalPrice}</div>
        <div className="btn-wrapper">
          <button className="minus-btn" onClick={handleMinus}>
            - {/* <FontAwesomeIcon icon="fa-solid fa-minus" /> */}
          </button>
          <div className="item-quantity">{props.data.quantity}</div>
          <button className="add-btn" onClick={handlePlus}>
            + {/* <FontAwesomeIcon icon="fa-solid fa-plus" /> */}
          </button>
        </div>
      </div>
      <div className="remove-from-cart">
        <button
          className="remove-btn"
          onClick={() => props.removeFromCart(props.data.id)}
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
}
