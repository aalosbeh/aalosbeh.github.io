import {
  Shield,
  Code,
  Cpu,
  Cloud,
  Database,
  Eye,
  Brain,
  Monitor,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const researchAreas = [
  {
    icon: Shield,
    title: "AI-Driven Cybersecurity",
    description:
      "Intelligent malware detection, adversarial robustness, and deepfake analysis for resilient digital systems.",
    iconClass: "icon-blue",
  },
  {
    icon: Brain,
    title: "Trustworthy & Explainable AI",
    description:
      "Explainable AI frameworks, counterfactual reasoning, and federated learning for transparent decision-making.",
    iconClass: "icon-violet",
  },
  {
    icon: Code,
    title: "Software Engineering & AOP",
    description:
      "Aspect-oriented programming, model checking, scalable architecture, and transaction-aware design patterns.",
    iconClass: "icon-emerald",
  },
  {
    icon: Cpu,
    title: "High-Performance Computing",
    description:
      "HPC-enabled AI/ML pipelines for microscopy, forensics, large-scale scientific computation, and bacterial detection.",
    iconClass: "icon-amber",
  },
  {
    icon: Cloud,
    title: "Cloud & Distributed Systems",
    description:
      "Secure cloud-native systems, IoT integration, blockchain frameworks, and distributed application reliability.",
    iconClass: "icon-teal",
  },
  {
    icon: Database,
    title: "Data Science & Analytics",
    description:
      "Applied analytics for policy, healthcare, migration systems, NLP, and evidence-based decision support.",
    iconClass: "icon-rose",
  },
  {
    icon: Eye,
    title: "Computer Vision & Media Forensics",
    description:
      "Deepfake detection, microscopic image analysis, change detection in aerial imagery, and image immunization.",
    iconClass: "icon-sky",
  },
  {
    icon: Monitor,
    title: "Health & Public-Interest Systems",
    description:
      "E-health data frameworks, mental health analytics, refugee education initiatives, and food safety monitoring.",
    iconClass: "icon-blue",
  },
];

const researchInterests = [
  "Software Engineering",
  "Cybersecurity Analysis",
  "AI/ML",
  "High-Performance Computing",
  "Data Analysis",
  "Web Technology",
  "Health Information Systems",
  "Aspect-Oriented Programming",
  "Distributed Systems",
  "Computer Vision",
  "NLP",
  "Explainable AI",
];

export default function ResearchSection() {
  return (
    <section id="research" className="section-shell section-gradient-2">
      <div className="container">
        <div className="section-heading">
          <h2>Research</h2>
          <p>
            Interdisciplinary research at the intersection of cybersecurity, AI,
            software engineering, and scalable computing.
          </p>
        </div>

        {/* Research Interest Tags */}
        <div className="mx-auto mb-10 max-w-4xl flex flex-wrap justify-center gap-2">
          {researchInterests.map((interest, i) => {
            const badges = [
              "badge-blue",
              "badge-emerald",
              "badge-violet",
              "badge-amber",
              "badge-rose",
              "badge-teal",
            ];
            return (
              <span
                key={interest}
                className={`${badges[i % badges.length]} rounded-full px-3 py-1 text-sm font-medium`}
              >
                {interest}
              </span>
            );
          })}
        </div>

        {/* Research Areas Grid */}
        <div className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {researchAreas.map((area) => {
            const Icon = area.icon;
            return (
              <Card
                key={area.title}
                className="border-border/60 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <CardHeader className="pb-2">
                  <div
                    className={`mb-2 inline-flex w-fit rounded-lg p-2.5 ${area.iconClass}`}
                  >
                    <Icon size={20} />
                  </div>
                  <CardTitle className="text-base">{area.title}</CardTitle>
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

        {/* Stats */}
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 text-center md:grid-cols-4">
          {[
            { value: "50+", label: "Publications", color: "oklch(0.55 0.18 250)" },
            { value: "$3M+", label: "Research Funding", color: "oklch(0.6 0.17 155)" },
            { value: "15+", label: "Funded Projects", color: "oklch(0.55 0.2 290)" },
            { value: "Q1/Q2", label: "Journal Quality", color: "oklch(0.75 0.15 75)" },
          ].map(({ value, label, color }) => (
            <Card key={label} className="stat-card border-border/60">
              <CardContent className="p-5">
                <p className="text-3xl font-bold" style={{ color }}>
                  {value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
