import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Briefcase,
  Award,
  MapPin,
  Building2,
  Globe,
} from "lucide-react";

const educationItems = [
  {
    degree: "Ph.D. in Computer Science",
    period: "2011 - 2015",
    institution: "Utah State University, Logan, Utah, USA",
    details:
      "Dissertation: Improving Reuse of Distributed Transaction Software with Transaction-Aware Aspects",
    note: "GPA: 3.94 (95.5 - Excellent) | Mentor: Dr. Stephen Clyde",
    color: "card-accent-blue",
  },
  {
    degree: "M.Sc. in Computer Information Systems",
    period: "2007 - 2010",
    institution: "Yarmouk University, Irbid, Jordan",
    details: "Graduate focus on advanced systems and software design.",
    note: "GPA: 88.2 (Excellent)",
    color: "card-accent-emerald",
  },
  {
    degree: "B.Sc. in Computer Information Systems",
    period: "2003 - 2007",
    institution: "Yarmouk University, Irbid, Jordan",
    details:
      "Undergraduate foundation in computing, information systems, and analysis.",
    note: "GPA: 86.2 (Excellent)",
    color: "card-accent-violet",
  },
];

const experienceItems = [
  {
    title: "Assistant Professor, Applied AI",
    org: "Utah Valley University (UVU), Orem, Utah, USA",
    dept: "Department of Information Systems & Technology (IS&T), College of Engineering and Technology (CET)",
    period: "Jan 2026 - Present",
    highlights: [
      "Teaching AI, Cybersecurity, and Information Systems courses (75%)",
      "Conducting research in Applied AI and related areas (15%)",
      "Service on departmental, college, and university committees; AI workforce training (10%)",
    ],
    color: "card-accent-blue",
  },
  {
    title: "Assistant Professor & ITEC Program Coordinator",
    org: "Southern Illinois University Carbondale (R1), Illinois, USA",
    dept: "School of Computing, Information Technology & Cybersecurity",
    period: "Jan 2023 - Dec 2025",
    highlights: [
      "Research leadership in AI security, software systems, and externally funded innovation (30%)",
      "Student-centered teaching, curriculum development, and academic mentoring (50%)",
      "Coordinating ITEC and CTEC programs; committee service and outreach (20%)",
    ],
    color: "card-accent-emerald",
  },
  {
    title: "Expert Consultant in Course Development",
    org: "ICMPD (International Centre for Migration Policy Development)",
    dept: "MCP Med TI",
    period: "Jul - Aug 2025",
    highlights: [
      "Designed two EQF/MQF Level-4 vocational courses: 'Migration and AI' and 'Statistical Analysis in a Migration Context'",
      "Produced full syllabi, lesson plans, exercises, handouts, and assessment mechanisms",
    ],
    color: "card-accent-amber",
  },
  {
    title: "Associate Professor",
    org: "Kingdom University, Bahrain",
    dept: "College of Information Technology",
    period: "Sep - Dec 2022",
    highlights: [
      "Developed IS master program curriculum (Cybersecurity and Data Analysis tracks)",
      "Organized cybersecurity workshops with the Department of Security in Bahrain",
    ],
    color: "card-accent-violet",
  },
  {
    title: "Associate Professor / Assistant Professor",
    org: "Yarmouk University, Irbid, Jordan",
    dept: "Information Systems Department",
    period: "Jan 2016 - Sep 2022",
    highlights: [
      "Promoted to Associate Professor in April 2020",
      "Supervised graduate students and theses",
      "Published in academic journals and secured international research funding",
      "Represented department at faculty-level meetings and international conferences",
    ],
    color: "card-accent-teal",
  },
  {
    title: "Director, Refugees & Forced Migration Studies Centre",
    org: "Yarmouk University, Irbid, Jordan",
    dept: "Refugees, Displaced Persons, and Forced Migration Studies Centre",
    period: "Sep 2019 - Oct 2021",
    highlights: [
      "Developed collaborations between academia and organizations to support refugees",
      "Established network of partnerships for higher education and career opportunities",
      "Leveraged innovative research methods for refugee support solutions",
    ],
    color: "card-accent-rose",
  },
  {
    title: "Data Science Consultant",
    org: "ICMPD, Jordan",
    dept: "MIDAM Project (funded by Danish Ministry of Foreign Affairs)",
    period: "2021 - 2022",
    highlights: [
      "Led local team of researchers on migration assessment needs in Jordan",
      "Designed custom data analysis training programs for government policymakers",
      "Supported implementation of the EU-Jordan Mobility Partnership",
    ],
    color: "card-accent-amber",
  },
  {
    title: "Research & Teaching Assistant",
    org: "Utah State University, Logan, Utah, USA",
    dept: "Computer Science Department",
    period: "Jan 2011 - Dec 2015",
    highlights: [
      "Research on distributed transaction systems with Dr. Stephen Clyde",
      "Teaching support: classroom instruction, grading, lab activities, student advising",
    ],
    color: "card-accent-blue",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-shell section-gradient-1">
      <div className="container">
        <div className="section-heading">
          <h2>About Me</h2>
          <p>
            Over 10 years of academic and research experience across the United
            States, Jordan, and Bahrain.
          </p>
        </div>

        {/* Summary Card */}
        <Card className="mx-auto mb-12 max-w-5xl border-primary/15 shadow-sm card-accent-blue">
          <CardContent className="p-6 md:p-8">
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Dr. Anas M. R. AlSobeh is an <strong className="text-foreground">Assistant Professor of Applied AI</strong> in
                the Department of Information Systems & Technology (IS&T) at{" "}
                <strong className="text-foreground">Utah Valley University (UVU)</strong> and formerly served as an Assistant
                Professor and Program Coordinator of Information Technology &
                Cybersecurity at Southern Illinois University Carbondale (R1).
              </p>
              <p>
                His research spans <strong className="text-foreground">AI-driven cybersecurity, trustworthy and explainable
                AI, software engineering, cloud computing, and data science</strong>,
                with applications in malware and adversarial robustness, media
                forensics, and public-interest systems. He is the Principal
                Investigator on a USDA-funded project (2024-2026) focused on
                rapid Salmonella detection in onions using microscopic imaging
                and AI.
              </p>
              <p>
                He has published <strong className="text-foreground">50+ peer-reviewed papers</strong> in leading venues
                (Q1/Q2) and received the <strong className="text-foreground">IACIS 2024 Best Paper Award</strong> for work
                on deepfake detection. Beyond academia, he has contributed to
                international initiatives funded by EU Horizon 2020, Erasmus+,
                GIZ, DAAD, and Nuffic.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <div className="mx-auto max-w-5xl mb-14">
          <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold text-foreground">
            <span className="icon-blue inline-flex rounded-lg p-2">
              <GraduationCap size={22} />
            </span>
            Education
          </h3>
          <div className="space-y-4">
            {educationItems.map((item) => (
              <Card key={item.degree} className={item.color}>
                <CardContent className="p-5">
                  <div className="mb-1 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <h4 className="text-lg font-semibold text-foreground">
                      {item.degree}
                    </h4>
                    <span className="text-sm font-medium text-primary whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                  <p className="font-medium text-foreground/85 flex items-center gap-1">
                    <MapPin size={14} className="text-muted-foreground" />
                    {item.institution}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.details}
                  </p>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {item.note}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div className="mx-auto max-w-5xl mb-14">
          <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold text-foreground">
            <span className="icon-emerald inline-flex rounded-lg p-2">
              <Briefcase size={22} />
            </span>
            Work Experience
          </h3>
          <div className="space-y-4">
            {experienceItems.map((item, idx) => (
              <Card key={idx} className={item.color}>
                <CardContent className="p-5">
                  <div className="mb-1 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="font-medium text-foreground/85 flex items-center gap-1">
                        <Building2 size={14} className="text-muted-foreground flex-shrink-0" />
                        {item.org}
                      </p>
                      <p className="text-sm text-muted-foreground">{item.dept}</p>
                    </div>
                    <span className="text-sm font-medium text-primary whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    {item.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Memberships & Certifications */}
        <div className="mx-auto max-w-5xl">
          <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold text-foreground">
            <span className="icon-violet inline-flex rounded-lg p-2">
              <Award size={22} />
            </span>
            Professional Memberships & Certifications
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "IEEE Senior Member (2023-present)", badge: "badge-blue" },
              { name: "ACM SIGHPC Member (2025-2026)", badge: "badge-emerald" },
              { name: "Women in Cybersecurity (WiCyS) (2024-present)", badge: "badge-violet" },
              { name: "ACCESS Campus Champion (2025-present)", badge: "badge-teal" },
              { name: "NVIDIA: Transformer-Based NLP Applications", badge: "badge-amber" },
              { name: "AWS Cloud Practitioner Certificate", badge: "badge-rose" },
              { name: "MIT Data Science & Machine Learning", badge: "badge-blue" },
              { name: "SecureAI - Loyola University Chicago", badge: "badge-emerald" },
              { name: "Human Subject Research (CITI Program)", badge: "badge-violet" },
            ].map((item) => (
              <Card key={item.name} className="border-border/60">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Globe size={16} className="text-primary flex-shrink-0" />
                    <p className="text-sm font-medium text-foreground">{item.name}</p>
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
