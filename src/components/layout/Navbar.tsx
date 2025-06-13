import { useTheme } from "../ThemeProvider";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  isEnglish?: boolean;
  onLanguageToggle?: () => void;
}

const Navbar = ({
  isEnglish = true,
  onLanguageToggle = () => { },
}: NavbarProps) => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

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
        <div className="flex items-center justify-end md:justify-between h-16">
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
          </div>

          {/* Center - Logo */}
          <div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => navigate("/")}
              className="transition-transform duration-200 hover:scale-110"
            >
            <img
              src={
                theme === "light"
                  ? "/images/JL_logo_en_b.svg"
                  : "/images/JL_logo_en_w.svg"
              }
              alt="JL Studio"
              className="h-12 w-12 mt-6"
            />
            </button>
          </div>

          {/* Right side - Theme and Language */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm border border-[#F97315] text-white px-3 py-1 rounded-full hover:bg-orange-600 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
