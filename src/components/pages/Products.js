import { useState, useEffect } from "react";

import ProductCard from "../pages/ProductCard";

export default function Products(props) {
  const [search, setSearch] = useState("");
  const [filteredProds, setFilteredProds] = useState([]);

  useEffect(() => {
    const filtered = props.products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProds(filtered);
  }, [search, props.products]);

  const renderFilteredProducts = () => {
    return filteredProds.map((product) => (
      <div key={product.id}>
        <ProductCard data={product} addToCart={props.addToCart} />
      </div>
    ));
  };

  const renderProducts = () => {
    return props.products.map((product) => (
      <div key={product.id}>
        <ProductCard
          data={product}
          addToCart={props.addToCart}
          cartItems={props.cartItems}
        />
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
