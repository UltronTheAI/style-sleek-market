import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-primary">
          Artisan Shirts
        </a>
        <div className="flex items-center gap-6">
          <a href="#products" className="hover:text-primary transition-colors">
            Products
          </a>
          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#reviews" className="hover:text-primary transition-colors">
            Reviews
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};