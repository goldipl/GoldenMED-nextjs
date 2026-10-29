import PageHero from "@/components/common/PageHero";
import Seo from "@/components/common/Seo";
import { siteInfo } from "@/data/site";

// Szablon — treść wymaga weryfikacji prawnej przed publikacją
const PrivacyPolicyPage = () => {
  return (
    <>
      <Seo title="Polityka prywatności" />
      <PageHero
        title="Polityka prywatności"
        breadcrumbs={[{ label: "Polityka prywatności" }]}
      />
      <section className="page-section">
        <div className="page-section-wrapper">
          <article className="content content--narrow">
            <h2>Administrator danych</h2>
            <p>
              Administratorem Twoich danych osobowych jest {siteInfo.name},{" "}
              {siteInfo.street}, {siteInfo.city}. W sprawach dotyczących danych
              osobowych możesz skontaktować się z nami pod adresem{" "}
              <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>.
            </p>
            <h2>Cel i podstawa przetwarzania</h2>
            <p>
              Dane przekazane w formularzu kontaktowym przetwarzamy wyłącznie w
              celu udzielenia odpowiedzi i umówienia wizyty, na podstawie Twojej
              zgody (art. 6 ust. 1 lit. a RODO).
            </p>
            <h2>Okres przechowywania</h2>
            <p>
              Dane przechowujemy przez czas niezbędny do obsługi zgłoszenia, a
              następnie do momentu wycofania zgody lub upływu okresów wymaganych
              przepisami prawa.
            </p>
            <h2>Twoje prawa</h2>
            <p>
              Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia,
              ograniczenia przetwarzania, przenoszenia oraz wycofania zgody w
              dowolnym momencie. Przysługuje Ci również prawo wniesienia skargi
              do Prezesa Urzędu Ochrony Danych Osobowych.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
