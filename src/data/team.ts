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
    name: "Do-Gon Kim",
    role: "Member of Technical Staff",
    image: "/do-gon-phd.png",
    email: "dkim3220@gatech.edu",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/do-gon-kim/" },
    ]
  }, 
  {
    name: "Rafi Ahmed Sagor",
    role: "Member of Technical Staff",
    image: "/rafi-phd.JPEG",
    email: "rsagor3@gatech.edu",
    links: [
        {label: "GitHub", url: "https://github.com/rafisagor21" },
        {label: "LinkedIn", url: "https://www.linkedin.com/in/jacob-lee-973a76198/" },
      ]
  },  
  {
    name: "Jacob W Lee",
    role: "Member of Technical Staff",
    image: "/jaocb-phd.png",
    email: "jlee4680@gatech.edu",
    links: [
      {label: "GitHub", url: "https://github.com/Jacob-W-Lee" },
      {label: "LinkedIn", url: "https://www.linkedin.com/in/jacob-lee-973a76198/"},
      {label: "Personal Website", url: "https://jacob-w-lee.github.io/" }
    ]
  },  
  {
    name: "Shubh Raval",
    role: "Member of Technical Staff",
    image: "/shubh.jpeg",
    email: "sraval9@gatech.edu",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/shubh-raval?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
    ]
  }, 
  {
    name: "Kyle Tennison",
    role: "UG Member of Technical Staff",
    image: "/kyle-ug.png",
    email: "ktennison3@gatech.edu",
    links: [
      { label: "GitHub", url: "https://github.com/kyle-tennison/" },
      { label: "Personal Website", url: "https://kyletennison.com/" }
    ]
  },
  {
    name: "Nivedita Rajendran",
    role: "UG Member of Technical Staff",
    image: "/nivi-ug.jpeg",
    email: "nrajendran35@gatech.edu",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/nivi-rajendran/" },
    ]
  }, 

    {
    name: "Maitreyi Sarkar",
    role: "UG Member of Technical Staff",
    image: "/maitreyi-ug.jpeg",
    email: "msarkar34@gatech.edu",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/maitreyi-sarkar-3467ab298?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
      { label: "GitHub", url: "https://github.com/maitreyis15" },
    ]
  }, 
  {
    name: "Kevin D Ghobrial",
    role: "UG Member of Technical Staff",
    image: "/kevin-ug.jpg",
    email: "kghobrial3@gatech.edu",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/kevinghobrial/" },
      { label: "GitHub", url: "https://github.com/Kevin-Ghobrial" },
    ]
  }, 
  {
    name: "Connell J Bartling",
    role: "UG Member of Technical Staff",
    image: "/connell-ug.JPG",
    email: "cbartling3@gatech.edu",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/connell-bartling/" },
    ]
  }, 
];
