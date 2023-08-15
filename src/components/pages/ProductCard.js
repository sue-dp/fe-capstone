import { Link } from "react-router-dom";
import { successfulToast } from "../../util/toastNotifications";

export default function ProductCard(props) {
  const truncate = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  function handleClick(e) {
    e.preventDefault();

    successfulToast("Item Added To Cart");
  }

  const formatPrice = props.data.price.toFixed(2);

  return (
    <div className="card-cont">
      <p className="name-and-link">{truncate(props.data.title, 25)}</p>
      <img src={props.data.image} alt="Product" />
      <div className="description">{truncate(props.data.description, 40)}</div>
      <div className="price">${formatPrice}</div>
      <div className="action-btns">
        <Link to={`/products/${props.data.id}`}>
          <button className="more-info-btn">More Info</button>
        </Link>
        <button className="add-cart-btn" onClick={handleClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
