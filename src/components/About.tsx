"use client";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "UI/UX",
  "Figma",
];

const experience = [
  { role: "Senior Engineer", company: "TechCorp", years: "2022–Now" },
  { role: "Frontend Developer", company: "Webify", years: "2020–2022" },
  { role: "UI Designer", company: "Creatives", years: "2018–2020" },
];

export default function About() {
  return (
    <section id="about" className="flex flex-col md:flex-row gap-12 items-center md:items-start">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="mb-4 text-neutral-600 dark:text-neutral-300">
          I'm a software engineer with 5+ years of experience building web apps, design systems, and scalable platforms. I love working with React, Next.js, and TypeScript.
        </p>
        <ul className="flex flex-wrap gap-2">
          {skills.map(skill => (
            <li key={skill} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">{skill}</li>
          ))}
        </ul>
      </div>
      <div className="flex-1">
        <h3 className="font-semibold mb-2">Experience</h3>
        <ul className="space-y-2">
          {experience.map((exp, i) => (
            <li key={i}>
              <span className="font-medium">{exp.role}</span> @ {exp.company} ({exp.years})
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
} 