import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-primary/10 bg-muted/40 text-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-2">
                <Mail size={18} className="mt-1 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:anas.alsobeh@siu.edu"
                    className="transition-colors hover:text-primary"
                  >
                    anas.alsobeh@siu.edu
                  </a>
                  <a
                    href="mailto:anas.alsobeh@gmail.com"
                    className="transition-colors hover:text-primary"
                  >
                    anas.alsobeh@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={18} className="mt-1 shrink-0" />
                <span>+1 (618) 713 7451</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 shrink-0" />
                <span>
                  School of Computing
                  <br />
                  Southern Illinois University
                  <br />
                  Carbondale, IL 62901, USA
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Academic Profiles</h3>
            <div className="space-y-2">
              <a
                href="https://orcid.org/0000-0002-1506-7924"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <ExternalLink size={16} />
                ORCID
              </a>
              <a
                href="https://www.researchgate.net/profile/Anas-Alsobeh/research"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <ExternalLink size={16} />
                ResearchGate
              </a>
              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <ExternalLink size={16} />
                Google Scholar
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Professional Memberships
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>IEEE Senior Member</li>
              <li>ACM SIGHPC Member</li>
              <li>Women in Cybersecurity (WiCyS)</li>
              <li>ACCESS Campus Champion</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Dr. Anas M.R. AlSobeh. All rights reserved.</p>
          <p className="mt-1">
            Designed for academic excellence and professional engagement.
          </p>
        </div>
      </div>
    </footer>
  );
}
