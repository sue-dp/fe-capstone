import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../pages/ProductCard";
import ProductSingle from "../pages/Product";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error("Error", err);
      });
  }, []);
  console.log(products);

  function shuffleProducts(array) {
    const shuffledProducts = [...array];

    for (let product = shuffledProducts.length - 1; product > 0; product--) {
      const selected = Math.floor(Math.random() * (product + 1));
      const thirdValue = shuffledProducts[product];
      shuffledProducts[product] = shuffledProducts[selected];
      shuffledProducts[selected] = thirdValue;
    }
    return shuffledProducts;
  }

  const renderProducts = () => {
    const shuffledList = shuffleProducts(products);
    const randomProducts = shuffledList.slice(0, 3);
    console.log(randomProducts);
    return randomProducts.map((product) => (
      <Link to={`/product/${product.id}`} key={product.id}>
        <ProductCard data={product} />
      </Link>
      // (<ProductSingle key={product.id} data={product} />)
    ));
  };

  return (
    <div className="products-cont">
      <div className="search-cont">
        <input
          className="search"
          type="text"
          placeholder="Search"

          // value={search}
          // onChange={(e) => setFirst(e.target.value)}
        />
        {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
      </div>
      <div className="search-results">Search Results:</div>
      <div className="product-card-cont">{renderProducts()}</div>
    </div>
  );
}
