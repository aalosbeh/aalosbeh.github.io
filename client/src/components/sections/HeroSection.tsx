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
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Profile Image Placeholder */}
          <div className="flex justify-center mb-8">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-6xl font-bold text-white">
              AA
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Dr. Anas M.R. AlSobeh
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Assistant Professor | Program Coordinator
            </p>
            <p className="text-lg md:text-xl text-muted-foreground">
              Information Technology & Cybersecurity
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              Southern Illinois University, Carbondale
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
              IEEE Senior Member
            </span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
              ACM SIGHPC
            </span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
              WiCyS Co-Faculty Advisor
            </span>
          </div>

          {/* Brief Introduction */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Specializing in AI-driven cybersecurity, machine learning, and software engineering with over 10 years of academic and research experience. Published 50+ peer-reviewed articles and secured $3M+ in research funding.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto pt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground mt-2">Publications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">$3M+</div>
              <div className="text-muted-foreground mt-2">Research Funding</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">10+</div>
              <div className="text-muted-foreground mt-2">Years Experience</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection("#research")}
              className="gap-2"
            >
              View Research
              <ArrowDown size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#publications")}
              className="gap-2"
            >
              <FileText size={18} />
              Publications
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="gap-2"
            >
              <Mail size={18} />
              Contact
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <button
              onClick={() => scrollToSection("#about")}
              className="text-muted-foreground hover:text-primary transition-colors"
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

