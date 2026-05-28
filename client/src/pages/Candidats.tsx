import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  UserSquare2, CheckCircle2, Award, Users, BookOpen, 
  Mail, Phone, ArrowRight, Star, FileText, Gift, Compass
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

export default function Candidats() {
  const [cvForm, setCvForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    specialty: "cyber",
    message: ""
  });

  const [cooptForm, setCooptForm] = useState({
    referrerName: "",
    referrerEmail: "",
    candidateName: "",
    candidateEmail: "",
    candidateRole: "",
    linkedin: ""
  });

  const handleCvSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cvForm.fullName || !cvForm.email || !cvForm.message) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    toast.success("Votre candidature spontanée a bien été reçue. Nos consultants l'étudieront avec la plus grande discrétion.");
    setCvForm({
      fullName: "",
      email: "",
      phone: "",
      linkedin: "",
      specialty: "cyber",
      message: ""
    });
  };

  const handleCooptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cooptForm.referrerName || !cooptForm.referrerEmail || !cooptForm.candidateName || !cooptForm.candidateEmail) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    toast.success("Cooptation enregistrée ! Si votre recommandation est recrutée, vous recevrez votre prime de 1000€.");
    setCooptForm({
      referrerName: "",
      referrerEmail: "",
      candidateName: "",
      candidateEmail: "",
      candidateRole: "",
      linkedin: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-1">
        
        {/* HERO SECTION */}
        <section className="bg-white py-16 md:py-24 relative overflow-hidden border-b border-slate-100">
          <div className="absolute top-1/3 -left-48 w-96 h-96 halo-blue rounded-full pointer-events-none" />
          <div className="container relative z-10">
            <div className="max-w-3xl flex flex-col gap-6">
              <span className="px-3 py-1.5 bg-slate-100 text-nexytal-navy rounded-full text-xs font-bold uppercase tracking-wider w-fit">Espace Candidats</span>
              <h1 className="text-4xl md:text-5xl font-display font-extrabold leading-tight text-nexytal-navy">
                Propulsez votre carrière IT au niveau supérieur
              </h1>
              <p className="text-nexytal-muted text-base md:text-lg leading-relaxed">
                Parce que vous êtes bien plus qu'un CV, Nexytal vous propose un accompagnement sur-mesure et ultra-confidentiel. Accédez à des opportunités exclusives au sein des plus belles entreprises tech.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <Link href="/offres">
                  <Button className="bg-nexytal-navy text-white hover:bg-nexytal-blue font-semibold px-6 py-6 rounded-xl btn-active-press flex items-center gap-2 shadow-sm">
                    Découvrir nos offres d'emploi <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <a href="#deposer-cv">
                  <Button variant="outline" className="border-slate-200 text-nexytal-navy hover:bg-slate-50 font-semibold px-6 py-6 rounded-xl">
                    Candidature spontanée
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION NOS ENGAGEMENTS CANDIDATS */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-sky-50 text-nexytal-blue rounded-xl shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-nexytal-navy">Accompagnement de carrière</h3>
                  <p className="text-xs text-nexytal-muted mt-2 leading-relaxed">
                    Bénéficiez de conseils personnalisés sur votre positionnement marché, votre négociation salariale et votre trajectoire d'évolution.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-emerald-50 text-nexytal-green rounded-xl shrink-0">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-nexytal-navy">Opportunités exclusives</h3>
                  <p className="text-xs text-nexytal-muted mt-2 leading-relaxed">
                    Plus de 60% de nos recrutements s'effectuent via notre réseau d'approche directe, sur des postes non publiés sur les jobboards classiques.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-violet-50 text-nexytal-violet rounded-xl shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-nexytal-navy">Confidentialité absolue</h3>
                  <p className="text-xs text-nexytal-muted mt-2 leading-relaxed">
                    Aucune démarche n'est entreprise auprès de nos clients sans votre accord formel préalable. Votre anonymat est préservé.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION DÉPÔT DE CV / CANDIDATURE SPONTANÉE */}
        <section id="deposer-cv" className="bg-white py-20 md:py-28 border-y border-slate-200/60">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              {/* Informations */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="px-3 py-1.5 bg-slate-100 text-nexytal-navy rounded-full text-xs font-bold uppercase tracking-wider w-fit">Candidature spontanée</span>
                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-nexytal-navy leading-tight">
                  Rejoignez notre réseau de talents d'exception
                </h2>
                <p className="text-nexytal-muted text-sm leading-relaxed">
                  Vous ne trouvez pas d'offre correspondant exactement à votre profil actuel ? Déposez votre candidature spontanée. Nos consultants spécialisés étudient chaque profil pour vous proposer des opportunités en adéquation avec votre projet de carrière.
                </p>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100/60 flex flex-col gap-3.5 text-xs text-nexytal-text font-semibold">
                  <p className="text-nexytal-navy font-bold">Pourquoi rejoindre le réseau Nexytal ?</p>
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-nexytal-green" /> Alerte personnalisée sur les postes cachés</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-nexytal-green" /> Évaluation et validation de vos compétences</span>
                  <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-nexytal-green" /> Coaching d'intégration durant les 6 premiers mois</span>
                </div>
              </div>

              {/* Formulaire dépôt CV */}
              <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-md">
                <form onSubmit={handleCvSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-nexytal-navy">Votre nom complet *</label>
                      <Input 
                        type="text" 
                        placeholder="Ex: Alexandre Dupont" 
                        value={cvForm.fullName}
                        onChange={(e) => setCvForm({...cvForm, fullName: e.target.value})}
                        required
                        className="rounded-xl border-slate-200 focus-visible:ring-nexytal-blue h-11 text-xs"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-nexytal-navy">Adresse email *</label>
                      <Input 
                        type="email" 
                        placeholder="Ex: a.dupont@gmail.com" 
                        value={cvForm.email}
                        onChange={(e) => setCvForm({...cvForm, email: e.target.value})}
                        required
                        className="rounded-xl border-slate-200 focus-visible:ring-nexytal-blue h-11 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-nexytal-navy">Téléphone</label>
                      <Input 
                        type="tel" 
                        placeholder="Ex: +33 6 00 00 00 00" 
                        value={cvForm.phone}
                        onChange={(e) => setCvForm({...cvForm, phone: e.target.value})}
                        className="rounded-xl border-slate-200 focus-visible:ring-nexytal-blue h-11 text-xs"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-nexytal-navy">Lien profil LinkedIn</label>
                      <Input 
                        type="url" 
                        placeholder="Ex: https://linkedin.com/in/alexandredupont" 
                        value={cvForm.linkedin}
                        onChange={(e) => setCvForm({...cvForm, linkedin: e.target.value})}
                        className="rounded-xl border-slate-200 focus-visible:ring-nexytal-blue h-11 text-xs"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-nexytal-navy">Votre spécialité IT principale</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: "cyber", label: "Cybersécurité" },
                        { id: "devops", label: "DevOps & Cloud" },
                        { id: "data", label: "IA & Data Science" },
                        { id: "dev", label: "Développement" }
                      ].map((spec) => (
                        <button 
                          key={spec.id}
                          type="button"
                          onClick={() => setCvForm({...cvForm, specialty: spec.id})}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                            cvForm.specialty === spec.id 
                              ? "bg-nexytal-navy text-white border-nexytal-navy" 
                              : "bg-slate-50 text-nexytal-muted border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          {spec.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-nexytal-navy">Votre projet professionnel (objectifs, technologies, prétentions...)</label>
                    <Textarea 
                      placeholder="Décrivez brièvement ce que vous recherchez (type de poste, technologies, télétravail, salaire souhaité...)" 
                      value={cvForm.message}
                      onChange={(e) => setCvForm({...cvForm, message: e.target.value})}
                      rows={4}
                      required
                      className="rounded-xl border-slate-200 focus-visible:ring-nexytal-blue text-xs"
                    />
                  </div>

                  <div className="border border-dashed border-slate-200 rounded-xl p-6 text-center flex flex-col items-center gap-2 bg-slate-50">
                    <FileText className="w-8 h-8 text-slate-400" />
                    <span className="text-xs font-bold text-nexytal-navy">Glissez-déposez votre CV ici</span>
                    <span className="text-[10px] text-nexytal-muted">Formats acceptés : PDF, DOCX (Max. 5 Mo)</span>
                    <Button type="button" variant="outline" className="mt-2 text-xs border-slate-200 text-nexytal-navy hover:bg-white font-semibold">
                      Parcourir mes fichiers
                    </Button>
                  </div>

                  <Button type="submit" className="bg-nexytal-navy text-white hover:bg-nexytal-blue font-semibold py-6 rounded-xl btn-active-press mt-2">
                    Déposer mon CV confidentiellement
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION COOPTATION (RECOMMANDATION DE TALENTS) */}
        <section id="cooptation" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-nexytal-blue/10 to-transparent rounded-bl-full pointer-events-none" />
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="px-3 py-1.5 bg-nexytal-blue/20 text-nexytal-blue rounded-full text-xs font-bold uppercase tracking-wider w-fit">Programme de cooptation</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight">
                  Recommandez un talent, recevez 1000€
                </h2>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  Vous connaissez un expert en cybersécurité, cloud, data ou développement à l'écoute du marché ? Cooptez-le ! Si nous recrutons votre recommandation en CDI chez l'un de nos clients, vous recevez une prime de cooptation de 1000€ à la validation de sa période d'essai.
                </p>
                <div className="flex flex-col gap-3 text-xs text-slate-300 font-medium">
                  <span className="flex items-center gap-2"><Gift className="w-4 h-4 text-nexytal-blue" /> Prime de 1000€ par recrutement réussi</span>
                  <span className="flex items-center gap-2"><Gift className="w-4 h-4 text-nexytal-blue" /> Processus transparent et suivi régulier</span>
                  <span className="flex items-center gap-2"><Gift className="w-4 h-4 text-nexytal-blue" /> Aucune limite du nombre de cooptations</span>
                </div>
              </div>

              {/* Formulaire cooptation */}
              <div className="lg:col-span-7 bg-white text-nexytal-text p-8 md:p-10 rounded-3xl border border-slate-800 shadow-xl">
                <form onSubmit={handleCooptSubmit} className="flex flex-col gap-4">
                  <span className="text-xs font-bold text-nexytal-blue uppercase tracking-wider">Formulaire de recommandation</span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-bold text-nexytal-navy">Votre nom complet *</label>
                      <Input 
                        type="text" 
                        placeholder="Ex: Jean Martin" 
                        value={cooptForm.referrerName}
                        onChange={(e) => setCooptForm({...cooptForm, referrerName: e.target.value})}
                        required
                        className="rounded-xl border-slate-200 focus-visible:ring-nexytal-blue h-10 text-xs"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-bold text-nexytal-navy">Votre adresse email *</label>
                      <Input 
                        type="email" 
                        placeholder="Ex: j.martin@gmail.com" 
                        value={cooptForm.referrerEmail}
                        onChange={(e) => setCooptForm({...cooptForm, referrerEmail: e.target.value})}
                        required
                        className="rounded-xl border-slate-200 focus-visible:ring-nexytal-blue h-10 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-bold text-nexytal-navy">Nom du talent coopté *</label>
                      <Input 
                        type="text" 
                        placeholder="Ex: Sophie Bernard" 
                        value={cooptForm.candidateName}
                        onChange={(e) => setCooptForm({...cooptForm, candidateName: e.target.value})}
                        required
                        className="rounded-xl border-slate-200 focus-visible:ring-nexytal-blue h-10 text-xs"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-bold text-nexytal-navy">Son adresse email / téléphone *</label>
                      <Input 
                        type="text" 
                        placeholder="Ex: s.bernard@gmail.com" 
                        value={cooptForm.candidateEmail}
                        onChange={(e) => setCooptForm({...cooptForm, candidateEmail: e.target.value})}
                        required
                        className="rounded-xl border-slate-200 focus-visible:ring-nexytal-blue h-10 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-bold text-nexytal-navy">Poste / Spécialité du talent</label>
                      <Input 
                        type="text" 
                        placeholder="Ex: Lead DevOps Kubernetes" 
                        value={cooptForm.candidateRole}
                        onChange={(e) => setCooptForm({...cooptForm, candidateRole: e.target.value})}
                        className="rounded-xl border-slate-200 focus-visible:ring-nexytal-blue h-10 text-xs"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-bold text-nexytal-navy">Son profil LinkedIn (recommandé)</label>
                      <Input 
                        type="url" 
                        placeholder="Ex: https://linkedin.com/in/sophiebernard" 
                        value={cooptForm.linkedin}
                        onChange={(e) => setCooptForm({...cooptForm, linkedin: e.target.value})}
                        className="rounded-xl border-slate-200 focus-visible:ring-nexytal-blue h-10 text-xs"
                      />
                    </div>
                  </div>

                  <Button type="submit" className="bg-nexytal-navy text-white hover:bg-nexytal-blue font-semibold py-5 rounded-xl btn-active-press mt-2">
                    Soumettre la recommandation
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
