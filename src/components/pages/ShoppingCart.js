import { Link } from "react-router-dom";

import CartCard from "./CartCard";
import { successfulToast } from "../../util/toastNotifications";

export default function ShoppingCart(props) {
  let shippingAmt = 0;

  if (props.subTotal === 0) {
    shippingAmt = 0;
  } else if (props.subTotal > 0 && props.subTotal <= 7.95) {
    shippingAmt = 5;
  } else if (props.subTotal > 7.95 && props.subTotal < 99.99) {
    shippingAmt = 15.99;
  } else {
    shippingAmt = 0;
  }

  return (
    <div className="cart-cont">
      <h3>Your Cart</h3>
      <div className="cart-wrapper">
        {console.log(props.cartItems)}
        {props.cartItems.length > 0 ? (
          props.cartItems.map((product) => (
            <CartCard
              key={product.id}
              data={product}
              cartItems={props.cartItems}
              setCartItems={props.setCartItems}
              updateQuantity={props.updateQuantity}
              removeFromCart={() => {
                props.removeFromCart(product.id);
              }}
              quantity={product.quantity}
            />
          ))
        ) : (
          <p>Your Cart is Empty</p>
        )}
      </div>
      <div className="cart-total">
        <div className="sub-total">
          <div className="text">Sub-total =</div>
          <div className="value">${props.subTotal.toFixed(2)}</div>
        </div>
        <div className="shipping-amt">
          <div className="text">Shipping =</div>{" "}
          <div className="value">${shippingAmt.toFixed(2)}</div>
        </div>
        <div className="total">
          <div className="text">Grand Total =</div>
          <div className="value">
            ${(props.subTotal + shippingAmt).toFixed(2)}
          </div>
        </div>
        <div className="checkout-btn">
          <Link to={"/products"}>
            <button
              className="checkout-btn"
              onClick={() => {
                props.checkOut();
                successfulToast("THANK YOU for your order!");
              }}
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
