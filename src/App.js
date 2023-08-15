import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/app.scss";
import NavBar from "./components/navigation/NavBar";
import Products from "./components/pages/Products";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import ShoppingCart from "./components/pages/ShoppingCart";
import ContactUs from "./components/pages/Contact";
import Footer from "./components/navigation/Footer";
import SingleProduct from "./components/pages/SingleProduct";

export default function App() {
  const [products, setProducts] = useState([]);

  return (
    <div className="app">
      <Router>
        <Route render={(routeProps) => <NavBar string="" {...routeProps} />} />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/products"
            render={(routeProps) => (
              <Products
                products={products}
                setProducts={setProducts}
                {...routeProps}
              />
            )}
          />
          <Route path="/shoppingCart" component={ShoppingCart} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/about" component={About} />
          <Route
            path="/products/:productId"
            render={(routeProps) => {
              const productId = routeProps.match.params.productId;
              const selectedProduct = products.find(
                (product) => product.id === parseInt(productId)
              );

              if (selectedProduct) {
                return <SingleProduct data={selectedProduct} {...routeProps} />;
              } else {
                return <div>Product Not Found</div>;
              }
            }}
          />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
