import BlackLogo from "../../images/blackBackgroundLogo.png";

export default function CartCard() {
  const truncate = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className="cart-item">
      <div className="item-wrapper">
        <img src={BlackLogo} alt="Product" />
        <p className="name-and-link">{truncate("Product", 25)}</p>

        <div className="price">$99</div>
        <div className="btn-wrapper">
          <button className="add-btn">+</button>
          <div className="item-quantity">1</div>
          <button className="minus-btn">-</button>
        </div>
      </div>
      <div className="remove-from-cart">
        <button className="remove-btn">Remove from Cart</button>
      </div>
    </div>
  );
}
