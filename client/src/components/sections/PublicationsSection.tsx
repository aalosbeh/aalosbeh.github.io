import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, BookOpen, Award } from "lucide-react";

type Publication = {
  year: number;
  title: string;
  authors: string;
  venue: string;
  link?: string;
  type: "journal" | "conference";
  note?: string;
};

const journals: Publication[] = [
  {
    year: 2026,
    title: "BactoDetect: Real-Time Bacterial Colony Detection on Heterogeneous HPC Architectures for Scalable Food Safety Monitoring",
    authors: "A Alsobeh, AD Rajagopala, I Alsmadi, B Al-Ahmad, A AbuGhazaleh, N Dhahir, M Rababa",
    venue: "BDCC, Scopus Q1",
    type: "journal",
    note: "Submitted",
  },
  {
    year: 2026,
    title: "SiAraSent: From Features to Deep Transformers for Large-Scale Arabic Sentiment Analysis",
    authors: "O Almousa, Y Tashtoush, A AlSobeh, P Zahariev, O Darwish",
    venue: "Big Data and Cognitive Computing 10(2), 49",
    type: "journal",
    link: "https://doi.org/10.3390/bdcc10020049",
  },
  {
    year: 2025,
    title: "Proximity-Constrained Counterfactuals for Explainable Diabetic Risk Assessment",
    authors: "MF Kabir, AM Mahakal, Y Wang, A AlSobeh, B Al-Ahmad, R Alkhawaldah",
    venue: "Applied Computational Intelligence and Soft Computing, Wiley, Scopus Q1",
    type: "journal",
  },
  {
    year: 2025,
    title: "AspectFL: Aspect-Oriented Programming for Trustworthy and Compliant Federated Learning Systems",
    authors: "A AlSobeh, A Shatnawi, A Magableh",
    venue: "Information 16(12), 1048, Scopus Q2",
    type: "journal",
    link: "https://doi.org/10.3390/info16121048",
  },
  {
    year: 2025,
    title: "LinguTimeX: A Framework for Multilingual CTC Detection Using Explainable AI and Natural Language Processing",
    authors: "O Darwish, S Al-Eidi, A Al-Shorman, M Maabreh, A Alsobeh, Y Tashtoush, P Zahariev",
    venue: "CMC-Computers, Materials & Continua, Q1",
    type: "journal",
  },
  {
    year: 2025,
    title: "Evaluating Deep Learning Change Detection in Aerial Imagery: A New Multi-Metric Benchmarking Framework",
    authors: "AAA Hassouna, MB Ismail, AS Hassan, H Ashqar, AMR Alsobeh, AA Hassan, M Elhenawy",
    venue: "International Journal of Aerospace Engineering, Wiley, Scopus Q1",
    type: "journal",
  },
  {
    year: 2025,
    title: "A Student-Centric Evaluation Survey to Explore the Impact of LLMs on UML Modeling",
    authors: "B Al-Ahmad, A Alsobeh, O Meqdadi, N Shaikh",
    venue: "Information 16(7), 565, Scopus Q2",
    type: "journal",
  },
  {
    year: 2025,
    title: "Enhanced Detection of Intrusion Detection System in Cloud Networks Using Time-Aware and Deep Learning Techniques",
    authors: "N Terawi, HI Ashqar, O Darwish, A Alsobeh, P Zahariev, Y Tashtoush",
    venue: "Computers 14(7), 282, Scopus Q1",
    type: "journal",
  },
  {
    year: 2025,
    title: "RADAR#: An Ensemble Approach for Radicalization Detection in Arabic Social Media Using Hybrid Deep Learning and Transformer Models",
    authors: "EM Al-Shawakfa, AMR Alsobeh, S Omari, A Shatnawi",
    venue: "Information 16(7), 522, Scopus Q2",
    type: "journal",
    link: "https://doi.org/10.3390/info16070522",
  },
  {
    year: 2025,
    title: "The Effectiveness of a Psychosocial Support-Based Program in Raising Legal Empowerment among Refugees in Jordan",
    authors: "A Al-Sharifin, N Bahr, A Shatnawi, AMR AlSobeh",
    venue: "Dirasat: Human and Social Sciences 52(1), 18-31, Q3",
    type: "journal",
  },
  {
    year: 2024,
    title: "AI-Powered AOP: Enhancing Runtime Monitoring with Large Language Models and Statistical Learning",
    authors: "A AlSobeh, A Shatnawi, B Al-Ahmad, A Aljmal, S Khamaiseh",
    venue: "IJACSA, Scopus Q3",
    type: "journal",
  },
  {
    year: 2024,
    title: "Enhancing Integration Testing Efficiency Through AI-Driven Combined Structural and Textual Class Coupling Metric",
    authors: "I Alazzam, AMR AlSobeh, B Bani Melhem",
    venue: "Online Journal of Communication and Media Technologies 14(4), e202460, ISI Q1",
    type: "journal",
  },
  {
    year: 2024,
    title: "Android Malware Detection Using Time-Aware Machine Learning Approach",
    authors: "AMR AlSobeh, K Gaber, MM Hammad, M Nuser, A Shatnawi",
    venue: "Cluster Computing, ISI Q1",
    type: "journal",
  },
  {
    year: 2024,
    title: "Beyond Word-Based Model Embeddings: Contextualized Representations for Enhanced Social Media Spam Detection",
    authors: "S AlShattnawi, A Shatnawi, AMR AlSobeh, AA Magableh",
    venue: "Applied Sciences 14(6), 2254, ISI Q1",
    type: "journal",
    link: "https://doi.org/10.3390/app14062254",
  },
  {
    year: 2024,
    title: "Emo-SL Framework: Emoji Sentiment Lexicon Using Text-Based Features and Machine Learning for Sentiment Analysis",
    authors: "M Alfreihat, O Almousa, Y Tashtoush, A AlSobeh, K Mansour, H Migdady",
    venue: "IEEE Access",
    type: "journal",
  },
  {
    year: 2024,
    title: "Predictive Analytics in Mental Health: Leveraging LLM Embeddings and Machine Learning Models for Social Media Analysis",
    authors: "A Radwan, M Amarneh, H Alawneh, HI Ashqar, A AlSobeh, A Magableh",
    venue: "International Journal of Web Services Research (IJWSR), ISI Q1",
    type: "journal",
  },
  {
    year: 2023,
    title: "BlockASP: A Framework for AOP-Based Model Checking Blockchain System",
    authors: "AMR AlSobeh, AA Magableh",
    venue: "IEEE Access 11, 115062-115075",
    type: "journal",
    link: "https://doi.org/10.1109/ACCESS.2023.3325060",
  },
  {
    year: 2023,
    title: "OSM: Leveraging Model Checking for Observing Dynamic Behaviors in Aspect-Oriented Applications",
    authors: "AMR AlSobeh",
    venue: "Online Journal of Communication and Media Technologies 13(4), e202355",
    type: "journal",
    link: "https://doi.org/10.30935/ojcmt/13771",
  },
  {
    year: 2023,
    title: "Cybersecurity Awareness Factors Among Adolescents in Jordan: Mediation Effect of Cyber Scale and Personal Factors",
    authors: "AMR AlSobeh, I AlAzzam, AMJ Shatnawi, I Khasawneh",
    venue: "Online Journal of Communication and Media Technologies 13(2), e202312",
    type: "journal",
  },
  {
    year: 2022,
    title: "The Repercussions of the COVID-19 Pandemic on Higher Education and its Implications for Syrian Refugees Students",
    authors: "A Alsobeh, A Aloudat",
    venue: "Dirasat: Human and Social Sciences 49(5), 150-166",
    type: "journal",
    link: "https://doi.org/10.35516/hum.v49i5.2770",
  },
  {
    year: 2022,
    title: "The Effectiveness of a Program Based on Psychosocial Support in Raising Family Empowerment Among Refugees in Jordan",
    authors: "AM Shatnawi, AM AlSobeh, EI AL-Mifleh, AF Migdady",
    venue: "International Journal of Psychological and Educational Research 1(4)",
    type: "journal",
  },
  {
    year: 2021,
    title: "A Cloud-Based IoT Smart Water Distribution Framework Utilizing BIP Component: Jordan As A Model",
    authors: "S Alshattnawi, AMR AlSobeh",
    venue: "International Journal of Cloud Computing, Inderscience, Scopus",
    type: "journal",
  },
  {
    year: 2021,
    title: "High-Performance Implementation of Wideband Coherent Signal-Subspace (CSS) Based DOA Algorithm on FPGA",
    authors: "A Jarrah, A Almomany, AMR AlSobeh, E Alqudah",
    venue: "Journal of Circuits, Systems, and Computers, World Scientific, ISI",
    type: "journal",
  },
  {
    year: 2020,
    title: "WeaveSim: A Scalable and Reusable Cloud Simulation Framework Leveraging Aspect-Oriented Programming",
    authors: "AMR AlSobeh, S AlShattnawi, A Jarrah, MM Hammad",
    venue: "Jordanian Journal of Computers and Information Technology 6(2), ISI",
    type: "journal",
  },
  {
    year: 2019,
    title: "A Modular Cloud-Based Ontology Framework for Context-Aware EHR Services",
    authors: "AMR AlSobeh, R Hammad, AK Al-Tamimi",
    venue: "International Journal of Computer Applications in Technology 60(4), 339-350, Scopus",
    type: "journal",
  },
  {
    year: 2019,
    title: "A National Framework for E-Health Data Collection in Jordan with Current Practices",
    authors: "AMR AlSobeh, AF Klaib, A AlYahya",
    venue: "International Journal of Computer Applications in Technology 59(1), 64-73, Scopus",
    type: "journal",
  },
  {
    year: 2019,
    title: "An Evaluation of the Usage of Aspect Orientation and the Gap Between Academic Research and Industry Needs",
    authors: "AA Magableh, AMR Alsobeh, AF Klaib",
    venue: "Journal of Theoretical and Applied Information Technology, Scopus",
    type: "journal",
  },
  {
    year: 2019,
    title: "Online Mobile-Based Personal Tour Application Using Artificial Bee Colony Optimization Algorithm",
    authors: "S Alshattnawi, I Abu Doush, A Alsobeh",
    venue: "Journal of Theoretical and Applied Information Technology, Scopus",
    type: "journal",
  },
  {
    year: 2019,
    title: "Performance Enhancement of the Advanced Encryption Standard Via Pipelined Implementation",
    authors: "MM Barhoush, NA Kofahi, KMO Nahar, AMR Alsobeh, A Jaradat, B Alomari",
    venue: "Journal of Theoretical and Applied Information Technology 97(15), 4213-4226, Scopus",
    type: "journal",
  },
  {
    year: 2018,
    title: "Runtime Reusable Weaving Model for Cloud Services Using Aspect-Oriented Programming: The Security-Related Aspect",
    authors: "AMR Alsobeh, AAAR Magableh, EM AlSukhni",
    venue: "International Journal of Web Services Research 15(1), 71-88, Thomson Reuters-ISI",
    type: "journal",
  },
  {
    year: 2018,
    title: "Architectural Aspect-Aware Design for IoT Applications: Conceptual Proposal",
    authors: "AMR AlSobeh, AA Magableh",
    venue: "International Journal of Computer Science & Information Technology 10(6), 1-8",
    type: "journal",
  },
  {
    year: 2018,
    title: "Securing Software Development Stages Using Aspect-Orientation Concepts",
    authors: "AA Magableh, AMR AlSobeh",
    venue: "International Journal of Software Engineering & Applications 9(6), 57-71, ISI",
    type: "journal",
  },
  {
    year: 2016,
    title: "TransJ: An Abstract Independent-Framework for Weaving Crosscutting Concern into Distributed Transactions",
    authors: "AMR AlSobeh, SW Clyde",
    venue: "Journal of Computer Technology and Application 7(4), 173-195",
    type: "journal",
  },
  {
    year: 2012,
    title: "Examining Web Search Trends Across Arab Countries",
    authors: "M Al-Kabi, A Wahbeh, A Alsobeh, A Aleroud, I Alsmadi",
    venue: "Arabian Journal for Science and Engineering 37(6), 1585-1593, Springer, ISI, Scopus",
    type: "journal",
  },
  {
    year: 2010,
    title: "A Multilingual and Location Evaluation of Search Engines for Websites and Searched for Keywords",
    authors: "A AlSobh, A Al Oroud, MN Al-Kabi, I AlSmadi",
    venue: "Brazilian Journal of Information Science: research trends 4(1)",
    type: "journal",
  },
];

