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
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-16"
    >
      <div className="absolute inset-0 academic-hero-bg" />
      <div className="relative container py-20 md:py-28">
        <div className="mx-auto max-w-5xl rounded-3xl border border-primary/15 bg-card/85 p-8 text-center shadow-xl backdrop-blur-sm md:p-12">
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
            School of Computing • Southern Illinois University
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Dr. Anas M.R. AlSobeh
          </h1>

          <p className="mt-4 text-lg font-medium text-muted-foreground md:text-2xl">
            Assistant Professor | Program Coordinator
          </p>
          <p className="mt-2 text-base text-muted-foreground md:text-lg">
            Information Technology & Cybersecurity
          </p>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border/70 bg-background/80 p-4">
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground">Peer-Reviewed Publications</p>
            </div>
            <div className="rounded-xl border border-border/70 bg-background/80 p-4">
              <p className="text-3xl font-bold text-primary">$3M+</p>
              <p className="text-sm text-muted-foreground">Research Funding</p>
            </div>
            <div className="rounded-xl border border-border/70 bg-background/80 p-4">
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">Years in Academia</p>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Advancing secure and intelligent systems through AI-driven cybersecurity, machine learning, and software engineering research, while mentoring the next generation of computing professionals.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" onClick={() => scrollToSection("#research")} className="gap-2">
              View Research
              <ArrowDown size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#publications")}
              className="gap-2 border-primary/30"
            >
              <FileText size={18} />
              Publications
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="gap-2 border-primary/30"
            >
              <Mail size={18} />
              Contact
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm">
            <span className="academic-badge">IEEE Senior Member</span>
            <span className="academic-badge">ACM SIGHPC Member</span>
            <span className="academic-badge">WiCyS Co-Faculty Advisor</span>
          </div>

          <div className="pt-10 animate-bounce">
            <button
              onClick={() => scrollToSection("#about")}
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Scroll to about section"
            >
              <ArrowDown size={30} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
