import React, { useState, FormEvent } from "react";
import { useRouter } from "next/router";
import fbIcon from "./../../../public/icons/home/facebook-white.svg";
import igIcon from "./../../../public/icons/home/instagram-white.svg";
import searchIcon from "./../../../public/icons/home/magnifying-glass-solid-white.svg";
import sampelHero from "./../../../public/img/home/sample-hero.jpg";
import { siteInfo } from "@/data/site";

const Hero = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    const q = query.trim();
    router.push({ pathname: "/szukaj", query: q ? { q } : {} });
  };

  return (
    <section
      className="home-hero"
      style={{ background: `url(${sampelHero.src})` }}
    >
      <div className="home-hero-wrapper">
        <div className="home-hero-text">
          <h2>
            <span>Piękno jest wiecznością</span>
            <span>spoglądającą na siebie</span>
            <span> w lustrze</span>
          </h2>
          <span className="author">Kahlil Gibran</span>
        </div>
      </div>
      <div className="hero-bottom-bar">
        <div className="hero-bottom-bar-wrapper">
          <div className="hero-bottom-bar-wrapper__socials">
            <span>Odwiedź nasze profile</span>
            <a
              className="social-link"
              href={siteInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={igIcon.src} alt="instagram" width={33} height={33} />
            </a>
            <a
              className="social-link"
              href={siteInfo.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fbIcon.src} alt="facebook" width={16} height={30} />
            </a>
          </div>
          <div className="hero-bottom-bar-wrapper__searchbar">
            <form id="searchbar" role="search" onSubmit={handleSearch}>
              <input
                type="search"
                id="search"
                name="search"
                placeholder="wyszukaj w serwisie"
                aria-label="Wyszukaj w serwisie"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <button type="submit" className="searchbar-btn">
                <img src={searchIcon.src} alt="Szukaj" width={27} height={27} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
