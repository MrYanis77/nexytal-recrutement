import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Menu, X, ChevronDown, Shield, Cpu, Cloud, Network, 
  Layers, Terminal, Globe, Database, Award, ArrowRight, ArrowUpRight
} from "lucide-react";

export default function Header() {
  const [isOpen, setIsStateOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile lors d'un changement de page
  useEffect(() => {
    setIsStateOpen(false);
    setActiveMenu(null);
  }, [location]);

  const expertises = [
    { icon: Shield, title: "Cybersécurité", desc: "Audit, SOC, GRC, Pentest, IAM et architectures défensives.", path: "/expertises/cyber" },
    { icon: Cpu, title: "IA & Data Science", desc: "Machine Learning, LLM, pipelines de données, Business Intelligence.", path: "/expertises/ia-data" },
    { icon: Cloud, title: "DevOps & Cloud", desc: "Architectures AWS/Azure, CI/CD, Kubernetes, Infrastructure as Code.", path: "/expertises/devops-cloud" },
    { icon: Network, title: "Réseaux & Infrastructures", desc: "Réseaux d'entreprise, SDN, télécoms, connectivité hybride.", path: "/expertises/reseaux-infra" },
    { icon: Layers, title: "Systèmes & Virtualisation", desc: "Virtualisation VMware, serveurs Linux/Windows, stockage.", path: "/expertises/systemes" },
    { icon: Terminal, title: "Développement Tech", desc: "Développeurs Fullstack, Tech Leads, Architectes logiciels.", path: "/expertises/dev" },
    { icon: Globe, title: "Microsoft & ERP/CRM", desc: "Solutions Dynamics, SAP, Salesforce, environnements Microsoft 365.", path: "/expertises/microsoft-erp" },
    { icon: Database, title: "Management IT & RH", desc: "DSI, CTO, CISO, Product Owners, Scrum Masters, Coachs agiles.", path: "/expertises/management-rh" },
  ];

  return (
    <>
      {/* Bandeau supérieur discret */}
      <div className="bg-nexytal-navy text-white text-[11px] md:text-xs py-2 px-4 text-center font-medium tracking-wide border-b border-slate-800 z-50 relative">
        Cabinet spécialisé IT, IA, Cybersécurité & Cloud • France entière • Shortlist qualifiée sous 10 jours
      </div>

      <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? "glass-header shadow-sm py-3" : "bg-white py-5"
      }`}>
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display font-extrabold text-xl md:text-2xl tracking-tight text-nexytal-navy flex items-center">
              NEXYTAL<span className="text-nexytal-blue ml-1 group-hover:translate-x-0.5 transition-transform">RECRUTEMENT</span>
              <span className="bg-nexytal-blue text-white text-[10px] px-1.5 py-0.5 rounded ml-1.5 font-sans font-bold tracking-normal">IT</span>
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Nos Expertises avec Méga-menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu("expertises")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-nexytal-blue py-2 ${
                activeMenu === "expertises" ? "text-nexytal-blue" : "text-nexytal-text"
              }`}>
                Nos expertises <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === "expertises" ? "rotate-180" : ""}`} />
              </button>

              {/* Méga-menu */}
              {activeMenu === "expertises" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-[850px] bg-white rounded-2xl shadow-xl border border-slate-100 p-6 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-3 duration-200">
                  <div className="col-span-2 pb-2 border-b border-slate-100 mb-2 flex justify-between items-center">
                    <span className="text-xs font-semibold text-nexytal-navy tracking-wider uppercase">Domaines d'expertise recrutement</span>
                    <Link href="/expertises" className="text-xs text-nexytal-blue hover:underline flex items-center gap-1">
                      Toutes nos expertises <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  {expertises.map((exp, idx) => {
                    const Icon = exp.icon;
                    return (
                      <Link 
                        key={idx} 
                        href={exp.path}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="p-2 bg-slate-100 text-nexytal-navy rounded-lg group-hover:bg-nexytal-blue group-hover:text-white transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-nexytal-navy flex items-center gap-1 group-hover:text-nexytal-blue transition-colors">
                            {exp.title}
                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </h4>
                          <p className="text-xs text-nexytal-muted mt-1 leading-relaxed">{exp.desc}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link href="/entreprises" className={`text-sm font-medium transition-colors hover:text-nexytal-blue ${location === "/entreprises" ? "text-nexytal-blue" : "text-nexytal-text"}`}>
              Entreprises
            </Link>
            <Link href="/candidats" className={`text-sm font-medium transition-colors hover:text-nexytal-blue ${location === "/candidats" ? "text-nexytal-blue" : "text-nexytal-text"}`}>
              Candidats
            </Link>
            <Link href="/coaching" className={`text-sm font-medium transition-colors hover:text-nexytal-blue ${location === "/coaching" ? "text-nexytal-blue" : "text-nexytal-text"}`}>
              Coaching & RH
            </Link>
            <Link href="/ressources" className={`text-sm font-medium transition-colors hover:text-nexytal-blue ${location === "/ressources" ? "text-nexytal-blue" : "text-nexytal-text"}`}>
              Ressources
            </Link>
            <Link href="/a-propos" className={`text-sm font-medium transition-colors hover:text-nexytal-blue ${location === "/a-propos" ? "text-nexytal-blue" : "text-nexytal-text"}`}>
              À propos
            </Link>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/offres">
              <Button variant="ghost" className="text-sm font-semibold text-nexytal-navy hover:text-nexytal-blue">
                Voir les offres
              </Button>
            </Link>
            <Link href="/entreprises#contact">
              <Button className="bg-nexytal-navy text-white hover:bg-nexytal-blue font-semibold px-5 rounded-xl shadow-sm transition-all duration-150 active:scale-97">
                Déposer un besoin
              </Button>
            </Link>
          </div>

          {/* Hamburger Mobile */}
          <button 
            className="lg:hidden p-2 text-nexytal-navy hover:text-nexytal-blue transition-colors"
            onClick={() => setIsStateOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[88px] bottom-0 bg-white z-30 flex flex-col p-6 overflow-y-auto animate-in fade-in duration-200">
            <div className="flex flex-col gap-5 mb-8">
              <Link href="/expertises" className="text-lg font-bold text-nexytal-navy border-b border-slate-100 pb-2">
                Nos Expertises
              </Link>
              <Link href="/entreprises" className="text-lg font-bold text-nexytal-navy border-b border-slate-100 pb-2">
                Entreprises
              </Link>
              <Link href="/candidats" className="text-lg font-bold text-nexytal-navy border-b border-slate-100 pb-2">
                Candidats
              </Link>
              <Link href="/coaching" className="text-lg font-bold text-nexytal-navy border-b border-slate-100 pb-2">
                Coaching & RH
              </Link>
              <Link href="/ressources" className="text-lg font-bold text-nexytal-navy border-b border-slate-100 pb-2">
                Ressources
              </Link>
              <Link href="/a-propos" className="text-lg font-bold text-nexytal-navy border-b border-slate-100 pb-2">
                À propos
              </Link>
            </div>

            <div className="flex flex-col gap-4 mt-auto">
              <Link href="/offres" className="w-full">
                <Button variant="outline" className="w-full py-6 rounded-xl border-slate-200 text-nexytal-navy font-semibold">
                  Voir les offres d'emploi
                </Button>
              </Link>
              <Link href="/entreprises#contact" className="w-full">
                <Button className="w-full py-6 rounded-xl bg-nexytal-navy text-white hover:bg-nexytal-blue font-semibold">
                  Déposer un besoin de recrutement
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
