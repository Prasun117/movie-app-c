import React from "react";

export const HeaderComponent = (props) => {
  return (
    <>
      <nav className="navbar">
        <div className="header-title">Demo Stream</div>
        <a href="#" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="navbar-links">
          <ul className="links-list">
            <li className="list-items">
              <a className="item-login">Login</a>
            </li>
            <li className="list-items">
              <a className="item-start-trial">Start your free trial</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
