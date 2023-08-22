import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCartPlus,
  faCartShopping,
  faHouse,
  faMagnifyingGlass,
  faMinus,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

import "./styles/app.scss";
import NavBar from "./components/navigation/NavBar";
import Products from "./components/pages/Products";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import ShoppingCart from "./components/pages/ShoppingCart";
import ContactUs from "./components/pages/Contact";
import Footer from "./components/navigation/Footer";
import SingleProduct from "./components/pages/SingleProduct";

library.add(
  faHouse,
  faMagnifyingGlass,
  faMinus,
  faPlus,
  faTrashCan,
  faCartShopping,
  faCartPlus
);

export default function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [itemTotal, setItemTotal] = useState(0);

  let updatedCartItems = [];

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((product) => {
          product["quantity"] = 1;
        });
        setProducts(data);
      })
      .catch((err) => {
        console.error("Error", err);
      });
  }, []);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    function subTotalCalc() {
      let subTotal = 0;
      let itemTotal = 0;

      cartItems.forEach((cartItem) => {
        itemTotal = cartItem.price * cartItem.quantity;
        subTotal = subTotal + itemTotal;
      });

      return { subTotal, itemTotal };
    }

    const { subTotal, itemTotal } = subTotalCalc();

    setSubTotal(subTotal);
    setItemTotal(itemTotal);
  }, [cartItems]);

  const updateQuantity = (productId, newQuantity) => {
    updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };

  const removeFromCart = (productId) => {
    updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const addToCart = (product) => {
    const currentCartItem = cartItems.find((item) => item.id === product.id);

    if (currentCartItem) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: (item.quantity += 1) };
        }
        return item;
      });
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    } else {
      const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  const checkOut = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

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
                addToCart={addToCart}
                cartItems={cartItems}
                setCartItems={setCartItems}
                {...routeProps}
              />
            )}
          />
          <Route
            exact
            path="/shoppingCart"
            render={(routeProps) => (
              <ShoppingCart
                data={products}
                cartItems={cartItems}
                total={total}
                setCartItems={setCartItems}
                updateQuantity={updateQuantity}
                subTotal={subTotal}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                checkOut={checkOut}
                {...routeProps}
              />
            )}
          />
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
                return (
                  <SingleProduct
                    data={selectedProduct}
                    addToCart={addToCart}
                    {...routeProps}
                  />
                );
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
