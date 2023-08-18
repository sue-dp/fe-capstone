import CartCard from "./CartCard";

export default function ShoppingCart(props) {
  // const formatPrice = props.data.price.toFixed(2);

  return (
    <div className="cart-cont">
      <h3>Your Cart</h3>
      <div className="cart-wrapper">
        {props.cartItems.map((product) => (
          <CartCard
            key={product.id}
            data={product}
            cartItems={props.cartItems}
            updateQuantity={props.updateQuantity}
            removeFromCart={props.removeFromCart}
            quantity={props.quantity}
            setQuantity={props.setQuantity}
          />
        ))}
      </div>
      <div className="cart-total">
        <div className="sub-total">
          Sub-total = ${props.subTotal.toFixed(2)}
        </div>
        <div className="shipping-amt">Shipping = $15.99</div>
        <div className="total">
          Grand Total = ${(props.subTotal + 15.99).toFixed(2)}
        </div>
      </div>
    </div>
  );
}
