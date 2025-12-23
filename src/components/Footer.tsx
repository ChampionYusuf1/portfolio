export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="font-mono">
            Designed & Built by <span className="text-primary">Your Name</span>
          </p>
          <p className="font-mono">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
