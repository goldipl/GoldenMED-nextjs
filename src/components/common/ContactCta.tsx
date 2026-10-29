import React from "react";
import Link from "next/link";
import Icon from "./Icon";
import { siteInfo } from "@/data/site";

const ContactCta = () => {
  return (
    <section className="contact-cta">
      <div className="contact-cta-wrapper">
        <div className="contact-cta-wrapper__text">
          <h2>Zadbaj o siebie już dziś</h2>
          <p>
            Umów konsultację — dobierzemy zabiegi do potrzeb Twojej skóry i
            odpowiemy na wszystkie pytania.
          </p>
        </div>
        <div className="contact-cta-wrapper__btns">
          <Link href="/kontakt/#formularz" className="btn btn--white-full">
            umów wizytę
          </Link>
          <a href={siteInfo.phoneHref} className="btn btn--white">
            <Icon name="phone" size={18} />
            {siteInfo.phone}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
