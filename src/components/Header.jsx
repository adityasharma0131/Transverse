import React, { useState } from "react";
import logo from "../assets/transverse logo 1.png";
// Import the required icons from react-icons
import {
  RiArrowRightUpLine,
  RiCloseLine,
  RiMenuLine,
  RiInstagramLine,
  RiGithubLine,
  RiDribbbleLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";

const Header = () => {
  // State to handle the menu visibility
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle menu open/close
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <img className="nav__logo" src={logo} alt="logo" srcSet="" />

        <div
          className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link">
                <RiArrowRightUpLine />
                <span>Home</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#" className="nav__link">
                <RiArrowRightUpLine />
                <span>About Us</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#" className="nav__link">
                <RiArrowRightUpLine />
                <span>Projects</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#" className="nav__link">
                <RiArrowRightUpLine />
                <span>Studio</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#" className="nav__link">
                <RiArrowRightUpLine />
                <span>Contact</span>
              </a>
            </li>
          </ul>

          {/* Close button */}
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <RiCloseLine />
          </div>

          <div className="nav__social">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav__social-link"
            >
              <RiInstagramLine />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav__social-link"
            >
              <RiGithubLine />
            </a>

            <a
              href="https://dribbble.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav__social-link"
            >
              <RiDribbbleLine />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav__social-link"
            >
              <RiLinkedinBoxLine />
            </a>
          </div>
        </div>

        {/* Toggle button */}
        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <RiMenuLine />
        </div>
      </nav>
    </header>
  );
};

export default Header;
