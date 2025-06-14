import { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/images/logo.svg";
import Button from "../components/Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="wrapper navbar__container">
        <div className="navbar__logo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        <nav className={`navbar__links ${menuOpen ? "open" : ""}`}>
          <div className="navbar__links-left">
            <a href="/bootcamp" onClick={() => setMenuOpen(false)}>Bootcamp</a>
            <a href="/blog" onClick={() => setMenuOpen(false)}>Blog</a>
          </div>
          <div  className="navbar__links-right">
            <a href="/login" onClick={() => setMenuOpen(false)}>Login</a>
            <Button label="Sign up" onClick={() => setMenuOpen(false)} />
          </div>
        </nav>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
