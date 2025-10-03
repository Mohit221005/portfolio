# Mohit Kumar - MERN Full-Stack Developer Portfolio

This is a modern, professional portfolio website for Mohit Kumar, a MERN Full-Stack Developer, built with React (Vite), Tailwind CSS, and Framer Motion.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Design System](#design-system)
- [Setup and Installation](#setup-and-installation)
- [Content Editing](#content-editing)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)

## Features

- Modern Dark theme with vibrant accent colors.
- Excellent animations, effects, and transitions using Framer Motion.
- Scroll-triggered reveals via IntersectionObserver (handled by `useInView` from Framer Motion).
- Responsive design with Tailwind CSS.
- Optimized for performance and accessibility.
- SEO-friendly with structured data.
- Filterable project grid.
- Contact form integration with EmailJS.

## Tech Stack

- **Frontend:** React (Vite), JavaScript (ES2022), Tailwind CSS, Framer Motion, React Router (implied for routing modals/sections), EmailJS, IntersectionObserver.
- **Image Optimization:** Responsive `<img srcSet>`, next-gen formats (implied).
- **Icons:** Heroicons/Feather (via `react-icons`).

## Design System

- **Theme:** Modern Dark with vibrant accent.
- **Colors:**
  - Background: `#0B1020`
  - Surface: `#111827`
  - Text: `#E5E7EB`
  - Muted: `#9CA3AF`
  - Accent: `#2563EB` (optionally `#06D6A0`)
- **Typography:** Inter or Poppins from Google Fonts, 16px base, relaxed line-height.
- **Components:** Elevated cards with soft shadow and subtle gradient overlays, rounded-md (0.375rem), 12px/16px radii.

## Setup and Installation

To get the project up and running locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd mohit-portfolio
    ```

2.  **Install dependencies:**
    Make sure you have Node.js and npm installed. If `npm` commands don't work, ensure Node.js is correctly installed and in your system's PATH.
    ```bash
    npm install
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    npm install framer-motion @emailjs/browser react-icons
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Content Editing

All textual content and project details are managed in a single file:

-   `src/data/content.js`: Edit this file to update your personal information, skills, education, projects, and social links.

**Placeholder Links:**

-   Remember to update the `liveLink` and `codeLink` for your projects in `src/data/content.js` with actual URLs.
-   The social preview image in `index.html` (`/social-preview.jpg`) is a placeholder; replace it with your own image for better social sharing.

## Deployment

To create a production-ready build:

1.  **Build the project:**
    ```bash
    npm run build
    ```
    This will generate optimized static assets in the `dist/` directory.

2.  **Deploy:**
    The `dist/` directory can be deployed to any static site hosting service like Netlify, Vercel, GitHub Pages, or Firebase Hosting.

## Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── ProjectCard.jsx
│   │   └── SkillMeter.jsx
│   ├── data/
│   │   └── content.js
│   ├── hooks/
│   │   ├── usePrefersReducedMotion.js
│   │   └── useScrollSection.js
│   ├── lib/
│   │   └── motionVariants.js
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
```

## Environment Variables

For EmailJS integration in `src/sections/Contact.jsx`, you need to set up the following environment variables. It is recommended to use Vite's `import.meta.env` for this:

1.  Create a `.env` file in the project root.
2.  Add your EmailJS credentials:
    ```
    VITE_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID
    VITE_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID
    VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY
    ```
3.  Update `src/sections/Contact.jsx` to use these variables:
    ```javascript
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    ```
    (Note: The `Contact.jsx` has been prepared with placeholders for these values, you just need to update the .env file and uncomment the import.meta.env lines).

## Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the app for production.
-   `npm run lint`: Lints the project.
-   `npm run preview`: Previews the production build locally.
