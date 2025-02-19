import { useTheme } from "../ThemeProvider";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

interface NavbarProps {
  isEnglish?: boolean;
  onLanguageToggle?: () => void;
}

const Navbar = ({
  isEnglish = true,
  onLanguageToggle = () => {},
}: NavbarProps) => {
  const { theme, setTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Service
            </button>
            <button
              onClick={() => scrollToSection("stats")}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Center - Logo */}
          <div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
            <img
              src={
                theme === "light"
                  ? "/images/JL_logo_en_b.svg"
                  : "/images/JL_logo_en_w.svg"
              }
              alt="JL Studio"
              className="h-12 w-12 mt-6"
            />
          </div>

          {/* Right side - Theme and Language */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="text-white/60 hover:text-white"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="outline"
              onClick={onLanguageToggle}
              className="px-4 py-2 text-sm text-white/60 hover:text-white border-white/20 hover:border-white/40"
            >
              {isEnglish ? "中文" : "ENG"}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
