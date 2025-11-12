import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, Mail } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="flex items-center justify-center pt-16 hero">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <img src="/assets/images/anas.jpg" alt="Dr. Anas M. R. AlSobeh" className="w-40 h-40 rounded-full border-4 border-white shadow-lg" />
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              Dr. Anas M.R. AlSobeh
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-medium">
              Innovating at the Frontier of AI and Security
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection("#research")}
              className="gap-2 rounded-full shadow-lg transform hover:scale-105 transition-transform"
            >
              View Research
              <ArrowDown size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#publications")}
              className="gap-2 rounded-full shadow-lg transform hover:scale-105 transition-transform"
            >
              <FileText size={18} />
              Publications
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="gap-2 rounded-full shadow-lg transform hover:scale-105 transition-transform"
            >
              <Mail size={18} />
              Contact
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <button
              onClick={() => scrollToSection("#about")}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Scroll to about section"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
