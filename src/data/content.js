export const personalInfo = {
  name: "Mohit Kumar",
  role: "MERN Full-Stack Developer",
  email: "100mohitk@gmail.com",
  phone: "7986145477",
  location: "Chandigarh, India",
  linkedin: "in/mohitkumar2822",
  summary: "Aspiring full-stack developer proficient in the MERN stack, focused on building dynamic, responsive web apps and modern UX with sound engineering practices.",
};

export const navLinks = [
  { name: "Home", path: "#hero" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", proficiency: 90 },
      { name: "HTML", proficiency: 95 },
      { name: "CSS", proficiency: 90 },
      { name: "JavaScript (ES6+)", proficiency: 85 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", proficiency: 80 },
      { name: "Express.js", proficiency: 75 },
    ],
  },
  {
    category: "Database",
    items: [{ name: "MongoDB", proficiency: 70 }],
  },
  {
    category: "Tools",
    items: [
      { name: "Cursor", proficiency: 80 },
      { name: "VS Code", proficiency: 90 },
      { name: "Android Studio", proficiency: 70 },
    ],
  },
];

export const education = [
  {
    degree: "BCA (Minor in Mathematics)",
    institution: "Panjab University Chandigarh",
    year: "2025",
    grade: "CGPA 6.842",
  },
];

export const projects = [
  {
    id: "1",
    title: "Fittoo — Fitness App",
    timeframe: "Jan 2025 – May 2025",
    role: "Front-end and integration",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    tags: ["Web", "Mobile"],
    highlights: [
      "Designed a user-centric interface; ran usability tests with 10+ participants to improve task completion efficiency.",
      "Built real-time workout tracking (live rep counting, adaptive feedback loops) achieving sub-second responses in emulator tests.",
      "Added activity tracking (step counter, reminders) with modular logic for future wearable integrations.",
      "Optimized backend sync and conflict resolution, improving local API response by ~40% and reducing multi-device data conflicts.",
    ],
    liveLink: "#", // Placeholder
    codeLink: "#", // Placeholder
  },
  {
    id: "2",
    title: "AI Text Summarizer — Web App",
    timeframe: "Jul 2025 – Present",
    role: "Full-stack developer",
    tech: ["MERN", "JWT auth", "Hugging Face model"],
    tags: ["Web", "AI"],
    highlights: [
      "Implemented secure authentication/authorization with JWT and personalized dashboards.",
      "Integrated a free Hugging Face model for summary generation.",
      "Built a responsive React UI for a seamless user experience across devices.",
    ],
    liveLink: "#", // Placeholder
    codeLink: "#", // Placeholder
  },
];

export const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/mohitkumar2822", icon: "linkedin" },
  { name: "GitHub", url: "https://github.com/mohitkumar2822", icon: "github" },
];
