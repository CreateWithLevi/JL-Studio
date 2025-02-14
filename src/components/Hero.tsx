import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

interface HeroProps {
  isEnglish?: boolean;
  onLanguageToggle?: () => void;
}

const Hero = ({ isEnglish = true, onLanguageToggle = () => {} }: HeroProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative flex items-center justify-center w-full h-screen bg-background text-foreground"
    >
      <div className="absolute top-4 right-4 flex gap-2">
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

      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center"
      >
        <motion.div
          key={isEnglish ? "english" : "chinese"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="w-32 h-32 mx-auto mb-8">
            <img
              src={
                theme === "light"
                  ? isEnglish
                    ? "/images/JL_logo_en_b.svg"
                    : "/images/JL_logo_zh_b.svg"
                  : isEnglish
                    ? "/images/JL_logo_en_w.svg"
                    : "/images/JL_logo_zh_w.svg"
              }
              alt="JL Studio Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <h1 className="text-5xl font-bold tracking-tight">
            {isEnglish ? "JL Studio" : "ㄦ工作室"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg mx-auto">
            {isEnglish
              ? "Creating timeless design solutions for modern brands"
              : "為現代品牌創造永恆的設計解決方案"}
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-foreground rounded-full" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
