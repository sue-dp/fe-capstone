export default function ProductCard({ data }) {
  // const truncate = (text, maxLength) => {
  //   if (text.length <= maxLength) {
  //     return text;
  //   }
  //   return text.slice(0, maxLength) + "...";
  // };

  return (
    <div className="card-cont">
      <p className="name-and-link">{data.title}</p>
      <img src={data.image} alt="Product" />
      <div className="description">{data.description}</div>
      <div className="price">${data.price}</div>
      <button className="add-cart-btn">Add to Cart</button>
      <button className="back-btn">Back to Products</button>
    </div>
  );
}
