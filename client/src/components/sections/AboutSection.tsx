import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-blue-100 dark:from-gray-900 dark:to-blue-900">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4 font-playfair">About Me</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto rounded-full"></div>
          </div>

          {/* Biography */}
          <Card className="mb-16 bg-white dark:bg-gray-800/50 backdrop-blur-sm shadow-lg border border-gray-200 dark:border-gray-700/50">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-roboto mb-6">
                Dr. Anas M.R. AlSobeh is an Assistant Professor and Program Coordinator of Information Technology at Southern Illinois University Carbondale (SIUC), a Research Institution (R1), with over 10 years of academic and research experience across the United States, Jordan, and Bahrain. He holds a Ph.D. in Computer Science from Utah State University, along with both M.Sc. and B.Sc. degrees in Computer Information Systems from Yarmouk University.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-roboto mb-6">
                Dr. AlSobeh's interdisciplinary research bridges AI-driven cybersecurity, software engineering, cloud computing, and data science. His contributions include developing AI-based systems for malware detection, adversarial training models, and explainable AI frameworks for public safety and digital media forensics. Recently, he secured a USDA research grant (2024–2026) to develop an AI-powered detection system for Salmonella in onions using microscopic imaging.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-roboto">
                He has published over 50 peer-reviewed articles, many in Q1/Q2 journals indexed by Scopus and ISI, and received the 2024 IACIS Best Paper Award for his work on deepfake detection. Beyond academia, Dr. AlSobeh has led and contributed to numerous international projects funded by the EU (Horizon 2020, Erasmus+), GIZ, DAAD, and Nuffic, focusing on refugee education, health data systems, and cybersecurity training.
              </p>
            </CardContent>
          </Card>

          {/* Education Timeline */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3 font-playfair">
              <GraduationCap className="text-blue-500" size={32} />
              Education
            </h3>
            <div className="space-y-6">
              <Card className="transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl border-l-4 border-blue-500">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Ph.D. in Computer Science</h4>
                    <span className="text-gray-500 dark:text-gray-400">2011 - 2015</span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Utah State University, Logan, Utah, USA</p>
                  <p className="text-gray-600 dark:text-gray-300">GPA: 3.94 (95.5 Excellent)</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Dissertation: "Improving Reuse of Distributed Transaction Software with Transaction-Aware Aspects"
                  </p>
                </CardContent>
              </Card>
              <Card className="transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl border-l-4 border-blue-500">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">M.Sc. in Computer Information Systems</h4>
                    <span className="text-gray-500 dark:text-gray-400">2007 - 2010</span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Yarmouk University, Irbid, Jordan</p>
                  <p className="text-gray-600 dark:text-gray-300">GPA: 88.2 (Excellent)</p>
                </CardContent>
              </Card>
              <Card className="transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl border-l-4 border-blue-500">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">B.Sc. in Computer Information Systems</h4>
                    <span className="text-gray-500 dark:text-gray-400">2003 - 2007</span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Yarmouk University, Irbid, Jordan</p>
                  <p className="text-gray-600 dark:text-gray-300">GPA: 86.2 (Excellent)</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Current Position */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3 font-playfair">
              <Briefcase className="text-blue-500" size={32} />
              Current Position
            </h3>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">Assistant Professor & Program Coordinator</h4>
                  <span className="text-gray-500 dark:text-gray-400">2023 - Present</span>
                </div>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                  Information Technology & Cybersecurity (ITEC & CTEC) Program<br />
                  School of Computing, Southern Illinois University, Carbondale, IL
                </p>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p><strong>Research (30%):</strong> Conducting research in IT and related areas, developing and submitting research proposals to funding agencies.</p>
                  <p><strong>Teaching (50%):</strong> Engaging with students through active learning methods, developing course materials, and providing academic advising.</p>
                  <p><strong>Service (20%):</strong> Coordinating ITEC and CTEC programs, serving on committees, and participating in outreach activities.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Professional Memberships */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3 font-playfair">
              <Award className="text-blue-500" size={32} />
              Professional Memberships
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <p className="font-semibold text-lg text-gray-900 dark:text-white">IEEE Senior Member</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2023 - Present</p>
                </CardContent>
              </Card>
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <p className="font-semibold text-lg text-gray-900 dark:text-white">ACM SIGHPC Member</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2025 - 2026</p>
                </CardContent>
              </Card>
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <p className="font-semibold text-lg text-gray-900 dark:text-white">Women in Cybersecurity (WiCyS)</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2024 - Present</p>
                </CardContent>
              </Card>
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <p className="font-semibold text-lg text-gray-900 dark:text-white">ACCESS Campus Champion</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2025 - Present</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

