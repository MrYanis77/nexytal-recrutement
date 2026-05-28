import { useState, useMemo } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, MapPin, Briefcase, Calendar, Clock, ArrowRight, 
  Shield, Cpu, Cloud, Terminal, Tag, CheckCircle2
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

export default function Offres() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [selectedContract, setSelectedContract] = useState("all");
  const [selectedSpecialty, setSelectedSelectedSpecialty] = useState("all");

  const initialJobs = [
    {
      id: 1,
      title: "Architecte Cybersécurité SOC / GRC",
      company: "Cabinet d'Audit & Conseil International",
      location: "Paris (Hybride - 2j télétravail)",
      contract: "CDI",
      salary: "75k€ - 85k€",
      specialty: "cyber",
      date: "Il y a 2 jours",
      desc: "Vous concevez et pilotez la mise en conformité des architectures de sécurité de grands comptes. Expertise SOC, ISO 27001 et GRC requise.",
      tags: ["ISO 27001", "SOC", "GRC", "AWS Security"]
    },
    {
      id: 2,
      title: "Ingénieur Lead DevOps Kubernetes",
      company: "Éditeur de Logiciels SaaS (Scale-up)",
      location: "Lyon (Full Remote possible)",
      contract: "CDI",
      salary: "65k€ - 75k€",
      specialty: "devops",
      date: "Il y a 3 jours",
      desc: "Vous pilotez la migration et l'optimisation de nos infrastructures Kubernetes multi-cloud (AWS / Azure). Scripting Terraform et CI/CD GitLab.",
      tags: ["Kubernetes", "Terraform", "GitLab CI", "AWS"]
    },
    {
      id: 3,
      title: "Consultant Senior IA & Machine Learning",
      company: "Pure Player Data & IA",
      location: "Paris (Hybride)",
      contract: "CDI",
      salary: "70k€ - 80k€",
      specialty: "data",
      date: "Il y a 5 jours",
      desc: "Conception de pipelines de données et déploiement de modèles de Deep Learning / LLM pour des projets industriels d'envergure.",
      tags: ["Python", "PyTorch", "LLM", "Data Engineering"]
    },
    {
      id: 4,
      title: "Développeur Fullstack React / Node.js",
      company: "Fintech en forte croissance",
      location: "Nantes (Hybride - 3j télétravail)",
      contract: "CDI",
      salary: "50k€ - 60k€",
      specialty: "dev",
      date: "Il y a 1 semaine",
      desc: "Rejoignez une équipe agile de 8 développeurs pour concevoir de nouvelles fonctionnalités sur notre plateforme de paiement sécurisée.",
      tags: ["React", "Node.js", "TypeScript", "PostgreSQL"]
    },
    {
      id: 5,
      title: "Ingénieur Sécurité Pentester / Red Team",
      company: "Cabinet de Conseil en Cybersécurité",
      location: "Paris (Hybride)",
      contract: "CDI",
      salary: "60k€ - 70k€",
      specialty: "cyber",
      date: "Il y a 1 semaine",
      desc: "Réalisation d'audits d'intrusion (Web, Mobile, Interne) et de campagnes d'ingénierie sociale pour nos clients stratégiques.",
      tags: ["Pentest", "Red Team", "OWASP", "Kali Linux"]
    },
    {
      id: 6,
      title: "Administrateur Systèmes, Réseaux & Cloud",
      company: "Groupe Industriel National",
      location: "Marseille (Sur site)",
      contract: "CDI",
      salary: "45k€ - 52k€",
      specialty: "infra",
      date: "Il y a 2 semaines",
      desc: "Maintien en condition opérationnelle de l'infrastructure hybride du groupe. Virtualisation VMware, réseaux Cisco et serveurs Linux.",
      tags: ["VMware", "Cisco", "Linux", "Azure"]
    }
  ];

  const filteredJobs = useMemo(() => {
    return initialJobs.filter((job) => {
      const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) || 
                            job.company.toLowerCase().includes(search.toLowerCase()) ||
                            job.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
      const matchesLocation = job.location.toLowerCase().includes(location.toLowerCase());
      const matchesContract = selectedContract === "all" || job.contract === selectedContract;
      const matchesSpecialty = selectedSpecialty === "all" || job.specialty === selectedSpecialty;

      return matchesSearch && matchesLocation && matchesContract && matchesSpecialty;
    });
  }, [search, location, selectedContract, selectedSpecialty]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-1">
        
        {/* HERO HEADER */}
        <section className="bg-white py-12 md:py-16 border-b border-slate-100">
          <div className="container">
            <div className="max-w-3xl flex flex-col gap-4">
              <span className="px-3 py-1.5 bg-slate-100 text-nexytal-navy rounded-full text-xs font-bold uppercase tracking-wider w-fit">Nos Opportunités</span>
              <h1 className="text-3xl md:text-4xl font-display font-extrabold text-nexytal-navy">
                Offres d'emploi IT & Digital
              </h1>
              <p className="text-nexytal-muted text-sm md:text-base leading-relaxed">
                Explorez nos opportunités en CDI, CDD et missions de régie. Chaque poste est rigoureusement qualifié auprès de nos clients partenaires pour vous garantir des projets stimulants et un environnement de travail de qualité.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION FILTRES & OFFRES */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Colonne Filtres (Desktop) */}
              <aside className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-6 sticky top-28">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="font-display font-bold text-sm text-nexytal-navy">Filtrer les offres</span>
                  <button 
                    onClick={() => { setSearch(""); setLocation(""); setSelectedContract("all"); setSelectedSelectedSpecialty("all"); }}
                    className="text-xs text-nexytal-blue hover:underline"
                  >
                    Réinitialiser
                  </button>
                </div>

                {/* Recherche par mot-clé */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-nexytal-navy">Recherche</label>
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <Input 
                      type="text" 
                      placeholder="Poste, technologie, entreprise..." 
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="pl-9 rounded-xl border-slate-200 focus-visible:ring-nexytal-blue text-xs h-10"
                    />
                  </div>
                </div>

                {/* Localisation */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-nexytal-navy">Localisation</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <Input 
                      type="text" 
                      placeholder="Ville, région..." 
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="pl-9 rounded-xl border-slate-200 focus-visible:ring-nexytal-blue text-xs h-10"
                    />
                  </div>
                </div>

                {/* Spécialité IT */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-nexytal-navy">Domaine d'expertise</label>
                  <select 
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSelectedSpecialty(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 h-10 text-xs text-nexytal-text focus:outline-none focus:ring-1 focus:ring-nexytal-blue"
                  >
                    <option value="all">Toutes nos spécialités</option>
                    <option value="cyber">Cybersécurité</option>
                    <option value="devops">DevOps & Cloud</option>
                    <option value="data">IA & Data Science</option>
                    <option value="dev">Développement</option>
                    <option value="infra">Infrastructures & Réseaux</option>
                  </select>
                </div>

                {/* Type de contrat */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-nexytal-navy">Type de contrat</label>
                  <div className="flex flex-col gap-2">
                    {[
                      { id: "all", label: "Tous les contrats" },
                      { id: "CDI", label: "CDI" },
                      { id: "freelance", label: "Régie / Freelance" }
                    ].map((contract) => (
                      <label key={contract.id} className="flex items-center gap-2 text-xs text-nexytal-text font-medium cursor-pointer">
                        <input 
                          type="radio" 
                          name="contract" 
                          checked={selectedContract === contract.id}
                          onChange={() => setSelectedContract(contract.id)}
                          className="text-nexytal-blue focus:ring-nexytal-blue"
                        />
                        {contract.label}
                      </label>
                    ))}
                  </div>
                </div>
              </aside>

              {/* Colonne Liste des Offres */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-nexytal-muted uppercase tracking-wider">
                    {filteredJobs.length} offre{filteredJobs.length > 1 ? "s" : ""} trouvée{filteredJobs.length > 1 ? "s" : ""}
                  </span>
                </div>

                {filteredJobs.length > 0 ? (
                  <div className="flex flex-col gap-4">
                    {filteredJobs.map((job) => (
                      <article key={job.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4 group">
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <span className="text-[10px] font-bold text-nexytal-blue uppercase tracking-wider bg-sky-50 px-2 py-0.5 rounded">
                              {job.specialty === "cyber" ? "Cybersécurité" : 
                               job.specialty === "devops" ? "DevOps & Cloud" :
                               job.specialty === "data" ? "IA & Data Science" : "Développement"}
                            </span>
                            <h3 className="font-display font-bold text-lg text-nexytal-navy group-hover:text-nexytal-blue transition-colors mt-2">
                              {job.title}
                            </h3>
                            <p className="text-xs text-nexytal-muted mt-1">{job.company}</p>
                          </div>
                          <span className="text-[11px] font-bold text-nexytal-green bg-emerald-50 px-2.5 py-1 rounded-full shrink-0">
                            {job.salary}
                          </span>
                        </div>

                        <p className="text-xs text-nexytal-muted leading-relaxed">
                          {job.desc}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {job.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md flex items-center gap-1">
                              <Tag className="w-3 h-3" />
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-slate-50 mt-2 text-[11px] text-nexytal-muted">
                          <div className="flex flex-wrap gap-4">
                            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                            <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {job.contract}</span>
                            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {job.date}</span>
                          </div>
                          
                          <Link href={`/offres/${job.id}`}>
                            <Button className="bg-nexytal-navy text-white hover:bg-nexytal-blue font-semibold px-4 py-4 rounded-xl text-xs flex items-center gap-1.5 btn-active-press ml-auto sm:ml-0">
                              Postuler <ArrowRight className="w-3.5 h-3.5" />
                            </Button>
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white p-12 rounded-2xl border border-slate-100 text-center flex flex-col items-center gap-4">
                    <Briefcase className="w-12 h-12 text-slate-300" />
                    <h3 className="font-display font-bold text-base text-nexytal-navy">Aucune offre ne correspond à vos critères</h3>
                    <p className="text-xs text-nexytal-muted max-w-sm leading-relaxed">
                      Essayez de réinitialiser vos filtres ou de déposer une candidature spontanée pour être alerté en priorité.
                    </p>
                    <Link href="/candidats#deposer-cv">
                      <Button className="bg-nexytal-navy text-white hover:bg-nexytal-blue font-semibold px-5 py-5 rounded-xl text-xs mt-2">
                        Déposer un CV confidentiel
                      </Button>
                    </Link>
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
