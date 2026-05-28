import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Shield, Cpu, Cloud, Network, Layers, Terminal, Globe, Database, 
  Search, MapPin, ArrowRight, Star, CheckCircle2, Award, Users, 
  Zap, Building2, UserSquare2, BookOpen, Calendar, ArrowUpRight, 
  ChevronLeft, ChevronRight, Briefcase
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchDomain, setSearchDomain] = useState("");
  const [activeTab, setActiveTab] = useState<"entreprises" | "candidats">("entreprises");
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm && !searchDomain) {
      toast.info("Veuillez saisir un mot-clé ou choisir un domaine de recherche.");
      return;
    }
    toast.success(`Recherche lancée pour : ${searchTerm} ${searchDomain ? `dans ${searchDomain}` : ""}`);
  };

  const expertises = [
    { icon: Shield, title: "Cybersécurité", count: "120+ profils suivis", subs: ["Pentest / Audit", "SOC / Cert / GRC", "IAM / SecOps"] },
    { icon: Cpu, title: "IA & Data Science", count: "145+ profils suivis", subs: ["Machine Learning", "Data Engineering", "BI / Analytics"] },
    { icon: Cloud, title: "DevOps & Cloud", count: "180+ profils suivis", subs: ["Kubernetes / Docker", "AWS / Azure / GCP", "IaC (Terraform)"] },
    { icon: Network, title: "Réseaux & Infra", count: "95+ profils suivis", subs: ["SDN / SD-WAN", "Réseaux LAN/WAN", "Télécoms / ToIP"] },
    { icon: Layers, title: "Systèmes & Virt.", count: "110+ profils suivis", subs: ["VMware / Hyper-V", "Linux / Windows", "Stockage / SAN"] },
    { icon: Terminal, title: "Développement Tech", count: "210+ profils suivis", subs: ["React / Node.js", "Java / Spring", "Python / Go"] },
    { icon: Globe, title: "Microsoft & ERP/CRM", count: "85+ profils suivis", subs: ["Dynamics 365", "SAP / Salesforce", "Microsoft 365"] },
    { icon: Database, title: "Management IT & RH", count: "130+ profils suivis", subs: ["DSI / CTO / CISO", "Product Owners", "Coachs Agiles"] },
  ];

  const stats = [
    { value: "500+", label: "Talents IT accompagnés", desc: "Placements réussis en CDI et régie" },
    { value: "10j", label: "Délai moyen de shortlist", desc: "Candidats qualifiés et motivés présentés" },
    { value: "92%", label: "Taux de satisfaction client", desc: "Collaborations durables et pérennes" },
    { value: "8+", label: "Domaines de spécialité IT", desc: "Une expertise pointue par verticale" },
  ];

  const clientLogos = [
    "TechCorp", "CyberShield", "CloudScale", "DataVibe", "DevOpsFlow", "AlphaBank", "MedTech", "InnoSaaS"
  ];

  const testimonials = {
    entreprises: [
      {
        quote: "Nexytal a compris notre besoin technique complexe en moins de 48h. En 8 jours, nous avions une shortlist de 3 profils exceptionnels. Notre Lead DevOps a été recruté dans la foulée.",
        author: "Thomas M.",
        role: "CTO — CloudScale (SaaS)",
        initials: "TM"
      },
      {
        quote: "La spécialisation en cybersécurité de Nexytal fait toute la différence. Leurs consultants parlent le même langage que nos experts, ce qui garantit une préqualification technique irréprochable.",
        author: "Hélène R.",
        role: "CISO — AlphaBank",
        initials: "HR"
      },
      {
        quote: "Un partenariat de confiance. Au-delà du recrutement, l'accompagnement en coaching RH de nos managers a permis d'optimiser l'intégration et la fidélisation de nos nouvelles recrues IT.",
        author: "Sophie L.",
        role: "DRH — MedTech Group",
        initials: "SL"
      }
    ],
    candidats: [
      {
        quote: "Un suivi d'une qualité rare. Mon consultant Nexytal m'a écouté, conseillé et parfaitement préparé pour mes entretiens. J'ai trouvé un poste d'Ingénieur Cloud en parfaite adéquation avec mes valeurs.",
        author: "Julien D.",
        role: "Ingénieur Cloud & DevOps",
        initials: "JD"
      },
      {
        quote: "Nexytal gère les candidatures avec une discrétion absolue. Ils m'ont proposé des opportunités exclusives non publiées sur le marché. Je recommande vivement ce cabinet aux profils tech.",
        author: "Amélie K.",
        role: "Architecte Cybersécurité",
        initials: "AK"
      },
      {
        quote: "Le coaching de transition professionnelle proposé par Nexytal m'a donné toutes les clés pour réussir ma prise de poste en tant que DSI. Un accompagnement de bout en bout très rassurant.",
        author: "Marc-Antoine P.",
        role: "Directeur des Systèmes d'Information (DSI)",
        initials: "MP"
      }
    ]
  };

  const blogPosts = [
    {
      category: "Salaires & Marché",
      title: "Grille des salaires IT 2026 : Les tendances du recrutement tech",
      desc: "Découvrez notre analyse complète des rémunérations pour les profils cybersécurité, cloud, data, DevOps et développement en France.",
      date: "15 Mai 2026",
      readTime: "6 min",
      tag: "Recruteurs & Candidats"
    },
    {
      category: "Cybersécurité",
      title: "Comment recruter un profil cybersécurité sans perdre six mois",
      desc: "Face à la pénurie de profils cyber, découvrez les meilleures pratiques pour attirer, évaluer et intégrer rapidement vos futurs experts en sécurité.",
      date: "04 Mai 2026",
      readTime: "5 min",
      tag: "Recruteurs"
    },
    {
      category: "Carrière Tech",
      title: "Préparer un entretien DevOps : Les attentes réelles des CTO",
      desc: "Compétences techniques, posture agile, communication : ce que les recruteurs et décideurs tech évaluent en priorité lors des entretiens.",
      date: "28 Avril 2026",
      readTime: "4 min",
      tag: "Candidats"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-1">
        
        {/* SECTION HERO */}
        <section className="relative overflow-hidden bg-white pt-12 pb-20 md:pb-28">
          {/* Halos de lumière décoratifs */}
          <div className="absolute top-1/4 -left-48 w-96 h-96 halo-blue rounded-full pointer-events-none" />
          <div className="absolute top-1/3 -right-48 w-96 h-96 halo-violet rounded-full pointer-events-none" />

          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Contenu textuel */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-nexytal-navy rounded-full text-xs font-semibold w-fit">
                  <span className="flex h-2 w-2 rounded-full bg-nexytal-blue animate-pulse" />
                  Cabinet de recrutement IT & RH premium
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight text-nexytal-navy">
                  Recrutez les <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexytal-blue to-nexytal-green">talents IT</span> qui accélèrent votre croissance
                </h1>
                
                <p className="text-nexytal-muted text-base md:text-lg leading-relaxed max-w-2xl">
                  Cabinet spécialisé en recrutement IT, IA, cybersécurité, cloud, data, DevOps et infrastructures. Nous connectons les entreprises aux profils experts et accompagnons les candidats vers les meilleures opportunités.
                </p>

                {/* Barre de recherche rapide */}
                <form onSubmit={handleSearch} className="bg-white p-2.5 rounded-2xl border border-slate-200/80 shadow-md flex flex-col md:flex-row gap-2 max-w-3xl mt-2">
                  <div className="flex-1 flex items-center gap-2 px-3 border-b md:border-b-0 md:border-r border-slate-100 pb-2 md:pb-0">
                    <Search className="w-5 h-5 text-nexytal-blue shrink-0" />
                    <Input 
                      type="text" 
                      placeholder="Poste, compétence (ex: DevOps, SOC...)" 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="border-0 focus-visible:ring-0 shadow-none px-0 h-10 placeholder:text-slate-400"
                    />
                  </div>
                  <div className="flex-1 flex items-center gap-2 px-3 border-b md:border-b-0 md:border-r border-slate-100 pb-2 md:pb-0 min-w-[150px]">
                    <MapPin className="w-5 h-5 text-nexytal-blue shrink-0" />
                    <select 
                      value={searchDomain} 
                      onChange={(e) => setSearchDomain(e.target.value)}
                      className="w-full border-0 bg-transparent text-xs sm:text-sm focus:outline-none h-10 text-nexytal-text py-1"
                    >
                      <option value="">Tous les domaines</option>
                      <option value="cyber">Cybersécurité</option>
                      <option value="devops">DevOps & Cloud</option>
                      <option value="data">IA & Data Science</option>
                      <option value="dev">Développement</option>
                    </select>
                  </div>
                  <Button type="submit" className="bg-nexytal-navy text-white hover:bg-nexytal-blue font-semibold px-6 py-6 rounded-xl btn-active-press">
                    Rechercher
                  </Button>
                </form>

                {/* CTA Secondaires */}
                <div className="flex flex-wrap items-center gap-6 mt-2">
                  <Link href="/entreprises#contact">
                    <Button className="bg-nexytal-navy text-white hover:bg-nexytal-blue font-semibold px-6 py-6 rounded-xl btn-active-press flex items-center gap-2 shadow-sm">
                      Je recrute un talent <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/offres">
                    <Button variant="outline" className="border-slate-200 text-nexytal-navy hover:bg-slate-50 font-semibold px-6 py-6 rounded-xl">
                      Je cherche une opportunité
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center gap-6 text-xs text-nexytal-muted font-medium mt-1">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-nexytal-green" /> Shortlist sous 10 jours</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-nexytal-green" /> Accompagnement confidentiel</span>
                </div>
              </div>

              {/* Visuel Dashboard / Tech Illustration */}
              <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-8 animate-fade-in">
                  <div className="absolute -top-4 -right-4 bg-nexytal-green text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    Shortlist 10 jours
                  </div>
                  
                  <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
                    <div className="p-3 bg-slate-100 text-nexytal-blue rounded-2xl">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-nexytal-navy">Pipeline de recrutement</h3>
                      <p className="text-xs text-nexytal-muted">Cabinet Nexytal Recrutement IT</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 py-6">
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-nexytal-text mb-2">
                        <span>Brief & Cadrage</span>
                        <span className="text-nexytal-blue">100%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-nexytal-blue rounded-full" style={{ width: "100%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-nexytal-text mb-2">
                        <span>Sourcing & Approche directe</span>
                        <span className="text-nexytal-green">85%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-nexytal-green rounded-full" style={{ width: "85%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-nexytal-text mb-2">
                        <span>Shortlist de talents qualifiés</span>
                        <span className="text-nexytal-violet">60%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-nexytal-violet rounded-full" style={{ width: "60%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-nexytal-text mb-2">
                        <span>Intégration & Suivi post-embauche</span>
                        <span className="text-nexytal-amber">Suivi actif</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-nexytal-amber rounded-full animate-pulse" style={{ width: "40%" }} />
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-2xl flex items-center justify-between">
                    <div className="flex -space-x-3 overflow-hidden">
                      <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-nexytal-blue text-white text-[10px] font-bold flex items-center justify-center">A</div>
                      <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-nexytal-green text-white text-[10px] font-bold flex items-center justify-center">B</div>
                      <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-nexytal-violet text-white text-[10px] font-bold flex items-center justify-center">C</div>
                    </div>
                    <span className="text-xs font-semibold text-nexytal-navy">Accompagnement premium garanti</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION CHIFFRES CLÉS & LOGOS */}
        <section className="bg-slate-50 py-16 border-y border-slate-200/60">
          <div className="container">
            {/* Chiffres clés */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-2 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <span className="text-4xl md:text-5xl font-display font-extrabold text-nexytal-navy tracking-tight">{stat.value}</span>
                  <span className="text-sm font-bold text-nexytal-blue">{stat.label}</span>
                  <span className="text-xs text-nexytal-muted leading-relaxed">{stat.desc}</span>
                </div>
              ))}
            </div>

            {/* Logos partenaires */}
            <div className="flex flex-col gap-6 items-center">
              <span className="text-xs font-bold text-nexytal-muted tracking-wider uppercase">Ils font confiance à notre shortlist</span>
              <div className="w-full overflow-hidden relative">
                <div className="flex gap-12 justify-between items-center flex-wrap md:flex-nowrap opacity-60">
                  {clientLogos.map((logo, idx) => (
                    <span key={idx} className="font-display font-bold text-lg md:text-xl text-nexytal-navy tracking-wider hover:opacity-100 transition-opacity cursor-default">
                      {logo}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION NOS EXPERTISES */}
        <section className="bg-white py-20 md:py-28 relative">
          <div className="container">
            <div className="text-center flex flex-col items-center gap-4 mb-16">
              <span className="px-3 py-1.5 bg-slate-100 text-nexytal-navy rounded-full text-xs font-bold uppercase tracking-wider">Expertises IT & Digital</span>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-nexytal-navy max-w-2xl">
                Une expertise pointue dans chaque spécialité tech
              </h2>
              <p className="text-nexytal-muted text-sm md:text-base max-w-xl leading-relaxed">
                Parce que le recrutement IT exige de comprendre réellement les métiers, nos consultants sont spécialisés par verticale technologique.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertises.map((exp, idx) => {
                const Icon = exp.icon;
                return (
                  <div key={idx} className="card-premium p-6 flex flex-col gap-5 group">
                    <div className="p-3 bg-slate-50 text-nexytal-navy rounded-xl w-fit group-hover:bg-nexytal-blue group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-nexytal-navy group-hover:text-nexytal-blue transition-colors">
                        {exp.title}
                      </h3>
                      <span className="text-[11px] font-bold text-nexytal-green mt-1 block">{exp.count}</span>
                    </div>
                    <div className="flex flex-col gap-2 mt-2 pt-4 border-t border-slate-50">
                      {exp.subs.map((sub, sIdx) => (
                        <span key={sIdx} className="text-xs text-nexytal-muted flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                          {sub}
                        </span>
                      ))}
                    </div>
                    <Link href={`/expertises#${exp.title.toLowerCase().replace(/ /g, "-")}`} className="text-xs font-bold text-nexytal-navy hover:text-nexytal-blue flex items-center gap-1 mt-auto pt-2 group/link">
                      Explorer cette expertise <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION PARCOURS DUAL (ENTREPRISES / CANDIDATS) */}
        <section className="bg-slate-50 py-20 md:py-28 border-t border-slate-200/60">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              {/* Côté Entreprises */}
              <div className="lg:col-span-6 bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-nexytal-blue/10 to-transparent rounded-bl-full pointer-events-none" />
                
                <div className="p-3.5 bg-sky-50 text-nexytal-blue rounded-2xl w-fit">
                  <Building2 className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-display font-extrabold text-nexytal-navy">
                  Vous recrutez des profils IT ?
                </h3>
                
                <p className="text-nexytal-muted text-sm leading-relaxed">
                  Bénéficiez d'une approche sur-mesure combinant sourcing actif, chasse de têtes et mise à disposition. Nous préqualifions techniquement chaque candidat avant de vous le présenter.
                </p>

                <ul className="flex flex-col gap-3.5 text-xs text-nexytal-text font-medium mt-2">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-nexytal-blue shrink-0" />
                    Shortlist de profils qualifiés sous 10 jours ouvrés
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-nexytal-blue shrink-0" />
                    Garantie de remplacement en cas de départ prématuré
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-nexytal-blue shrink-0" />
                    Consultant dédié expert de votre verticale métier
                  </li>
                </ul>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50">
                  <Link href="/entreprises">
                    <Button className="bg-nexytal-navy text-white hover:bg-nexytal-blue font-semibold px-5 py-5 rounded-xl btn-active-press">
                      Nos solutions de recrutement
                    </Button>
                  </Link>
                  <Link href="/entreprises#contact" className="text-xs font-bold text-nexytal-navy hover:text-nexytal-blue flex items-center gap-1 group/link">
                    Déposer un besoin <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Côté Candidats */}
              <div className="lg:col-span-6 bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-nexytal-green/10 to-transparent rounded-bl-full pointer-events-none" />
                
                <div className="p-3.5 bg-emerald-50 text-nexytal-green rounded-2xl w-fit">
                  <UserSquare2 className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-display font-extrabold text-nexytal-navy">
                  Vous cherchez un nouveau défi ?
                </h3>
                
                <p className="text-nexytal-muted text-sm leading-relaxed">
                  Accédez à des opportunités exclusives au sein d'entreprises innovantes (SaaS, ESN, Grands Comptes, Startups). Nous vous accompagnons de manière personnalisée et confidentielle.
                </p>

                <ul className="flex flex-col gap-3.5 text-xs text-nexytal-text font-medium mt-2">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-nexytal-green shrink-0" />
                    Accès à des offres d'emploi cachées et exclusives
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-nexytal-green shrink-0" />
                    Préparation intensive aux entretiens techniques et RH
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-nexytal-green shrink-0" />
                    Coaching de carrière et suivi d'intégration post-embauche
                  </li>
                </ul>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50">
                  <Link href="/offres">
                    <Button className="bg-nexytal-navy text-white hover:bg-nexytal-blue font-semibold px-5 py-5 rounded-xl btn-active-press">
                      Voir les offres d'emploi
                    </Button>
                  </Link>
                  <Link href="/candidats#deposer-cv" className="text-xs font-bold text-nexytal-navy hover:text-nexytal-blue flex items-center gap-1 group/link">
                    Candidature spontanée <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION COACHING & DÉVELOPPEMENT RH */}
        <section className="bg-white py-20 md:py-28 relative overflow-hidden">
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-violet-50 rounded-full pointer-events-none" />
          
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="px-3 py-1.5 bg-violet-50 text-nexytal-violet rounded-full text-xs font-bold uppercase tracking-wider w-fit">Coaching & Développement RH</span>
                
                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-nexytal-navy leading-tight">
                  Au-delà du recrutement : développer les talents tech
                </h2>
                
                <p className="text-nexytal-muted text-sm md:text-base leading-relaxed">
                  Le succès d'une équipe IT repose sur l'alignement humain et la clarté des objectifs. Nexytal propose des prestations d'accompagnement et de coaching adaptées aux contextes tech complexes.
                </p>

                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex gap-3 items-start">
                    <div className="p-1.5 bg-violet-50 text-nexytal-violet rounded-lg shrink-0 mt-0.5">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-nexytal-navy">Coaching Dirigeants IT & CTO</h4>
                      <p className="text-xs text-nexytal-muted mt-0.5">Postures de leadership, gestion d'équipes hybrides et transition technologique.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="p-1.5 bg-amber-50 text-nexytal-amber rounded-lg shrink-0 mt-0.5">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-nexytal-navy">Coaching d'Équipes Tech & Agile</h4>
                      <p className="text-xs text-nexytal-muted mt-0.5">Optimisation de la collaboration, rituels agiles et résolution de conflits.</p>
                    </div>
                  </div>
                </div>

                <Link href="/coaching" className="mt-4">
                  <Button className="bg-nexytal-navy text-white hover:bg-nexytal-blue font-semibold px-6 py-6 rounded-xl btn-active-press">
                    Découvrir notre offre coaching
                  </Button>
                </Link>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col gap-4">
                  <span className="text-xs font-bold text-nexytal-violet uppercase tracking-wider">Pour les organisations</span>
                  <h4 className="font-display font-bold text-base text-nexytal-navy">Accompagner les transformations</h4>
                  <p className="text-xs text-nexytal-muted leading-relaxed">
                    Aidez vos managers IT et CTO à relever les défis de croissance, de réorganisation ou d'intégration de nouvelles technologies (IA, Cloud).
                  </p>
                  <Link href="/coaching#entreprises" className="text-xs font-bold text-nexytal-navy hover:text-nexytal-blue flex items-center gap-1 mt-auto pt-2 group/link">
                    En savoir plus <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col gap-4">
                  <span className="text-xs font-bold text-nexytal-amber uppercase tracking-wider">Pour les professionnels</span>
                  <h4 className="font-display font-bold text-base text-nexytal-navy">Réussir sa transition IT</h4>
                  <p className="text-xs text-nexytal-muted leading-relaxed">
                    Prise de poste managériale, reconversion vers la cybersécurité ou l'IA, ou bilan de compétences personnalisé.
                  </p>
                  <Link href="/coaching#candidats" className="text-xs font-bold text-nexytal-navy hover:text-nexytal-blue flex items-center gap-1 mt-auto pt-2 group/link">
                    En savoir plus <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION TÉMOIGNAGES (AVEC ONGLETS) */}
        <section className="bg-slate-50 py-20 md:py-28 border-y border-slate-200/60">
          <div className="container">
            <div className="text-center flex flex-col items-center gap-4 mb-12">
              <span className="px-3 py-1.5 bg-slate-100 text-nexytal-navy rounded-full text-xs font-bold uppercase tracking-wider">Ils avancent avec Nexytal</span>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-nexytal-navy">
                La parole à nos partenaires et candidats
              </h2>
            </div>

            {/* Sélecteur d'onglets */}
            <div className="flex justify-center mb-10">
              <div className="bg-white p-1 rounded-xl border border-slate-200 shadow-sm inline-flex">
                <button 
                  onClick={() => { setActiveTab("entreprises"); setActiveTestimonial(0); }}
                  className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === "entreprises" ? "bg-nexytal-navy text-white shadow-sm" : "text-nexytal-muted hover:text-nexytal-navy"
                  }`}
                >
                  Côté Entreprises
                </button>
                <button 
                  onClick={() => { setActiveTab("candidats"); setActiveTestimonial(0); }}
                  className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === "candidats" ? "bg-nexytal-navy text-white shadow-sm" : "text-nexytal-muted hover:text-nexytal-navy"
                  }`}
                >
                  Côté Candidats
                </button>
              </div>
            </div>

            {/* Contenu du témoignage actif */}
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-md relative">
              <div className="absolute top-6 right-8 text-6xl font-serif text-slate-100 select-none">“</div>
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-nexytal-amber text-nexytal-amber" />
                ))}
              </div>

              <p className="text-nexytal-text text-base md:text-lg leading-relaxed italic mb-8 relative z-10">
                "{testimonials[activeTab][activeTestimonial].quote}"
              </p>

              <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-100 text-nexytal-navy text-xs font-bold flex items-center justify-center border border-slate-200">
                    {testimonials[activeTab][activeTestimonial].initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-nexytal-navy">{testimonials[activeTab][activeTestimonial].author}</h4>
                    <p className="text-xs text-nexytal-muted mt-0.5">{testimonials[activeTab][activeTestimonial].role}</p>
                  </div>
                </div>

                {/* Boutons de contrôle */}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials[activeTab].length - 1 : prev - 1))}
                    className="p-2 bg-slate-50 text-nexytal-navy hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
                    aria-label="Témoignage précédent"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setActiveTestimonial((prev) => (prev === testimonials[activeTab].length - 1 ? 0 : prev + 1))}
                    className="p-2 bg-slate-50 text-nexytal-navy hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
                    aria-label="Témoignage suivant"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION BLOG & RESSOURCES */}
        <section className="bg-white py-20 md:py-28">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
              <div>
                <span className="px-3 py-1.5 bg-slate-100 text-nexytal-navy rounded-full text-xs font-bold uppercase tracking-wider">Ressources & Insights IT</span>
                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-nexytal-navy mt-4">
                  Comprendre le marché pour mieux décider
                </h2>
              </div>
              <Link href="/ressources">
                <Button variant="outline" className="border-slate-200 text-nexytal-navy hover:bg-slate-50 font-semibold px-5 py-5 rounded-xl flex items-center gap-1.5">
                  Toutes nos ressources <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, idx) => (
                <article key={idx} className="bg-slate-50 rounded-2xl border border-slate-100/80 overflow-hidden flex flex-col h-full hover:shadow-md transition-all duration-300 group">
                  <div className="p-6 md:p-8 flex flex-col gap-4 flex-1">
                    <div className="flex items-center justify-between text-[11px] font-bold text-nexytal-blue uppercase tracking-wider">
                      <span>{post.category}</span>
                      <span className="px-2 py-0.5 bg-white rounded text-nexytal-navy text-[10px] lowercase tracking-normal font-sans font-medium">{post.tag}</span>
                    </div>
                    
                    <h3 className="font-display font-bold text-lg text-nexytal-navy group-hover:text-nexytal-blue transition-colors leading-snug">
                      <Link href={`/ressources#post-${idx}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-nexytal-muted text-xs leading-relaxed flex-1">
                      {post.desc}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-nexytal-muted pt-4 border-t border-slate-200/40 mt-2">
                      <Calendar className="w-4 h-4 shrink-0" />
                      <span>{post.date}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                      <span>{post.readTime} de lecture</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Encart guide téléchargeable */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-nexytal-blue/20 to-transparent rounded-bl-full pointer-events-none" />
              
              <div className="lg:col-span-8 flex flex-col gap-4">
                <span className="px-2.5 py-1 bg-nexytal-blue text-white text-[10px] font-bold uppercase tracking-wider w-fit rounded">Guide exclusif 2026</span>
                <h3 className="text-2xl md:text-3xl font-display font-bold">Le guide du recrutement IT & Cybersécurité</h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-2xl">
                  Salaires réels négociés, compétences les plus recherchées, critères d'attractivité des candidats tech et processus de sélection optimisés. Téléchargez notre guide complet pour recruter efficacement.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-end">
                <Button 
                  onClick={() => toast.success("Le guide de recrutement IT 2026 a été envoyé à votre adresse email.")}
                  className="bg-nexytal-blue text-white hover:bg-sky-400 font-semibold px-6 py-6 rounded-xl w-full sm:w-auto transition-all duration-150 active:scale-97 flex items-center justify-center gap-2"
                >
                  Télécharger le guide (PDF) <BookOpen className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
