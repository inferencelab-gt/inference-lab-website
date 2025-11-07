// src/data/research.ts
// Data for research areas shown on the homepage research section

export interface ResearchArea {
  title: string;
  description: string;
  image?: string; // Path to image in public/
  learnMoreUrl?: string;
}

export const research: ResearchArea[] = [
  {
    title: "Foundation Models for AI-native Engineering",
    description: "",
    image: "/theme_1.png",
    learnMoreUrl: "/research/universal-engineering-intelligence"
  },
  {
    title: "Physics and knowledge-integrated AI",
    description: "",
    image: "/theme_2.png",
    learnMoreUrl: "/research/scalable-inference-models"
  },
  {
    title: "Embodied Manufacturing Intelligence",
    description: "",
    image: "/theme_3.png",
    learnMoreUrl: "/research/robotic-manufacturing"
  }
];
