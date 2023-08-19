import { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProductCard from "../pages/ProductCard";

export default function Products(props) {
  const [search, setSearch] = useState("");
  const [filteredProds, setFilteredProds] = useState([]);
  const [filter, setFilter] = useState("default");

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

  if (filter === "default") {
    props.products.sort((a, b) => a.id - b.id);
  }
  if (filter.includes("1")) {
    props.products.sort((a, b) => a.price - b.price);
  } else if (filter.includes("2")) {
    props.products.sort((a, b) => b.price - a.price);
  } else if (filter.includes("3")) {
    props.products.sort((a, b) => a.title.localeCompare(b.title));
  } else if (filter.includes("4")) {
    props.products.sort((a, b) => b.title.localeCompare(a.title));
  }

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
        <select
          className="filter-select"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="default">Filter By:</option>
          <option value="option1">Price: Low to High</option>
          <option value="option2">Price: High to Low</option>
          <option value="option3">A to Z</option>
          <option value="option4">Z to A</option>
        </select>
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
