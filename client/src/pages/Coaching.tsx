import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Award, Users, CheckCircle2, Star, ShieldCheck, 
  Clock, ArrowRight, UserSquare2, Compass, BookOpen
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

export default function Coaching() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profileType: "manager",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    toast.success("Votre demande de coaching / accompagnement RH a bien été enregistrée. Un coach certifié prendra contact avec vous sous 48h.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      profileType: "manager",
      message: ""
    });
  };

  const offers = [
    {
      icon: Award,
      title: "Coaching Dirigeants & CTO",
      desc: "Accompagnement individuel personnalisé pour les décideurs technologiques (DSI, CTO, CISO, Directeurs de projets) confrontés à des enjeux de transformation, de management d'équipes hybrides ou de transition technologique complexe.",
      points: [
        "Développement de la posture de leadership",
        "Gestion du stress et prévention du burn-out",
        "Pilotage du changement technologique et humain",
        "Aide à la prise de décision stratégique"
      ],
      badge: "Individuel"
    },
    {
      icon: Users,
      title: "Coaching d'Équipes & Agile",
      desc: "Interventions collectives sur-mesure pour optimiser la collaboration, la communication et l'efficacité de vos équipes de développement, de cybersécurité ou d'infrastructure. Alignement des rituels agiles sur les réalités humaines.",
      points: [
        "Résolution de conflits et déblocage d'équipes",
        "Optimisation de la vélocité et de l'alignement",
        "Mise en place de rituels de communication sains",
        "Co-construction de chartes de fonctionnement d'équipe"
      ],
      badge: "Collectif"
    },
    {
      icon: Compass,
      title: "Coaching de Transition Professionnelle",
      desc: "Destiné aux profils tech en phase de transition : prise de poste managériale (ex: de développeur à Tech Lead / CTO), reconversion professionnelle (ex: vers la cybersécurité ou l'IA) ou bilan de compétences approfondi.",
      points: [
        "Cadrage des objectifs professionnels",
        "Identification et valorisation des compétences transférables",
        "Préparation intensive aux entretiens et négociations",
        "Suivi personnalisé durant les 100 premiers jours"
      ],
      badge: "Transition"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-1">
        
        {/* HERO SECTION */}
        <section className="bg-white py-16 md:py-24 relative overflow-hidden border-b border-slate-100">
          <div className="absolute top-1/3 -right-48 w-96 h-96 halo-violet rounded-full pointer-events-none" />
          <div className="container relative z-10">
            <div className="max-w-3xl flex flex-col gap-6">
              <span className="px-3 py-1.5 bg-violet-50 text-nexytal-violet rounded-full text-xs font-bold uppercase tracking-wider w-fit">Coaching & Développement RH</span>
              <h1 className="text-4xl md:text-5xl font-display font-extrabold leading-tight text-nexytal-navy">
                Développez le potentiel humain de vos équipes tech
              </h1>
              <p className="text-nexytal-muted text-base md:text-lg leading-relaxed">
                Le succès technologique est avant tout une aventure humaine. Nexytal propose des prestations de coaching individuel, d'accompagnement collectif et de conseil RH pour aligner le potentiel de vos collaborateurs sur vos ambitions de croissance.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <a href="#contact">
                  <Button className="bg-nexytal-navy text-white hover:bg-nexytal-blue font-semibold px-6 py-6 rounded-xl btn-active-press flex items-center gap-2 shadow-sm">
                    Prendre rendez-vous <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <a href="#offres">
                  <Button variant="outline" className="border-slate-200 text-nexytal-navy hover:bg-slate-50 font-semibold px-6 py-6 rounded-xl">
                    Découvrir nos accompagnements
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION NOS ACCOMPAGNEMENTS */}
        <section id="offres" className="py-20 md:py-28">
          <div className="container">
            <div className="text-center flex flex-col items-center gap-4 mb-16">
              <span className="px-3 py-1.5 bg-slate-100 text-nexytal-navy rounded-full text-xs font-bold uppercase tracking-wider">Nos Prestations</span>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-nexytal-navy">
                Des programmes de coaching sur-mesure
              </h2>
              <p className="text-nexytal-muted text-sm md:text-base max-w-xl leading-relaxed">
                Nos coachs sont certifiés et bénéficient d'une double expertise : le coaching professionnel de haut niveau et la compréhension fine des environnements technologiques.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {offers.map((offer, idx) => {
                const Icon = offer.icon;
                return (
                  <div key={idx} className="bg-white rounded-3xl border border-slate-100 p-8 flex flex-col gap-6 hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                    <span className="absolute top-4 right-4 text-[10px] font-bold text-nexytal-violet uppercase tracking-wider bg-violet-50 px-2 py-0.5 rounded">
                      {offer.badge}
                    </span>
                    <div className="p-3 bg-slate-50 text-nexytal-navy rounded-xl w-fit group-hover:bg-nexytal-blue group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-nexytal-navy">{offer.title}</h3>
                      <p className="text-xs text-nexytal-muted mt-3 leading-relaxed">{offer.desc}</p>
                    </div>
                    <ul className="flex flex-col gap-3 text-xs text-nexytal-text font-medium pt-4 border-t border-slate-50">
                      {offer.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-nexytal-green shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#contact" className="mt-auto pt-4">
                      <Button variant="outline" className="w-full border-slate-200 text-nexytal-navy hover:bg-slate-50 font-semibold py-5 rounded-xl">
                        Demander un devis
                      </Button>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION FORMULAIRE DE CONTACT */}
        <section id="contact" className="py-20 md:py-28 bg-white border-t border-slate-200/60">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              {/* Informations */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="px-3 py-1.5 bg-slate-100 text-nexytal-navy rounded-full text-xs font-bold uppercase tracking-wider w-fit">Cadrage de votre besoin</span>
                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-nexytal-navy leading-tight">
                  Discutons de votre projet d'accompagnement
                </h2>
                <p className="text-nexytal-muted text-sm leading-relaxed">
                  Chaque projet de coaching débute par un entretien de cadrage gratuit et sans engagement de 30 minutes. Cet échange nous permet de comprendre votre contexte, de valider la compatibilité avec nos coachs et de définir les indicateurs de succès.
                </p>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100/60 flex flex-col gap-3.5 text-xs text-nexytal-text font-semibold">
                  <p className="text-nexytal-navy font-bold">Garanties de notre cabinet :</p>
                  <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-nexytal-green" /> Coachs certifiés d'État (RNCP)</span>
                  <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-nexytal-green" /> Respect strict du code de déontologie de l'EMCC / ICF</span>
                  <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-nexytal-green" /> Confidentialité absolue des échanges individuels</span>
                </div>
              </div>

              {/* Formulaire interactif */}
              <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-md">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-nexytal-navy">Votre nom complet *</label>
                      <Input 
                        type="text" 
                        placeholder="Ex: Thomas Martin" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="rounded-xl border-slate-200 focus-visible:ring-nexytal-blue h-11 text-xs"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-nexytal-navy">Adresse email *</label>
                      <Input 
                        type="email" 
                        placeholder="Ex: t.martin@techcorp.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
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
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="rounded-xl border-slate-200 focus-visible:ring-nexytal-blue h-11 text-xs"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-nexytal-navy">Vous êtes ?</label>
                      <select 
                        value={formData.profileType}
                        onChange={(e) => setFormData({...formData, profileType: e.target.value})}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 h-11 text-xs text-nexytal-text focus:outline-none focus:ring-1 focus:ring-nexytal-blue"
                      >
                        <option value="manager">Dirigeant IT / CTO / CISO</option>
                        <option value="hr">DRH / Responsable RH</option>
                        <option value="candidate">Candidat en transition de carrière</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-nexytal-navy">Décrivez votre besoin d'accompagnement *</label>
                    <Textarea 
                      placeholder="Quels sont les objectifs de ce coaching ? (ex: posture managériale, résolution de conflits, prise de poste...)" 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={5}
                      required
                      className="rounded-xl border-slate-200 focus-visible:ring-nexytal-blue text-xs"
                    />
                  </div>

                  <Button type="submit" className="bg-nexytal-navy text-white hover:bg-nexytal-blue font-semibold py-6 rounded-xl btn-active-press mt-2">
                    Demander mon entretien de cadrage gratuit
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
