import React from "react";
import "./Header.css";
import { useLocation } from "react-router";
function Header() {
  const location = useLocation();

  return (
    <div className="header__container ">
      <div className="page_nav_location">
        <span
          className={`header__text__active ${
            location.pathname == "/owerviev" ? "isactive__header__text" : ""
          }`}
        >
          Overview
        </span>
        <span className="line">/</span>
        <span
          className={`header__text__active ${
            location.pathname == "/appeals" ? "isactive__header__text" : ""
          }`}
        >
          Appeals
        </span>
      </div>
      <div className="admin__info">
       <h2 className="admin__info__text">Admin</h2>
      </div>

    </div>
  );
}

export default Header;
