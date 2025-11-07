import React from "react";
import { publications, Publication } from "../data/publications";

// Sort publications by year (descending)
const sortedPublications = [...publications].sort((a, b) => b.year - a.year);

export default function PublicationList() {
  return (
    <div className="space-y-6">
      {sortedPublications.map((pub, idx) => (
        <div key={idx} className="border-b pb-4">
          <h3 className="font-semibold text-lg">
            {pub.link ? (
              <a href={pub.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                {pub.title}
              </a>
            ) : (
              pub.title
            )}
          </h3>
          <div className="text-sm text-gray-700">{pub.authors}</div>
          <div className="text-xs text-gray-500">{pub.venue}, {pub.year}</div>
        </div>
      ))}
    </div>
  );
}
