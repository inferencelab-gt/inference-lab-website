# 🧪 Research Lab Website Template

A beautiful, modern, and fully customizable website template for research labs, academic groups, and startups. Built with **Next.js 15**, **Tailwind CSS 4**, and **Framer Motion** — featuring an elegant frosted-glass design with animated gradient backgrounds.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

- 🎨 **Elegant Dark Theme** — Frosted glass effects with vibrant gold gradient accents
- 📱 **Fully Responsive** — Looks great on mobile, tablet, and desktop
- ⚡ **Fast & SEO-Optimized** — Built on Next.js 15 with App Router
- 🔧 **Easy Customization** — Single config file for all lab info
- 📝 **Content Management** — Simple TypeScript data files for team, publications, news
- 🎬 **Smooth Animations** — Typewriter effects, hover states, and scroll animations
- 🚀 **One-Click Deploy** — Ready for Vercel, Netlify, or any hosting platform

---

## 🚀 Quick Start (5 Minutes!)

### 1. Clone & Install

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### 2. Configure Your Lab (One File!)

Open `src/config/site.config.ts` and update with your lab's information:

```typescript
export const siteConfig = {
  labInfo: {
    name: "Your Lab Name",
    tagline: "Your inspiring tagline here",
    institution: "Your University",
    department: "Department Name",
    principalInvestigator: "Prof. Your Name",
    email: "lab@university.edu",
    location: "City, Country",
  },
  // ... see file for all options
};
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — your site is live! 🎉

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── blog-docs/         # Blog/documentation pages
│   │   ├── page.tsx       # Blog index
│   │   ├── vision/        # Vision page
│   │   ├── philosophy/    # Philosophy page
│   │   └── os/            # Lab OS page
│   ├── team/              # Team page
│   ├── publications/      # Publications page
│   ├── research/          # Research areas
│   ├── news/              # News articles
│   └── phd-application/   # PhD application form
│
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── TeamList.tsx      # Team member grid
│   ├── PublicationList.tsx
│   └── NewsCard.tsx
│
├── config/
│   └── site.config.ts    # ⭐ MAIN CONFIGURATION FILE
│
├── data/                  # ⭐ ALL CONTENT LIVES HERE
│   ├── team.ts           # Team members
│   ├── publications.ts   # Publications list
│   ├── news.ts           # News/announcements
│   ├── blogs.ts          # Blog page metadata
│   ├── research.ts       # Research areas
│   ├── contact.ts        # Contact information
│   └── featuredRepos.ts  # GitHub repositories
│
└── lib/
    └── utils.ts          # Utility functions
```

---

## 🎨 Customization Guide

### Step 1: Site Configuration (`src/config/site.config.ts`)

This is your **one-stop shop** for all lab branding:

| Section | What to Update |
|---------|---------------|
| `labInfo` | Lab name, tagline, institution, PI name, email, location |
| `theme.colors` | Primary, secondary, accent colors (hex values) |
| `socialLinks` | GitHub, Twitter/X, LinkedIn, YouTube URLs |
| `features` | Toggle PhD form, blog, team page on/off |
| `seo` | Meta title, description, keywords, OG image |

### Step 2: Team Members (`src/data/team.ts`)

```typescript
export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Jane Smith",
    role: "Principal Investigator",
    image: "/team/jane.jpg",  // Put image in public/team/
    bio: "Leading researcher in AI...",
    links: {
      website: "https://janesmith.com",
      scholar: "https://scholar.google.com/...",
      github: "https://github.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
    },
  },
  // Add more team members...
];
```

### Step 3: Publications (`src/data/publications.ts`)

```typescript
export const publications: Publication[] = [
  {
    title: "Your Paper Title",
    authors: ["Author 1", "Author 2", "Author 3"],
    venue: "NeurIPS 2024",
    year: 2024,
    links: {
      paper: "https://arxiv.org/abs/...",
      code: "https://github.com/...",
      website: "https://project-page.com",
    },
    featured: true,  // Shows on homepage
  },
];
```

### Step 4: Research Areas (`src/data/research.ts`)

```typescript
export const researchAreas: ResearchArea[] = [
  {
    title: "Machine Learning",
    description: "Our work on...",
    icon: "🤖",
    slug: "machine-learning",  // URL: /research/machine-learning
  },
];
```

### Step 5: News & Updates (`src/data/news.ts`)

```typescript
export const newsItems: NewsItem[] = [
  {
    id: "paper-accepted-2024",
    title: "Paper Accepted at NeurIPS!",
    date: "2024-01-15",
    summary: "Our latest work on...",
    image: "/news/neurips.jpg",
  },
];
```

### Step 6: Images

Place all images in the `public/` directory:

```
public/
├── team/           # Team member photos
│   ├── jane.jpg
│   └── john.jpg
├── news/           # News article images
├── research/       # Research area images
├── lab-photo-1.jpg # Lab/office photos for carousel
└── og-image.jpg    # Social media preview image
```

---

## 🎭 Styling Customization

### Colors

Edit `src/config/site.config.ts`:

```typescript
theme: {
  colors: {
    primary: "#FFD700",      // Gold accent
    secondary: "#1a2744",    // Card backgrounds
    accent: "#00ffff",       // Cyan highlights
    background: "#050a14",   // Dark navy base
    text: "#ffffff",         // White text
  },
}
```

### Gradient Background

The animated gradient blobs are defined in `src/app/page.tsx`. Look for the `{/* Animated Gradient Blobs */}` section to customize:

- Blob colors (currently gold `#FFD700`)
- Blob positions and sizes
- Animation timing
- Blur intensity

### Fonts

Update fonts in `src/app/layout.tsx`:

```typescript
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
```

---

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/YOUR_REPO)

1. Push your code to GitHub
2. Connect repository to Vercel
3. Deploy automatically!

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm start

# Or export static files
npm run build && npm run export
```

Works with: Netlify, AWS Amplify, Cloudflare Pages, GitHub Pages, etc.

---

## 📖 Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 15](https://nextjs.org) | React framework with App Router |
| [Tailwind CSS 4](https://tailwindcss.com) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Geist Font](https://vercel.com/font) | Modern typography |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 💡 Need Help?

- 📚 [Next.js Documentation](https://nextjs.org/docs)
- 🎨 [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- 🐛 [Open an Issue](https://github.com/YOUR_USERNAME/YOUR_REPO/issues)

---

**Made with ❤️ for the research community**
