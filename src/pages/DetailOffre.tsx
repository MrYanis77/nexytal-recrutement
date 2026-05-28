import { useState } from "react";
import { Link, useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowLeft, MapPin, Briefcase, Calendar, Clock, ShieldCheck, 
  FileText, CheckCircle2, ChevronRight, Share2, Mail, Phone
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

export default function DetailOffre() {
  const [, params] = useRoute("/offres/:id");
  const jobId = params ? parseInt(params.id) : 1;

  const [applyForm, setApplyForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    message: ""
  });

  const jobs = {
    1: {
      title: "Architecte Cybersécurité SOC / GRC",
      company: "Cabinet d'Audit & Conseil International",
      location: "Paris (Hybride - 2j télétravail)",
      contract: "CDI",
      salary: "75k€ - 85k€",
      date: "Publiée il y a 2 jours",
      desc: "Notre client, cabinet de conseil d'envergure internationale, recherche un Architecte Cybersécurité SOC / GRC Senior pour piloter la mise en conformité et l'amélioration continue des postures de sécurité de ses clients stratégiques (Secteurs Banque, Assurance, Énergie).",
      missions: [
        "Auditer et évaluer la maturité des architectures de sécurité existantes au regard des normes de référence (ISO 27001, NIST, RGPD).",
        "Concevoir et déployer des architectures de sécurité cloud et hybrides sécurisées.",
        "Piloter l'intégration et l'optimisation des solutions de détection (SIEM, EDR, NDR) au sein des SOC.",
        "Rédiger les politiques de sécurité (PSSI), guides de durcissement et plans de continuité d'activité (PCA/PRA).",
        "Animer les comités de pilotage sécurité et accompagner les RSSI / CISO dans leur gouvernance au quotidien."
      ],
      profile: [
        "Diplôme d'Ingénieur ou Bac+5 spécialisé en informatique / cybersécurité.",
        "Minimum 5 ans d'expérience sur un poste similaire d'architecte ou de consultant sécurité senior.",
        "Maîtrise approfondie de la norme ISO 27001 (une certification Lead Auditor/Implementer est un vrai plus).",
        "Excellente compréhension des environnements cloud sécurisés (AWS Security, Azure Sentinel).",
        "Qualités relationnelles affirmées, rigueur d'analyse et sens de la confidentialité."
      ],
      advantages: [
        "Rémunération attractive (75k€ à 85k€ fixe selon profil) + variable de 10%.",
        "Accord de télétravail flexible (2 à 3 jours par semaine).",
        "Prise en charge à 100% des certifications professionnelles (CISSP, CCSP, CISM...).",
        "Locaux modernes en plein cœur de Paris."
      ]
    },
    2: {
      title: "Ingénieur Lead DevOps Kubernetes",
      company: "Éditeur de Logiciels SaaS (Scale-up)",
      location: "Lyon (Full Remote possible)",
      contract: "CDI",
      salary: "65k€ - 75k€",
      date: "Publiée il y a 3 jours",
      desc: "Notre client, éditeur SaaS leader sur son marché, recherche son futur Lead DevOps pour structurer, automatiser et scaler l'infrastructure de production accueillant plus de 2 millions d'utilisateurs quotidiens.",
      missions: [
        "Piloter l'architecture, le déploiement et le maintien en conditions opérationnelles de clusters Kubernetes de production.",
        "Concevoir et optimiser les pipelines CI/CD (GitLab, GitHub Actions) pour accélérer la livraison des fonctionnalités.",
        "Garantir l'observabilité globale de la plateforme (Prometheus, Grafana, Datadog).",
        "Accompagner et faire monter en compétences l'équipe de développement sur les pratiques DevOps et Cloud Native.",
        "Assurer la sécurité et la haute disponibilité de l'infrastructure multi-cloud (AWS / GCP)."
      ],
      profile: [
        "Solide expérience (4 ans+) en administration d'infrastructures cloud et orchestration de conteneurs.",
        "Maîtrise experte de Kubernetes (CKA/CKAD appréciées) et de l'Infrastructure as Code (Terraform).",
        "Forte sensibilité aux problématiques de sécurité cloud (SecOps).",
        "Excellent relationnel, leadership naturel et esprit d'équipe.",
        "Maîtrise de l'anglais technique indispensable."
      ],
      advantages: [
        "Package salarial compétitif (65k€ - 75k€) + BSPCE.",
        "Télétravail complet (Full Remote) possible depuis la France.",
        "Budget matériel au choix (MacBook Pro ou Dell XPS).",
        "Séminaires d'équipe trimestriels dans des lieux inspirants."
      ]
    }
  };

  const job = jobs[jobId as keyof typeof jobs] || jobs[1];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applyForm.fullName || !applyForm.email || !applyForm.message) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    toast.success("Votre candidature a bien été transmise au consultant en charge de cette offre. Un retour vous sera fait sous 72h.");
    setApplyForm({
      fullName: "",
      email: "",
      phone: "",
      linkedin: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-1">
        
        {/* BANDEAU DE RETOUR */}
        <div className="bg-white border-b border-slate-100 py-4">
          <div className="container flex items-center justify-between">
            <Link href="/offres" className="text-xs font-bold text-nexytal-navy hover:text-nexytal-blue flex items-center gap-1.5 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Retour aux offres d'emploi
            </Link>
            <button 
              onClick={() => { navigator.clipboard.writeText(window.location.href); toast.success("Lien de l'offre copié dans le presse-papiers !"); }}
              className="text-xs text-nexytal-muted hover:text-nexytal-navy flex items-center gap-1.5"
            >
              <Share2 className="w-4 h-4" /> Partager l'offre
            </button>
          </div>
        </div>

        {/* SECTION DÉTAIL DE L'OFFRE */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Contenu de l'offre (Missions, Profil...) */}
              <div className="lg:col-span-8 bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-8">
                
                {/* En-tête de l'offre */}
                <div className="border-b border-slate-100 pb-6 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-bold text-nexytal-blue uppercase tracking-wider bg-sky-50 px-2 py-0.5 rounded">
                      Recrutement CDI
                    </span>
                    <span className="text-[10px] font-bold text-nexytal-green uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded">
                      {job.salary}
                    </span>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-display font-extrabold text-nexytal-navy">
                    {job.title}
                  </h1>
                  <p className="text-sm font-semibold text-nexytal-text">{job.company}</p>
                  
                  <div className="flex flex-wrap gap-4 text-xs text-nexytal-muted mt-2">
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> {job.contract}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {job.date}</span>
                  </div>
                </div>

                {/* Descriptif du poste */}
                <div className="flex flex-col gap-3">
                  <h3 className="font-display font-bold text-base text-nexytal-navy">Description du poste</h3>
                  <p className="text-xs text-nexytal-muted leading-relaxed">
                    {job.desc}
                  </p>
                </div>

                {/* Missions */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-display font-bold text-base text-nexytal-navy">Vos missions principales</h3>
                  <ul className="flex flex-col gap-3 text-xs text-nexytal-muted leading-relaxed">
                    {job.missions.map((mission, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-nexytal-blue shrink-0 mt-0.5" />
                        <span>{mission}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Profil recherché */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-display font-bold text-base text-nexytal-navy">Votre profil</h3>
                  <ul className="flex flex-col gap-3 text-xs text-nexytal-muted leading-relaxed">
                    {job.profile.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-nexytal-green shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Avantages */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-display font-bold text-base text-nexytal-navy">Ce que nous vous proposons</h3>
                  <ul className="flex flex-col gap-3 text-xs text-nexytal-muted leading-relaxed">
                    {job.advantages.map((adv, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-nexytal-amber shrink-0 mt-0.5" />
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Engagement de confidentialité */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4">
                  <div className="p-2 bg-white text-nexytal-blue rounded-xl shadow-sm shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-nexytal-navy">Confidentialité & Déontologie</h4>
                    <p className="text-[11px] text-nexytal-muted mt-1 leading-relaxed">
                      Nexytal garantit la discrétion absolue de vos démarches. Votre dossier est traité en conformité avec le RGPD et aucun contact n'est pris avec nos clients ou votre employeur actuel sans votre accord explicite.
                    </p>
                  </div>
                </div>

              </div>

              {/* Formulaire de candidature rapide */}
              <aside className="lg:col-span-4 bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-md sticky top-28 flex flex-col gap-6">
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="font-display font-bold text-base text-nexytal-navy">Postuler à cette offre</h3>
                  <p className="text-[11px] text-nexytal-muted mt-1">Réponse garantie sous 72 heures ouvrées.</p>
                </div>

                <form onSubmit={handleApply} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-nexytal-navy uppercase">Nom complet *</label>
                    <Input 
                      type="text" 
                      placeholder="Ex: Sophie Bernard" 
                      value={applyForm.fullName}
                      onChange={(e) => setApplyForm({...applyForm, fullName: e.target.value})}
                      required
                      className="rounded-xl border-slate-200 focus-visible:ring-nexytal-blue h-10 text-xs"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-nexytal-navy uppercase">Adresse email *</label>
                    <Input 
                      type="email" 
                      placeholder="Ex: s.bernard@gmail.com" 
                      value={applyForm.email}
                      onChange={(e) => setApplyForm({...applyForm, email: e.target.value})}
                      required
                      className="rounded-xl border-slate-200 focus-visible:ring-nexytal-blue h-10 text-xs"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-nexytal-navy uppercase">Téléphone</label>
                    <Input 
                      type="tel" 
                      placeholder="Ex: +33 6 00 00 00 00" 
                      value={applyForm.phone}
                      onChange={(e) => setApplyForm({...applyForm, phone: e.target.value})}
                      className="rounded-xl border-slate-200 focus-visible:ring-nexytal-blue h-10 text-xs"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-nexytal-navy uppercase">Profil LinkedIn (recommandé)</label>
                    <Input 
                      type="url" 
                      placeholder="Ex: https://linkedin.com/in/sophiebernard" 
                      value={applyForm.linkedin}
                      onChange={(e) => setApplyForm({...applyForm, linkedin: e.target.value})}
                      className="rounded-xl border-slate-200 focus-visible:ring-nexytal-blue h-10 text-xs"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-nexytal-navy uppercase">Message d'accompagnement *</label>
                    <Textarea 
                      placeholder="Présentez brièvement votre motivation pour ce poste..." 
                      value={applyForm.message}
                      onChange={(e) => setApplyForm({...applyForm, message: e.target.value})}
                      rows={4}
                      required
                      className="rounded-xl border-slate-200 focus-visible:ring-nexytal-blue text-xs"
                    />
                  </div>

                  <div className="border border-dashed border-slate-200 rounded-xl p-4 text-center flex flex-col items-center gap-1.5 bg-slate-50">
                    <FileText className="w-6 h-6 text-slate-400" />
                    <span className="text-[11px] font-bold text-nexytal-navy">Joindre votre CV *</span>
                    <span className="text-[9px] text-nexytal-muted">PDF, DOCX (Max. 5 Mo)</span>
                    <Button type="button" variant="outline" className="mt-1 text-[10px] h-8 border-slate-200 text-nexytal-navy hover:bg-white font-semibold">
                      Parcourir
                    </Button>
                  </div>

                  <Button type="submit" className="bg-nexytal-navy text-white hover:bg-nexytal-blue font-semibold py-5 rounded-xl btn-active-press mt-2 text-xs">
                    Envoyer ma candidature
                  </Button>
                </form>
              </aside>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
