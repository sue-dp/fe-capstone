// import { useState, useEffect } from "react";
import ProductCard from "../ProductCard";

export default function Products() {
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
      <div className="product-card-cont">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
