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
            -
          </button>
          <div className="item-quantity">{props.data.quantity}</div>
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
