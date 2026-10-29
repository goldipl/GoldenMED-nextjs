import ContactCta from "@/components/common/ContactCta";
import PageHero from "@/components/common/PageHero";
import Seo from "@/components/common/Seo";
import TeamCard from "@/components/common/TeamCard";
import { team } from "@/data/team";

const TeamPage = () => {
  return (
    <>
      <Seo
        title="Nasza kadra"
        description="Poznaj lekarzy, dermatologów, kosmetologów i trychologa GoldenMED."
      />
      <PageHero
        title="Nasza kadra"
        subtitle="Zespół lekarzy i specjalistów, którym możesz zaufać."
        breadcrumbs={[{ label: "Nasza kadra" }]}
      />
      <section className="page-section">
        <div className="page-section-wrapper">
          <div className="cards-grid">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} showBio />
            ))}
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  );
};

export default TeamPage;
