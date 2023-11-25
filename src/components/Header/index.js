import React from "react";
import MyImage from "../assests/header-logo.png";
import './index.css'

export default function Header() {
  return (
    <div className="header">
      <img src={MyImage} className="company-logo" alt="companyLogo" />
      <div className="menu">
        <ul className = "nav-menu">
            <li>Home</li>
            <li>Products </li>
            <li>Price</li>
            <li>Blogs</li>
            <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}
