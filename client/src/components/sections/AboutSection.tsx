import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          {/* Biography */}
          <div className="prose prose-lg max-w-none mb-12 text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Dr. Anas M.R. AlSobeh is an Assistant Professor and Program Coordinator of Information Technology at Southern Illinois University Carbondale (SIUC), a Research Institution (R1), with over 10 years of academic and research experience across the United States, Jordan, and Bahrain. He holds a Ph.D. in Computer Science from Utah State University, along with both M.Sc. and B.Sc. degrees in Computer Information Systems from Yarmouk University.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Dr. AlSobeh's interdisciplinary research bridges AI-driven cybersecurity, software engineering, cloud computing, and data science. His contributions include developing AI-based systems for malware detection, adversarial training models, and explainable AI frameworks for public safety and digital media forensics. Recently, he secured a USDA research grant (2024–2026) to develop an AI-powered detection system for Salmonella in onions using microscopic imaging.
            </p>
            <p className="text-lg leading-relaxed">
              He has published over 50 peer-reviewed articles, many in Q1/Q2 journals indexed by Scopus and ISI, and received the 2024 IACIS Best Paper Award for his work on deepfake detection. Beyond academia, Dr. AlSobeh has led and contributed to numerous international projects funded by the EU (Horizon 2020, Erasmus+), GIZ, DAAD, and Nuffic, focusing on refugee education, health data systems, and cybersecurity training.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary" size={28} />
              Education
            </h3>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h4 className="text-xl font-semibold text-foreground">Ph.D. in Computer Science</h4>
                    <span className="text-muted-foreground">2011 - 2015</span>
                  </div>
                  <p className="text-primary font-medium mb-2">Utah State University, Logan, Utah, USA</p>
                  <p className="text-muted-foreground">GPA: 3.94 (95.5 Excellent)</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Dissertation: "Improving Reuse of Distributed Transaction Software with Transaction-Aware Aspects"
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h4 className="text-xl font-semibold text-foreground">M.Sc. in Computer Information Systems</h4>
                    <span className="text-muted-foreground">2007 - 2010</span>
                  </div>
                  <p className="text-primary font-medium mb-2">Yarmouk University, Irbid, Jordan</p>
                  <p className="text-muted-foreground">GPA: 88.2 (Excellent)</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h4 className="text-xl font-semibold text-foreground">B.Sc. in Computer Information Systems</h4>
                    <span className="text-muted-foreground">2003 - 2007</span>
                  </div>
                  <p className="text-primary font-medium mb-2">Yarmouk University, Irbid, Jordan</p>
                  <p className="text-muted-foreground">GPA: 86.2 (Excellent)</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Current Position */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Briefcase className="text-primary" size={28} />
              Current Position
            </h3>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h4 className="text-xl font-semibold text-foreground">Assistant Professor & Program Coordinator</h4>
                  <span className="text-muted-foreground">2023 - Present</span>
                </div>
                <p className="text-primary font-medium mb-4">
                  Information Technology & Cybersecurity (ITEC & CTEC) Program<br />
                  School of Computing, Southern Illinois University, Carbondale, IL
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Research (30%):</strong> Conducting research in IT and related areas, developing and submitting research proposals to funding agencies.</p>
                  <p><strong>Teaching (50%):</strong> Engaging with students through active learning methods, developing course materials, and providing academic advising.</p>
                  <p><strong>Service (20%):</strong> Coordinating ITEC and CTEC programs, serving on committees, and participating in outreach activities.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Professional Memberships */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Award className="text-primary" size={28} />
              Professional Memberships
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="font-semibold text-foreground">IEEE Senior Member</p>
                  <p className="text-sm text-muted-foreground">2023 - Present</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="font-semibold text-foreground">ACM SIGHPC Member</p>
                  <p className="text-sm text-muted-foreground">2025 - 2026</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="font-semibold text-foreground">Women in Cybersecurity (WiCyS)</p>
                  <p className="text-sm text-muted-foreground">2024 - Present</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="font-semibold text-foreground">ACCESS Campus Champion</p>
                  <p className="text-sm text-muted-foreground">2025 - Present</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

