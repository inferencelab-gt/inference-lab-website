/**
 * =============================================================================
 * SITE CONFIGURATION
 * =============================================================================
 * 
 * This is the main configuration file for your lab website.
 * Edit the values below to customize your site.
 * 
 * After editing this file, restart the development server to see changes.
 */

export const siteConfig = {
  // =========================================================================
  // BASIC INFO
  // =========================================================================
  
  /** Your lab/group name (appears in header and title) */
  labName: "Inference Lab",
  
  /** Short tagline that appears with the typewriter effect */
  tagline: "We are building universal engineering intelligence",
  
  /** University/Institution name */
  institution: "Georgia Tech",
  
  /** Site title (appears in browser tab) */
  siteTitle: "inference@GT",
  
  /** Site description (for SEO) */
  siteDescription: "Research lab at Georgia Tech",
  
  // =========================================================================
  // BRANDING & LOGOS
  // =========================================================================
  
  /** Path to your lab logo (place in public/ folder) */
  labLogo: "/logo.png",
  
  /** Path to your institution logo (place in public/ folder) */
  institutionLogo: "/GTVertical_RGB.png",
  
  /** Favicon path */
  favicon: "/logo.png",
  
  // =========================================================================
  // HERO SECTION
  // =========================================================================
  
  /** Lab carousel images shown on homepage (place in public/ folder) */
  heroImages: [
    "/group1.jpg",
    "/group2.jpg",
    "/group3.jpg",
  ],
  
  /** YouTube video ID for "Who We Are" section (the part after v= in YouTube URL) */
  whoWeAreVideoId: "d7HTo2a7uLc",
  
  /** Path to "What We Do" icon */
  whatWeDoIcon: "/what_we_do_icon.svg",
  
  /** Link for "What We Do" button */
  whatWeDoLink: "/blog-docs",
  
  // =========================================================================
  // COLORS (Tailwind CSS classes or hex values)
  // =========================================================================
  
  colors: {
    /** Primary accent color (gold by default) */
    primary: "#FFD700",
    
    /** Secondary accent color */
    secondary: "#B3A369",
    
    /** Background gradient colors */
    backgroundStart: "#070a18",
    backgroundEnd: "#10162a",
  },
  
  // =========================================================================
  // SOCIAL LINKS
  // =========================================================================
  
  socialLinks: {
    github: "https://github.com/inferencelab-gt",
    twitter: "", // Leave empty if not used
    linkedin: "",
    youtube: "",
  },
  
  // =========================================================================
  // CONTACT INFO
  // =========================================================================
  
  contact: {
    email: "ferdous@gatech.edu",
    office: "Love Building, 771 Ferst Dr NW, Atlanta, GA 30332",
    lab: "Lab: AMPF, 555 14th St NW, Atlanta, GA 30318",
  },
  
  // =========================================================================
  // FEATURES TOGGLE
  // =========================================================================
  
  features: {
    /** Show/hide the PhD application section */
    showPhDApplication: true,
    
    /** Show/hide the blog/docs section */
    showBlog: true,
    
    /** Show/hide the publications section */
    showPublications: true,
    
    /** Show/hide the team section */
    showTeam: true,
    
    /** Show/hide the research section */
    showResearch: true,
    
    /** Show/hide the code/projects section */
    showCode: true,
    
    /** Show/hide the news section */
    showNews: true,
  },
};

export type SiteConfig = typeof siteConfig;
