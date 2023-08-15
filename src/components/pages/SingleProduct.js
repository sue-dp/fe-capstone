import { useState, useEffect } from "react";

export default function SingleProduct(props) {
  const [singleProduct, setSingleProduct] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${props.data.id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleProduct(data);
      })
      .catch((err) => {
        console.error("Error", err);
      });
  }, [props.data.id]);

  const formatPrice = props.data.price.toFixed(2);

  return (
    <div className="page-cont">
      <div className="single-prod-cont">
        <p className="name-and-link">{props.data.title}</p>
        <img src={props.data.image} alt="product" />
        <div className="description">{props.data.description}</div>
        <div className="price">${formatPrice}</div>
        <div className="single-prod-action-btns">
          <button className="add-cart-btn">Add to Cart</button>
          <button className="back-btn" onClick={() => props.history.goBack()}>
            Back to Products
          </button>
        </div>
      </div>
    </div>
  );
}
