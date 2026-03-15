import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, ExternalLink, Building2, Video } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="section-shell bg-background">
      <div className="container">
        <div className="section-heading">
          <h2>Get in Touch</h2>
          <p>
            Open to discussing research collaborations, academic opportunities,
            and innovative projects in AI, cybersecurity, and software
            engineering.
          </p>
        </div>

        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Email */}
          <Card className="card-accent-blue transition hover:shadow-md">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="icon-blue rounded-lg p-2.5 flex-shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <div className="space-y-1">
                    <a
                      href="mailto:anas.alsobeh@uvu.edu"
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      anas.alsobeh@uvu.edu
                    </a>
                    <a
                      href="mailto:anas.alsobeh@gmail.com"
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      anas.alsobeh@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Phone */}
          <Card className="card-accent-emerald transition hover:shadow-md">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="icon-emerald rounded-lg p-2.5 flex-shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                  <p className="text-sm text-muted-foreground">+1 (618) 713 7451</p>
                  <p className="text-xs text-muted-foreground mt-1">Mobile / WhatsApp</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="card-accent-violet transition hover:shadow-md">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="icon-violet rounded-lg p-2.5 flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Office</h3>
                  <p className="text-sm text-muted-foreground">
                    Department of IS&T<br />
                    College of Engineering and Technology<br />
                    Utah Valley University<br />
                    Orem, Utah, USA
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Meeting Platforms */}
          <Card className="card-accent-amber transition hover:shadow-md">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="icon-amber rounded-lg p-2.5 flex-shrink-0">
                  <Video size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Meeting Platforms</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p><span className="font-medium text-foreground/80">Zoom/Teams:</span> anas.alsobeh@uvu.edu</p>
                    <p><span className="font-medium text-foreground/80">Google Meet:</span> anas.alsobeh@gmail.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Academic Profiles */}
          <Card className="card-accent-rose transition hover:shadow-md lg:col-span-2">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="icon-rose rounded-lg p-2.5 flex-shrink-0">
                  <ExternalLink size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-3">Academic Profiles</h3>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {[
                      { name: "ORCID", href: "https://orcid.org/0000-0002-1506-7924", badge: "badge-blue" },
                      { name: "ResearchGate", href: "https://www.researchgate.net/profile/Anas-Alsobeh/research", badge: "badge-emerald" },
                      { name: "Google Scholar", href: "https://scholar.google.com/citations?user=YOUR_ID", badge: "badge-violet" },
                      { name: "LinkedIn", href: "https://www.linkedin.com/in/anas-alsobeh/", badge: "badge-amber" },
                    ].map((profile) => (
                      <a
                        key={profile.name}
                        href={profile.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${profile.badge} flex items-center justify-center gap-1.5 rounded-lg px-3 py-2.5 text-sm font-medium transition hover:opacity-80`}
                      >
                        <ExternalLink size={14} />
                        {profile.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Office Hours Note */}
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-4">
              <p className="text-foreground text-sm">
                <strong>Office Hours:</strong> Available by appointment. Please email to schedule a meeting.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
