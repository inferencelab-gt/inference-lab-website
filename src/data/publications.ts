// Publications data for inference@GT
export interface Publication {
  title: string;
  authors: string;
  year?: number | string;
  venue?: string;
  badge?: string;
  codeUrl?: string;
  websiteUrl?: string;
  arxivUrl?: string;
  paperUrl?: string;
  /**
   * Path to a custom image, gif, or video for this publication (e.g. '/my_paper.gif', '/my_paper.mp4', '/my_paper.png')
   */
  media?: string;
}

const unsortedPublications: Publication[] = [
  {
    title: "VideoCAD: A Large-Scale Video Dataset for Learning UI Interactions and 3D Reasoning from CAD Software",
    authors: "Brandon Man, Ghadi Nehme, Md Ferdous Alam, Faez Ahmed",
    year: 2025,
    venue: "NeurIPS",
    paperUrl: "https://arxiv.org/abs/2505.24838",
    codeUrl: "https://github.com/brandonman123/videocad",
    media: "/videocad.mp4", // example, update with your actual media path
  },
  {
    title: "GenCAD-3D: CAD Program Generation using Multimodal Latent Space Alignment and Synthetic Dataset Balancing",
    authors: "Nomi Wu, Md Ferdous Alam, A. John Hart, Faez Ahmed",
    year: 2025,
    venue: "Journal of Mechanical Design (JMD)",
    websiteUrl: "https://gencad3d.github.io/",
    paperUrl: "#",
    media: "/gencad_3d.png", // example
  },
  {
    title: "Cad-Coder: An Open-Source Vision-Language Model for Computer-Aided Design Code Generation",
    authors: "Anna Doris, Md Ferdous Alam, Amin Heyrani Nobari, Faez Ahmed",
    year: 2025,
    venue: "IDETC",
    badge: "Ford Best Paper Award",
    paperUrl: "https://arxiv.org/abs/2505.14646",
    media: "/cad_coder.mp4", // example
  },
  {
    title: "GenCAD-Self-Repairing: Feasibility Enhancement for 3D CAD Generation",
    authors: "Chikaha Tsuji, Enrique Flores Medina, Harshit Gupta, Md Ferdous Alam",
    year: 2025,
    venue: "IDETC",
    badge: "SEIKM Best Paper Award",
    paperUrl: "https://arxiv.org/abs/2505.23287",
    media: "/gencad_self_repairing.png", // example
  },
  {
    title: "From concept to manufacturing: Evaluating vision-language models for engineering design",
    authors: "Cyril Picard, Kristen M Edwards, Anna C Doris, Brandon Man, Giorgio Giannone, Md Ferdous Alam, Faez Ahmed",
    year: 2025,
    venue: "Artificial Intelligence Review",
    paperUrl: "https://link.springer.com/article/10.1007/s10462-025-11290-y",
    media: "/concept_to_manufacturing.png", // example
  },

  {
    title: "GenCAD: Image-Conditioned Computer-Aided Design Generation with Transformer-Based Contrastive Representation and Diffusion Priors",
    authors: "Md Ferdous Alam, Faez Ahmed",
    year: 2025,
    venue: "Transactions on Machine Learning Research (TMLR)",
    paperUrl: "https://openreview.net/forum?id=XXXX",
    websiteUrl: "https://ferdous-alam.github.io/GenCAD/",
  },
  {
    title: "Representation learning for sequential volumetric design tasks",
    authors: "Md Ferdous Alam, Yi Wang, Chih-Yi Cheng, Rodger Luo",
    year: 2025,
    venue: "Journal of Mechanical Design (JMD)",
    paperUrl: "https://asmedigitalcollection.asme.org/mechanicaldesign/article/147/5/051704/1206702/Representation-Learning-for-Sequential-Volumetric",
    websiteUrl: "https://ferdous-alam.github.io/volumetric-design/",
    media: "/volumetric_design.gif",
  },
  {
    title: "DesignQA: A Multimodal Benchmark for Evaluating Large Language Models’ Understanding of Engineering Documentation",
    authors: "Anna C Doris, Daniele Grandi, Ryan Tomich, Md Ferdous Alam, Hyunmin Cheong & Faez Ahmed",
    year: 2025,
    venue: "Journal of Computing and Information Science in Engineering (JCISE)",
    paperUrl: "https://asmedigitalcollection.asme.org/computingengineering/article/25/2/021009/1210215/DesignQA-A-Multimodal-Benchmark-for-Evaluating",
    media: "/design_qa.png",
  },
  {
    title: "From automation to augmentation: policy and practice to redefine engineering design and manufacturing in the age of nextgen-ai",
    authors: "Md Ferdous Alam, Austin Lentsch, Nomi Yu, Sylvia Barmack, Suhin Kim, Daron Acemoglu, John Hart, Simon Johnson, Faez Ahmed",
    year: 2023,
    venue: "MIT Press",
    paperUrl: "https://shapingwork.mit.edu/research/from-automation-to-augmentation-redefining-engineering-design-and-manufacturing-in-the-age-of-nextgen-ai/",
    media: "/automation_to_augmentation.png",
  },
    {
    title: "Physics-guided transfer reinforcement learning for data efficient embodied intelligence in autonomous manufacturing systems",
    authors: "Md Ferdous Alam, Sarp Sezer, Zhi Zhang, Max Shtein, Kira Barton & David J. Hoelzle",
    year: 2024,
    venue: "",
    codeUrl: "https://github.com/ferdous-alam/Autonomous-Manufacturing-Robot",
    paperUrl: "",
    media: "/ams.gif",
  },
  {
    title: "Advantage-based policy transfer with metrics of transferability for Reinforcement Learning",
    authors: "Md Ferdous Alam, Parinaz Naghizadeh & David J. Hoelzle",
    year: 2024,
    venue: "arXiv",
    codeUrl: "https://github.com/ferdous-alam/Transfer-RL",
    paperUrl: "https://arxiv.org/abs/2311.06731",
    websiteUrl: "",
    media: "/apt.gif"
  },
  {
    title: "An Additive Manufacturing Testbed to Evaluate Machine Learning-Based Autonomous Manufacturing",
    authors: "Zhi Zhang, Antony George, Md Ferdous Alam, Chris Eubel, Chaitanya Krishna Prasad Vallabh, Max Shtein, Kira Barton, David J Hoelzle",
    year: 2023,
    venue: "Journal of Manufacturing Science and Engineering (JMSE)",
    paperUrl: "https://asmedigitalcollection.asme.org/manufacturingscience/article/146/3/031008/1193445/An-Additive-Manufacturing-Testbed-to-Evaluate",
    media: "/jmse.jpg"
  },
  {
    title: "Reinforcement learning enabled autonomous manufacturing using transfer learning and probabilistic reward modeling",
    authors: "Md Ferdous Alam, Max Shtein, Kira Barton & David J. Hoelzle",
    year: 2022,
    venue: "IEEE Control Systems Letters (L-CSS)",
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/9814884/",
    media: "/cdc_2022.png"
  },
  {
    title: "Sample efficient transfer in reinforcement learning for high variable cost environments with an inaccurate source reward model",
    authors: "Md Ferdous Alam, Max Shtein, Kira Barton & David J. Hoelzle",
    year: 2022,
    venue: "American Control Conference (ACC)",
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/9867896",
    codeUrl: "https://github.com/ferdous-alam/ACC_2022_codes",
    media: "/acc_2022.gif"
  },
  {
    title: "A physics guided reinforcement learning framework for an autonomous manufacturing system",
    authors: "Md Ferdous Alam, Max Shtein, Kira Barton & David J. Hoelzle",
    year: 2021,
    venue: "American Control Conference (ACC)",
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/9482944",
    codeUrl: "https://github.com/ferdous-alam/ACC_2021_codes",
    media: "/acc_2021.gif"
  },
  {
    title: "Autonomous Manufacturing Using Machine Learning: A Computational Case Study With a Limited Manufacturing Budget",
    authors: "Md Ferdous Alam, Max Shtein, Kira Barton & David J. Hoelzle",
    year: 2020,
    venue: "Manufacturing Science and Engineering Conference (MSEC)",
    badge: "Best Paper Award",
    paperUrl: "https://asmedigitalcollection.asme.org/MSEC/proceedings/MSEC2020/84263/V002T07A009/1095697",
    media: "/MSEC_2020.jpg"
  },
];

export const publications: Publication[] = [...unsortedPublications].sort((a, b) => {
  const yearA = typeof a.year === 'string' ? parseInt(a.year) : a.year || 0;
  const yearB = typeof b.year === 'string' ? parseInt(b.year) : b.year || 0;
  return yearB - yearA;
});
