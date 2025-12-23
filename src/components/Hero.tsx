import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="font-mono text-primary text-sm md:text-base tracking-wider mb-4 block">
            Hello, I'm
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
        >
          <span className="text-gradient">Yusuf Ghani</span>
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-mono text-muted-foreground mb-8"
        >
          Software Engineer
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          B.S. Computer Science student at UIC Honors College with experience building 
          full-stack applications, mobile apps, and cloud infrastructure. Passionate about 
          creating scalable solutions that process real transactions and make an impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex gap-4"
        >
          <a
            href="#experience"
            className="px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded-lg hover:bg-primary/90 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border text-foreground font-mono text-sm rounded-lg hover:border-primary hover:text-primary transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};
