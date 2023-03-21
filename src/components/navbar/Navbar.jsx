import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <section className="navContainer">
        <span className="logo">Panda Booking</span>
        <section className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </section>
      </section>
    </nav>
  );
}

export default Navbar;
