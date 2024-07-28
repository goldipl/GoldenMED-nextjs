import React from "react";
import fbIcon from "./../../../public/icons/home/facebook-white.svg";
import igIcon from "./../../../public/icons/home/instagram-white.svg";
import searchIcon from "./../../../public/icons/home/magnifying-glass-solid-white.svg";
import sampelHero from "./../../../public/img/home/sample-hero.jpg";

const Hero = () => {
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
            <a className="social-link" href="">
              <img src={igIcon.src} alt="instagram" width={33} height={33} />
            </a>
            <a className="social-link" href="">
              <img src={fbIcon.src} alt="facebook" width={16} height={30} />
            </a>
          </div>
          <div className="hero-bottom-bar-wrapper__searchbar">
            <form id="searchbar">
              <input
                type="search"
                id="search"
                name="search"
                placeholder="wyszukaj w serwisie"
              />
              <button className="searchbar-btn">
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
