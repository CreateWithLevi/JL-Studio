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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img
              src={
                theme === "light"
                  ? "/images/JL_logo_en_b.svg"
                  : "/images/JL_logo_en_w.svg"
              }
              alt="JL Studio"
              className="h-8 w-8"
            />
            <span className="text-lg font-semibold">JL Studio</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm hover:text-primary">
              About
            </a>
            <a href="#services" className="text-sm hover:text-primary">
              Services
            </a>
            <a href="#work" className="text-sm hover:text-primary">
              Work
            </a>
            <a href="#blog" className="text-sm hover:text-primary">
              Blog
            </a>
            <a href="#contact" className="text-sm hover:text-primary">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
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
              className="px-4 py-2 text-sm"
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
