// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/App.scss";
import NavBar from "./components/navigation/NavBar";
import Products from "./components/pages/Products";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import ShoppingCart from "./components/pages/ShoppingCart";
import ContactUs from "./components/pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Route render={(routeProps) => <NavBar string="" {...routeProps} />} />
        {/* Allows you to use the Route props - history - and you can add the other props you need. */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route path="/shoppingCart" component={ShoppingCart} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
