import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Building2, CheckCircle2, ShieldCheck, Zap, Users, 
  Search, Mail, Phone, Clock, ArrowRight, Award, HelpCircle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

export default function Entreprises() {
  const [formData, setFormData] = useState({
    company: "",
    contactName: "",
    email: "",
    phone: "",
    need: "",
    roleType: "cdi",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.company || !formData.contactName || !formData.email || !formData.need) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    toast.success("Votre besoin de recrutement a bien été enregistré. Un consultant expert vous contactera sous 24h.");
    setFormData({
      company: "",
      contactName: "",
      email: "",
      phone: "",
      need: "",
      roleType: "cdi",
      message: ""
    });
  };

  const services = [
    {
      icon: Search,
      title: "Chasse de têtes & Approche directe",
      desc: "Pour vos postes clés, stratégiques ou pénuriques (DSI, CTO, CISO, Lead Tech, Experts Cyber). Nous approchons directement les talents en poste en toute confidentialité.",
      points: [
        "Identification chirurgicale des profils",
        "Approche confidentielle et sur-mesure",
        "Évaluation technique approfondie",
        "Shortlist haut de gamme sous 10 à 15 jours"
      ]
    },
    {
      icon: Zap,
      title: "Recrutement au Succès (CDI)",
      desc: "Notre formule classique pour vos besoins de croissance réguliers. Vous ne payez qu'une fois le candidat recruté et sa période d'essai validée.",
      points: [
        "Accès à notre vivier qualifié",
        "Sourcing multi-canaux actif",
        "Garantie de remplacement intégrée",
        "Aucun frais de démarrage"
      ]
    },
    {
      icon: Users,
      title: "Régie & Mise à disposition",
      desc: "Besoin d'un renfort immédiat ou d'une expertise ponctuelle pour un projet critique ? Nous mettons à votre disposition nos meilleurs consultants indépendants.",
      points: [
        "Démarrage ultra-rapide (48h à 72h)",
        "Profils immédiatement opérationnels",
        "Gestion administrative simplifiée",
        "Suivi régulier de la mission"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-1">
        
        {/* HERO SECTION */}
        <section className="bg-white py-16 md:py-24 relative overflow-hidden border-b border-slate-100">
          <div className="absolute top-1/3 -right-48 w-96 h-96 halo-blue rounded-full pointer-events-none" />
          <div className="container relative z-10">
            <div className="max-w-3xl flex flex-col gap-6">
              <span className="px-3 py-1.5 bg-slate-100 text-nexytal-navy rounded-full text-xs font-bold uppercase tracking-wider w-fit">Solutions Entreprises</span>
              <h1 className="text-4xl md:text-5xl font-display font-extrabold leading-tight text-nexytal-navy">
                Trouvez les experts IT qui feront la différence
              </h1>
              <p className="text-nexytal-muted text-base md:text-lg leading-relaxed">
                Parce que la réussite de vos projets technologiques dépend de la qualité de vos équipes, Nexytal déploie une approche de recrutement de précision. Shortlist qualifiée sous 10 jours, garantie d'intégration incluse.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <a href="#contact">
                  <Button className="bg-nexytal-navy text-white hover:bg-nexytal-blue font-semibold px-6 py-6 rounded-xl btn-active-press flex items-center gap-2 shadow-sm">
                    Déposer un besoin <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <a href="#solutions">
                  <Button variant="outline" className="border-slate-200 text-nexytal-navy hover:bg-slate-50 font-semibold px-6 py-6 rounded-xl">
                    Découvrir nos solutions
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION NOS ENGAGEMENTS */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-sky-50 text-nexytal-blue rounded-xl shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-nexytal-navy">Shortlist sous 10 jours</h3>
                  <p className="text-xs text-nexytal-muted mt-2 leading-relaxed">
                    Grâce à notre sourcing actif et à notre vivier préqualifié, nous vous présentons les premiers profils sous 10 jours ouvrés.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-emerald-50 text-nexytal-green rounded-xl shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-nexytal-navy">Prequalification technique</h3>
                  <p className="text-xs text-nexytal-muted mt-2 leading-relaxed">
                    Chaque candidat présenté passe un entretien technique rigoureux mené par un consultant expert de sa technologie.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                <div className="p-3 bg-amber-50 text-nexytal-amber rounded-xl shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-nexytal-navy">Garantie d'intégration</h3>
                  <p className="text-xs text-nexytal-muted mt-2 leading-relaxed">
                    Un départ durant la période d'essai ? Nous relançons la recherche immédiatement sans aucun frais supplémentaire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION SOLUTIONS */}
        <section id="solutions" className="bg-white py-20 md:py-28 border-y border-slate-200/60">
          <div className="container">
            <div className="text-center flex flex-col items-center gap-4 mb-16">
              <span className="px-3 py-1.5 bg-slate-100 text-nexytal-navy rounded-full text-xs font-bold uppercase tracking-wider">Nos Formules</span>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-nexytal-navy">
                Des solutions de recrutement adaptées à vos enjeux
              </h2>
              <p className="text-nexytal-muted text-sm md:text-base max-w-xl leading-relaxed">
                Que vous cherchiez un cadre dirigeant en CDI, un développeur en urgence ou un consultant indépendant pour un projet, nous avons la formule idéale.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} className="bg-slate-50 rounded-3xl border border-slate-100 p-8 flex flex-col gap-6 hover:shadow-md transition-all duration-300">
                    <div className="p-3 bg-white text-nexytal-navy rounded-xl w-fit shadow-sm">
                      <Icon className="w-6 h-6 text-nexytal-blue" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-nexytal-navy">{service.title}</h3>
                      <p className="text-xs text-nexytal-muted mt-3 leading-relaxed">{service.desc}</p>
                    </div>
                    <ul className="flex flex-col gap-3 text-xs text-nexytal-text font-medium pt-4 border-t border-slate-200/60">
                      {service.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-nexytal-green shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <a href="#contact" className="mt-auto pt-4">
                      <Button variant="outline" className="w-full border-slate-200 text-nexytal-navy hover:bg-white font-semibold py-5 rounded-xl">
                        Choisir cette solution
                      </Button>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION FORMULAIRE DE CONTACT */}
        <section id="contact" className="py-20 md:py-28">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              {/* Informations de contact */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="px-3 py-1.5 bg-slate-100 text-nexytal-navy rounded-full text-xs font-bold uppercase tracking-wider w-fit">Parlons de vos besoins</span>
                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-nexytal-navy leading-tight">
                  Confiez-nous votre recherche de talents IT
                </h2>
                <p className="text-nexytal-muted text-sm leading-relaxed">
                  Remplissez ce formulaire en quelques instants. Un consultant expert de votre domaine d'activité (cybersécurité, cloud, data, dév...) prendra contact avec vous pour cadrer précisément votre besoin.
                </p>

                <div className="flex flex-col gap-4 mt-4 text-xs text-nexytal-text font-semibold">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-white border border-slate-100 text-nexytal-blue rounded-xl shadow-sm">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-nexytal-muted text-[10px] font-medium uppercase">Email direct</p>
                      <a href="mailto:recrutement@nexytal.com" className="hover:text-nexytal-blue transition-colors">recrutement@nexytal.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-white border border-slate-100 text-nexytal-blue rounded-xl shadow-sm">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-nexytal-muted text-[10px] font-medium uppercase">Ligne entreprises</p>
                      <a href="tel:+33100000000" className="hover:text-nexytal-blue transition-colors">+33 (0)1 00 00 00 00</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulaire interactif */}
              <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-md">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-nexytal-navy">Nom de l'entreprise *</label>
                      <Input 
                        type="text" 
                        placeholder="Ex: TechCorp" 
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        required
                        className="rounded-xl border-slate-200 focus-visible:ring-nexytal-blue h-11 text-xs"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-nexytal-navy">Votre nom complet *</label>
                      <Input 
                        type="text" 
                        placeholder="Ex: Sophie Martin" 
                        value={formData.contactName}
                        onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                        required
                        className="rounded-xl border-slate-200 focus-visible:ring-nexytal-blue h-11 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-nexytal-navy">Adresse email professionnelle *</label>
                      <Input 
                        type="email" 
                        placeholder="Ex: s.martin@techcorp.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="rounded-xl border-slate-200 focus-visible:ring-nexytal-blue h-11 text-xs"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-nexytal-navy">Téléphone direct</label>
                      <Input 
                        type="tel" 
                        placeholder="Ex: +33 6 00 00 00 00" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="rounded-xl border-slate-200 focus-visible:ring-nexytal-blue h-11 text-xs"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-nexytal-navy">Poste recherché / Besoin principal *</label>
                    <Input 
                      type="text" 
                      placeholder="Ex: Ingénieur DevOps AWS, Architecte Cybersécurité SOC..." 
                      value={formData.need}
                      onChange={(e) => setFormData({...formData, need: e.target.value})}
                      required
                      className="rounded-xl border-slate-200 focus-visible:ring-nexytal-blue h-11 text-xs"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-nexytal-navy">Type de contrat souhaité</label>
                    <div className="grid grid-cols-3 gap-3">
                      <button 
                        type="button"
                        onClick={() => setFormData({...formData, roleType: "cdi"})}
                        className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all ${
                          formData.roleType === "cdi" 
                            ? "bg-nexytal-navy text-white border-nexytal-navy" 
                            : "bg-slate-50 text-nexytal-muted border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        CDI (Succès)
                      </button>
                      <button 
                        type="button"
                        onClick={() => setFormData({...formData, roleType: "chasse"})}
                        className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all ${
                          formData.roleType === "chasse" 
                            ? "bg-nexytal-navy text-white border-nexytal-navy" 
                            : "bg-slate-50 text-nexytal-muted border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        Chasse Executive
                      </button>
                      <button 
                        type="button"
                        onClick={() => setFormData({...formData, roleType: "regie"})}
                        className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all ${
                          formData.roleType === "regie" 
                            ? "bg-nexytal-navy text-white border-nexytal-navy" 
                            : "bg-slate-50 text-nexytal-muted border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        Régie / Freelance
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-nexytal-navy">Informations complémentaires (contexte, compétences requises...)</label>
                    <Textarea 
                      placeholder="Décrivez brièvement le contexte de votre recrutement..." 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="rounded-xl border-slate-200 focus-visible:ring-nexytal-blue text-xs"
                    />
                  </div>

                  <Button type="submit" className="bg-nexytal-navy text-white hover:bg-nexytal-blue font-semibold py-6 rounded-xl btn-active-press mt-2">
                    Envoyer ma demande de recrutement
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
