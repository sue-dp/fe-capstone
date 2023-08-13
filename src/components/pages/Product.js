import { Link } from "react-router-dom";

export default function ProductSingle({ data }, props) {
  // function renderSingleProduct() {
  //   return () => {
  //     if (props.match.params.slug)
  //   }
  // }
  // console.log(props);
  console.log(data);
  return (
    <div className="single-prod-cont">
      <p className="name-and-link">{data.title}</p>
      <img src={data.image} alt="product" />
      <div className="description">{data.description}</div>
      <div className="price">${data.price}</div>
      <button className="add-cart-btn">Add to Cart</button>
      <button className="back-btn" onClick={() => props.history.goBack()}>
        Back to Products
      </button>
    </div>
  );
}
