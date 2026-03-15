import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, GraduationCap } from "lucide-react";

const undergraduateCourses = [
  "CIS 101: Computer Skills",
  "IT 102: Introduction to Computing Applications",
  "CIS 102: Technology and Societies",
  "CIS 214: Visual Programming (C#)",
  "CIS 227: Human Computer Interaction",
  "ITEC 280: Discrete Math for IT",
  "CIS 260: Database Management Systems",
  "CIS 311: Internet Applications",
  "ITEC 312: Programming II - Python",
  "CIS 341: Website Design",
  "CIS 382: Cloud Computing",
  "ITEC 409: Java Programming",
  "CIS 411: Client/Server Programming",
  "JRN 442: News Website Development",
  "CIS 499: Graduation Project (BSc)",
  "ITEC 410: Web Security",
  "ITEC 419: Occupational Internship",
  "INFO 1200: Computer Programming I for IS&T",
  "INFO 2200: Computer Programming II for IS&T",
];

const graduateCourses = [
  "CIS 642: Software Design and Modelling",
  "CIS 683: Web Technology",
  "CIS 699: Graduation Project (MSc)",
  "IT 6740: Advanced Network Defense and Countermeasures",
];

const workshops = [
  "E-Psychology Support Applications",
  "Entrepreneurship",
  "Digital Transformation",
  "E-commerce",
  "HPC",
  "ML/AI",
];

const teachingInterests = [
  "Web Security",
  "Web Design",
  "Client/Server Programming",
  "Java/C#/Python Programming",
  "Software Engineering",
  "Database Management Systems",
  "Discrete Math",
  "Visual Programming",
  "Object-Oriented Programming",
  "Software Design and Modeling",
  "Data Science",
  "Machine Learning",
  "AI/ML",
  "Human Computer Interaction (HCI)",
];

const supervisions = [
  { name: "Malek AlRababah", degree: "PhD Computer Science", role: "Supervisor", topic: "Rapid Detection of Objects Using Artificial Intelligence" },
  { name: "Khalid Hamdan Jaber", degree: "MS Computer Information Systems", role: "Co-Supervisor", topic: "Context-Aware Android Malware Detection Model Using Machine Learning" },
  { name: "Sahar AlOmari", degree: "MS Computer Information Systems", role: "Co-Supervisor", topic: "Social Media Text Radicalization Detection Based on Deep Learning (Arabic)" },
  { name: "Abeer Algazo", degree: "MS, Yarmouk University", role: "Main Advisor", topic: "A Secure EHR Framework Based on Microservices and Blockchain Technologies" },
  { name: "Alhan Jamil", degree: "MS, Yarmouk University", role: "Main Advisor", topic: "Runtime Monitoring Approach for Aspect-Oriented Programs Using Model Checking" },
  { name: "Abdel Rahman Alasmar", degree: "MS, Yarmouk University", role: "Main Advisor", topic: "A Hybrid Reasoning Framework to Identifying Cross-Cutting Concerns Using AOP" },
];

export default function TeachingSection() {
  return (
    <section id="teaching" className="section-shell section-gradient-1">
      <div className="container">
        <div className="section-heading">
          <h2>Teaching & Supervision</h2>
          <p>
            Committed to student-centered teaching, curriculum development, and
            mentoring the next generation of computing professionals.
          </p>
        </div>

        {/* Teaching Interests */}
        <div className="mx-auto mb-10 max-w-4xl">
          <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
            <span className="icon-blue inline-flex rounded-lg p-2">
              <BookOpen size={20} />
            </span>
            Teaching Interests
          </h3>
          <div className="flex flex-wrap gap-2">
            {teachingInterests.map((interest, i) => {
              const badges = ["badge-blue", "badge-emerald", "badge-violet", "badge-amber", "badge-rose", "badge-teal"];
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
        </div>

        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Undergraduate Courses */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
              <span className="icon-emerald inline-flex rounded-lg p-2">
                <BookOpen size={20} />
              </span>
              Undergraduate Courses
            </h3>
            <Card className="card-accent-emerald">
              <CardContent className="p-5">
                <div className="grid grid-cols-1 gap-1">
                  {undergraduateCourses.map((course) => (
                    <p key={course} className="text-sm text-muted-foreground py-0.5">
                      {course}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Graduate Courses & Workshops */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
                <span className="icon-violet inline-flex rounded-lg p-2">
                  <GraduationCap size={20} />
                </span>
                Graduate Courses
              </h3>
              <Card className="card-accent-violet">
                <CardContent className="p-5">
                  <div className="space-y-1">
                    {graduateCourses.map((course) => (
                      <p key={course} className="text-sm text-muted-foreground py-0.5">
                        {course}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
                <span className="icon-amber inline-flex rounded-lg p-2">
                  <Users size={20} />
                </span>
                Workshops & Trainings
              </h3>
              <Card className="card-accent-amber">
                <CardContent className="p-5">
                  <div className="flex flex-wrap gap-2">
                    {workshops.map((w) => (
                      <span key={w} className="badge-amber rounded-full px-3 py-1 text-sm font-medium">
                        {w}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Graduate Supervision */}
        <div className="mx-auto max-w-5xl mt-10">
          <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-foreground">
            <span className="icon-rose inline-flex rounded-lg p-2">
              <GraduationCap size={20} />
            </span>
            Thesis & Dissertation Supervision
          </h3>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {supervisions.map((s, i) => {
              const colors = ["card-accent-blue", "card-accent-emerald", "card-accent-violet", "card-accent-amber", "card-accent-rose", "card-accent-teal"];
              return (
                <Card key={i} className={colors[i % colors.length]}>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground text-sm">{s.name}</h4>
                    <p className="text-xs text-primary font-medium">{s.degree} | {s.role}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{s.topic}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
