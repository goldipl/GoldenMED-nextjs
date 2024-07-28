import React, { useState } from "react";
import logoGoldenMed from "./../../../public/icons/common/goldenmed-logo.svg";
import whiteCaretDownIcon from "./../../../public/icons/common/white_caret_down.svg";
import Link from "next/link";
import Hamburger from "./Hamburger";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isMenuVisible ? "menu-expanded" : ""}`}>
      <div className="header-wrapper">
        <div className="header-wrapper__logo">
          <Link href="/">
            <img
              src={logoGoldenMed.src}
              alt="GoldenMed"
              width={209}
              height={46}
            />
          </Link>
        </div>
        <nav
          className={`header-wrapper__nav ${isMobileMenuOpen ? "show" : ""} `}
        >
          <ul className="nav-list">
            <li className="nav-list-li">
              <a href="">Strona główna</a>
            </li>
            <li
              className="nav-list-li list-second-level"
              onClick={handleMenuToggle}
            >
              <div className="expand-menu-btn">
                <span>Oferta</span>
                <img
                  className="caretdown-icon"
                  src={whiteCaretDownIcon.src}
                  alt="white caret down"
                  height={20}
                  width={16}
                />
              </div>
              <div className={`menu-wrapper ${isMenuVisible ? "show" : ""}`}>
                <div className="menu-wrapper__slot">
                  <h3 className="menu-wrapper__slot--title"></h3>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item see-all"></a>
                </div>
                <div className="menu-wrapper__slot">
                  <h3 className="menu-wrapper__slot--title"></h3>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item see-all"></a>
                </div>
                <div className="menu-wrapper__slot">
                  <h3 className="menu-wrapper__slot--title"></h3>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item"></a>
                  <a href="" className="menu-wrapper__slot--item see-all"></a>
                </div>
                <div className="menu-wrapper__btns">
                  <a className="full-grey-btn" href="#">
                    Nasz zespół
                  </a>
                  <a className="full-grey-btn" href="#">
                    Promocje
                  </a>
                  <a className="full-grey-btn" href="#">
                    Cennik usług
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-list-li">
              <a href="">Nasza kadra</a>
            </li>
            <li className="nav-list-li">
              <a href="">Aktualności</a>
            </li>
            <li className="nav-list-li">
              <a href="">Kontakt</a>
            </li>
          </ul>
        </nav>
        <div className="header-wrapper__btns">
          <a className="full-white-btn" href="#">
            umów wizytę
          </a>
          <Hamburger onClick={toggleMobileMenu} isOpen={isMobileMenuOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