const conferences: Publication[] = [
  {
    year: 2026,
    title: "Translator-Oriented AI for Medical Record Reconciliation (TOAI-MR)",
    authors: "A AlSobeh, A Shatnawi, R Hammad",
    venue: "SaTC 2026, Houston, Texas, March 24-27, 2026",
    type: "conference",
  },
  {
    year: 2026,
    title: "A Reproducible Framework for Institutional Domain Adaptation of LLMs via Supervised Fine-Tuning and Retrieval-Augmented Generation",
    authors: "I Alsmadi, A AlSobeh",
    venue: "AIS, Texas A&M San Antonio, 2026",
    type: "conference",
  },
  {
    year: 2026,
    title: "CodeLLM-Auth: Multimodal Authorship Attribution and Verification via Supervised Contrastive Code Embeddings",
    authors: "A AlSobeh, S Khamaiseh, D Middendorf, J Dziubinski",
    venue: "Submitted to COMPSAC, 2026",
    type: "conference",
  },
  {
    year: 2025,
    title: "An Improved Tweet Classifier with a Hybrid Text and Graph-based Representation",
    authors: "O Karajeh, L Abdullah, N Alsaedi, A Alsobeh, O Darwish",
    venue: "Cyber-AI 2025, Varna, Bulgaria, pp. 298-307",
    type: "conference",
  },
  {
    year: 2025,
    title: "Background-Aware Instance Segmentation for Early Detection of E. coli and Salmonella in Time-Stamped Microscopy Images",
    authors: "B Koirala, A AlSobeh, N Dhahir, A AbuGhazaleh",
    venue: "24th International Conference on Machine Learning and Applications (AMLA), Dec 2025",
    type: "conference",
  },
  {
    year: 2025,
    title: "XAIPath: Temporal-Environmental Explainable AI Framework for Co-Contaminated Food Pathogen Detection in Microscopic Imaging",
    authors: "A AlSobeh, A AbuGhazaleh, N Dhahir, M Rababa",
    venue: "ICPP Companion '25, San Diego, CA, Sep 2025",
    type: "conference",
  },
  {
    year: 2025,
    title: "ImagePatriot: Distribution-Based Image Immunization Against Diffusion-Based Editing",
    authors: "S Khamaiseh, S Chiacchira, A Al-Alaj, A AlSobeh",
    venue: "IEEE DSAA 2025, Oct 2025",
    type: "conference",
  },
  {
    year: 2025,
    title: "ADT++: Advanced Adversarial Distributional Training with Class-wise Robustness",
    authors: "S Khamaiseh, D Jost, A AlSobeh, H Jiang",
    venue: "IEEE DSAA 2025, Oct 2025",
    type: "conference",
  },
  {
    year: 2025,
    title: "MuAE: A Mutation Testing Framework for Evaluating Autoencoders",
    authors: "SY Khamaiseh, S Chiacchira, A Alsobeh, A Aljadayah",
    venue: "IEEE COMPSAC 2025, Toronto, pp. 1015-1020",
    type: "conference",
  },
  {
    year: 2025,
    title: "ShadowPlay: Engineering Defenses Against Role-Based Prompt Injection and Dependency Hallucination in LLM-Powered Development",
    authors: "A AlSobeh, Z Gwarzo, A Shatnawi",
    venue: "Cyber-AI 2025",
    type: "conference",
  },
  {
    year: 2025,
    title: "Proactive Detection of Tax Fraud Using Explainable AI Techniques: A Hybrid Approach",
    authors: "A AlSobeh, M Rob, K Rouibah, A Shatnawi",
    venue: "65th IACIS Annual Conference, Clearwater Beach, Florida, Oct 2025",
    type: "conference",
  },
  {
    year: 2025,
    title: "Tailored Large Language Models for Spam Detection: From Model Customization to Benchmarking Effectiveness",
    authors: "A Shatnawi, A AlSobeh, I Alsmadi, B Al-Ahmad",
    venue: "5th Intelligent Cybersecurity Conference (ICSC), Tampa, FL, pp. 264-271",
    type: "conference",
  },
  {
    year: 2025,
    title: "SlangLLM: Dynamic Detection and Contextual Filtering of Slang in NLP Applications",
    authors: "L Patel, A Alsobeh",
    venue: "1st International Conference on SATC, Dayton, OH, pp. 1-6",
    type: "conference",
  },
  {
    year: 2025,
    title: "A Multi-Objective Optimization Approach for Sustainable AI-Driven Entrepreneurship in Resilient Economies",
    authors: "A AlSobeh, R AlKurdi",
    venue: "8th International Conference on Entrepreneurship for Sustainability & Impact (ESI), 2025",
    type: "conference",
  },
  {
    year: 2025,
    title: "ResiliAI: A Multi-Agent Reinforcement Learning Framework for AI-Driven Economic Shock Resilience and Adaptive Policy Simulation",
    authors: "A AlSobeh, R AlKurdi",
    venue: "8th International Conference on Entrepreneurship for Sustainability & Impact (ESI), 2025",
    type: "conference",
  },
  {
    year: 2024,
    title: "Unmasking Media Illusion: Analytical Survey of Deepfake Video Detection and Emotional Insights",
    authors: "A AlSobeh, A Franklin, B Woodward",
    venue: "64th IACIS Annual Conference, Atlantic Beach, Florida",
    type: "conference",
    note: "Best Paper Award",
  },
  {
    year: 2024,
    title: "Identifying the Origins of Business Data Breaches Through CTC Detection",
    authors: "GL Frisbier, O Darwish, A Alsobeh, A Al-shorman",
    venue: "International Conference on Network and System Security (NSS), Springer, pp. 387-406",
    type: "conference",
  },
  {
    year: 2024,
    title: "Blockchain-Based National Digital Identity Framework - Case of Palestine",
    authors: "FA Hasan, HI Ashqar, A AlSobeh, O Darwish",
    venue: "ICCNS 2024, Dubrovnik, Croatia, pp. 76-83",
    type: "conference",
  },
  {
    year: 2024,
    title: "A Secure IoT Framework for Remote Health Monitoring Using Fog Computing",
    authors: "A Harasees, B Al-Ahmad, A Alsobeh, A Abuhussein",
    venue: "ICCNS 2024, Dubrovnik, Croatia, pp. 17-24",
    type: "conference",
  },
  {
    year: 2024,
    title: "Vehicle Trajectory-Based Intersection Classification Using Deep Transfer Learning",
    authors: "A Kased, R Rabee, A Fahmy, H Mohamed, M Yacoub, M Elhenawy, HI Ashqar, A Alsobeh, et al.",
    venue: "ICCNS 2024, Dubrovnik, Croatia, pp. 158-165",
    type: "conference",
  },
  {
    year: 2024,
    title: "A Survey Analysis of Internet of Things (IoT) Education Across the Top 25 Universities in the United States",
    authors: "O Darwish, A Al-Shorman, A AlSobeh, Y Tashtoush",
    venue: "AINA 2024, Lecture Notes on Data Engineering and Communications Technologies 203, Springer",
    type: "conference",
  },
  {
    year: 2023,
    title: "AI as a Partner in Learning: A Novel Student-in-the-Loop Framework for Enhanced Student Engagement and Outcomes in Higher Education",
    authors: "A AlSobeh, B Woodward",
    venue: "SIGITE '23, Marietta, GA, ACM",
    type: "conference",
    link: "https://doi.org/10.1145/3585059.3611405",
  },
  {
    year: 2023,
    title: "Integrating Data-Driven Security, Model Checking, and Self-Adaptation for IoT Systems using BIP Components: A Conceptual Proposal Model",
    authors: "A AlSobeh, A Shatnawi",
    venue: "ACR'23, Orlando, Florida, Springer LNNS",
    type: "conference",
  },
  {
    year: 2019,
    title: "A Survey on Parallel Join Algorithms Using MapReduce on Hadoop",
    authors: "MM Barhoush, AM AlSobeh, A Al Rawashdeh",
    venue: "IEEE Jordan International Joint Conference on EE and IT (JEEIT), pp. 381-388",
    type: "conference",
  },
  {
    year: 2018,
    title: "An Aspect-Oriented with BIP Components for Better Crosscutting Concerns Modernization In IoT Applications",
    authors: "AMR AlSobeh, AA Magableh",
    venue: "CSEN-2018, Dubai, UAE, pp. 21-31",
    type: "conference",
  },
  {
    year: 2018,
    title: "Aspect-Oriented Software Security Development Life Cycle (AOSSDLC)",
    authors: "AA Magableh, AMR AlSobeh",
    venue: "CSEN-2018, Dubai, UAE, pp. 33-47",
    type: "conference",
  },
  {
    year: 2016,
    title: "Transaction-Aware Aspects with TransJ: Initial Experiment Show Promising Improvements in Reusability of Distributed Transactions",
    authors: "AMR AlSobeh, SW Clyde",
    venue: "ICSEA 2016, Rome, Italy",
    type: "conference",
  },
  {
    year: 2014,
    title: "Unified Conceptual Model for Joinpoints in Distributed Transactions",
    authors: "AMR AlSobeh, SW Clyde",
    venue: "ICSEA'14, Nice, France, pp. 8-15",
    type: "conference",
  },
];

