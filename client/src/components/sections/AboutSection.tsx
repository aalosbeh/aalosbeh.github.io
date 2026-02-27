import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const educationItems = [
  {
    degree: "Ph.D. in Computer Science",
    period: "2011 - 2015",
    institution: "Utah State University, Logan, Utah, USA",
    details:
      "Dissertation: Improving Reuse of Distributed Transaction Software with Transaction-Aware Aspects",
    note: "GPA: 3.94 (95.5 - Excellent)",
  },
  {
    degree: "M.Sc. in Computer Information Systems",
    period: "2007 - 2010",
    institution: "Yarmouk University, Irbid, Jordan",
    details: "Graduate focus on advanced systems and software design.",
    note: "GPA: 88.2 (Excellent)",
  },
  {
    degree: "B.Sc. in Computer Information Systems",
    period: "2003 - 2007",
    institution: "Yarmouk University, Irbid, Jordan",
    details:
      "Undergraduate foundation in computing, information systems, and analysis.",
    note: "GPA: 86.2 (Excellent)",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-shell bg-background">
      <div className="container">
        <div className="section-heading">
          <h2>Academic Profile</h2>
          <p>
            Dr. Anas M.R. AlSobeh is an Assistant Professor and Program
            Coordinator in Information Technology and Cybersecurity at Southern
            Illinois University Carbondale.
          </p>
        </div>

        <Card className="mx-auto mb-12 max-w-5xl border-primary/15 bg-card/80 shadow-sm">
          <CardContent className="p-6 md:p-8">
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                With over 10 years of academic and research experience across
                the United States, Jordan, and Bahrain, his work connects
                AI-driven cybersecurity, software engineering, cloud computing,
                and data science.
              </p>
              <p>
                His recent research includes AI-based malware detection,
                adversarial learning, explainable AI, and digital media
                forensics, including externally funded work on AI-powered
                Salmonella detection in microscopic imaging.
              </p>
              <p>
                He has authored 50+ peer-reviewed publications and contributes
                to international projects supported by USDA, Horizon 2020,
                Erasmus+, GIZ, DAAD, and Nuffic.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mx-auto grid max-w-5xl gap-10">
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold text-foreground">
              <GraduationCap className="text-primary" size={24} />
              Education
            </h3>
            <div className="space-y-4">
              {educationItems.map((item) => (
                <Card key={item.degree} className="border-border/80">
                  <CardContent className="p-6">
                    <div className="mb-2 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <h4 className="text-xl font-semibold text-foreground">
                        {item.degree}
                      </h4>
                      <span className="text-sm font-medium text-primary">
                        {item.period}
                      </span>
                    </div>
                    <p className="font-medium text-foreground/90">
                      {item.institution}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.details}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.note}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold text-foreground">
              <Briefcase className="text-primary" size={24} />
              Current Role
            </h3>
            <Card className="border-primary/15">
              <CardContent className="p-6">
                <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <h4 className="text-xl font-semibold text-foreground">
                    Assistant Professor & Program Coordinator
                  </h4>
                  <span className="text-sm font-medium text-primary">
                    2023 - Present
                  </span>
                </div>
                <p className="mb-4 text-foreground/90">
                  Information Technology & Cybersecurity, School of Computing,
                  Southern Illinois University Carbondale.
                </p>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>
                    Research leadership in AI security, software systems, and
                    externally funded innovation.
                  </li>
                  <li>
                    Student-centered teaching, curriculum development, and
                    academic mentoring.
                  </li>
                  <li>
                    Program coordination, committee service, and outreach
                    collaboration.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold text-foreground">
              <Award className="text-primary" size={24} />
              Professional Memberships
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "IEEE Senior Member",
                "ACM SIGHPC Member",
                "Women in Cybersecurity (WiCyS)",
                "ACCESS Campus Champion",
              ].map((membership) => (
                <Card key={membership}>
                  <CardContent className="p-5">
                    <p className="font-semibold text-foreground">
                      {membership}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
