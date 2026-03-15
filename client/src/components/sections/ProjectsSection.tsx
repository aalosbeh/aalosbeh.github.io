import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Calendar, Users } from "lucide-react";

const piProjects = [
  {
    title: "Enhancing Food Safety: Rapid Detection of Salmonella in Onions Using Microscopic Imaging and AI",
    funding: "USDA-NIFA",
    budget: "$150,000",
    period: "2024 - 2026",
    description: "Capacity Building Grants for Non-Land Grant Colleges of Agriculture. Grant No. 2024-70001-43667.",
    color: "card-accent-blue",
  },
  {
    title: "RAISD - Reshaping Attention and Inclusion Strategies for Distinctively Vulnerable People Among the Forcibly Displaced",
    funding: "European Union, Horizon 2020 (H-2020)",
    budget: "\u20AC2,662,128",
    period: "2019 - 2023",
    description: "Large-scale EU-funded project addressing vulnerabilities among forcibly displaced populations.",
    color: "card-accent-emerald",
  },
  {
    title: "Psychosocial Support and Trauma Work in Jordan",
    funding: "Deutsche Gesellschaft fur Internationale Zusammenarbeit (GIZ) GmbH",
    budget: "\u20AC121,677",
    period: "2019 - 2021",
    description: "Certified Advanced Training on Community-Based Psychosocial Support in the Context of Forced Migration.",
    color: "card-accent-violet",
  },
  {
    title: "YUCloud - Toward Innovative Design an Interactive, Secure, Learning and Research Cloud Environment",
    funding: "Yarmouk University",
    budget: "$60,846",
    period: "2018 - 2020",
    description: "Design and implementation of a secure cloud-based learning and research environment.",
    color: "card-accent-amber",
  },
  {
    title: "SWDS - Design of Smart Water Distribution System Based on Cloud Computing and IoT",
    funding: "Yarmouk University",
    budget: "$2,820",
    period: "2018 - 2019",
    description: "Cloud computing and Internet of Things-based smart water distribution system design.",
    color: "card-accent-teal",
  },
  {
    title: "PFISR - Providing Fundamental ICT Skills for Syrian Refugees",
    funding: "European Union, HOPES-MADAD",
    budget: "\u20AC53,375",
    period: "2017 - 2019",
    description: "Providing fundamental ICT skills training for Syrian refugees.",
    color: "card-accent-rose",
  },
  {
    title: "TEFSR - Transferring E-Commerce Fundamentals for Syrian Refugees",
    funding: "European Union, HOPES-MADAD",
    budget: "\u20AC39,250",
    period: "2017 - 2019",
    description: "E-commerce education and training program for Syrian refugees.",
    color: "card-accent-blue",
  },
];

const copiProjects = [
  {
    title: "PIANO - Pharmaceutical Initiative for the Medicinal Plants of the Middle East in Research and Teaching",
    funding: "DAAD (German Academic Exchange Service)",
    budget: "\u20AC198,780",
    period: "2021 - 2022",
    color: "card-accent-emerald",
  },
  {
    title: "JUICEE - Developing Jordanian Universities' Innovation Capacities and Entrepreneurship Education",
    funding: "DAAD (German Academic Exchange Service)",
    budget: "\u20AC225,150",
    period: "2021 - 2022",
    color: "card-accent-violet",
  },
  {
    title: "LSFR - Learning & Development for a Sustainable Future for Refugees & Host Communities",
    funding: "Nuffic (Orange Knowledge Programme)",
    budget: "\u20AC531,778",
    period: "2020 - 2022",
    color: "card-accent-amber",
  },
  {
    title: "NeuCARE - Neurodevelopmental Care for Refugees",
    funding: "European Union, Erasmus+ Programme",
    budget: "\u20AC668,750",
    period: "2019 - 2022",
    color: "card-accent-rose",
  },
];

