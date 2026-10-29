import React from "react";
import Link from "next/link";
import logoGoldenMed from "./../../../public/icons/common/goldenmed-logo.svg";
import { services } from "@/data/services";
import { siteInfo } from "@/data/site";

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
              <p>{siteInfo.street}</p>
              <p>{siteInfo.city}</p>
            </div>
            <div className="location-info">
              <a href={siteInfo.mapsUrl} target="_blank" rel="noopener noreferrer">
                <span>sprawdź jak dojechać</span>
              </a>
            </div>
          </div>
          <div className="footer-wrapper-top-col">
            <h2>Oferta</h2>
            {services.map((service) => (
              <Link
                key={service.slug}
                className="footer-link"
                href={`/oferta/${service.slug}`}
              >
                {service.name}
              </Link>
            ))}
          </div>
          <div className="footer-wrapper-top-col">
            <h2>Dla pacjenta</h2>
            <Link className="footer-link" href="/nasza-kadra">
              Nasza kadra
            </Link>
            <Link className="footer-link" href="/cennik">
              Cennik
            </Link>
            <Link className="footer-link" href="/aktualnosci">
              Aktualności
            </Link>
            <Link className="footer-link" href="/kontakt">
              Kontakt
            </Link>
            <Link className="footer-link" href="/polityka-prywatnosci">
              Polityka prywatności
            </Link>
          </div>
          <div className="footer-wrapper-top-col">
            <h2>Kontakt</h2>
            <a className="footer-link" href={siteInfo.phoneHref}>
              {siteInfo.phone}
            </a>
            <a className="footer-link" href={`mailto:${siteInfo.email}`}>
              {siteInfo.email}
            </a>
            {siteInfo.openingHours.map((item) => (
              <p key={item.days} className="footer-hours">
                <span>{item.days}:</span> {item.hours}
              </p>
            ))}
          </div>
        </div>
        <div className="footer-wrapper-bottom">
          <span>© GoldenMED {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
