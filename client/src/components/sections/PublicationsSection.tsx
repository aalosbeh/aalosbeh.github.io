import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Award } from "lucide-react";

export default function PublicationsSection() {
  const [filter, setFilter] = useState<"all" | "2025" | "2024" | "2023">("all");

  const publications = [
    {
      year: 2025,
      title: "Proximity-Constrained Counterfactuals for Explainable Diabetic Risk Assessment",
      authors: "Md Faisal Kabir, Abhishek Mandar Mahakal, Yucheng Wang, Anas AlSobeh, Bilal Al-Ahmad, Rami Alkhawaldah",
      journal: "Applied Computational Intelligence and Soft Computing, Wiley",
      ranking: "Q1",
      status: "Accepted"
    },
    {
      year: 2025,
      title: "LinguTimeX: A Framework for Multilingual CTC Detection Using Explainable AI and Natural Language Processing",
      authors: "Omar Darwish, Shorouq Al-Eidi, Abdallah Al-Shorman, Majdi Maabreh, Anas Alsobeh, Yahya Tashtoush, Plamen Zahariev",
      journal: "CMC-Computers, Materials & Continua",
      ranking: "Q1",
      status: "Accepted"
    },
    {
      year: 2025,
      title: "Enhanced Detection of Intrusion Detection System in Cloud Networks Using Time-Aware and Deep Learning Techniques",
      authors: "Terawi, Nima, Huthaifa I. Ashqar, Omar Darwish, Anas Alsobeh, Plamen Zahariev, and Yahya Tashtoush",
      journal: "Computers",
      ranking: "Q1",
      status: "Published"
    },
    {
      year: 2025,
      title: "RADAR#: An Ensemble Approach for Radicalization Detection in Arabic Social Media Using Hybrid Deep Learning and Transformer Models",
      authors: "Al-Shawakfa, E. M., Alsobeh, A. M. R., Omari, S., & Shatnawi, A.",
      journal: "Information",
      ranking: "Q2",
      status: "Published",
      doi: "https://doi.org/10.3390/info16070522"
    },
    {
      year: 2024,
      title: "AI-Powered AOP: Enhancing Runtime Monitoring with Large Language Models and Statistical Learning",
      authors: "Anas Alsobeh, Amani Shatnawi, Bilal Al-Ahmad, Alhan Aljmal, Samer Khamaiseh",
      journal: "International Journal of Advanced Computer Science and Applications (IJACSA)",
      ranking: "Q3",
      status: "Published"
    },
    {
      year: 2024,
      title: "Enhancing integration testing efficiency through AI-driven combined structural and textual class coupling metric",
      authors: "Alazzam, I., AlSobeh, A. M. R., & Bani Melhem, B.",
      journal: "Online Journal of Communication and Media Technologies",
      ranking: "Q1",
      status: "Published"
    },
    {
      year: 2024,
      title: "Android malware detection using time-aware machine learning approach",
      authors: "AlSobeh, Anas MR, Khalid Gaber, Mahmoud M. Hammad, Maryam Nuser, and Amani Shatnawi",
      journal: "Cluster Computing",
      ranking: "Q1",
      status: "Published"
    },
    {
      year: 2024,
      title: "Beyond Word-Based Model Embeddings: Contextualized Representations for Enhanced Social Media Spam Detection",
      authors: "Alshattnawi, S.; Shatnawi, A.; AlSobeh, A.M.R.; Magableh, A.A.",
      journal: "Applied Sciences",
      ranking: "Q1",
      status: "Published",
      doi: "https://doi.org/10.3390/app14062254"
    },
    {
      year: 2024,
      title: "Unmasking Media Illusion: Analytical Survey of Deepfake Video Detection and Emotional Insights",
      authors: "Anas AlSobeh, Alan Franklin, Belle Woodward",
      journal: "IACIS Conference",
      ranking: "Best Paper Award",
      status: "Published"
    },
    {
      year: 2023,
      title: "BlockASP: A Framework for AOP-Based Model Checking Blockchain System",
      authors: "M. R. AlSobeh and A. A. Magableh",
      journal: "IEEE Access",
      ranking: "Q1",
      status: "Published",
      doi: "10.1109/ACCESS.2023.3325060"
    },
    {
      year: 2023,
      title: "OSM: Leveraging model checking for observing dynamic behaviors in aspect-oriented applications",
      authors: "AlSobeh, A. M. R.",
      journal: "Online Journal of Communication and Media Technologies",
      ranking: "Q2",
      status: "Published",
      doi: "https://doi.org/10.30935/ojcmt/13771"
    }
  ];

  const filteredPublications = filter === "all" 
    ? publications 
    : publications.filter(pub => pub.year.toString() === filter);

  return (
    <section id="publications" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Publications</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Over 50 peer-reviewed publications in top-tier journals and conferences, with a focus on AI, cybersecurity, and software engineering.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
            >
              All Publications
            </Button>
            <Button
              variant={filter === "2025" ? "default" : "outline"}
              onClick={() => setFilter("2025")}
            >
              2025
            </Button>
            <Button
              variant={filter === "2024" ? "default" : "outline"}
              onClick={() => setFilter("2024")}
            >
              2024
            </Button>
            <Button
              variant={filter === "2023" ? "default" : "outline"}
              onClick={() => setFilter("2023")}
            >
              2023
            </Button>
          </div>

          {/* Publications List */}
          <div className="space-y-6">
            {filteredPublications.map((pub, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      {pub.ranking === "Best Paper Award" ? (
                        <Award className="text-primary" size={24} />
                      ) : (
                        <FileText className="text-primary" size={24} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {pub.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {pub.authors}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-sm font-medium text-primary">
                          {pub.journal}
                        </span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">
                          {pub.year}
                        </span>
                        {pub.ranking && (
                          <>
                            <span className="text-muted-foreground">•</span>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              pub.ranking === "Q1" ? "bg-green-100 text-green-800" :
                              pub.ranking === "Q2" ? "bg-blue-100 text-blue-800" :
                              pub.ranking === "Q3" ? "bg-yellow-100 text-yellow-800" :
                              "bg-purple-100 text-purple-800"
                            }`}>
                              {pub.ranking}
                            </span>
                          </>
                        )}
                        <span className="text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">
                          {pub.status}
                        </span>
                      </div>
                      {pub.doi && (
                        <a
                          href={pub.doi}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                        >
                          <ExternalLink size={14} />
                          View Publication
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Note */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              This is a selection of recent publications. For a complete list, please visit my{" "}
              <a
                href="https://www.researchgate.net/profile/Anas-Alsobeh/research"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                ResearchGate
              </a>{" "}
              or{" "}
              <a
                href="https://orcid.org/0000-0002-1506-7924"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                ORCID
              </a>{" "}
              profile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

