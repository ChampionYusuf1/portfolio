import { motion } from "framer-motion";
import { Section } from "./Section";
import { Code, Coffee, Gamepad2, Dumbbell, BookOpen, Plane } from "lucide-react";

const interests = [
  { icon: Code, label: "Open Source", description: "Contributing to packages" },
  { icon: Coffee, label: "Coffee", description: "Fuel for productivity" },
  { icon: Gamepad2, label: "Gaming", description: "Strategy games" },
  { icon: Dumbbell, label: "Fitness", description: "Staying active" },
  { icon: BookOpen, label: "Learning", description: "New technologies" },
  { icon: Plane, label: "Travel", description: "Exploring new places" },
];

export const About = () => {
  return (
    <Section id="about" title="About" subtitle="Beyond the Code" className="bg-card/50">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a Computer Science student at UIC's Honors College with a passion for 
            building full-stack applications that solve real problems. From mobile apps 
            processing donations for nonprofits to AI-driven property analysis tools, 
            I love tackling complex challenges.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, contributing 
            to open-source projects, or competing in hackathons. I believe in continuous 
            learning and pushing myself to grow both technically and personally.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4"
        >
          {interests.map((interest, index) => (
            <motion.div
              key={interest.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-4 text-center card-hover"
            >
              <interest.icon className="w-8 h-8 text-primary mx-auto mb-2" />
              <h4 className="font-bold text-sm mb-1">{interest.label}</h4>
              <p className="text-muted-foreground text-xs">{interest.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
