import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, Code } from "lucide-react";

const education = [
  {
    degree: "B.S. in Computer Science (Software Engineering Concentration)",
    institution: "University of Illinois at Chicago (Honors College)",
    location: "Chicago, Illinois",
    period: "Expected Graduation, May 2026",
    gpa: "GPA 3.67",
    achievements: ["Dean's List", "Honors College"],
  },
];

const coursework = [
  "Data Structures & Algorithms",
  "Cloud Engineering",
  "Computer Organization",
  "Data Science",
  "Computer Design",
  "Object-Oriented Programming",
  "Computer Algorithms",
  "Systems Programming",
];

const skills = {
  "Languages & Frameworks": ["C++", "Java", "Python", "JavaScript", "TypeScript", "Node.js", "React", "Flutter", "SQL", "Kotlin", "C", "Scala", "GoLang"],
  "Tools & Platforms": ["Git", "Jira", "AWS (RDS, EC2, Amplify, CloudWatch, SMS)", "Postman", "Android Studio", "IntelliJ", "VSCode", "Cursor"],
  "Methodologies": ["Agile/Scrum", "Test Automation (Appium)", "CI/CD", "REST API's"],
};

export const Education = () => {
  return (
    <Section id="education" title="Education" subtitle="My Background">
      <div className="space-y-8">
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
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h4 className="text-lg font-bold mb-1">{edu.degree}</h4>
                  <p className="text-primary font-mono text-sm">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm">{edu.location}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <span className="text-muted-foreground font-mono text-sm block">{edu.period}</span>
                  <span className="text-primary font-mono text-sm">{edu.gpa}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
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

        {/* Coursework */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4 className="text-lg font-bold mb-4">Related Coursework</h4>
          <div className="flex flex-wrap gap-2">
            {coursework.map((course) => (
              <span
                key={course}
                className="px-3 py-1 bg-secondary text-secondary-foreground font-mono text-xs rounded-full"
              >
                {course}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold">Technical Skills</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-card border border-border rounded-lg p-4 card-hover">
                <h4 className="font-bold text-sm text-primary mb-3">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-secondary text-secondary-foreground font-mono text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
