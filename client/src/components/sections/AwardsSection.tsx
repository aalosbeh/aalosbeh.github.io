import { Card, CardContent } from "@/components/ui/card";
import { Award, Trophy, GraduationCap, FileCheck, Star, Mic } from "lucide-react";

const awards = [
  {
    year: "2026",
    items: [
      { icon: FileCheck, title: ".NET MAUI for Beginners", org: "LinkedIn Learning", color: "icon-blue" },
      { icon: FileCheck, title: "Prompt Engineering with ChatGPT", org: "LinkedIn Learning", color: "icon-emerald" },
      { icon: FileCheck, title: "Agentic AI: Harnessing AI Agents to Reinvent Business", org: "LinkedIn Learning", color: "icon-violet" },
    ],
  },
  {
    year: "2025",
    items: [
      { icon: Trophy, title: "NSF CCMNet Travel Award - PEARC25", org: "National Science Foundation", desc: "Participation in CCMNet workshop and mentoring commitments", color: "icon-blue" },
      { icon: Award, title: "REACH Faculty Mentor Award", org: "SIU Vice Chancellor for Research", desc: "Benchmarking Integrated Detection of LLM-Generated Deepfakes ($2,000 + student stipend)", color: "icon-emerald" },
      { icon: Star, title: "ACM-SIGHPC Member", org: "Association for Computing Machinery", color: "icon-violet" },
      { icon: FileCheck, title: "Building Transformer-Based NLP Applications", org: "NVIDIA", desc: "Certification ID: btma_Dy6SHWe331LF_w71w", color: "icon-amber" },
      { icon: FileCheck, title: "SecureAI Certificate", org: "Loyola University Chicago", color: "icon-rose" },
      { icon: Trophy, title: "WiCyS Scholarship ($500)", org: "Women in Cybersecurity", color: "icon-teal" },
      { icon: Trophy, title: "KNIT10-2025 Award ($1,106)", org: "FABRIC", color: "icon-blue" },
    ],
  },
  {
    year: "2024",
    items: [
      { icon: Trophy, title: "Best Paper Award - IACIS 2024", org: "International Association for Computer Information Systems", desc: "Unmasking Media Illusion: Deepfake Video Detection and Emotional Insights", color: "icon-amber" },
      { icon: Award, title: "Research Mentor Certificate", org: "SIU STEM Education Research Centre", desc: "STEM Research Academy mentorship recognition", color: "icon-emerald" },
    ],
  },
  {
    year: "2022-2023",
    items: [
      { icon: FileCheck, title: "Data Science & Machine Learning", org: "MIT Institute for Data, Systems, and Society (IDSS)", desc: "Making Data-Driven Decisions program", color: "icon-blue" },
      { icon: FileCheck, title: "AWS Cloud Practitioner Certificate", org: "Amazon Web Services", color: "icon-amber" },
      { icon: FileCheck, title: "Human Subject Research Certification", org: "CITI Program", desc: "Institutional/Signatory Official", color: "icon-violet" },
    ],
  },
  {
    year: "2011-2017",
    items: [
      { icon: FileCheck, title: "Oracle Academy Certificate (ToT)", org: "Oracle Corporation", color: "icon-rose" },
      { icon: GraduationCap, title: "USU Honored Graduate Students", org: "Utah State University", color: "icon-blue" },
      { icon: Trophy, title: "Research & Projects Grant Proposal Award", org: "Utah State University", color: "icon-emerald" },
      { icon: Trophy, title: "Full Tuition Award", org: "Utah State University", color: "icon-violet" },
      { icon: GraduationCap, title: "PhD Scholarship", org: "Yarmouk University, Jordan", color: "icon-amber" },
      { icon: Trophy, title: "First Rank Student Award", org: "Yarmouk University, Jordan", color: "icon-rose" },
    ],
  },
];

const serviceHighlights = [
  { title: "NSF Panelist", year: "2024", color: "badge-blue" },
  { title: "STEM Trainer in AI (LLM), IMSA", year: "2024", color: "badge-emerald" },
  { title: "Guest Editor, MDPI Systems (Cybersecurity Special Issue)", year: "2024", color: "badge-violet" },
  { title: "Chair, DIAC-2024 Workshop (AINA-2024)", year: "2024", color: "badge-amber" },
  { title: "Chair, ACAIoT2024 Workshop (ICCNS2024)", year: "2024", color: "badge-rose" },
  { title: "Chair, AI-Driven IoT Security Session (SaTC 2025)", year: "2025", color: "badge-teal" },
  { title: "Chair, Education and AI Session (SIGITE 2023)", year: "2023", color: "badge-blue" },
  { title: "Chair, Cybersecurity Session (ACR'23)", year: "2023", color: "badge-emerald" },
  { title: "Editorial Board Member, JCIS (Taylor & Francis, Q1)", year: "Present", color: "badge-violet" },
  { title: "PACES Research Training Workshop", year: "2025", color: "badge-amber" },
  { title: "ACES HPC Platform - Active User", year: "2025", color: "badge-rose" },
  { title: "ACCESS Campus Champion (SIU Carbondale)", year: "2025", color: "badge-teal" },
  { title: "CI Pathways Training Program (NSF - PSC & NCSA)", year: "2025", color: "badge-blue" },
  { title: "NAIRR Classroom Pilot Expansion, CRA", year: "2026", color: "badge-emerald" },
  { title: "WiCyS Academic Advisor & Mentor", year: "2026", color: "badge-violet" },
];

