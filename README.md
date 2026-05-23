# Oslo Meet — AI-Powered Business Network

**Connecting businesses, creators and innovators in Oslo through intelligent matchmaking.**

🌐 **Live:** [oslomeet.org](https://oslomeet.org)  
📍 **Location:** Oslo, Norway  
🤖 **Core:** AI-powered business matching & networking

---

## 🎯 What is Oslo Meet?

Oslo Meet is an **AI-powered business matching platform** that connects companies, founders, and opportunities across the Nordic ecosystem. We use artificial intelligence to analyze business profiles and recommend high-value connections, partnerships, and collaboration opportunities.

**Not just another networking site** — we're building an intelligent business ecosystem where:
- 🧠 **Smart Matching:** AI analyzes 50+ signals to find true synergies
- 🤝 **Quality Connections:** Strategic recommendations, not random networking  
- 🚀 **Growth Focus:** Access to investors, partners, and market opportunities
- 🌍 **Nordic Ecosystem:** Focused on Oslo and Scandinavian business landscape

---

## 💡 Why Join?

### For Startups & SMEs
- **AI-powered matchmaking** with compatible businesses
- **Access to investors** and funding opportunities
- **Networking events** and collaboration opportunities
- **Visibility** in Oslo's innovation ecosystem
- **Smart recommendations** for partnerships and growth

### For Established Companies
- **Find innovative partners** and suppliers
- **Discover startups** for collaboration or acquisition
- **Thought leadership** opportunities
- **Access to talent** and emerging technologies
- **Exclusive events** and business intelligence

### For Investors
- **Curated deal flow** of vetted startups
- **AI-powered screening** based on your criteria
- **Direct access** to founders
- **Market insights** from Oslo's ecosystem

---

## 🚀 Key Features

### 🔍 AI Business Matching
Our proprietary algorithm analyzes:
- Industry fit and complementarity
- Growth stage and strategic goals
- Technology stack and capabilities  
- Geographic focus and market opportunities
- Collaboration preferences and business models

### 📊 Smart Compatibility Scores
Get data-driven recommendations with:
- Strategic alignment score
- Commercial potential rating
- Technology synergy index
- Cultural fit assessment

### 🎪 Events & Networking
- **Monthly meetups** in Oslo
- **Industry-specific** roundtables
- **Investor pitch sessions**
- **Collaboration workshops**

### 💼 Opportunity Feed
Real-time business opportunities:
- Partnership requests
- Investment opportunities
- Talent acquisition
- Market expansion needs
- Technology collaboration

---

## 💰 Membership Plans

| Plan | Price | Best For |
|------|-------|----------|
| **Starter** | NOK 1.490/year | Startups & small businesses |
| **Business** | NOK 3.900/year | Active networkers & growing companies |
| **Partner** | NOK 12.000+/year | Sponsors & ecosystem leaders |

**🎁 Founding Members:** First 50 members get **50% lifetime discount** + exclusive badge + priority features.

[**Join Now**](https://oslomeet.org/join.html) | [**View Pricing**](https://oslomeet.org/pricing.html)

---

## 🛠️ Technology Stack

### Frontend
- **HTML5** + **CSS3** (Modern, semantic markup)
- **Vanilla JavaScript** (No framework bloat)
- **Inter Font** (Professional typography)
- **Font Awesome** (Icon library)

### Backend & AI (Planned)
- **Supabase** (Database & authentication)
- **OpenAI API** (Semantic analysis & embeddings)
- **Pinecone/Weaviate** (Vector search)
- **Netlify Functions** (Serverless backend)

### AI Matching Engine
```javascript
// Semantic matching using embeddings
- Company profile → Vector embeddings
- Similarity search → Compatibility scores
- Rule-based filtering → Strategic alignment
- Machine learning → Continuous improvement
```

---

## 📂 Project Structure

```
oslomeet/
├── index.html              # Homepage with AI positioning
├── join.html               # Smart registration form with AI onboarding
├── pricing.html            # Membership tiers & Founding Members
├── how-it-works.html       # AI algorithm explanation + use cases
├── contact.html            # Contact form + support
├── privacy-policy.html     # GDPR-compliant privacy policy
├── terms-of-use.html       # Terms & AI processing clauses
├── cookie-notice.html      # Cookie policy + AI data notice
├── assets/
│   ├── css/
│   │   └── main.css        # Shared design system
│   └── js/
│       ├── i18n.js         # Multi-language system (EN/NO/PT/ES)
│       └── ai-matching.js  # Matching algorithm MVP
└── api/
    └── webhook.js          # Form submission endpoint (Supabase)
```

---

## 🌍 Multi-Language Support

Oslo Meet supports 4 languages for Oslo's international ecosystem:

| Language | Code | Status |
|----------|------|--------|
| 🇬🇧 English | `en` | ✅ Primary |
| 🇳🇴 Norwegian | `no` | ✅ Full |
| 🇧🇷 Portuguese | `pt` | ✅ Full |
| 🇪🇸 Spanish | `es` | ✅ Full |

Language preference is saved automatically via `localStorage` for returning visitors.

```javascript
// Example: Language switcher
changeLanguage('no'); // Switches all [data-i18n] elements to Norwegian
```

---

## 🚀 Development & Deployment

### Local Development
```bash
# Clone the repository
git clone https://github.com/app-algoritmo/oslomeet.git

# Navigate to directory
cd oslomeet

# Open in browser (no build step required)
open index.html
```

### Deployment (GitHub Pages)
The site is automatically deployed via GitHub Actions on every push to `main`:

```bash
git add .
git commit -m "feat: add new feature"
git push origin main
```

**Live URL:** https://app-algoritmo.github.io/oslomeet  
**Custom Domain:** https://oslomeet.org *(configured via DNS)*

### Environment Variables (for Backend)
When connecting Supabase/OpenAI:
```env
SUPABASE_URL=your_project_url
SUPABASE_KEY=your_anon_key
OPENAI_API_KEY=your_key
PINECONE_API_KEY=your_key
```

---

## 🔐 Privacy & GDPR Compliance

Oslo Meet is built with privacy-first principles:

✅ **Data Encryption**: TLS in transit + encryption at rest  
✅ **EU Hosting**: Supabase instances in Frankfurt (GDPR-compliant)  
✅ **User Rights**: Access, rectify, delete, portability  
✅ **AI Transparency**: Clear explanation of automated processing  
✅ **Cookie Consent**: Granular control via banner  
✅ **Data Minimization**: Only collect what's needed for matching  

**Data Controller**: Oslo Meet AS, Norway  
**DPO Contact**: [post@barros.no](mailto:post@barros.no)  
**Complaints**: [Datatilsynet.no](https://www.datatilsynet.no)

---

## 📊 Product Roadmap

### Phase 1: MVP ✅ (Current)
- [x] Landing page with AI positioning
- [x] Multi-language support (EN/NO/PT/ES)
- [x] Smart registration form
- [x] Pricing tiers + Founding Members
- [x] Legal compliance (GDPR, Terms, Cookies)
- [x] GitHub Pages deployment

### Phase 2: AI Integration 🔄 (Q2 2026)
- [ ] Supabase database setup
- [ ] Company profile storage + embeddings
- [ ] Basic matching algorithm (rule-based + semantic)
- [ ] Email notifications (Resend/SendGrid)
- [ ] Admin dashboard for moderation

### Phase 3: Advanced AI 🎯 (Q3 2026)
- [ ] OpenAI embeddings for semantic matching
- [ ] Vector search with Pinecone/Weaviate
- [ ] Dynamic compatibility scoring
- [ ] Personalized Opportunity Feed
- [ ] AI Concierge assistant (draft intros, insights)

### Phase 4: Growth & Scale 🚀 (Q4 2026)
- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard
- [ ] Public API for partners
- [ ] Premium features (advanced filters, priority matching)
- [ ] Expansion to Stockholm, Copenhagen, Helsinki

---

## 🤝 Contributing

We welcome contributions to Oslo Meet! Whether you're:
- 🐛 Fixing bugs
- 💡 Suggesting features
- 🌐 Adding translations
- 📚 Improving documentation
- 🤝 Building community

### How to Contribute
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request with clear description

### Contribution Guidelines
- Follow existing code style (no frameworks, vanilla JS)
- Test multi-language support before submitting
- Update documentation if adding new features
- Be respectful and inclusive in all communications

---

## 📞 Contact & Support

**General Inquiries**: [post@barros.no](mailto:post@barros.no)  
**Technical Support**: [post@barros.no](mailto:post@barros.no)  
**Data Protection (DPO)**: [post@barros.no](mailto:post@barros.no)  

**Online**:
- 🌐 Website: [oslomeet.org](https://oslomeet.org)
- 💼 LinkedIn: [Oslo Meet](https://www.linkedin.com/showcase/oslomeet)
- 🐦 Twitter/X: [@oslomeet](https://x.com/oslomeet)
- 📺 YouTube: [@OsloMeet](https://www.youtube.com/@OsloMeet)
- 📸 Instagram: [@oslomeet1](https://www.instagram.com/oslomeet1/)
- 📘 Facebook: [Oslo Meet](https://www.facebook.com/oslomeet/)

**Location**: Oslo, Norway 🇳🇴

---

## 📄 License

Copyright © 2026 **Oslo Meet AS**. All rights reserved.

This project is proprietary software. Unauthorized copying, distribution, modification, or commercial use is strictly prohibited without written permission from Oslo Meet AS.

For licensing inquiries: [post@barros.no](mailto:post@barros.no)

---

## 🙏 Acknowledgments

Built with ❤️ for Oslo's innovation ecosystem.

**Special thanks to**:
- 🚀 Early adopters and Founding Members
- 🤝 Oslo's startup & tech community
- 💻 Digital Solutions — Development partner ([Portfolio](https://app-algoritmo.github.io/digital-solutions))
- 🧠 Inspiration from Nordic innovation hubs

---

<div align="center">

### Ready to join Oslo's most intelligent business network?

[🚀 Join as Founding Member](https://oslomeet.org/join.html) · [💰 View Pricing](https://oslomeet.org/pricing.html) · [📖 How AI Matching Works](https://oslomeet.org/how-it-works.html)

*Connecting Experiences, Inspiring Solutions.*

</div>
