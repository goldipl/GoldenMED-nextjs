import React from "react";
import Link from "next/link";
import TeamCard from "@/components/common/TeamCard";
import { team } from "@/data/team";

const TeamSection = () => {
  return (
    <section id="team-section" className="team-section">
      <div className="team-section-wrapper">
        <div className="section-heading">
          <span className="section-heading__eyebrow">Zespół</span>
          <h2>
            Poznaj <span>naszych specjalistów</span>
          </h2>
          <p>
            Lekarze, dermatolodzy, kosmetolodzy i trycholog — zespół, który
            łączy doświadczenie z empatią.
          </p>
        </div>
        <div className="cards-grid">
          {team.slice(0, 3).map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
        <div className="section-more">
          <Link href="/nasza-kadra" className="btn">
            cały zespół
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
