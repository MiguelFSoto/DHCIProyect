import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import TopMenu from "../components/TopMenu";
import Footer from "../components/Footer";

import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import MyCart from "../pages/MyCart";
import NotFound from "../pages/404";
import CheckOut from "../pages/CheckOut";
import Create from "../pages/Create";
import Home from "../pages/Home";

import { CartProvider } from "../contexts/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <TopMenu />
          <Switch>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/cart">
              <MyCart />
            </Route>
            <Route path="/404">
              <NotFound />
            </Route>
            <Route path="/checkout">
              <CheckOut />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
