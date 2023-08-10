import BlackLogo from "../images/blackBackgroundLogo.png";

export default function ProductCard() {
  return (
    <div className="card-cont">
      <a className="name-and-link">Product Name</a>
      <img src={BlackLogo} alt="Silk Logo with Moth" />
      <div className="description">
        Product Description goes here and it will be a paragraph or a few
        sentences that need to fit in this space....
      </div>
      <div className="price">Price</div>
      <button className="add-cart-btn">Add to Cart</button>
    </div>
  );
}
