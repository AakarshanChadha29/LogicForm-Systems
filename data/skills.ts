export type SkillGroup = {
  id: string;
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive UI",
      "Accessibility",
      "SEO",
    ],
  },
  {
    id: "backend",
    title: "Backend & Systems",
    skills: [
      "Node.js",
      "Python",
      "Java",
      "SQL",
      "APIs",
      "Authentication concepts",
      "Database design basics",
      "Automation workflows",
    ],
  },
  {
    id: "operations",
    title: "IT & Operations",
    skills: [
      "Jira",
      "Atlassian",
      "Google Workspace",
      "Identity and access workflows",
      "Troubleshooting",
      "Documentation",
      "Internal process improvement",
      "CRM and dashboard tooling",
    ],
  },
  {
    id: "engineering",
    title: "Engineering & Academic",
    skills: [
      "Computational Engineering Sciences",
      "Algorithms",
      "C++",
      "Data structures",
      "Mathematical modeling",
      "AI systems concepts",
      "Reservoir computing interest",
      "Problem-first system design",
    ],
  },
];
