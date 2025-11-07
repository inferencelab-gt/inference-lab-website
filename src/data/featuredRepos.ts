// Featured GitHub repositories for the Inference Lab website
export interface FeaturedRepo {
  name: string;
  desc: string;
  url: string;
  stars: number;
  lang: string;
}

export const featuredRepos: FeaturedRepo[] = [
  {
    name: "GenCAD",
    desc: "Image-conditioned Computer-Aided Design Generation",
    url: "https://github.com/ferdous-alam/GenCAD",
    stars: 450,
    lang: "Python"
  },
  {
    name: "DVRK Robot",
    desc: "dVRK Inverse Kinematics and Trajectory Generation Project",
    url: "https://github.com/ferdous-alam/DVRK_robot_project",
    stars: 5,
    lang: "Python"
  },
  {
    name: "Autonomous Manufacturing Robot",
    desc: "Prototypical embodied manufacturing intelligence using RL",
    url: "https://github.com/inference-lab/open-lab-visualizer",
    stars: 2,
    lang: "Python, MATLAB, LabVIEW"
  }
];
