export default function CartCard(props) {
  const totalPrice = (props.data.price * props.quantity).toFixed(2);

  const truncate = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  const handleMinus = () => {
    if (props.quantity > 1) {
      props.setQuantity((pQ) => pQ - 1);
    }
  };

  const handlePlus = () => {
    props.setQuantity((pQ) => pQ + 1);
  };

  return (
    <div className="cart-item">
      <div className="item-wrapper">
        <img src={props.data.image} alt="Product" />
        <p className="name-and-link">{truncate(props.data.title, 25)}</p>

        <div className="price">${totalPrice}</div>
        <div className="btn-wrapper">
          <button className="minus-btn" onClick={handleMinus}>
            -
          </button>
          <div className="item-quantity">{props.quantity}</div>
          <button className="add-btn" onClick={handlePlus}>
            +
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
