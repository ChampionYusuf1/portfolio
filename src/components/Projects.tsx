import { motion } from "framer-motion";
import { Section } from "./Section";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "GraphRAG Knowledge Graph Pipeline",
    location: "Chicago, Illinois",
    period: "Aug 2025 - Dec 2025",
    description: "Designed and developed an end-to-end GraphRAG pipeline that transforms unstructured research papers into a searchable, queryable knowledge graph using Flink stream processing and Neo4j persistence, then deployed containerized REST microservices on AWS EKS with APIs for natural-language querying, evidence retrieval, and interactive graph neighborhood exploration.",
    technologies: ["Scala", "Apache Flink", "Neo4j", "Akka HTTP", "Docker", "AWS EKS"],
    github: "https://github.com/ChampionYusuf1/cs441-graphrag",
    
  },
  {
    title: "RentChecker",
    location: "Bartlett, Illinois",
    period: "Jul 2025 - Aug 2025",
    description: "Implemented a full-stack rent evaluator that allows users to enter a property and cross-check its worth against public records, Zillow APIs, and other datasets to establish estimated rent, featuring AI-driven profitability scoring that assesses property value, rental demand, taxes, and vacancy rates, along with a subscription system using Stripe integration and caching for frequently accessed data to optimize query response times.",
    technologies: ["Node.js", "AWS", "React Native", "RDS (MySQL)", "Heroku", "Vercel", "Stripe"],
    github: "https://github.com/ChampionYusuf1/rentchecker-landing-pad/blob/main/README.md",
  },
  {
    title: "YOLO V8 Object Detection Model",
    location: "Bartlett, Illinois",
    period: "May 2024 - Jul 2024",
    description: "Developed and trained a real-time object detection model using YOLOv8, leveraging a self-annotated dataset of over 1,000 images to detect ping-pong balls with 70% accuracy, then integrated OpenCV to streamline the model's functionality and developed a GUI that allows users to see and test the model in real-time.",
    technologies: ["Python", "YOLOv8", "OpenCV", "Machine Learning"],
    github: "https://github.com/ChampionYusuf1",
  },
  {
    title: "Ummah Awareness",
    location: "University of Illinois-Urbana Champaign",
    period: "October 2025",
    description: "Engineered an interactive world visualization platform that highlights crisis regions, integrates real-time news articles from verified sources, and provides secure donation opportunities to support underserved communities, designing and implementing scalable REST APIs and backend services to handle real-time data ingestion, validation, and delivery to the 3D visualization for a seamless UI experience, which won 3rd place at a competitive hackathon.",
    technologies: ["Docker", "AWS", "React", "PostgreSQL", "JavaScript"],
    github: "https://www.youtube.com/watch?time_continue=1&v=uQKzoI_Ec5I&embeds_referring_euri=https%3A%2F%2Fdevpost.com%2F&source_ve_path=MjczMzE3LDI3MzMxNywyODY2Ng",
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
            className="group relative bg-card border border-border rounded-lg p-6 card-hover"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors pr-8 flex-1">
                {project.title}
              </h3>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-6 right-6 text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary font-mono text-xs">{project.location}</span>
              <span className="text-muted-foreground text-xs">• {project.period}</span>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
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
