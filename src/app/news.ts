export interface NewsItem {
  title: string;
  date: string;
  description: string;
  link?: string;
}

export const news: NewsItem[] = [
  {
    title: "Inference Lab awarded major NSF grant",
    date: "2025-07-10",
    description: "Our lab has received a new NSF grant to advance universal engineering intelligence research.",
    link: "#"
  },
  {
    title: "New paper accepted at NeurIPS 2025",
    date: "2025-06-28",
    description: "Congratulations to the team for our latest publication on scalable inference models.",
    link: "#"
  },
  {
    title: "Welcome new lab members!",
    date: "2025-06-15",
    description: "We are excited to welcome several new PhD students and postdocs to the lab.",
    link: "#"
  },
  {
    title: "Lab hosts summer AI workshop",
    date: "2025-05-20",
    description: "We hosted a successful workshop on AI for engineering applications, with speakers from academia and industry.",
    link: "#"
  }
];
