import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./index.scss";
const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="nav">
            <ul>
              <li>
                <NavLink to={"/"}>Product</NavLink>
              </li>
              <li>
                <NavLink to={"/add-product"}>Add Product</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
