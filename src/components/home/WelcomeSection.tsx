import React from "react";
import faceImg from "./../../../public/icons/home/beauty.svg";
import Link from "next/link";
import { services } from "@/data/services";

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
            GoldenMED to klinika, w której medycyna spotyka się z estetyką.
            Łączymy wiedzę lekarzy, doświadczenie kosmetologów i nowoczesne
            technologie, aby pomagać Ci wyglądać i czuć się dobrze — w zgodzie z
            naturą Twojej urody.
          </p>
          <p>
            Każdą terapię zaczynamy od rozmowy i dokładnej diagnostyki.
            Proponujemy tylko te zabiegi, które mają sens w Twoim przypadku, a po
            ich wykonaniu pozostajemy do Twojej dyspozycji.
          </p>
          <div className="tags">
            {services
              .filter((service) => service.popular)
              .map((service) => (
                <Link
                  key={service.slug}
                  href={`/oferta/${service.slug}`}
                  className="tags-slot"
                >
                  {service.name}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
