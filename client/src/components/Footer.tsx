import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card text-foreground">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-base font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <a href="mailto:anas.alsobeh@uvu.edu" className="transition-colors hover:text-primary">
                    anas.alsobeh@uvu.edu
                  </a>
                  <a href="mailto:anas.alsobeh@gmail.com" className="transition-colors hover:text-primary">
                    anas.alsobeh@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <span>+1 (618) 713 7451</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>
                  Dept. of IS&T, CET<br />
                  Utah Valley University<br />
                  Orem, Utah, USA
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-base font-semibold">Academic Profiles</h3>
            <div className="space-y-2">
              {[
                { name: "ORCID", href: "https://orcid.org/0000-0002-1506-7924" },
                { name: "ResearchGate", href: "https://www.researchgate.net/profile/Anas-Alsobeh/research" },
                { name: "Google Scholar", href: "https://scholar.google.com/citations?user=YOUR_ID" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <ExternalLink size={14} />
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-base font-semibold">Professional Memberships</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>IEEE Senior Member</li>
              <li>ACM SIGHPC Member</li>
              <li>Women in Cybersecurity (WiCyS)</li>
              <li>ACCESS Campus Champion</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-5 text-center text-xs text-muted-foreground">
          <p>&copy; {currentYear} Dr. Anas M.R. AlSobeh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
