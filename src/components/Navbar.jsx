import React, { useState } from "react";
import SignModal from "./SignModal";
import "../styles/Navbar.css";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  const [modal, setModal] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="nav">
        {/* Logo and nav */}
        <div className="nav__inner">
          <a href="/" className="nav__logo">
            <img src={logo} alt="Terra HQ" />
          </a>
          <nav className="nav__links-desktop">
            <a href="/bootcamp">Bootcamp</a>
            <a href="/blog">Blog</a>
          </nav>
        </div>
        {/* End logo and nav */}

        {/* Navbar buttons */}
        <div className="button">
          <button
            className="nav__btn nav__btn--signin"
            onClick={() => setModal("signin")}
          >
            Login
          </button>
          <button
            className="nav__btn nav__btn--signup"
            onClick={() => setModal("signup")}
          >
            Sign Up
          </button>
        </div>
      </header>

      {modal && <SignModal type={modal} onClose={() => setModal(null)} />}

      {/* end navbar buttons */}
    </>
  );
};

export default Navbar;
