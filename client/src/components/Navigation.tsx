import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Research", href: "#research" },
    { label: "Publications", href: "#publications" },
    { label: "Projects", href: "#projects" },
    { label: "Teaching", href: "#teaching" },
    { label: "Awards", href: "#awards" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/10 bg-background/90 shadow-sm backdrop-blur-md">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("#home")}
            className="text-lg font-semibold tracking-wide text-foreground transition-colors hover:text-primary"
          >
            <span className="hidden sm:inline">Dr. Anas AlSobeh</span>
            <span className="sm:hidden">A. AlSobeh</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5 rounded-full border border-border/70 bg-card/70 px-1.5 py-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary hover:bg-primary/5 text-sm px-3"
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-3 border-t border-border/70">
            <div className="grid grid-cols-2 gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.href)}
                  className="justify-start text-foreground hover:text-primary"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
