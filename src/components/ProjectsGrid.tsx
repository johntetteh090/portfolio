"use client";

import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js and Tailwind CSS.",
    imageUrl: "/images/my_image.png",
    link: "#",
  },
  {
    title: "Design System",
    description: "Reusable UI components and design tokens for scalable apps.",
    imageUrl: "/images/my_image.png",
    link: "#",
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce platform with Stripe integration.",
    imageUrl: "/images/my_image.png",
    link: "#",
  },
  {
    title: "Open Source CLI",
    description: "A command-line tool for automating developer workflows.",
    imageUrl: "/images/my_image.png",
    link: "#",
  },
  {
    title: "UI Animation Library",
    description: "React library for smooth and customizable UI animations.",
    imageUrl: "/images/my_image.png",
    link: "#",
  },
  {
    title: "Blog Platform",
    description: "A markdown-based blog platform with custom themes.",
    imageUrl: "/images/my_image.png",
    link: "#",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProjectsGrid() {
  return (
    <section id="portfolio">
      <h2 className="text-2xl font-bold mb-8 text-center">Featured Projects</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project, i) => (
          <motion.div key={i} variants={item}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 