const reviewerJournals = [
  "IEEE Access (15+ reviews)",
  "Electronics (20+ reviews)",
  "Future Internet (11+ reviews)",
  "Computers (12+ reviews)",
  "Applied Sciences (3+ reviews)",
  "IJWSR (7+ reviews)",
  "Environmental Modelling & Software",
  "Sensors",
  "Mathematics",
  "Sustainability",
  "Technologies",
  "OJCMT (3+ reviews)",
  "Journal of Software (5 reviews)",
  "IET Computers & Digital Techniques",
];

const reviewerConferences = [
  "SIGITE (ACM)",
  "AINA",
  "IACIS",
  "COMPSAC (IEEE)",
  "WiCyS",
  "ICMLSC 2025",
  "CMVIT 2025",
  "CCEAI 2025",
  "AAIEE 2025",
  "ICSED 2025",
  "ACAI 2019-2020",
  "ICOIACT 2021",
];

export default function AwardsSection() {
  return (
    <section id="awards" className="section-shell section-gradient-2">
      <div className="container">
        <div className="section-heading">
          <h2>Awards, Service & Leadership</h2>
          <p>
            Recognition for excellence in research, teaching, and professional
            development, along with extensive service to the academic community.
          </p>
        </div>

        {/* Awards Timeline */}
        <div className="mx-auto max-w-5xl mb-14">
          <h3 className="mb-6 text-xl font-bold text-foreground flex items-center gap-2">
            <span className="icon-amber inline-flex rounded-lg p-2">
              <Trophy size={20} />
            </span>
            Awards, Honors & Certifications
          </h3>
          <div className="space-y-8">
            {awards.map((yearGroup) => (
              <div key={yearGroup.year}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-primary">{yearGroup.year}</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {yearGroup.items.map((award, i) => {
                    const Icon = award.icon;
                    return (
                      <Card key={i} className="border-border/60 transition hover:shadow-md">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className={`${award.color} rounded-lg p-2 flex-shrink-0`}>
                              <Icon size={18} />
                            </div>
                            <div className="min-w-0">
                              <h4 className="text-sm font-semibold text-foreground leading-tight">
                                {award.title}
                              </h4>
                              <p className="text-xs font-medium text-primary mt-0.5">
                                {award.org}
                              </p>
                              {"desc" in award && award.desc && (
                                <p className="text-xs text-muted-foreground mt-1">
                                  {award.desc}
                                </p>
                              )}
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

        {/* Service Highlights */}
        <div className="mx-auto max-w-5xl mb-14">
          <h3 className="mb-6 text-xl font-bold text-foreground flex items-center gap-2">
            <span className="icon-blue inline-flex rounded-lg p-2">
              <Star size={20} />
            </span>
            Service & Leadership Highlights
          </h3>
          <div className="flex flex-wrap gap-2">
            {serviceHighlights.map((s, i) => (
              <span
                key={i}
                className={`${s.color} rounded-full px-3 py-1.5 text-sm font-medium`}
              >
                {s.title} ({s.year})
              </span>
            ))}
          </div>
        </div>

        {/* Journal & Conference Reviewing */}
        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
              <span className="icon-emerald inline-flex rounded-lg p-2">
                <FileCheck size={20} />
              </span>
              Journal Reviewing
            </h3>
            <Card className="card-accent-emerald">
              <CardContent className="p-5">
                <div className="space-y-1">
                  {reviewerJournals.map((j) => (
                    <p key={j} className="text-sm text-muted-foreground">{j}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
              <span className="icon-violet inline-flex rounded-lg p-2">
                <Mic size={20} />
              </span>
              Conference Reviewing
            </h3>
            <Card className="card-accent-violet">
              <CardContent className="p-5">
                <div className="space-y-1">
                  {reviewerConferences.map((c) => (
                    <p key={c} className="text-sm text-muted-foreground">{c}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
