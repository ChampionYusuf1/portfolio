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
      "Built a cross-platform React Native Tap-to-Pay application (iOS and Android) that enabled nonprofits to securely accept donations directly from mobile devices, eliminating the need for expensive kiosks or hardware.",
      "Managed Jira/Git issues and time management of the offshore teams ensuring consistent production release dates.",
      "Utilized AWS services, including RDS, SMS, CloudWatch, EC2, and Amplify to deploy and enhance production applications and use Stripe payments to process user transactions while storing financial reporting history.",
      "Navigated Apple certification and security compliance processes to successfully deploy the app, ensuring alignment with App Store policies and also uploaded the app to the Google Play Store for distribution to clients.",
    ],
    technologies: ["React Native", "AWS", "Stripe", "Jira", "Git"],
  },
  {
    title: "Software Engineer",
    company: "Americloud Tech",
    location: "Chicago, Illinois",
    period: "Feb 2024 - May 2025",
    description: [
      "Developed applications using Flutter, React, and Node.js, contributing to processing over 6 figures in transactions.",
      "Resolved Stripe Tap-to-Pay integration issues in Flutter by debugging and fixing defects in a shared package, contributing a pull request following Agile principles that improved stability across multiple production applications.",
      "Enhanced customer engagement by 28% by decreasing unnecessary amounts of API calls resulting in less await times and improved state management resulting in faster performance and a smoother UI experience.",
      "Led development coordination/technical alignment, resulting in a ~20% improvement in sprint burndown efficiency.",
    ],
    technologies: ["Flutter", "React", "Node.js", "Stripe", "Agile"],
  },
  {
    title: "Software Engineer Intern",
    company: "Americloud Tech",
    location: "Chicago, Illinois",
    period: "Dec 2023 - Feb 2024",
    description: [
      "Researched and Designed POC as requested by sales to further our product catalog and fulfill customer's needs.",
      "Automated 50+ Appium test cases with around a 90% code coverage reducing 2+ hours of manual testing per build and strengthening the CI/CD pipeline while maintaining secure, clean databases.",
      "Reverse-engineered an existing production system to document database/design schema for new onboarding team.",
      "Met 100% of sprint deadlines in an Agile environment, supporting reliable release cycles and team productivity.",
    ],
    technologies: ["Appium", "CI/CD", "Agile", "Test Automation"],
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
