import "./App.scss";
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home.js";
import Products from "./components/Products.js";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";
import Contact from "./components/Contact.js";
import Cart from "./components/Cart.js";
import JProducts from "./components/JProducts.js";
import MProducts from "./components/MProducts.js";
import EProducts from "./components/EProducts.js";
import WProducts from "./components/WProducts.js";

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
          <Route path="/jproducts" exact>
            <JProducts products={products} />
          </Route>
          <Route path="/mproducts" exact>
            <MProducts products={products} />
          </Route>
          <Route path="/eproducts" exact>
            <EProducts products={products} />
          </Route>
          <Route path="/wproducts" exact>
            <WProducts products={products} />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
