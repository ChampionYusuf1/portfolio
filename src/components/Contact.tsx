import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "yusufgdeveloper@gmail.com", href: "mailto:yusufgdeveloper@gmail.com" },
  { icon: Phone, label: "Phone", value: "630-974-7009", href: "tel:+16309747009" },
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

export const Contact = () => {
  return (
    <Section id="contact" title="Contact" subtitle="Get In Touch">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-lg text-muted-foreground mb-12"
        >
          I'm always open to discussing new opportunities, interesting projects, 
          or potential collaborations. If you're interested in working together, 
          please feel free to reach out!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 mb-12"
        >
          {contactInfo.map((info) => (
            <div key={info.label} className="flex items-center justify-center gap-4">
              <info.icon className="w-6 h-6 text-primary" />
              <div className="text-left">
                <span className="text-muted-foreground font-mono text-sm block">{info.label}</span>
                <a
                  href={info.href}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {info.value}
                </a>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-all"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
