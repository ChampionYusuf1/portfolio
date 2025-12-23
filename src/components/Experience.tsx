import { motion } from "framer-motion";
import { Section } from "./Section";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Donatefy",
    companyLink: "https://www.donatefy.org/",
    location: "Schaumburg, Illinois",
    period: "May 2025 - August 2025",
    description: [
      "At Donatefy, I worked on building mobile-first payment solutions for nonprofits, focusing on reliability, compliance, and ease of deployment. I owned large portions of a React Native Tap-to-Pay application from development through production release, collaborating with offshore teams to keep delivery on schedule. Beyond feature development, I gained hands-on experience deploying and maintaining cloud infrastructure, navigating App Store compliance, and supporting real payment flows in production—giving me a strong understanding of building and shipping fintech products end-to-end.",
    ],
    technologies: ["React Native", "AWS", "Stripe", "Jira", "Git", "Node.js"],
  },
  {
    title: "Software Engineer",
    company: "Americloud Tech",
    location: "Chicago, Illinois",
    period: "Feb 2024 - May 2025",
    description: [
      "As a Software Engineer at Americloud Tech, I contributed to the development and scaling of payment-driven applications used in production. I frequently worked across the stack, debugging complex payment integrations, improving system performance, and aligning closely with teammates to deliver features efficiently. In addition to hands-on development, I helped drive technical alignment across the team, improving sprint execution and strengthening overall development velocity. Not only was it neccesary to work with my teamates to deliver the product but I also had to work very closely our clientele to understand what their needs were and how we could best serve them.",
    ],
    technologies: ["Flutter", "React", "Node.js", "Stripe", "Agile"],
  },
  {
    title: "Software Engineer Intern",
    company: "Americloud Tech",
    location: "Chicago, Illinois",
    period: "Dec 2023 - Feb 2024",
    description: [
      "During my internship at Americloud Tech, I focused on strengthening the reliability and maintainability of existing systems. I supported new feature exploration through proof-of-concept development while also improving engineering workflows through test automation and documentation. By reverse-engineering production systems and enhancing test coverage, I helped reduce onboarding friction by verifying previous database schemas and system designs and improve release confidence in a fast-paced Agile environment.",
    ],
    technologies: ["Appium", "CI/CD", "Agile", "Test Automation", "Reverse Engineering"],
  },
];

export const Experience = () => {
  return (
    <Section id="experience" title="Experience" subtitle="Where I've Worked">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-8 top-0 w-px h-full">
                <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-primary glow" />
              </div>

              <div className="bg-card border border-border rounded-lg p-6 card-hover">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <div className="flex items-center gap-2">
                      {exp.companyLink ? (
                        <a 
                          href={exp.companyLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary font-mono text-sm hover:underline flex items-center gap-1"
                        >
                          {exp.company}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <p className="text-primary font-mono text-sm">{exp.company}</p>
                      )}
                      <span className="text-muted-foreground text-sm">• {exp.location}</span>
                    </div>
                  </div>
                  <span className="text-muted-foreground font-mono text-sm mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="text-muted-foreground mb-4 space-y-2">
                  {exp.description.map((bullet, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground font-mono text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
