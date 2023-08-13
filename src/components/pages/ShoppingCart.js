import CartCard from "./CartCard";

export default function ShoppingCart() {
  return (
    <div className="cart-cont">
      <h3>Your Cart</h3>
      <div className="cart-wrapper">
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </div>
      <div className="cart-total">
        <div className="sub-total">Sub-total = $99.99</div>
        <div className="shipping-amt">Shipping = $15.99</div>
        <div className="total">Grand Total = $114.99</div>
      </div>
    </div>
  );
}
