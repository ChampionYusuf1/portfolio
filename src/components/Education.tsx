import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University Name",
    period: "2014 - 2018",
    description: "Graduated with honors. Focused on software engineering, algorithms, and data structures.",
    achievements: ["Dean's List", "Hackathon Winner", "Research Assistant"],
  },
];

const certifications = [
  { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
  { name: "Professional Scrum Master I", issuer: "Scrum.org", year: "2022" },
  { name: "Google Cloud Professional", issuer: "Google", year: "2021" },
];

export const Education = () => {
  return (
    <Section id="education" title="Education" subtitle="My Background">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold">Education</h3>
          </div>
          {education.map((edu, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 card-hover">
              <h4 className="text-lg font-bold mb-1">{edu.degree}</h4>
              <p className="text-primary font-mono text-sm mb-1">{edu.institution}</p>
              <p className="text-muted-foreground font-mono text-sm mb-4">{edu.period}</p>
              <p className="text-muted-foreground mb-4">{edu.description}</p>
              <div className="flex flex-wrap gap-2">
                {edu.achievements.map((achievement) => (
                  <span
                    key={achievement}
                    className="px-3 py-1 bg-primary/10 text-primary font-mono text-xs rounded-full"
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold">Certifications</h3>
          </div>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-4 card-hover"
              >
                <h4 className="font-bold mb-1">{cert.name}</h4>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{cert.issuer}</span>
                  <span className="text-primary font-mono">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
