import React from 'react';

import './App.css';
import Product from "./Components/Product";
import Footer from "./Components/Footer";

function App() {
    const openMenu = () => {

    }
  return (
      <div className="grid-container">
          <header className="header">
              <div className="brand">
                  <div className="container-menu" onClick={openMenu()}>
                      <div className="bar1"></div>
                      <div className="bar2"></div>
                      <div className="bar3"></div>
                  </div>
                  <a href="index.html">Online shopping</a>
              </div>
              <div className="nav-links">
                  <a href="cart.html">Cart</a>
                  <a href="signin.html">Log In</a>
              </div>
          </header>
          <aside className="sideBar">
              <h3>Shopping Categories</h3>
              <button className="sideBarClose">x</button>
              <ul>
                  <li>
                      <a href="index.html">Shirts</a>
                  </li>
                  <li>
                      <a href="index.html">Pants</a>
                  </li>
              </ul>
          </aside>
          <main className="main">
              <div className="content">
                  <Product/>
              </div>
          </main>
          <Footer />
      </div>
  );
}

export default App;
