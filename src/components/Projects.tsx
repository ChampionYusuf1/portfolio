import { motion } from "framer-motion";
import { Section } from "./Section";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, kanban boards, and team analytics.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "AI Chat Application",
    description: "Intelligent chatbot platform leveraging OpenAI's GPT models for customer support automation.",
    technologies: ["Python", "FastAPI", "OpenAI", "Redis"],
    github: "#",
    live: "#",
  },
  {
    title: "Real-time Dashboard",
    description: "Data visualization dashboard with live metrics, custom charts, and automated reporting.",
    technologies: ["Vue.js", "D3.js", "WebSocket", "AWS"],
    github: "#",
    live: "#",
  },
];

export const Projects = () => {
  return (
    <Section id="projects" title="Projects" subtitle="Things I've Built" className="bg-card/50">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group bg-card border border-border rounded-lg p-6 card-hover"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={project.live}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Live Demo"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-secondary text-secondary-foreground font-mono text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
