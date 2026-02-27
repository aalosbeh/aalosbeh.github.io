import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

type Publication = {
  year: number;
  title: string;
  authors: string;
  venue: string;
  link?: string;
};

const publications: Publication[] = [
  {
    year: 2026,
    title:
      "SiAraSent: From Features to Deep Transformers for Large-Scale Arabic Sentiment Analysis",
    authors: "O Almousa, Y Tashtoush, A AlSobeh, P Zahariev, O Darwish",
    venue: "Big Data and Cognitive Computing 10 (2), 49",
  },
  {
    year: 2026,
    title:
      "LinguTimeX: a Framework for Multilingual CTC Detection Using Explainable AI and Natural Language Processing",
    authors:
      "O Darwish, S Al-Eidi, A Al-Shorman, M Maabreh, A Alsobeh, P Zahariev, et al.",
    venue: "Computers, Materials & Continua 86 (1), 1",
  },
  {
    year: 2025,
    title:
      "AspectFL: Aspect-Oriented Programming for Trustworthy and Compliant Federated Learning Systems",
    authors: "A AlSobeh, A Shatnawi, A Magableh",
    venue: "Information 16 (12), 1048",
  },
  {
    year: 2025,
    title:
      "ADT++: Advanced Adversarial Distributional Training with Class-Wise Robustness",
    authors: "SY Khamaiseh, D Jost, A Alsobeh, A Al-Alaj, H Jiang",
    venue:
      "IEEE 12th International Conference on Data Science and Advanced Analytics",
  },
  {
    year: 2025,
    title:
      "An Improved Tweet Classifier with a Hybrid Text and Graph-based Representation",
    authors: "O Karajeh, L Abdullah, N Alsaedi, A Alsobeh, O Darwish",
    venue:
      "International Conference on Cybersecurity and AI-Based Systems (Cyber...)",
  },
  {
    year: 2025,
    title:
      "ShadowPlay: Engineering Defenses Against Role-Based Prompt Injection and Dependency Hallucination in LLM-Powered Development",
    authors: "A AlSobeh, Z Gwarzo, A Shatnawi",
    venue:
      "International Conference on Cybersecurity and AI-Based Systems (Cyber...)",
  },
  {
    year: 2025,
    title:
      "XAIPath: Temporal-Environmental Explainable AI Framework for Co-Contaminated Food Pathogen Detection in Microscopic Imaging",
    authors: "A AlSobeh, A AbuGhazaleh, N Dhahir, M Rababa",
    venue: "ICPP Companion 2025",
  },
  {
    year: 2025,
    title:
      "Enhanced detection of intrusion detection system in cloud networks using time-aware and deep learning techniques",
    authors:
      "N Terawi, HI Ashqar, O Darwish, A Alsobeh, P Zahariev, Y Tashtoush",
    venue: "Computers 14 (7), 282",
  },
  {
    year: 2025,
    title: "MuAE: A Mutation Testing Framework for Evaluating Autoencoders",
    authors: "SY Khamaiseh, S Chiacchira, A Alsobeh, A Aljadayah",
    venue: "IEEE COMPSAC 2025",
  },
  {
    year: 2025,
    title:
      "Proactive detection of tax fraud using explainable AI techniques: A hybrid approach",
    authors: "A AlSobeh, MF Abo El Rob, K Rouibah, A Shatnawi",
    venue: "Issues in Information Systems 26 (3)",
  },
  {
    year: 2025,
    title:
      "A student-centric evaluation survey to explore the impact of LLMs on UML modeling",
    authors: "B Al-Ahmad, A Alsobeh, O Meqdadi, N Shaikh",
    venue: "Information 16 (7), 565",
  },
  {
    year: 2025,
    title:
      "RADAR#: An ensemble approach for radicalization detection in Arabic social media using hybrid deep learning and transformer models",
    authors: "EM Al-Shawakfa, AMR Alsobeh, S Omari, A Shatnawi",
    venue: "Information 16 (7), 522",
  },
  {
    year: 2025,
    title:
      "Evaluating deep learning change detection in aerial imagery: A new multi-metric benchmarking framework",
    authors:
      "AAA Hassouna, MB Ismail, AS Hassan, H Ashqar, AMR Alsobeh, et al.",
    venue: "Conference publication",
  },
  {
    year: 2025,
    title:
      "Tailored large language models for spam detection: From model customization to benchmarking effectiveness",
    authors: "A Shatnawi, A AlSobeh, I Alsmadi, B Al-Ahmad",
    venue: "Intelligent Cybersecurity Conference (ICSC), 264-271",
  },
  {
    year: 2025,
    title:
      "Identifying the Origins of Business Data Breaches Through CTC Detection",
    authors: "GL Frisbier, O Darwish, A Alsobeh, A Al-shorman",
    venue: "Network and System Security (NSS 2024 Proceedings)",
  },
  {
    year: 2025,
    title:
      "SlangLLM: Dynamic detection and contextual filtering of slang in NLP applications",
    authors: "L Patel, A Alsobeh",
    venue: "Secure IoT, Assured and Trusted Cyberinfrastructure Conference",
  },
  {
    year: 2025,
    title:
      "Proximity-Constrained Counterfactuals for Explainable Diabetes Risk Assessment",
    authors: "MF Kabir, AM Mahakal, Y Wang, A AlSobeh, B Al-Ahmad, et al.",
    venue: "Applied Computational Intelligence and Soft Computing 2025",
  },
  {
    year: 2024,
    title:
      "AI-Powered AOP: Enhancing Runtime Monitoring with Large Language Models and Statistical Learning",
    authors: "A AlSobeh, A Shatnawi, B Al-Ahmad, A Aljmal, S Khamaiseh",
    venue: "IJACSA",
  },
  {
    year: 2024,
    title:
      "Enhancing integration testing efficiency through AI-driven combined structural and textual class coupling metric",
    authors: "I Alazzam, AMR AlSobeh, BB Melhem",
    venue:
      "Online Journal of Communication and Media Technologies 14 (4), e202460",
  },
  {
    year: 2024,
    title:
      "Enhancing Software Engineering Education through AI: An Empirical Study of Tree-Based Machine Learning for Defect Prediction",
    authors: "E Alhazeem, A Alsobeh, B Al-Ahmad",
    venue: "SIGITE '24",
  },
  {
    year: 2024,
    title:
      "Unmasking Media Illusion: Analytical Survey of Deepfake Video Detection and Emotional Insights",
    authors: "A Alsobeh, A Franklin, B Woodward, M Porche, J Siegelman",
    venue: "Issues in Information Systems 25 (2)",
  },
  {
    year: 2024,
    title:
      "Blockchain-Based National Digital Identity Framework–Case of Palestine",
    authors: "FA Hasan, HI Ashqar, A AlSobeh, O Darwish",
    venue: "International Conference on Intelligent Computing, Communication",
  },
  {
    year: 2024,
    title:
      "Vehicle Trajectory-Based Intersection Classification Using Deep Transfer Learning",
    authors:
      "A Kased, R Rabee, A Fahmy, H Mohamed, M Yacoub, M Elhenawy, et al.",
    venue: "International Conference on Intelligent Computing, Communication",
  },
  {
    year: 2024,
    title:
      "A Secure IoT Framework for Remote Health Monitoring Using Fog Computing",
    authors: "A Harasees, B Al-Ahmad, A Alsobeh, A Abuhussein",
    venue: "International Conference on Intelligent Computing, Communication",
  },
  {
    year: 2024,
    title:
      "The Effectiveness of a Training Program Based on Health Education to Improve Health Empowerment Level among Refugees in Jordan",
    authors: "A AlSharifin, M Megdadi, A Shatnawi, A AlSobeh, A Akkawi",
    venue: "Dirasat: Human and Social Sciences 51 (4), 204-222",
  },
  {
    year: 2024,
    title:
      "Android malware detection using time-aware machine learning approach",
    authors: "AMR AlSobeh, K Gaber, MM Hammad, M Nuser, A Shatnawi",
    venue: "Cluster Computing",
  },
  {
    year: 2024,
    title:
      "LinguTimeX: Explainable AI of natural language detection in leakage information with covert timing channels",
    authors:
      "O Darwish, S Al-Eidi, A Al-Shorman, A AlSobeh, M Maabreh, Y Tashtoush",
    venue: "Preprint/Conference version",
  },
  {
    year: 2024,
    title:
      "A Survey Analysis of Internet of Things (IoT) Education Across the Top 25 Universities in the United States",
    authors: "O Darwish, A Al-shorman, A AlSobeh, Y Tashtoush",
    venue: "Advanced Information Networking and Applications 203, 497-510",
  },
  {
    year: 2024,
    title:
      "Emo-SL Framework: Emoji Sentiment Lexicon Using Text-Based Features and Machine Learning for Sentiment Analysis",
    authors: "A Manar, A Omar, T Yahya, AS Anas, M Khalid, M Hazem",
    venue: "IEEE Access 12, 81793-81812",
  },
  {
    year: 2024,
    title:
      "A Generic and Extendable Framework for Benchmarking and Assessing the Change Detection Models",
    authors:
      "AAA Hassouna, MB Ismail, A Alqahtani, N Alqahtani, AS Hassan, et al.",
    venue: "Preprints",
  },
  {
    year: 2024,
    title:
      "Beyond Word-Based Model Embeddings: Contextualized Representations for Enhanced Social Media Spam Detection",
    authors: "S AlShattnawi, A Shtanawi, A Alsobeh, A Magableh",
    venue: "Applied Sciences 14 (6)",
  },
  {
    year: 2024,
    title:
      "Predictive Analytics in Mental Health Leveraging LLM Embeddings and Machine Learning Models for Social Media Analysis",
    authors: "A Radwan, M Amarneh, H Alawneh, HI Ashqar, A AlSobeh, et al.",
    venue: "IJWSR 21 (1)",
  },
  {
    year: 2024,
    title:
      "فاعلية برنامج يستند إلى الدعم النفسي الاجتماعي في رفع مستوى التمكين القانوني لدى اللاجئين في الأردن",
    authors: "A Al-Shraifin, N Bahr, A Shatnawi, AMR AlSobeh",
    venue: "Dirasat: Human and Social Sciences 52 (1), 18-31",
  },
  {
    year: 2024,
    title:
      "The Effectiveness of a Psychosocial Support-Based Program in Raising Legal Empowerment among Refugees In Jordan",
    authors: "A Al-Shraifin, N Bahr, A Shatnawi, AMR AlSobeh",
    venue: "Dirasat: Human and Social Sciences",
  },
  {
    year: 2024,
    title:
      "The effectiveness of a counseling program based on psychosocial support to raise the level of economic empowerment among refugees",
    authors: "A Al-Shraifin, RB Arabiat, A Shatnawi, A AlSobeh, N Bahr",
    venue: "Current Psychology 43 (4), 3101-3110",
  },
  {
    year: 2024,
    title:
      "A cloud-based IoT smart water distribution framework utilising BIP component: Jordan as a model",
    authors: "S Alshattnawi, A Alsobeh",
    venue: "International Journal of Cloud Computing 13 (1), 25-41",
  },
  {
    year: 2023,
    title:
      "OSM: Leveraging model checking for observing dynamic behaviors in aspect-oriented applications",
    authors: "A Alsobeh",
    venue:
      "Online Journal of Communication and Media Technologies 13 (4), 1-18",
    link: "https://doi.org/10.30935/ojcmt/13771",
  },
  {
    year: 2023,
    title:
      "Cybersecurity awareness factors among adolescents in Jordan: Mediation effect of cyber scale and personal factors",
    authors: "AMR AlSobeh, I AlAzzam, AMJ Shatnawi, I Khasawneh",
    venue:
      "Online Journal of Communication and Media Technologies 13 (2), e202312",
  },
  {
    year: 2023,
    title:
      "BlockASP: A Framework for AOP-based Model Checking Blockchain System",
    authors: "AMR AlSobeh, AA Magableh",
    venue: "IEEE Access 11, 115062-115075",
    link: "https://doi.org/10.1109/ACCESS.2023.3325060",
  },
  {
    year: 2023,
    title:
      "AI as a Partner in Learning: A Novel Student-in-the-Loop Framework for Enhanced Student Engagement and Outcomes in Higher Education",
    authors: "A AlSobeh, B Woodward",
    venue: "SIGITE 2023 Proceedings",
  },
  {
    year: 2023,
    title:
      "Integrating Data-Driven Security, Model Checking, and Self-Adaptation for IoT Systems using BIP Components: A Conceptual Proposal Model",
    authors: "A AlSobeh, A Shatnawi",
    venue: "Lecture Notes in Networks and Systems",
  },
  {
    year: 2022,
    title:
      "The effectiveness of a program based on psychosocial support in raising the level of family empowerment among refugees in Jordan",
    authors: "AM Shatnawi, AM AlSobeh, EI AL-Mifleh, AF Migdady",
    venue: "International Journal of Psychological and Educational Research",
  },
  {
    year: 2022,
    title:
      "The Repercussions of the COVID-19 Pandemic on Higher Education and its implications for Syrian Refugees Students",
    authors: "A Alsobeh, A Aloudat",
    venue: "Dirasat: Human and Social Sciences 49 (5), 150-166",
  },
  {
    year: 2022,
    title:
      "فاعلية برنامج تدريبي مستند إلى الدعم النفسي الاجتماعي في رفع مستوى التمكين النفسي لدى اللاجئين",
    authors:
      "NS AL-Refai, NA Albahr, AF Migdady, EI AL-Mifleh, A Shatnawi, et al.",
    venue:
      "International Journal of Psychological and Educational Research 1 (2)",
  },
  {
    year: 2022,
    title: "CRIOS Collaborative Research and Innovation Online Software Tool",
    authors: "AS Fadi Yamout, Rubén Fuentes-Fernández, Anas Al-Sobeh",
    venue: "Zenodo",
  },
  {
    year: 2022,
    title:
      "Beyond the partnership debate: Localizing knowledge production in refugee and forced migration studies",
    authors: "R Shivakoti, J Milner",
    venue: "Journal of Refugee Studies 35 (2), 805-826",
  },
  {
    year: 2022,
    title:
      "High-performance implementation of wideband coherent signal-subspace (CSS)-Based DOA algorithm on FPGA",
    authors: "A Jarrah, A Almomany, AMR Alsobeh, E Alqudah",
    venue: "Journal of Circuits, Systems and Computers 30 (11), 2150196",
  },
  {
    year: 2021,
    title: "Cultural Drivers of Radicalization",
    authors: "R Al-Maqableh, A Al-Sobeh, A Akkawi",
    venue: "Research contribution",
  },
  {
    year: 2020,
    title:
      "WeaveSim: A scalable and reusable cloud simulation framework leveraging aspect-oriented programming",
    authors: "AMR AlSobeh, S AlShattnawi, A Jarrah, MM Hammad",
    venue: "Jordanian Journal of Computers and Information Technology 6 (2)",
  },
  {
    year: 2019,
    title:
      "An evaluation of the usage of aspect orientation and the gap between academic research and industry needs",
    authors: "AWSA Magableh, AMR Alsobeh, AF Klaib",
    venue:
      "Journal of Theoretical and Applied Information Technology 97 (19), 5146-5165",
  },
  {
    year: 2019,
    title:
      "Performance Enhancement of the Advanced Encryption Standard via Pipelined Implementation",
    authors:
      "MM Barhoush, NA Kofahi, KMO Nahar, AMR Alsobeh, A Jaradat, et al.",
    venue:
      "Journal of Theoretical and Applied Information Technology 97 (15), 4213-4226",
  },
  {
    year: 2019,
    title:
      "Application of cellular automata for modeling and review of methods of movement of a group of people",
    authors:
      "MA Kantureyeva, JA Tussupov, FA Murzin, AI Uspanova, AA Abisheva, et al.",
    venue:
      "Journal of Theoretical and Applied Information Technology 97 (15), 4000-4010",
  },
  {
    year: 2019,
    title: "A survey on parallel join algorithms using MapReduce on Hadoop",
    authors: "MM Barhoush, AM AlSobeh, A Al Rawashdeh",
    venue: "IEEE Jordan International Joint Conference",
  },
  {
    year: 2019,
    title:
      "Online mobile-based personal tour application using artificial bee colony optimization algorithm",
    authors: "S Alshattnawi, I Abu Doush, A Alsobeh",
    venue:
      "Journal of Theoretical and Applied Information Technology 97 (17), 4565-4578",
  },
  {
    year: 2019,
    title:
      "A modular cloud-based ontology framework for context-aware EHR services",
    authors: "AMR AlSobeh, R Hammad, AK Al-Tamimi",
    venue:
      "International Journal of Computer Applications in Technology 60 (4), 339-350",
  },
  {
    year: 2019,
    title:
      "A national framework for e-health data collection in Jordan with current practices",
    authors: "AMR AlSobeh, AF Klaib, A AlYahya",
    venue:
      "International Journal of Computer Applications in Technology 59 (1), 64-73",
  },
  {
    year: 2018,
    title:
      "Architectural aspect-aware design for IoT applications: conceptual proposal",
    authors: "AMR AlSobeh, AA Magableh",
    venue: "International Journal of Computer Science & Information Technology",
  },
  {
    year: 2018,
    title:
      "Securing software development stages using aspect-orientation concepts",
    authors: "AA Magableh, AMR Al Sobeh",
    venue: "International Journal of Software Engineering & Applications 9 (6)",
  },
  {
    year: 2018,
    title: "Aspect-oriented software security development life cycle (AOSSDLC)",
    authors: "AA Magableh, AMR AlSobeh",
    venue: "CS & IT Conference Proceedings",
  },
  {
    year: 2018,
    title:
      "An aspect-oriented with BIP components for better crosscutting concerns modernization in IoT applications",
    authors: "AMR AlSobeh, AA Magableh",
    venue: "CS & IT Conference Proceedings 8 (12)",
  },
  {
    year: 2018,
    title:
      "Runtime reusable weaving model for cloud services using aspect-oriented programming: the security-related aspect",
    authors: "AMR Alsobeh, AAAR Magableh, EM AlSukhni",
    venue: "International Journal of Web Services Research 15 (1), 71-88",
  },
  {
    year: 2017,
    title:
      "Computer Science and Information Technology (CoSIT-2017 Proceedings)",
    authors: "D Nagamalai, N Meghanathan",
    venue: "Conference Proceedings",
  },
  {
    year: 2016,
    title:
      "Transaction-aware aspects with TransJ: An initial empirical study to demonstrate improvement in reusability",
    authors: "AMR AlSobeh, SW Clyde",
    venue: "ICSEA 2016",
  },
  {
    year: 2016,
    title:
      "TransJ: An abstract independent-framework for weaving crosscutting concern into distributed transactions",
    authors: "AMR AlSobeh, SW Clyde",
    venue: "Comput. Technol. Appl. 7 (4), 173",
  },
  {
    year: 2015,
    title:
      "Weaving Crosscutting Concerns into Distributed Transactions in Aspect",
    authors: "A Alsobeh, S Clyde",
    venue: "Research manuscript",
  },
  {
    year: 2015,
    title:
      "Improving reuse of distributed transaction software with transaction-aware aspects",
    authors: "AA AlSobeh",
    venue: "Doctoral dissertation",
  },
  {
    year: 2014,
    title: "A Unified Conceptual Model for Distributed Transactions",
    authors: "A Alsobeh",
    venue: "Research manuscript",
  },
  {
    year: 2014,
    title:
      "Unified Conceptual Model for Joinpoints in Distributed Transactions",
    authors: "AMR AlSobeh, S Clyde",
    venue: "ICSEA 2014",
  },
  {
    year: 2012,
    title: "Examining web search trends across Arab countries",
    authors: "M Al-Kabi, A Wahbeh, A Alsobeh, A Ale’roud, I Alsmadi",
    venue: "Arabian Journal for Science and Engineering 37 (6), 1585-1593",
  },
  {
    year: 2011,
    title:
      "A multilingual and location evaluation of search engines for websites and searched for keywords",
    authors: "A AlSobh, A Al Oroud, MN Al-Kabi, I AlSmadi",
    venue: "Brazilian Journal of Information Science: research trends 4 (1)",
  },
  {
    year: 2005,
    title:
      "Simulating the Field: How to Grow Plants in Soil Columns in the Greenhouse",
    authors: "JK Chard, B Bugbee",
    venue: "Research contribution",
  },
];

