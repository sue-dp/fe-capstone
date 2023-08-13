import { Link } from "react-router-dom";

export default function ProductCard({ data }) {
  const truncate = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className="card-cont">
      <p className="name-and-link">{truncate(data.title, 25)}</p>
      <img src={data.image} alt="Product" />
      <div className="description">{truncate(data.description, 40)}</div>
      <div className="price">${data.price}</div>

      <Link to={`/products/${data.id}`}>
        <button className="more-info-btn">More Info</button>
      </Link>
      <button className="add-cart-btn">Add to Cart</button>
    </div>
  );
}
