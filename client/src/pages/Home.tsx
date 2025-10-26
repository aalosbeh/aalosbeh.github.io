import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ResearchSection from "@/components/sections/ResearchSection";
import PublicationsSection from "@/components/sections/PublicationsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AwardsSection from "@/components/sections/AwardsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ResearchSection />
        <PublicationsSection />
        <ProjectsSection />
        <AwardsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
