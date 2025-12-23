import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company",
    period: "2022 - Present",
    description: "Led development of scalable web applications serving millions of users. Implemented microservices architecture and mentored junior developers.",
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
  },
  {
    title: "Software Engineer",
    company: "Startup Inc",
    period: "2020 - 2022",
    description: "Built and maintained full-stack applications from concept to deployment. Collaborated with cross-functional teams to deliver features on time.",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
  },
  {
    title: "Junior Developer",
    company: "Digital Agency",
    period: "2018 - 2020",
    description: "Developed responsive websites and web applications for various clients. Gained experience in agile methodologies and version control.",
    technologies: ["JavaScript", "HTML/CSS", "PHP", "MySQL"],
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
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-primary font-mono text-sm">{exp.company}</p>
                  </div>
                  <span className="text-muted-foreground font-mono text-sm mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
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
