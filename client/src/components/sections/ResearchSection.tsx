import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Shield, Cloud, Database, Code, Cpu } from "lucide-react";

export default function ResearchSection() {
  const researchAreas = [
    {
      icon: Brain,
      title: "Artificial Intelligence & Machine Learning",
      description: "Developing AI-based systems for malware detection, adversarial training models, and explainable AI frameworks for public safety and digital media forensics."
    },
    {
      icon: Shield,
      title: "Cybersecurity Analysis",
      description: "AI-driven cybersecurity solutions, deepfake detection, intrusion detection systems, and blockchain-based security frameworks."
    },
    {
      icon: Code,
      title: "Software Engineering",
      description: "Aspect-oriented programming, distributed systems, model checking, and software design patterns for improved code reusability and maintainability."
    },
    {
      icon: Cpu,
      title: "High-Performance Computing (HPC)",
      description: "Leveraging HPC infrastructure for AI/ML workflows, microscopy analysis, and large-scale data processing using ACES and ACCESS platforms."
    },
    {
      icon: Cloud,
      title: "Cloud Computing & IoT",
      description: "Cloud-based architectures, IoT security frameworks, and distributed computing solutions for scalable applications."
    },
    {
      icon: Database,
      title: "Data Science & Analytics",
      description: "Migration data analytics, health information systems, predictive analytics, and statistical analysis for policy-making."
    }
  ];

  const currentProjects = [
    {
      title: "AI-Powered Bacterial Detection",
      period: "2024 - 2026",
      funding: "USDA-NIFA",
      description: "Developing an AI-powered detection system for Salmonella in onions using microscopic imaging and deep learning techniques."
    },
    {
      title: "Deepfake Detection Framework",
      period: "2024 - Present",
      funding: "REACH Faculty Mentor Award",
      description: "Benchmarking integrated detection of LLM-generated deepfakes across modalities on social media platforms."
    },
    {
      title: "Migration Data Analytics",
      period: "2021 - 2022",
      funding: "ICMPD",
      description: "Leading data science consulting for migration policy development and evidence-based decision making in Jordan."
    }
  ];

  return (
    <section id="research" className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/50 dark:to-gray-900">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4 font-playfair">Research</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-roboto">
              My interdisciplinary research bridges AI-driven cybersecurity, software engineering, cloud computing, and data science, with a focus on developing innovative solutions for real-world challenges.
            </p>
          </div>

          {/* Research Areas */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 font-playfair">Research Interests</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {researchAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <Card key={index} className="bg-white dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-3">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                          <Icon className="text-blue-500 dark:text-blue-400" size={28} />
                        </div>
                        <CardTitle className="text-xl font-montserrat font-semibold text-gray-900 dark:text-white">{area.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 text-base font-roboto">{area.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Current Research Projects */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 font-playfair">Current Research Projects</h3>
            <div className="space-y-8">
              {currentProjects.map((project, index) => (
                <Card key={index} className="bg-white dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-teal-400">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-montserrat">{project.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 font-roboto">{project.description}</p>
                        <div className="flex flex-wrap gap-3">
                          <span className="px-4 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 rounded-full text-sm font-medium">
                            {project.funding}
                          </span>
                          <span className="px-4 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded-full text-sm">
                            {project.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Impact */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <Card className="bg-white dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-blue-500 dark:text-blue-400 mb-2 font-montserrat">50+</div>
                <p className="text-gray-600 dark:text-gray-300 font-roboto">Publications</p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-blue-500 dark:text-blue-400 mb-2 font-montserrat">$3M+</div>
                <p className="text-gray-600 dark:text-gray-300 font-roboto">Research Funding</p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-blue-500 dark:text-blue-400 mb-2 font-montserrat">15+</div>
                <p className="text-gray-600 dark:text-gray-300 font-roboto">Research Projects</p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-blue-500 dark:text-blue-400 mb-2 font-montserrat">Q1/Q2</div>
                <p className="text-gray-600 dark:text-gray-300 font-roboto">Journal Rankings</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

