import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Shield, Cloud, Database, Code, Cpu } from "lucide-react";

export default function ResearchSection() {
  const researchAreas = [
    {
      icon: Brain,
      title: "Artificial Intelligence & Machine Learning",
      description: "Developing AI-based systems for malware detection, adversarial training models, and explainable AI frameworks for public safety and digital media forensics."
    },
    {
      icon: Shield,
      title: "Cybersecurity Analysis",
      description: "AI-driven cybersecurity solutions, deepfake detection, intrusion detection systems, and blockchain-based security frameworks."
    },
    {
      icon: Code,
      title: "Software Engineering",
      description: "Aspect-oriented programming, distributed systems, model checking, and software design patterns for improved code reusability and maintainability."
    },
    {
      icon: Cpu,
      title: "High-Performance Computing (HPC)",
      description: "Leveraging HPC infrastructure for AI/ML workflows, microscopy analysis, and large-scale data processing using ACES and ACCESS platforms."
    },
    {
      icon: Cloud,
      title: "Cloud Computing & IoT",
      description: "Cloud-based architectures, IoT security frameworks, and distributed computing solutions for scalable applications."
    },
    {
      icon: Database,
      title: "Data Science & Analytics",
      description: "Migration data analytics, health information systems, predictive analytics, and statistical analysis for policy-making."
    }
  ];

  const currentProjects = [
    {
      title: "AI-Powered Bacterial Detection",
      period: "2024 - 2026",
      funding: "USDA-NIFA",
      description: "Developing an AI-powered detection system for Salmonella in onions using microscopic imaging and deep learning techniques."
    },
    {
      title: "Deepfake Detection Framework",
      period: "2024 - Present",
      funding: "REACH Faculty Mentor Award",
      description: "Benchmarking integrated detection of LLM-generated deepfakes across modalities on social media platforms."
    },
    {
      title: "Migration Data Analytics",
      period: "2021 - 2022",
      funding: "ICMPD",
      description: "Leading data science consulting for migration policy development and evidence-based decision making in Jordan."
    }
  ];

  return (
    <section id="research" className="py-20 bg-muted/20">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Research</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              My interdisciplinary research bridges AI-driven cybersecurity, software engineering, cloud computing, and data science, with a focus on developing innovative solutions for real-world challenges.
            </p>
          </div>

          {/* Research Areas */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">Research Interests</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="text-primary" size={24} />
                        </div>
                      </div>
                      <CardTitle className="text-lg">{area.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{area.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Current Research Projects */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Current Research Projects</h3>
            <div className="space-y-6">
              {currentProjects.map((project, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-foreground mb-2">{project.title}</h4>
                        <p className="text-muted-foreground mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                            {project.funding}
                          </span>
                          <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                            {project.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Impact */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Publications</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">$3M+</div>
                <p className="text-muted-foreground">Research Funding</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <p className="text-muted-foreground">Research Projects</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">Q1/Q2</div>
                <p className="text-muted-foreground">Journal Rankings</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

