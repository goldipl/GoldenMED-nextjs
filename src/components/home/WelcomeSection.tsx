import React from "react";
import faceImg from "./../../../public/icons/home/beauty.svg";
import Link from "next/link";

const WelcomeSection = () => {
  return (
    <div id="welcome-section" className="welcome-section">
      <div className="welcome-section-wrapper">
        <div className="welcome-section-wrapper__img">
          <img src={faceImg.src} alt="face" height={320} />
        </div>
        <div className="welcome-section-wrapper__text">
          <h2>
            <span>Witaj</span> w Golden Med
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
            cumque illum ad architecto facere, ipsam earum possimus laudantium
            sapiente omnis eos similique ipsa fugit? Excepturi architecto autem
            laboriosam earum dignissimos? Ratione quibusdam illo soluta vero
            excepturi molestias ad voluptates voluptate odit, inventore adipisci
            quae commodi perspiciatis voluptatem, laudantium repudiandae magnam
            eos sit obcaecati eveniet aperiam nesciunt autem? Doloremque,
            reiciendis porro.
          </p>
          <div className="tags">
            <Link href="" className="tags-slot">
              Laseroterapia
            </Link>
            <Link href="" className="tags-slot">
              Medycyna estetyczna
            </Link>
            <Link href="" className="tags-slot">
              Kosmetologia
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
