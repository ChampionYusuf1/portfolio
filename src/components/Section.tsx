import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, title, subtitle, children, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-primary text-sm tracking-wider uppercase mb-2 block">
            {"// " + title}
          </span>
          {subtitle && (
            <h2 className="text-3xl md:text-4xl font-bold">{subtitle}</h2>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
};
