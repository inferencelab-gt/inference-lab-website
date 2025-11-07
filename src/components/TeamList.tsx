import React from "react";
import { team, TeamMember } from "../data/team";

export default function TeamList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {team.map((member) => (
        <div key={member.name} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          {member.image && (
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover mb-4 border"
            />
          )}
          <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
          <div className="text-sm text-gray-600 mb-2">{member.role}</div>
          {member.bio && <div className="text-xs text-gray-500 mb-2 text-center">{member.bio}</div>}
          {member.email && (
            <a href={`mailto:${member.email}`} className="text-xs text-blue-600 hover:underline mb-2">{member.email}</a>
          )}
          {member.links && member.links.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {member.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-500 hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
