This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


## Make This Your Own Lab Website

You can easily use this codebase to create your own research group or lab website! Follow these steps to customize it for your team:

### 1. Update Team Members

- Edit the file at `src/data/team.ts` to add, remove, or modify team members. Each member has a name, role, image, and links (such as website, LinkedIn, Scholar, GitHub, etc).
- Images for team members should be placed in the `public/` directory (e.g., `public/person_1.jpg`). Update the `image` field for each member accordingly.

### 2. Update Publications

- Edit the file at `src/data/publications.ts` to add or update your group's publications. Each publication can include title, authors, venue, year, and links (code, website, arXiv, paper, etc).

### 3. Update Code/Projects Section

- The featured code repositories are listed directly in `src/app/page.tsx` (look for the `Featured GitHub Repos` section). You can edit or replace these with your own repositories, descriptions, and star counts.

### 4. Update Lab Images

- The homepage carousel uses images from the `public/` directory. You can replace or add images in `public/` and update the `labImages` array in `src/app/page.tsx`.

### 5. Update News

- Edit `src/app/news.ts` and `src/app/newsImages.ts` to update the latest news and associated images.

### 6. Customize Styles and Branding

- You can adjust colors, fonts, and layout using Tailwind CSS classes and the files in `src/app/` and `src/app/page.module.css`.

### 7. Deploy

- When you're ready, deploy your site to Vercel or your preferred platform. See the deployment instructions below.

---

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
