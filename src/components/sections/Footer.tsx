import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-white py-6">
      <div className="container mx-auto px-12 flex items-center">
        <div className="flex items-center gap-8">
          <p className="text-sm text-white/60">
            © All rights reserved – JL studio
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/jl____studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/jl-studio-xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute right-12 -top-20 w-20 h-20 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors group"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white transform rotate-180 group-hover:-translate-y-1 transition-transform"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
