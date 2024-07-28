import React from "react";
import Link from "next/link";
import logoGoldenMed from "./../../../public/icons/common/goldenmed-logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-wrapper-top">
          <div className="footer-wrapper-top-col">
            <Link href="/">
              <img
                src={logoGoldenMed.src}
                alt="GoldenMed"
                width={209}
                height={46}
              />
            </Link>
            <div className="footer-info-text">
              <p>al. Zwycięstwa 24/44</p>
              <p>02-245 Warszawa</p>
            </div>
            <div className="location-info">
              <Link href="">
                <span>sprawdź jak dojechać</span>
              </Link>
            </div>
          </div>
          <div className="footer-wrapper-top-col">
            <h2>Zakładka</h2>
            <Link className="footer-link" href="">
              link
            </Link>
            <Link className="footer-link" href="">
              link
            </Link>
            <Link className="footer-link" href="">
              link
            </Link>
            <Link className="footer-link" href="">
              link
            </Link>
          </div>
          <div className="footer-wrapper-top-col">
            <h2>Zakładka</h2>
            <Link className="footer-link" href="">
              link
            </Link>
            <Link className="footer-link" href="">
              link
            </Link>
            <Link className="footer-link" href="">
              link
            </Link>
            <Link className="footer-link" href="">
              link
            </Link>
          </div>
          <div className="footer-wrapper-top-col">
            <h2>Zakładka</h2>
            <Link className="footer-link" href="">
              link
            </Link>
            <Link className="footer-link" href="">
              link
            </Link>
            <Link className="footer-link" href="">
              link
            </Link>
            <Link className="footer-link" href="">
              link
            </Link>
          </div>
        </div>
        <div className="footer-wrapper-bottom">
          <span>© GoldenMED 2024</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
