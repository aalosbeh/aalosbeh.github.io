# Dr. Anas AlSobeh - Academic Portfolio Website

Professional academic portfolio website for Dr. Anas M.R. AlSobeh, Assistant Professor at Southern Illinois University Carbondale, showcasing research, publications, projects, and achievements in AI, cybersecurity, and software engineering.

## 🌐 Live Website

**URL:** [https://aalosbeh.github.io/](https://aalosbeh.github.io/)

## ✨ Features

- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Comprehensive meta tags, structured data (JSON-LD), Open Graph tags, and sitemap
- **Modern UI**: Clean, professional design using Tailwind CSS and shadcn/ui components
- **Smooth Navigation**: Sticky navigation with smooth scrolling between sections
- **Content Sections**:
  - Hero section with key statistics
  - About section with education and professional background
  - Research interests and current projects
  - Publications with filtering by year
  - Funded research projects ($3M+ total funding)
  - Awards and honors timeline
  - Contact information and academic profiles

## 🛠️ Technology Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Routing**: Wouter
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)
- **Deployment**: GitHub Pages with GitHub Actions

## 📦 Project Structure

```
aalosbeh-portfolio/
├── client/
│   ├── public/              # Static assets
│   │   ├── robots.txt       # SEO robots file
│   │   ├── sitemap.xml      # SEO sitemap
│   │   └── schema.json      # Structured data
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── sections/    # Page sections
│   │   │   ├── ui/          # shadcn/ui components
│   │   │   ├── Navigation.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/           # Page components
│   │   ├── App.tsx          # Main app component
│   │   └── index.css        # Global styles
│   └── index.html           # HTML template with SEO tags
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment
├── package.json
├── vite.config.ts
└── README.md
```

## 🚀 Local Development

### Prerequisites

- Node.js 20+
- pnpm 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/aalosbeh/aalosbeh.github.io.git
cd aalosbeh.github.io

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
# Build the project
pnpm run build

# Preview production build
pnpm run preview
```

## 📤 Deployment

This website is automatically deployed to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. Push changes to the `main` branch
2. GitHub Actions automatically builds and deploys the site
3. Changes are live at `https://aalosbeh.github.io/` within 2-5 minutes

### Manual Deployment

See [DEPLOYMENT_GUIDE.md](../DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

## 🔍 SEO Features

- **Meta Tags**: Title, description, keywords, author
- **Open Graph**: Facebook and social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured Data**: JSON-LD schema for Person, Organization, and ScholarlyArticle
- **Sitemap**: XML sitemap for search engine crawling
- **Robots.txt**: Search engine directives
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Mobile-Friendly**: Responsive design for all devices
- **Fast Loading**: Optimized assets and lazy loading

## 📊 Content Highlights

- **50+ Publications**: Peer-reviewed articles in Q1/Q2 journals
- **$3M+ Research Funding**: From USDA, EU, DAAD, GIZ, Nuffic
- **10+ Years Experience**: Academic and research experience
- **Multiple Awards**: Including Best Paper Award (IACIS 2024)
- **Professional Memberships**: IEEE Senior Member, ACM SIGHPC, WiCyS

## 🔗 Academic Profiles

- [ORCID](https://orcid.org/0000-0002-1506-7924)
- [ResearchGate](https://www.researchgate.net/profile/Anas-Alsobeh/research)
- [Google Scholar](https://scholar.google.com)

## 📧 Contact

**Dr. Anas M.R. AlSobeh**
- Email: anas.alsobeh@siu.edu
- Phone: +1 (618) 713 7451
- Office: School of Computing, Southern Illinois University, Carbondale, IL 62901, USA

## 📝 License

© 2025 Dr. Anas M.R. AlSobeh. All rights reserved.

## 🤝 Contributing

This is a personal portfolio website. For suggestions or issues, please contact Dr. AlSobeh directly.

---

**Built with ❤️ using React, Tailwind CSS, and modern web technologies**

