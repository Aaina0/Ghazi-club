import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png";
import { links } from "../data";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";

function Navbar() {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={logo} alt="Logo" />
        </Link>
        <ul className={`nav_links ${isNavShowing ? "show_nav" : ""}`}>
          {links.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active-nav" : "")}
                onClick={() => setIsNavShowing(false)}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          className="nav_toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <RiCloseFill /> : <FaBarsStaggered />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
