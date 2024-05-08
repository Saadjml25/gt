import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="search-bar">Search Bar</div>
      <div className="nav-link home">Home</div>
      <div className="nav-link restaurant">Restaurant</div>
      <div className="nav-link people">People</div>
      <div className="nav-link orders">Orders</div>
    </div>
  );
};

export default Navbar;
