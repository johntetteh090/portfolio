"use client";

import Link from "next/link";

const skills = [
  "Next.js",
  "Flutter",
  "React Native",
  "DevOps (CI/CD)",
  "React.js",
  "Node.js",
  "Express.js",
  "MySQL",
];

const experience = [
  { role: "Fullstack Developer", company: "Bench5", years: "2023–2025" },
  { role: "Frontend Dev and DevOps Engineer", company: "Ntetsia", years: "2024–2025" },
  { role: "Administrative Assistant and IT Support", company: "Cocobod", years: "2021–2022" },
  { role: "Fullstack Developer", company: "Freelance", years: "2020–2021" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#f8f7f2]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#296d6e]">
            About Me
          </h2>
          <div className="w-24 h-1 bg-[#296d6e] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About Content */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#296d6e]/10">
              <h3 className="text-2xl font-bold mb-6 text-[#081b21]">
                Fullstack Developer & Mobile App Developer
              </h3>
              <p className="text-lg leading-relaxed text-[#081b21]/70 mb-6">
                I&apos;m a passionate software engineer with 5+ years of experience building web apps, mobile applications, and scalable platforms. I love working with Next.js, React.js, React Native, Flutter, Node.js, Express.js, and MySQL to create beautiful, functional experiences. I also specialize in DevOps and CI/CD practices for automated deployments.
              </p>
              <p className="text-lg leading-relaxed text-[#081b21]/70">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Skills Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#296d6e]/10">
              <h3 className="text-xl font-bold mb-6 text-[#081b21]">
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map(skill => (
                  <div 
                    key={skill} 
                    className="flex flex-col items-center p-4 bg-[#296d6e]/5 rounded-xl border border-[#296d6e]/10 hover:bg-[#296d6e]/10 hover:scale-105 transition-all duration-200 group"
                  >
                    <div className="w-12 h-12 bg-[#296d6e] rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200">
                      <span className="text-white font-bold text-lg">
                        {skill.split(' ')[0].charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-[#296d6e] text-center">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#296d6e]/10">
              <h3 className="text-2xl font-bold mb-6 text-[#081b21]">
                Professional Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, i) => (
                  <div key={i} className="relative pl-8 border-l-2 border-[#296d6e]/30">
                    <div className="absolute left-[-9px] top-2 w-4 h-4 bg-[#296d6e] rounded-full"></div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-lg text-[#081b21]">
                        {exp.role}
                      </h4>
                      <p className="text-[#296d6e] font-medium">
                        {exp.company}
                      </p>
                      <p className="text-sm text-[#081b21]/50">
                        {exp.years}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Learn More Link */}
              <div className="mt-8 pt-6 border-t border-[#296d6e]/20">
                <Link 
                  href="/portfolio" 
                  className="inline-flex items-center gap-2 bg-[#296d6e] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 group"
                >
                  Learn More About My Work
                  <svg 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-[#296d6e]/5 rounded-2xl p-8 border border-[#296d6e]/20">
              <h3 className="text-xl font-bold mb-6 text-[#081b21]">
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#296d6e] mb-1">5+</div>
                  <div className="text-sm text-[#081b21]/60">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#296d6e] mb-1">50+</div>
                  <div className="text-sm text-[#081b21]/60">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 