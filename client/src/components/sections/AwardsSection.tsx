import { Card, CardContent } from "@/components/ui/card";
import { Award, Trophy, GraduationCap, FileCheck } from "lucide-react";

export default function AwardsSection() {
  const awards = [
    {
      year: 2025,
      items: [
        {
          icon: Trophy,
          title: "NSF CCMNet Travel Award",
          organization: "National Science Foundation - PEARC25",
          description: "Participation in CCMNet workshop and mentoring commitments"
        },
        {
          icon: Award,
          title: "REACH Faculty Mentor Award",
          organization: "Southern Illinois University",
          description: "Research Enriched Academic Challenge Award for deepfake detection research ($2,000 funding)"
        },
        {
          icon: FileCheck,
          title: "Building Transformer-Based NLP Applications",
          organization: "NVIDIA",
          description: "Professional certification in advanced NLP and transformer architectures"
        },
        {
          icon: FileCheck,
          title: "SecureAI Certificate",
          organization: "Loyola University Chicago",
          description: "Advanced training in AI security and secure AI systems"
        },
        {
          icon: Trophy,
          title: "WiCyS Scholarship",
          organization: "Women in Cybersecurity",
          description: "$500 scholarship for conference participation"
        },
        {
          icon: GraduationCap,
          title: "ACM SIGHPC Membership",
          organization: "Association for Computing Machinery",
          description: "Special Interest Group on High Performance Computing"
        }
      ]
    },
    {
      year: 2024,
      items: [
        {
          icon: Trophy,
          title: "Best Paper Award",
          organization: "IACIS 2024 Conference",
          description: "Unmasking Media Illusion: Analytical Survey of Deepfake Video Detection and Emotional Insights"
        },
        {
          icon: FileCheck,
          title: "Research Mentor Certificate",
          organization: "SIU STEM Education Research Centre",
          description: "Recognition for mentoring during STEM Research Academy"
        }
      ]
    },
    {
      year: 2023,
      items: [
        {
          icon: FileCheck,
          title: "Data Science and Machine Learning Certificate",
          organization: "MIT Institute for Data, Systems, and Society (IDSS)",
          description: "Making Data-Driven Decisions program"
        },
        {
          icon: FileCheck,
          title: "AWS Cloud Practitioner Certificate",
          organization: "Amazon Web Services",
          description: "Cloud computing fundamentals and AWS services"
        },
        {
          icon: FileCheck,
          title: "Human Subject Research Certification",
          organization: "CITI Program",
          description: "Institutional/Signatory Official certification"
        }
      ]
    },
    {
      year: "2011-2015",
      items: [
        {
          icon: GraduationCap,
          title: "PhD Scholarship",
          organization: "Yarmouk University, Jordan",
          description: "Full scholarship for doctoral studies"
        },
        {
          icon: Trophy,
          title: "Full Tuition Award",
          organization: "Utah State University",
          description: "Complete tuition coverage for PhD program"
        },
        {
          icon: Award,
          title: "Research and Projects Grant Proposal Award",
          organization: "Utah State University",
          description: "Recognition for outstanding research proposal"
        },
        {
          icon: GraduationCap,
          title: "USU Honored Graduate Students",
          organization: "Utah State University",
          description: "Member of the honored graduate students program"
        },
        {
          icon: FileCheck,
          title: "Oracle Academy Certificate",
          organization: "Oracle Corporation",
          description: "Training of Trainees (ToT) certification"
        },
        {
          icon: Trophy,
          title: "First Rank Student Award",
          organization: "Yarmouk University, Jordan",
          description: "Top academic performance recognition"
        }
      ]
    }
  ];

  return (
    <section id="awards" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Awards & Honors</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Recognition for excellence in research, teaching, and professional development throughout my academic career.
            </p>
          </div>

          {/* Awards Timeline */}
          <div className="space-y-12">
            {awards.map((yearGroup, yearIndex) => (
              <div key={yearIndex}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl font-bold text-primary">{yearGroup.year}</div>
                  <div className="flex-1 h-px bg-border"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {yearGroup.items.map((award, awardIndex) => {
                    const Icon = award.icon;
                    return (
                      <Card key={awardIndex} className="hover:shadow-lg transition-shadow">
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                              <Icon className="text-primary" size={24} />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-foreground mb-1">
                                {award.title}
                              </h3>
                              <p className="text-sm font-medium text-primary mb-2">
                                {award.organization}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {award.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

