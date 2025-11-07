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
    name: "John Doe 1",
    role: "Member of Technical Staff",
    image: "/person_2.jpg",
    bio: "Focuses on deep learning and computer vision.",
    email: "john.doe@gatech.edu",
    links: [
      { label: "Google Scholar", url: "" },
      { label: "LinkedIn", url: "" },
      { label: "GitHub", url: "" },
      { label: "Personal Website", url: "" }
    ]
  }, 
  {
    name: "Jane Doe 2",
    role: "Member of Technical Staff",
    image: "/person_3.jpg",
    bio: "Focuses on deep learning and computer vision.",
    email: "john.doe@gatech.edu",
    links: [
      { label: "Google Scholar", url: "" },
      { label: "LinkedIn", url: "" },
      { label: "GitHub", url: "" },
      { label: "Personal Website", url: "" }
    ]
  }, 
  {
  name: "John Doe 3",
  role: "Member of Technical Staff",
  image: "/person_3.jpg",
  bio: "Focuses on deep learning and computer vision.",
  email: "john.doe@gatech.edu",
  links: [
    { label: "Google Scholar", url: "https://scholar.google.com/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/" },
    { label: "GitHub", url: "https://github.com/" },
    { label: "Personal Website", url: "https://janedoe.com" }
  ]
}, 
  {
    name: "Jane Doe 4",
    role: "Member of Technical Staff",
    image: "/person_3.jpg",
    bio: "Focuses on deep learning and computer vision.",
    email: "john.doe@gatech.edu",
    links: [
      { label: "Google Scholar", url: "https://scholar.google.com/" },
      { label: "LinkedIn", url: "https://www.linkedin.com/" },
      { label: "GitHub", url: "https://github.com/" },
      { label: "Personal Website", url: "https://janedoe.com" }
    ]
  }, 
];
