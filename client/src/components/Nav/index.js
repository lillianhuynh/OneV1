import React from "react";
import logo from './One_v1.png'

function Nav() {
  return (
    <nav className="navbar navbar-default navbar-expand-lg navbar-dark " style={{ backgroundColor: "#b7a57a" }} >
      <a className="navbar-brand" href="/">
        <img
          src={logo} alt="logo"
          width="50"
          height="50"
          className="d-inline-block align-top"
        />
      </a>

      <h3 style={{ textAlign: "center" }}>ONE V1</h3>

      <a href="#" type="button" class="btn btn-default navbar-btn ml-auto" style={{ color: "#b7a57a", backgroundColor: "#4b2e83" }}>
        <span class="glyphicon"></span>Logout
      </a>
    </nav>
  );
}

export default Nav;
