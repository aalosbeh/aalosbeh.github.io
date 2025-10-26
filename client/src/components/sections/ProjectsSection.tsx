import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Calendar, Users } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "AI-Powered Salmonella Detection in Onions",
      role: "Principal Investigator (PI)",
      funding: "USDA-NIFA",
      budget: "$60,000",
      period: "2024 - 2026",
      description: "Developing an AI-powered detection system for Salmonella in onions using microscopic imaging and deep learning techniques.",
      grantNumber: "2024-70001-43667"
    },
    {
      title: "RAISD - Reshaping Attention and Inclusion Strategies",
      role: "Principal Investigator (PI)",
      funding: "European Union, Horizon 2020",
      budget: "€2,662,128",
      period: "2019 - 2023",
      description: "Reshaping attention and inclusion strategies for distinctively vulnerable people among the forcibly displaced."
    },
    {
      title: "Psychosocial Support and Trauma Work in Jordan",
      role: "Principal Investigator (PI)",
      funding: "GIZ (Deutsche Gesellschaft für Internationale Zusammenarbeit)",
      budget: "€121,677",
      period: "2019 - 2021",
      description: "Certified advanced training on community-based psychosocial support in the context of forced migration."
    },
    {
      title: "YUCloud - Interactive, Secure Learning Environment",
      role: "Principal Investigator (PI)",
      funding: "Yarmouk University",
      budget: "$60,846",
      period: "2018 - 2020",
      description: "Toward innovative design of an interactive, secure, learning and research cloud environment."
    },
    {
      title: "PIANO - Pharmaceutical Initiative for Medicinal Plants",
      role: "Co-Principal Investigator (Co-PI)",
      funding: "DAAD (German Academic Exchange Service)",
      budget: "€198,780",
      period: "2021 - 2022",
      description: "Pharmaceutical initiative for the medicinal plants of the Middle East in research and teaching."
    },
    {
      title: "JUICEE - Jordanian Universities Innovation Capacities",
      role: "Co-Principal Investigator (Co-PI)",
      funding: "DAAD",
      budget: "€225,150",
      period: "2021 - 2022",
      description: "Developing Jordanian Universities' Innovation Capacities and Entrepreneurship Education."
    },
    {
      title: "LSFR - Learning & Development for Sustainable Future",
      role: "Co-Principal Investigator (Co-PI)",
      funding: "Nuffic (Orange Knowledge Programme)",
      budget: "€531,778",
      period: "2020 - 2022",
      description: "Learning & development for a sustainable future for refugees & host communities to promote co-existence and socio-economic development."
    },
    {
      title: "NeuCARE - Neurodevelopmental Care for Refugees",
      role: "Co-Principal Investigator (Co-PI)",
      funding: "European Union, Erasmus+",
      budget: "€668,750",
      period: "2019 - 2022",
      description: "Neurodevelopmental care for refugees through capacity building in higher education."
    },
    {
      title: "PFISR - ICT Skills for Syrian Refugees",
      role: "Principal Investigator (PI)",
      funding: "European Union, HOPES-MADAD",
      budget: "€53,375",
      period: "2017 - 2019",
      description: "Providing fundamental ICT skills for Syrian refugees."
    },
    {
      title: "TEFSR - E-Commerce for Syrian Refugees",
      role: "Principal Investigator (PI)",
      funding: "European Union, HOPES-MADAD",
      budget: "€39,250",
      period: "2017 - 2019",
      description: "Transferring e-commerce fundamentals for Syrian refugees."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Funded Research Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Over $3 million in research funding from prestigious organizations including USDA, EU, DAAD, GIZ, and Nuffic.
            </p>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6 text-center">
                <DollarSign className="mx-auto text-primary mb-2" size={32} />
                <div className="text-3xl font-bold text-foreground mb-1">$3M+</div>
                <p className="text-muted-foreground">Total Funding</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="mx-auto text-primary mb-2" size={32} />
                <div className="text-3xl font-bold text-foreground mb-1">15+</div>
                <p className="text-muted-foreground">Projects Led</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Calendar className="mx-auto text-primary mb-2" size={32} />
                <div className="text-3xl font-bold text-foreground mb-1">8+</div>
                <p className="text-muted-foreground">Years Active</p>
              </CardContent>
            </Card>
          </div>

          {/* Projects List */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          project.role === "Principal Investigator (PI)" 
                            ? "bg-primary/10 text-primary" 
                            : "bg-accent/10 text-accent"
                        }`}>
                          {project.role}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary mb-1">{project.budget}</div>
                      <div className="text-sm text-muted-foreground">{project.period}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="font-medium text-foreground">Funding Agency:</span>
                    <span className="text-muted-foreground">{project.funding}</span>
                    {project.grantNumber && (
                      <>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">Grant #{project.grantNumber}</span>
                      </>
                    )}
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