const pendingProjects = [
  {
    title: "AI Vigilance: Deciphering the Surveillance Apparatus and its Societal Implications for Ethics, Privacy, and Racial Justice",
    funding: "National Endowment for the Humanities",
    budget: "$149,957",
    role: "PI",
  },
  {
    title: "Developing and Implementing AI-Enhanced Virtual Reality Training: A Multi-Disciplinary Approach",
    funding: "Department of Justice, Bureau of Justice Assistant",
    budget: "$4,000,000",
    role: "Co-PI",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-shell section-gradient-3">
      <div className="container">
        <div className="section-heading">
          <h2>Funded Research Projects</h2>
          <p>
            Over $3 million in research funding from prestigious organizations
            including USDA, EU Horizon 2020, DAAD, GIZ, Nuffic, and Erasmus+.
          </p>
        </div>

        {/* Summary Stats */}
        <div className="mx-auto mb-12 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
          <Card className="stat-card border-border/60">
            <CardContent className="pt-6 text-center">
              <div className="icon-blue mx-auto mb-2 inline-flex rounded-full p-3">
                <DollarSign size={28} />
              </div>
              <div className="text-3xl font-bold text-foreground">$3M+</div>
              <p className="text-muted-foreground">Total Funding</p>
            </CardContent>
          </Card>
          <Card className="stat-card border-border/60">
            <CardContent className="pt-6 text-center">
              <div className="icon-emerald mx-auto mb-2 inline-flex rounded-full p-3">
                <Users size={28} />
              </div>
              <div className="text-3xl font-bold text-foreground">15+</div>
              <p className="text-muted-foreground">Projects Led</p>
            </CardContent>
          </Card>
          <Card className="stat-card border-border/60">
            <CardContent className="pt-6 text-center">
              <div className="icon-violet mx-auto mb-2 inline-flex rounded-full p-3">
                <Calendar size={28} />
              </div>
              <div className="text-3xl font-bold text-foreground">8+</div>
              <p className="text-muted-foreground">Years Active</p>
            </CardContent>
          </Card>
        </div>

        {/* PI Projects */}
        <div className="mx-auto max-w-5xl mb-12">
          <h3 className="mb-6 text-xl font-bold text-foreground flex items-center gap-2">
            <span className="badge-blue rounded-full px-3 py-1 text-sm">Principal Investigator (PI)</span>
          </h3>
          <div className="space-y-4">
            {piProjects.map((project, index) => (
              <Card key={index} className={`${project.color} transition hover:shadow-md`}>
                <CardContent className="p-5">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-foreground md:text-lg">
                        {project.title}
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {project.description}
                      </p>
                      <p className="mt-2 text-sm">
                        <span className="font-medium text-foreground/80">Funding:</span>{" "}
                        <span className="text-muted-foreground">{project.funding}</span>
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xl font-bold text-primary">{project.budget}</div>
                      <div className="text-sm text-muted-foreground">{project.period}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Co-PI Projects */}
        <div className="mx-auto max-w-5xl mb-12">
          <h3 className="mb-6 text-xl font-bold text-foreground flex items-center gap-2">
            <span className="badge-emerald rounded-full px-3 py-1 text-sm">Co-Principal Investigator (Co-PI)</span>
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {copiProjects.map((project, index) => (
              <Card key={index} className={`${project.color} transition hover:shadow-md`}>
                <CardContent className="p-5">
                  <h4 className="text-base font-semibold text-foreground">
                    {project.title}
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">{project.funding}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{project.budget}</span>
                    <span className="text-sm text-muted-foreground">{project.period}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pending Projects */}
        <div className="mx-auto max-w-5xl">
          <h3 className="mb-6 text-xl font-bold text-foreground flex items-center gap-2">
            <span className="badge-amber rounded-full px-3 py-1 text-sm">Pending Proposals</span>
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {pendingProjects.map((project, index) => (
              <Card key={index} className="border-dashed border-border/80">
                <CardContent className="p-5">
                  <h4 className="text-base font-semibold text-foreground">
                    {project.title}
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">{project.funding}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-lg font-bold text-muted-foreground">{project.budget}</span>
                    <span className="badge-violet rounded-full px-2 py-0.5 text-xs font-semibold">{project.role}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
