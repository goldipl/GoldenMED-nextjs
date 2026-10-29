import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Icon from "@/components/common/Icon";
import PageHero from "@/components/common/PageHero";
import Seo from "@/components/common/Seo";
import { services } from "@/data/services";
import { siteInfo } from "@/data/site";

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  message: string;
  consent: boolean;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  message: "",
  consent: false,
};

const validate = (form: FormState): FormErrors => {
  const errors: FormErrors = {};
  if (!form.name.trim()) {
    errors.name = "Podaj imię i nazwisko.";
  }
  if (form.phone.replace(/\D/g, "").length < 9) {
    errors.phone = "Podaj poprawny numer telefonu.";
  }
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Podaj poprawny adres e-mail.";
  }
  if (!form.consent) {
    errors.consent = "Zgoda jest wymagana, abyśmy mogli się z Tobą skontaktować.";
  }
  return errors;
};

const ContactPage = () => {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSent, setIsSent] = useState(false);

  // Preselect the service when coming from /kontakt/?usluga=<slug>
  useEffect(() => {
    const slug = router.query.usluga;
    if (typeof slug === "string" && services.some((s) => s.slug === slug)) {
      setForm((prev) => ({ ...prev, service: slug }));
    }
  }, [router.query.usluga]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target;
    const fieldValue =
      type === "checkbox" ? (event.target as HTMLInputElement).checked : value;
    setForm((prev) => ({ ...prev, [name]: fieldValue }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const formErrors = validate(form);
    setErrors(formErrors);
    if (Object.keys(formErrors).length > 0) {
      return;
    }
    // TODO: podpiąć wysyłkę formularza (np. Formspree lub własne API) —
    // strona jest eksportowana statycznie i nie ma backendu.
    setIsSent(true);
    setForm(initialForm);
  };

  return (
    <>
      <Seo
        title="Kontakt"
        description="Skontaktuj się z GoldenMED i umów wizytę. Adres, telefon, godziny otwarcia i formularz zapisu."
      />
      <PageHero
        title="Kontakt"
        subtitle="Zadzwoń, napisz lub wypełnij formularz — oddzwonimy, aby potwierdzić termin wizyty."
        breadcrumbs={[{ label: "Kontakt" }]}
      />
      <section className="page-section">
        <div className="page-section-wrapper contact-page">
          <div className="contact-page__info">
            <div className="contact-item">
              <span className="contact-item__icon">
                <Icon name="pin" />
              </span>
              <div>
                <h3>Adres</h3>
                <p>{siteInfo.street}</p>
                <p>{siteInfo.city}</p>
                <a href={siteInfo.mapsUrl} target="_blank" rel="noopener noreferrer">
                  sprawdź jak dojechać
                </a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-item__icon">
                <Icon name="phone" />
              </span>
              <div>
                <h3>Telefon</h3>
                <a href={siteInfo.phoneHref}>{siteInfo.phone}</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-item__icon">
                <Icon name="mail" />
              </span>
              <div>
                <h3>E-mail</h3>
                <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-item__icon">
                <Icon name="clock" />
              </span>
              <div>
                <h3>Godziny otwarcia</h3>
                {siteInfo.openingHours.map((item) => (
                  <p key={item.days}>
                    <span>{item.days}:</span> {item.hours}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div id="formularz" className="contact-page__form">
            <h2>Umów wizytę</h2>
            {isSent ? (
              <div className="form-success" role="status">
                <Icon name="check" size={32} />
                <h3>Dziękujemy za wiadomość!</h3>
                <p>
                  Skontaktujemy się z Tobą najszybciej, jak to możliwe, aby
                  potwierdzić termin wizyty.
                </p>
                <button type="button" className="btn" onClick={() => setIsSent(false)}>
                  wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-form__row">
                  <label className="field">
                    <span>Imię i nazwisko *</span>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <small className="field__error">{errors.name}</small>}
                  </label>
                  <label className="field">
                    <span>Telefon *</span>
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && <small className="field__error">{errors.phone}</small>}
                  </label>
                </div>
                <div className="contact-form__row">
                  <label className="field">
                    <span>E-mail</span>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <small className="field__error">{errors.email}</small>}
                  </label>
                  <label className="field">
                    <span>Preferowany termin</span>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <label className="field">
                  <span>Usługa</span>
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">Nie wiem — potrzebuję konsultacji</option>
                    {services.map((service) => (
                      <option key={service.slug} value={service.slug}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="field">
                  <span>Wiadomość</span>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                  />
                </label>
                <label className="field field--checkbox">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={handleChange}
                    aria-invalid={!!errors.consent}
                  />
                  <span>
                    Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
                    kontaktu i umówienia wizyty, zgodnie z{" "}
                    <Link href="/polityka-prywatnosci">polityką prywatności</Link>. *
                  </span>
                </label>
                {errors.consent && <small className="field__error">{errors.consent}</small>}
                <button type="submit" className="btn btn--full">
                  wyślij zgłoszenie
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      <section className="contact-map">
        <iframe
          title="Mapa dojazdu do GoldenMED"
          src={siteInfo.mapsEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
};

export default ContactPage;