const allPublications = [...journals, ...conferences];

export default function PublicationsSection() {
  const [filter, setFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<"all" | "journal" | "conference">("all");

  const years = useMemo(
    () =>
      Array.from(new Set(allPublications.map((p) => p.year.toString()))).sort(
        (a, b) => Number(b) - Number(a),
      ),
    [],
  );

  const filteredPublications = useMemo(() => {
    let pubs = allPublications;
    if (typeFilter !== "all") {
      pubs = pubs.filter((p) => p.type === typeFilter);
    }
    if (filter !== "all") {
      pubs = pubs.filter((p) => p.year.toString() === filter);
    }
    return pubs.sort((a, b) => b.year - a.year);
  }, [filter, typeFilter]);

  return (
    <section id="publications" className="section-shell bg-background">
      <div className="container">
        <div className="section-heading">
          <h2>Publications</h2>
          <p>
            50+ peer-reviewed papers published in leading Q1/Q2 venues including
            IEEE Access, Springer, Wiley, and ACM.
          </p>
        </div>

        {/* Type filter */}
        <div className="mb-4 flex flex-wrap justify-center gap-2">
          <Button
            variant={typeFilter === "all" ? "default" : "outline"}
            onClick={() => setTypeFilter("all")}
            className="gap-2"
          >
            <BookOpen size={16} />
            All ({allPublications.length})
          </Button>
          <Button
            variant={typeFilter === "journal" ? "default" : "outline"}
            onClick={() => setTypeFilter("journal")}
            className="gap-2"
          >
            <FileText size={16} />
            Journals ({journals.length})
          </Button>
          <Button
            variant={typeFilter === "conference" ? "default" : "outline"}
            onClick={() => setTypeFilter("conference")}
            className="gap-2"
          >
            <BookOpen size={16} />
            Conferences ({conferences.length})
          </Button>
        </div>

        {/* Year filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-1.5">
          <Button
            size="sm"
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
          >
            All Years
          </Button>
          {years.map((year) => (
            <Button
              key={year}
              size="sm"
              variant={filter === year ? "default" : "outline"}
              onClick={() => setFilter(year)}
            >
              {year}
            </Button>
          ))}
        </div>

        <p className="mb-4 text-center text-sm text-muted-foreground">
          Showing {filteredPublications.length} publication{filteredPublications.length !== 1 ? "s" : ""}
        </p>

        <div className="mx-auto max-w-5xl space-y-3">
          {filteredPublications.map((pub, idx) => (
            <Card
              key={`${pub.year}-${pub.title}-${idx}`}
              className="pub-card border-border/60 shadow-sm"
            >
              <CardContent className="p-4 md:p-5">
                <div className="flex items-start gap-3">
                  <div
                    className={`mt-1 rounded-lg p-2 ${pub.type === "journal" ? "icon-blue" : "icon-emerald"}`}
                  >
                    {pub.type === "journal" ? (
                      <FileText size={18} />
                    ) : (
                      <BookOpen size={18} />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2">
                      <h3 className="text-sm font-semibold text-foreground md:text-base leading-snug">
                        {pub.title}
                      </h3>
                      {pub.note && (
                        <span className="badge-amber flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold flex items-center gap-1">
                          <Award size={12} />
                          {pub.note}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground md:text-sm">
                      {pub.authors}
                    </p>
                    <p className="mt-1 text-xs font-medium text-foreground/80 md:text-sm">
                      {pub.venue}
                    </p>
                    <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className={`rounded px-1.5 py-0.5 font-semibold ${pub.type === "journal" ? "badge-blue" : "badge-emerald"}`}>
                        {pub.year}
                      </span>
                      <span className="rounded px-1.5 py-0.5 text-xs badge-violet">
                        {pub.type === "journal" ? "Journal" : "Conference"}
                      </span>
                      {pub.link && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary hover:underline"
                        >
                          <ExternalLink size={12} />
                          DOI
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
