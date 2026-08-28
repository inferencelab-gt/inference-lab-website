
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
    description: "We are welcoming our new PhD, MS and undergrad students. Do-Gon, Rafi and Jacob will be the first cohort of PhD students at Inference lab.",
    image: "/group1.jpg",
  link: "/blog-docs/news/news_2/",
    focus: true // Highlight this news item
  },
  {
    title: "We got the Woodruff Innovation Nexus award",
    date: "07-15-2026",
    description: "Congratulations to the team for our latest publication on scalable inference models.",
    image: "/group2.jpg",
    link: "#", 
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
