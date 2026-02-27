import { Shield, Code, Cpu, Cloud, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const researchAreas = [
  {
    icon: Shield,
    title: "AI-Driven Cybersecurity",
    description:
      "Intelligent malware detection, adversarial robustness, and deepfake analysis for resilient digital systems.",
  },
  {
    icon: Code,
    title: "Software Engineering",
    description:
      "Scalable and dependable software architecture, model-driven engineering, and transaction-aware design.",
  },
  {
    icon: Cpu,
    title: "High-Performance Computing",
    description:
      "HPC-enabled AI/ML pipelines for microscopy, forensics, and large-scale scientific computation.",
  },
  {
    icon: Cloud,
    title: "Cloud & Distributed Systems",
    description:
      "Secure cloud-native systems, IoT integration, and distributed application reliability.",
  },
  {
    icon: Database,
    title: "Data Science & Analytics",
    description:
      "Applied analytics for policy, healthcare, migration systems, and evidence-based decision support.",
  },
];

const currentProjects = [
  {
    title: "AI-Powered Bacterial Detection",
    period: "2024 - 2026",
    funding: "USDA-NIFA",
    description:
      "Developing deep-learning models to detect Salmonella in onions from microscopic image datasets.",
  },
  {
    title: "Deepfake Detection Framework",
    period: "2024 - Present",
    funding: "REACH Faculty Mentor Award",
    description:
      "Benchmarking cross-modal detection of LLM-generated deepfakes on modern social media channels.",
  },
  {
    title: "Migration Data Analytics",
    period: "2021 - 2022",
    funding: "ICMPD",
    description:
      "Leading analytics and data science strategy for migration policy and institutional planning in Jordan.",
  },
];

export default function ResearchSection() {
  return (
    <section id="research" className="section-shell bg-muted/20">
      <div className="container">
        <div className="section-heading">
          <h2>Research</h2>
          <p>
            Interdisciplinary research at the intersection of cybersecurity, AI,
            software engineering, and scalable computing.
          </p>
        </div>

        <div className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area) => {
            const Icon = area.icon;
            return (
              <Card
                key={area.title}
                className="border-border/80 bg-card/90 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <CardHeader className="pb-2">
                  <div className="mb-2 inline-flex w-fit rounded-lg border border-primary/15 bg-primary/10 p-2">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <CardTitle className="text-lg">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mx-auto max-w-5xl">
          <h3 className="mb-6 text-2xl font-bold text-foreground">
            Current Sponsored Projects
          </h3>
          <div className="space-y-4">
            {currentProjects.map((project) => (
              <Card key={project.title} className="border-primary/10">
                <CardContent className="p-6">
                  <div className="mb-2 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <h4 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h4>
                    <span className="text-sm font-medium text-primary">
                      {project.period}
                    </span>
                  </div>
                  <p className="mb-3 text-muted-foreground">
                    {project.description}
                  </p>
                  <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {project.funding}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 text-center md:grid-cols-4">
          {[
            ["50+", "Publications"],
            ["$3M+", "Research Funding"],
            ["15+", "Funded Projects"],
            ["Q1/Q2", "Journal Quality"],
          ].map(([value, label]) => (
            <Card key={label} className="border-border/80 bg-card/90">
              <CardContent className="p-5">
                <p className="text-3xl font-bold text-primary">{value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
