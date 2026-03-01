// Team data for inference@GT
export interface TeamMember {
  name: string;
  role: string;
  image?: string; // Path to image in public/
  bio?: string;
  email?: string;
  links?: { label: string; url: string }[];
}

export const team: TeamMember[] = [
  {
    name: "Ferdous Alam",
    role: "Member of Technical Staff",
    image: "/person_1.jpg",
    bio: "Research interests in AI and ML.",
    email: "jane.doe@gatech.edu",
    links: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=m5ofw-YAAAAJ&hl=en" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/mfalam083/" },
      { label: "GitHub", url: "https://github.com/ferdous-alam" },
      { label: "Personal Website", url: "https://ferdous-alam.github.io/" }
    ]
  },
    {
    name: "Shubh Raval",
    role: "Member of Technical Staff",
    image: "/shubh.jpeg",
    bio: "Focuses on deep learning and computer vision.",
    email: "john.doe@gatech.edu",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/shubh-raval?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
    ]
  }, 
  {
    name: "Shailen Amin",
    role: "Member of Technical Staff",
    image: "/shailen.jpeg",
    bio: "Focuses on deep learning and computer vision.",
    email: "john.doe@gatech.edu",
    links: [
    ]
  }, 
];
