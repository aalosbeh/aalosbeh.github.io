import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, Mail, Download } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0 hero-gradient" />
      <div className="relative container py-16 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          {/* Profile Image */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[oklch(0.55_0.18_250)] via-[oklch(0.6_0.17_155)] to-[oklch(0.55_0.2_290)] opacity-70 blur-sm" />
              <img
                src="/assets/images/anas.jpg"
                alt="Dr. Anas AlSobeh"
                className="relative h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg md:h-40 md:w-40"
              />
            </div>
          </div>

          <p className="mb-3 text-sm font-semibold tracking-[0.2em] uppercase" style={{ color: "oklch(0.5 0.15 155)" }}>
            Department of Information Systems & Technology (IS&T) | Utah Valley University
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Dr. Anas M.R. <span className="gradient-text">AlSobeh</span>
          </h1>

          <p className="mt-4 text-lg font-medium text-muted-foreground md:text-2xl">
            Assistant Professor of Applied AI
          </p>
          <p className="mt-1 text-base text-muted-foreground md:text-lg">
            College of Engineering and Technology (CET), Utah Valley University, Orem, Utah
          </p>

          {/* Stats Grid */}
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { value: "50+", label: "Publications", color: "oklch(0.55 0.18 250)" },
              { value: "$3M+", label: "Research Funding", color: "oklch(0.6 0.17 155)" },
              { value: "15+", label: "Funded Projects", color: "oklch(0.55 0.2 290)" },
              { value: "10+", label: "Years in Academia", color: "oklch(0.75 0.15 75)" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="stat-card rounded-xl border border-border/60 bg-card/80 p-4 backdrop-blur-sm"
              >
                <p className="text-2xl font-bold md:text-3xl" style={{ color: stat.color }}>
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Advancing secure and intelligent systems through AI-driven cybersecurity, trustworthy & explainable AI,
            software engineering, and high-performance computing research while mentoring the next generation of computing professionals.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" onClick={() => scrollToSection("#research")} className="gap-2">
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
            <Button
              size="lg"
              variant="outline"
              asChild
              className="gap-2"
            >
              <a href="/assets/Anas-AlSobeh-CV.pdf" target="_blank" rel="noopener noreferrer">
                <Download size={18} />
                Download CV
              </a>
            </Button>
          </div>

          {/* Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm">
            <span className="badge-blue rounded-full px-3 py-1.5 font-semibold">IEEE Senior Member</span>
            <span className="badge-emerald rounded-full px-3 py-1.5 font-semibold">ACM SIGHPC</span>
            <span className="badge-violet rounded-full px-3 py-1.5 font-semibold">WiCyS Faculty Advisor</span>
            <span className="badge-amber rounded-full px-3 py-1.5 font-semibold">ACCESS Campus Champion</span>
          </div>

          <div className="pt-8 animate-bounce">
            <button
              onClick={() => scrollToSection("#about")}
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Scroll to about section"
            >
              <ArrowDown size={28} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
