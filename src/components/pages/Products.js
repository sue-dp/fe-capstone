import { useState, useEffect } from "react";
import ProductCard from "../pages/ProductCard";
import SingleProduct from "./SingleProduct";

export default function Products(props) {
  const [search, setSearch] = useState("");
  const [filteredProds, setFilteredProds] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        props.setProducts(data);
        console.log(data);
      })
      .catch((err) => {
        console.error("Error", err);
      });
  }, []);
  console.log(props.products);

  useEffect(() => {
    const filtered = props.products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProds(filtered);
  }, [search, props.products]);

  const renderFilteredProducts = () => {
    return filteredProds.map((product) => (
      <div key={product.id}>
        <ProductCard data={product} />
      </div>
    ));
  };

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
    const shuffledList = shuffleProducts(props.products);
    const randomProducts = shuffledList.slice(0, 3);
    console.log(randomProducts);
    return randomProducts.map((product) => (
      <div key={product.id}>
        <ProductCard data={product} />
      </div>
    ));
  };

  return (
    <div className="products-cont">
      <div className="search-cont">
        <input
          className="search"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
      </div>
      {search.length > 0 ? (
        <div className="search-results">
          <p>Search Results:</p>
          <div className="results">{renderFilteredProducts()}</div>
        </div>
      ) : (
        <div className="product-card-cont">{renderProducts()}</div>
      )}
    </div>
  );
}
