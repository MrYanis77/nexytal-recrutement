import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, Calendar, Clock, Search, ArrowRight, 
  ArrowUpRight, Download, ShieldCheck, CheckCircle2
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

export default function Ressources() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "Toutes les ressources" },
    { id: "salaires", label: "Salaires & Marché" },
    { id: "cyber", label: "Cybersécurité" },
    { id: "recrutement", label: "Guides Recruteurs" },
    { id: "carriere", label: "Conseils Candidats" }
  ];

  const resources = [
    {
      category: "salaires",
      categoryLabel: "Salaires & Marché",
      title: "Grille des salaires IT 2026 : Les tendances du recrutement tech",
      desc: "Découvrez notre analyse complète des rémunérations pour les profils cybersécurité, cloud, data, DevOps et développement en France.",
      date: "15 Mai 2026",
      readTime: "6 min",
      type: "Article"
    },
    {
      category: "cyber",
      categoryLabel: "Cybersécurité",
      title: "Comment recruter un profil cybersécurité sans perdre six mois",
      desc: "Face à la pénurie de profils cyber, découvrez les meilleures pratiques pour attirer, évaluer et intégrer rapidement vos futurs experts en sécurité.",
      date: "04 Mai 2026",
      readTime: "5 min",
      type: "Article"
    },
    {
      category: "carriere",
      categoryLabel: "Conseils Candidats",
      title: "Préparer un entretien DevOps : Les attentes réelles des CTO",
      desc: "Compétences techniques, posture agile, communication : ce que les recruteurs et décideurs tech évaluent en priorité lors des entretiens.",
      date: "28 Avril 2026",
      readTime: "4 min",
      type: "Article"
    },
    {
      category: "recrutement",
      categoryLabel: "Guides Recruteurs",
      title: "Le guide ultime de l'intégration (onboarding) d'un profil tech",
      desc: "Découvrez notre méthodologie éprouvée pour réussir l'intégration de vos nouveaux développeurs, ingénieurs cloud ou experts sécurité durant leurs 100 premiers jours.",
      date: "12 Avril 2026",
      readTime: "8 min",
      type: "Guide PDF"
    },
    {
      category: "salaires",
      categoryLabel: "Salaires & Marché",
      title: "L'impact de l'Intelligence Artificielle sur les métiers du développement",
      desc: "Analyse des nouvelles compétences requises pour les développeurs à l'ère de l'IA générative et des assistants de code.",
      date: "30 Mars 2026",
      readTime: "5 min",
      type: "Article"
    }
  ];

  const filteredResources = resources.filter((res) => {
    const matchesSearch = res.title.toLowerCase().includes(search.toLowerCase()) || 
                          res.desc.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "all" || res.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (title: string) => {
    toast.success(`Le document "${title}" a été envoyé à votre adresse email professionnelle.`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-1">
        
        {/* HERO HEADER */}
        <section className="bg-white py-12 md:py-16 border-b border-slate-100">
          <div className="container">
            <div className="max-w-3xl flex flex-col gap-4">
              <span className="px-3 py-1.5 bg-slate-100 text-nexytal-navy rounded-full text-xs font-bold uppercase tracking-wider w-fit">Ressources & Insights</span>
              <h1 className="text-3xl md:text-4xl font-display font-extrabold text-nexytal-navy">
                Le blog du recrutement IT & RH
              </h1>
              <p className="text-nexytal-muted text-sm md:text-base leading-relaxed">
                Retrouvez nos analyses de marché, grilles des salaires, guides pratiques et conseils d'experts pour optimiser vos recrutements technologiques ou propulser votre carrière.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION FILTRES & RESSOURCES */}
        <section className="py-12 md:py-16">
          <div className="container">
            
            {/* Barre de recherche et catégories */}
            <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4 mb-10 pb-6 border-b border-slate-200/60">
              {/* Catégories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button 
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`py-2 px-4 rounded-xl text-xs font-bold border transition-all ${
                      selectedCategory === cat.id 
                        ? "bg-nexytal-navy text-white border-nexytal-navy" 
                        : "bg-white text-nexytal-muted border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Recherche */}
              <div className="relative w-full lg:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <Input 
                  type="text" 
                  placeholder="Rechercher un article, un guide..." 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 rounded-xl border-slate-200 bg-white focus-visible:ring-nexytal-blue text-xs h-10"
                />
              </div>
            </div>

            {/* Grille de ressources */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((res, idx) => (
                <article key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-md transition-all duration-300 group">
                  <div className="p-6 md:p-8 flex flex-col gap-4 flex-1">
                    <div className="flex items-center justify-between text-[11px] font-bold text-nexytal-blue uppercase tracking-wider">
                      <span>{res.categoryLabel}</span>
                      <span className="px-2 py-0.5 bg-slate-50 rounded text-nexytal-navy text-[10px] tracking-normal font-sans font-medium">{res.type}</span>
                    </div>
                    
                    <h3 className="font-display font-bold text-base md:text-lg text-nexytal-navy group-hover:text-nexytal-blue transition-colors leading-snug">
                      {res.type.includes("PDF") ? (
                        <button onClick={() => handleDownload(res.title)} className="text-left hover:underline">
                          {res.title}
                        </button>
                      ) : (
                        <Link href={`/ressources#post-${idx}`}>
                          {res.title}
                        </Link>
                      )}
                    </h3>
                    
                    <p className="text-nexytal-muted text-xs leading-relaxed flex-1">
                      {res.desc}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-2 text-xs text-nexytal-muted">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 shrink-0" />
                        <span>{res.date}</span>
                        <span className="h-1 w-1 rounded-full bg-slate-300" />
                        <span>{res.readTime}</span>
                      </div>
                      
                      {res.type.includes("PDF") ? (
                        <button 
                          onClick={() => handleDownload(res.title)}
                          className="text-xs font-bold text-nexytal-blue hover:text-nexytal-navy flex items-center gap-1 shrink-0"
                        >
                          Télécharger <Download className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <Link href={`/ressources#post-${idx}`} className="text-xs font-bold text-nexytal-navy hover:text-nexytal-blue flex items-center gap-1 shrink-0 group/link">
                          Lire l'article <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Encart guide exclusif de fin */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-nexytal-blue/20 to-transparent rounded-bl-full pointer-events-none" />
              
              <div className="lg:col-span-8 flex flex-col gap-4">
                <span className="px-2.5 py-1 bg-nexytal-blue text-white text-[10px] font-bold uppercase tracking-wider w-fit rounded">Livre blanc 2026</span>
                <h3 className="text-2xl md:text-3xl font-display font-bold">L'Onboarding réussi des profils IT</h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-2xl">
                  Un mauvais onboarding est la première cause de départ prématuré des profils tech. Découvrez notre livre blanc exclusif regroupant les meilleures pratiques, checklists et rituels d'intégration pour fidéliser vos nouvelles recrues IT dès le premier jour.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-end">
                <Button 
                  onClick={() => handleDownload("Livre Blanc - L'Onboarding réussi des profils IT")}
                  className="bg-nexytal-blue text-white hover:bg-sky-400 font-semibold px-6 py-6 rounded-xl w-full sm:w-auto transition-all duration-150 active:scale-97 flex items-center justify-center gap-2"
                >
                  Télécharger le livre blanc <Download className="w-4 h-4" />
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