export default function PublicationsSection() {
  const [filter, setFilter] = useState<string>("all");

  const years = useMemo(
    () =>
      Array.from(new Set(publications.map((p) => p.year.toString()))).sort(
        (a, b) => Number(b) - Number(a),
      ),
    [],
  );

  const filteredPublications =
    filter === "all"
      ? publications
      : publications.filter((pub) => pub.year.toString() === filter);

  return (
    <section id="publications" className="section-shell bg-background">
      <div className="container">
        <div className="section-heading">
          <h2>Publications</h2>
          <p>
            Complete publication list added to the website tab, organized by
            year.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          {years.map((year) => (
            <Button
              key={year}
              variant={filter === year ? "default" : "outline"}
              onClick={() => setFilter(year)}
            >
              {year}
            </Button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredPublications.map((pub) => (
            <Card
              key={`${pub.year}-${pub.title}`}
              className="border-border/80 bg-card/90 shadow-sm"
            >
              <CardContent className="p-5 md:p-6">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <FileText className="text-primary" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-foreground md:text-lg">
                      {pub.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {pub.authors}
                    </p>
                    <p className="mt-2 text-sm text-foreground/90">
                      {pub.venue}
                    </p>
                    <div className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{pub.year}</span>
                      {pub.link && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary hover:underline"
                        >
                          <ExternalLink size={14} />
                          Link
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
