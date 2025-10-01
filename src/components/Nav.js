import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const buttonClasses = ["main-nav-btn", isOpen ? "is-open-menu" : ""]
    .join(" ")
    .trim();
  const listClasses = ["main-nav-list", isOpen ? "is-visible" : ""]
    .join(" ")
    .trim();

  return (
    <nav className="main-nav">
      <button
        className={buttonClasses}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="main-nav-menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={listClasses} id="main-nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Menu</Link>
        </li>
        <li>
          <Link to="/">Reservations</Link>
        </li>
        <li>
          <Link to="/">Order online</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
