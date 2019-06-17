import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  const navstyle = {
    color: "white"
  };
  return (
    <div>
      <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
          <Link to="/shop" style={navstyle}>
            <li>Shop</li>
          </Link>

          <Link to="/about" style={navstyle}>
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
