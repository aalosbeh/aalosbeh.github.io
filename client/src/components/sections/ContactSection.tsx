import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, ExternalLink, Building2 } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get in Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm always open to discussing research collaborations, academic opportunities, and innovative projects in AI, cybersecurity, and software engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">Email</h3>
                      <div className="space-y-1">
                        <a
                          href="mailto:anas.alsobeh@siu.edu"
                          className="block text-muted-foreground hover:text-primary transition-colors"
                        >
                          anas.alsobeh@siu.edu
                        </a>
                        <a
                          href="mailto:anas.alsobeh@gmail.com"
                          className="block text-muted-foreground hover:text-primary transition-colors"
                        >
                          anas.alsobeh@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                      <p className="text-muted-foreground">+1 (618) 713 7451</p>
                      <p className="text-sm text-muted-foreground mt-1">WhatsApp available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">Office Location</h3>
                      <p className="text-muted-foreground">
                        School of Computing<br />
                        College of Engineering, Computing,<br />
                        Technology, and Mathematics<br />
                        Southern Illinois University<br />
                        Carbondale, IL 62901, USA
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Academic Profiles & Links */}
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <ExternalLink className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-4">Academic Profiles</h3>
                      <div className="space-y-3">
                        <a
                          href="https://orcid.org/0000-0002-1506-7924"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors group"
                        >
                          <span className="text-foreground">ORCID</span>
                          <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />
                        </a>
                        <a
                          href="https://www.researchgate.net/profile/Anas-Alsobeh/research"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors group"
                        >
                          <span className="text-foreground">ResearchGate</span>
                          <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />
                        </a>
                        <a
                          href="https://scholar.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors group"
                        >
                          <span className="text-foreground">Google Scholar</span>
                          <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />
                        </a>
                        <a
                          href="https://www.linkedin.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors group"
                        >
                          <span className="text-foreground">LinkedIn</span>
                          <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Building2 className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">Meeting Platforms</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p><strong>Zoom/Teams:</strong> anas.alsobeh@siu.edu</p>
                        <p><strong>Google Meet:</strong> anas.alsobeh@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Note */}
          <div className="mt-12 text-center">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-foreground">
                  <strong>Office Hours:</strong> Available by appointment. Please email to schedule a meeting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

