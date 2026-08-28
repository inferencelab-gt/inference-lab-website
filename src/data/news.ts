
export interface NewsItem {
  title: string;
  date: string;
  description: string;
  image?: string; // Path to image in public/
  link?: string;
  focus?: boolean; // If true, this news item will be highlighted on the homepage
}

export const news: NewsItem[] = [
  {
    title: "Inference Lab welcomes new students",
    date: "08-28-2026",
    description: "We are excited to welcome our new PhD, MS, and undergraduate students for the fall semester! Do-Gon Kim, Rafi Ahmed Sagor, and Jacob W Lee are the first cohort of PhD students at Inference Lab. Berk and Shubh Raval are MS students expecting to graduate in the fall, while Maitreyi Sarkar, Nivedita Rajendran, Connell J Bartling, Esteban, and Kevin D Ghobrial will work as undergraduate researchers on different lab projects.",
    image: "/group1.jpg",
    link: "/news/0",
    focus: true // Highlight this news item
  },
  {
    title: "We got the Woodruff Innovation Nexus award",
    date: "07-15-2026",
    description: "Inference Lab received the Woodruff Innovation Nexus award, a Georgia Tech mechanical engineering grant supporting high-risk, high-reward research. We are grateful for this recognition and excited to use the award to advance our research projects.",
    image: "/group2.jpg",
    link: "/news/1",
  },
  {
    title: "Two best paper awards at IDETC 2025",
    date: "08-06-2025",
    description: "Congratulations to the team for our latest publication on scalable inference models.",
    image: "/group2.jpg",
    link: "#", 
  },
  {
    title: "Hello world!",
    date: "08-06-2025",
    description: "We are excited to welcome several new PhD students and postdocs to the lab.",
    image: "/group3.jpg",
    link: "#"
  }
];
