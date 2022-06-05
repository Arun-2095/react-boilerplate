import React from "react";

import { Link } from "react-router-dom";

import "./header.scss";
export default function Header() {
  return (
    <div>
      <nav>
        <Link className="link-color" to="/contact">
          Contact
        </Link>
        <Link to="/home" className="link-color">
          Home
        </Link>
        <Link to="/login" className="link-color">
          Login
        </Link>
      </nav>
    </div>
  );
}
