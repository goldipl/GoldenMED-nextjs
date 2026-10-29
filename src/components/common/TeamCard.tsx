import React from "react";
import Link from "next/link";
import { TeamMember, getInitials } from "@/data/team";
import { getServiceBySlug } from "@/data/services";

interface TeamCardProps {
  member: TeamMember;
  showBio?: boolean;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, showBio = false }) => {
  return (
    <div className="team-card">
      <span className="team-card__avatar" aria-hidden="true">
        {getInitials(member.name)}
      </span>
      <h3 className="team-card__name">
        {member.title && <small>{member.title} </small>}
        {member.name}
      </h3>
      <span className="team-card__role">{member.role}</span>
      {showBio && <p className="team-card__bio">{member.bio}</p>}
      {showBio && member.services.length > 0 && (
        <div className="team-card__tags">
          {member.services.map((slug) => {
            const service = getServiceBySlug(slug);
            return (
              service && (
                <Link key={slug} href={`/oferta/${slug}`}>
                  {service.name}
                </Link>
              )
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TeamCard;
