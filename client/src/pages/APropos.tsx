import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Award, CheckCircle2, ShieldCheck, Zap, Users, 
  ArrowRight, Compass, Heart, Eye, Target
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function APropos() {
  const values = [
    {
      icon: Eye,
      title: "Transparence",
      desc: "Nous partageons des retours honnêtes et constructifs avec nos clients et candidats à chaque étape du processus de recrutement."
    },
    {
      icon: Target,
      title: "Précision technique",
      desc: "Nos consultants comprennent réellement les technologies pour lesquelles ils recrutent, garantissant des shortlists ultra-qualifiées."
    },
    {
      icon: Heart,
      title: "Humain d'abord",
      desc: "Le recrutement est une aventure humaine. Nous valorisons la personnalité, les soft skills et l'alignement culturel autant que la technique."
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Brief & Immersion",
      desc: "Nous cadrons précisément votre besoin en nous immergeant dans votre culture d'entreprise, votre stack technique et vos objectifs de croissance."
    },
    {
      step: "02",
      title: "Sourcing & Approche directe",
      desc: "Nos consultants spécialisés activent notre réseau exclusif et approchent directement les meilleurs talents en poste en toute discrétion."
    },
    {
      step: "03",
      title: "Évaluation & Shortlist",
      desc: "Nous menons des entretiens approfondis (techniques et soft skills) et vous présentons une shortlist de 3 profils qualifiés sous 10 jours."
    },
    {
      step: "04",
      title: "Intégration & Suivi",
      desc: "Nous vous accompagnons dans la négociation finale et assurons un suivi d'intégration régulier du candidat durant ses 6 premiers mois."
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
              <span className="px-3 py-1.5 bg-slate-100 text-nexytal-navy rounded-full text-xs font-bold uppercase tracking-wider w-fit">Le Cabinet Nexytal</span>
              <h1 className="text-4xl md:text-5xl font-display font-extrabold leading-tight text-nexytal-navy">
                Né de la tech, pour la tech
              </h1>
              <p className="text-nexytal-muted text-base md:text-lg leading-relaxed">
                Nexytal est un cabinet de recrutement et d'accompagnement RH premium spécialisé dans les métiers de l'IT, de l'IA, de la cybersécurité, du cloud et des infrastructures sécurisées. Notre mission est de connecter les plus beaux projets technologiques aux meilleurs talents.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION NOTRE VISION */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 flex flex-col gap-6">
                <span className="px-3 py-1.5 bg-slate-100 text-nexytal-navy rounded-full text-xs font-bold uppercase tracking-wider w-fit">Notre Vision</span>
                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-nexytal-navy">
                  Le recrutement IT mérite de la précision
                </h2>
                <p className="text-nexytal-muted text-sm md:text-base leading-relaxed">
                  Face à la pénurie de profils qualifiés et à la complexité croissante des technologies, les méthodes de recrutement traditionnelles ne suffisent plus. Chez Nexytal, nous pensons qu'un bon recruteur IT doit être capable de parler d'architecture Kubernetes avec un DevOps, de normes ISO avec un CISO ou de modèles de deep learning avec un Data Scientist.
                </p>
                <p className="text-nexytal-muted text-sm leading-relaxed">
                  C'est pourquoi tous nos consultants sont des experts de leurs verticales technologiques respectives. Cette spécialisation nous permet de comprendre réellement vos enjeux métiers et de préqualifier techniquement chaque candidat avec rigueur.
                </p>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 gap-6">
                {values.map((val, idx) => {
                  const Icon = val.icon;
                  return (
                    <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm flex gap-4 items-start">
                      <div className="p-3 bg-sky-50 text-nexytal-blue rounded-xl shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-base text-nexytal-navy">{val.title}</h3>
                        <p className="text-xs text-nexytal-muted mt-2 leading-relaxed">{val.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION MÉTHODE EN 4 ÉTAPES */}
        <section className="bg-white py-20 md:py-28 border-y border-slate-200/60">
          <div className="container">
            <div className="text-center flex flex-col items-center gap-4 mb-16">
              <span className="px-3 py-1.5 bg-slate-100 text-nexytal-navy rounded-full text-xs font-bold uppercase tracking-wider">Notre Méthode</span>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-nexytal-navy">
                Un processus de recrutement de haute précision
              </h2>
              <p className="text-nexytal-muted text-sm md:text-base max-w-xl leading-relaxed">
                Notre rigueur méthodologique garantit la qualité de nos shortlists et la pérennité de vos recrutements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col gap-4 relative">
                  <span className="text-5xl font-display font-extrabold text-slate-100 select-none">{step.step}</span>
                  <h3 className="font-display font-bold text-base text-nexytal-navy mt-1">{step.title}</h3>
                  <p className="text-xs text-nexytal-muted leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION REJOINDRE L'AVENTURE */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 text-center flex flex-col items-center gap-6 max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-nexytal-blue/10 to-transparent rounded-bl-full pointer-events-none" />
              
              <span className="px-3 py-1.5 bg-nexytal-blue/20 text-nexytal-blue rounded-full text-xs font-bold uppercase tracking-wider w-fit">Travaillons ensemble</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold max-w-2xl leading-tight">
                Prêt à accélérer vos recrutements technologiques ?
              </h2>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-xl">
                Que vous soyez une entreprise à la recherche de son futur talent IT ou un professionnel en quête d'un nouveau défi, nos experts sont à votre écoute.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
                <Link href="/entreprises#contact">
                  <Button className="bg-nexytal-blue text-white hover:bg-sky-400 font-semibold px-6 py-6 rounded-xl transition-all duration-150 active:scale-97">
                    Je suis une entreprise
                  </Button>
                </Link>
                <Link href="/offres">
                  <Button variant="outline" className="border-slate-800 text-white hover:bg-slate-800 font-semibold px-6 py-6 rounded-xl">
                    Je suis un candidat
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
