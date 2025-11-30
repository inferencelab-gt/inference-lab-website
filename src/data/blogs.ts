/**
 * Blog/Documentation Pages
 * 
 * These are the main content pages shown on the /blog-docs index.
 * The actual page content lives in src/app/blog-docs/[slug]/page.tsx
 * 
 * To add a new blog:
 * 1. Add entry here
 * 2. Create the page at src/app/blog-docs/[slug]/page.tsx
 */

export interface BlogEntry {
  /** URL slug - must match folder name in app/blog-docs/ */
  slug: string;
  /** Display title */
  title: string;
  /** Short description shown on index */
  description: string;
  /** Icon or emoji (optional) */
  icon?: string;
  /** Category for grouping */
  category: "about" | "research" | "news";
  /** Order in the list (lower = first) */
  order: number;
}

export const blogs: BlogEntry[] = [
  {
    slug: "vision",
    title: "Vision",
    description: "Our long-term research vision and goals",
    icon: "🔭",
    category: "about",
    order: 1,
  },
  {
    slug: "philosophy",
    title: "Philosophy",
    description: "How we approach research and what drives us",
    icon: "💡",
    category: "about",
    order: 2,
  },
  {
    slug: "os",
    title: "Inference OS",
    description: "Lab operating system - how we work together",
    icon: "⚙️",
    category: "about",
    order: 3,
  },
];

export type BlogCategory = BlogEntry["category"];
