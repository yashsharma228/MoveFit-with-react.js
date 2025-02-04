import React, { useState, useContext } from "react";
import "./Navbar.css";
import { assets } from "../../assests/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menuItems, setMenuItems] = useState("Home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar" id="navbar">
      <Link to='/'>
        <h1 aria-label="MOVEFIT Logo">MOVEFIT</h1>
      </Link>
      
      <ul className="Navbar-menu">
        <Link
          onClick={() => setMenuItems("Home")}
          className={menuItems === "Home" ? "active" : ""}
        >
          Home
        </Link>

        <a
          href="#explore-menu"
          onClick={() => setMenuItems("Products")}
          className={menuItems === "Products" ? "active" : ""}
        >
          Products
        </a>
        
        <a
          href="#Footer"
          onClick={() => setMenuItems("Contact Us")}
          className={menuItems === "Contact Us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>

      <div className="Navbar-right">
        <div style={{ position: "relative" }}>
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="Basket Icon" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
