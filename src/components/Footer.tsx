import { FileText } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="font-mono">
            Designed & Built by <span className="text-primary">Yusuf Ghani</span>
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/YG Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              View Resume
            </a>
            <p className="font-mono">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
