import React, { useState, useEffect } from "react";
import logoGoldenMed from "./../../../public/icons/common/goldenmed-logo.svg";
import whiteCaretDownIcon from "./../../../public/icons/common/white_caret_down.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import Hamburger from "./Hamburger";
import { mainNav } from "@/data/site";
import { services } from "@/data/services";

const popularServices = services.filter((service) => service.popular);
const otherServices = services.filter((service) => !service.popular);

const Header = () => {
  const router = useRouter();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (href: string) =>
    href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);

  useEffect(() => {
    const closeMenus = () => {
      setIsMenuVisible(false);
      setIsMobileMenuOpen(false);
    };

    router.events.on("routeChangeStart", closeMenus);
    return () => {
      router.events.off("routeChangeStart", closeMenus);
    };
  }, [router.events]);

  useEffect(() => {
    const bodyClassList = document.body.classList;
    const htmlClassList = document.documentElement.classList;

    if (isMobileMenuOpen) {
      bodyClassList.add("hidden");
      htmlClassList.add("hidden");
    } else {
      bodyClassList.remove("hidden");
      htmlClassList.remove("hidden");
    }

    return () => {
      bodyClassList.remove("hidden");
      htmlClassList.remove("hidden");
    };
  }, [isMobileMenuOpen]);

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
            {mainNav.map((item) =>
              item.href === "/oferta" ? (
                <li
                  key={item.href}
                  className={`nav-list-li list-second-level ${
                    isActive(item.href) ? "active" : ""
                  }`}
                  onClick={handleMenuToggle}
                >
                  <div className="expand-menu-btn">
                    <span>{item.label}</span>
                    <img
                      className="caretdown-icon"
                      src={whiteCaretDownIcon.src}
                      alt="white caret down"
                      height={20}
                      width={16}
                    />
                  </div>
                  <div
                    className={`menu-wrapper ${isMenuVisible ? "show" : ""}`}
                  >
                    <div className="menu-wrapper__slot">
                      <h3 className="menu-wrapper__slot--title">
                        Popularne usługi
                      </h3>
                      {popularServices.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/oferta/${service.slug}`}
                          className="menu-wrapper__slot--item"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                    <div className="menu-wrapper__slot">
                      <h3 className="menu-wrapper__slot--title">
                        Pozostałe zabiegi
                      </h3>
                      {otherServices.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/oferta/${service.slug}`}
                          className="menu-wrapper__slot--item"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                    <div className="menu-wrapper__slot">
                      <h3 className="menu-wrapper__slot--title">
                        Zobacz również
                      </h3>
                      <Link href="/oferta" className="menu-wrapper__slot--item">
                        Cała oferta
                      </Link>
                      <Link href="/cennik" className="menu-wrapper__slot--item">
                        Cennik zabiegów
                      </Link>
                      <Link
                        href="/kontakt/#formularz"
                        className="menu-wrapper__slot--item"
                      >
                        Umów konsultację
                      </Link>
                    </div>
                  </div>
                </li>
              ) : (
                <li
                  key={item.href}
                  className={`nav-list-li ${isActive(item.href) ? "active" : ""}`}
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              )
            )}
          </ul>
        </nav>
        <div className="header-wrapper__btns">
          <Link className="full-white-btn" href="/kontakt/#formularz">
            umów wizytę
          </Link>
          <Hamburger onClick={toggleMobileMenu} isOpen={isMobileMenuOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
