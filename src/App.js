import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home.js";
import Products from "./components/Products.js";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";
import Contact from "./components/Contact.js";
import Cart from "./components/Cart.js";

const products = [{}];
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/Cart" exact component={Cart} />
          <Route path="/products" exact>
            <Products products={products} />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
