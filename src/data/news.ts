
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
    title: "Inference Lab is hiring",
    date: "08-10-2025",
    description: "We are looking for multiple PhD students for fall 2026. We are looking for students with a strong passion and interest in AI-driven research, and a desire to work on cutting-edge problems in artificial intelligence, machine learning, and their applications to engineering.",
    image: "/group1.jpg",
  link: "/blog-docs/news/news_2/",
    focus: true // Highlight this news item
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
    date: "2025-06-15",
    description: "We are excited to welcome several new PhD students and postdocs to the lab.",
    image: "/group3.jpg",
    link: "#"
  },
  {
    title: "Lab hosts summer AI workshop",
    date: "2025-05-20",
    description: "We hosted a successful workshop on AI for engineering applications, with speakers from academia and industry.",
    image: "/person_1.jpg",
    link: "#"
  }
];
