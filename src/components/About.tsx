import { motion } from "framer-motion";
import { Section } from "./Section";
import { Code, Coffee, Gamepad2, Music, BookOpen, Camera } from "lucide-react";

const interests = [
  { icon: Code, label: "Open Source", description: "Contributing to the community" },
  { icon: Coffee, label: "Coffee", description: "Fuel for productivity" },
  { icon: Gamepad2, label: "Gaming", description: "Strategy and adventure games" },
  { icon: Music, label: "Music", description: "Playing guitar and piano" },
  { icon: BookOpen, label: "Reading", description: "Tech blogs and sci-fi novels" },
  { icon: Camera, label: "Photography", description: "Capturing moments" },
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
            When I'm not writing code, you'll find me exploring new technologies, 
            contributing to open-source projects, or diving deep into a good book. 
            I believe in continuous learning and pushing myself beyond my comfort zone.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm passionate about building products that solve real problems and 
            make people's lives easier. Whether it's a complex enterprise application 
            or a simple utility tool, I approach every project with the same level 
            of dedication and attention to detail.
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
