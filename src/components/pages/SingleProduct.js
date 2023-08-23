import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { successfulToast } from "../../util/toastNotifications";

export default function SingleProduct(props) {
  const formatPrice = props.data.price.toFixed(2);

  return (
    <div className="page-cont">
      <div className="single-prod-cont">
        <p className="name-and-link">{props.data.title}</p>
        <img src={props.data.image} alt="product" />
        <div className="description">{props.data.description}</div>
        <div className="price">${formatPrice}</div>
        <div className="single-prod-action-btns">
          <button
            className="add-cart-btn"
            onClick={() => {
              props.addToCart(props.data);
              successfulToast("Item Added To Cart");
            }}
          >
            <FontAwesomeIcon icon="fa-solid fa-cart-plus" />
          </button>
          <button className="back-btn" onClick={() => props.history.goBack()}>
            Back to Products
          </button>
        </div>
      </div>
    </div>
  );
}
