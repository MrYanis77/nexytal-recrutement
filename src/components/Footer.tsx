import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Linkedin, Twitter, Mail, MapPin, Phone, 
  ArrowUp, ShieldCheck, CheckCircle2, ArrowRight 
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Inscription réussie ! Vous recevrez nos prochains insights tech.");
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-nexytal-navy text-slate-300 border-t border-slate-800">
      {/* Section Newsletter & Accompagnement rapide */}
      <div className="border-b border-slate-800 py-12 md:py-16">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-nexytal-blue text-xs font-bold tracking-wider uppercase">Newsletter insights</span>
            <h3 className="text-white text-2xl md:text-3xl font-display font-bold mt-2 mb-4 leading-tight">
              Comprendre le marché IT pour mieux recruter et évoluer
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
              Chaque semaine, recevez notre analyse des salaires IT, des conseils de recrutement cybersécurité, cloud, data, et nos insights d'accompagnement d'équipes.
            </p>
          </div>
          <div className="lg:col-span-6">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Votre adresse email professionnelle" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-slate-900/60 border-slate-800 text-white placeholder:text-slate-500 rounded-xl py-6 focus-visible:ring-nexytal-blue"
              />
              <Button type="submit" className="bg-nexytal-blue text-white hover:bg-sky-400 font-semibold px-6 py-6 rounded-xl transition-all duration-150 active:scale-97 shrink-0 flex items-center gap-2">
                S'abonner <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
            <p className="text-[10px] text-slate-500 mt-3 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              En vous abonnant, vous acceptez notre politique de confidentialité. Désinscription en 1 clic.
            </p>
          </div>
        </div>
      </div>

      {/* Colonnes de liens principaux */}
      <div className="py-16 md:py-20">
        <div className="container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Marque & Coordonnées */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-display font-extrabold text-xl tracking-tight text-white flex items-center">
                NEXYTAL<span className="text-nexytal-blue ml-1">RECRUTEMENT</span>
                <span className="bg-nexytal-blue text-white text-[9px] px-1.5 py-0.5 rounded ml-1.5 font-sans font-bold">IT</span>
              </span>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Cabinet de recrutement premium né de la tech, pour la tech. Nous connectons les entreprises aux meilleurs profils IT, IA, cybersécurité, cloud, data, DevOps et infrastructures.
            </p>
            <div className="flex flex-col gap-3.5 text-xs text-slate-400">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <MapPin className="w-4 h-4 text-nexytal-blue shrink-0" />
                <span>Paris, France (Interventions nationales)</span>
              </a>
              <a href="tel:+33100000000" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-nexytal-blue shrink-0" />
                <span>+33 (0)1 00 00 00 00</span>
              </a>
              <a href="mailto:contact@nexytal.com" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-nexytal-blue shrink-0" />
                <span>contact@nexytal.com</span>
              </a>
            </div>
            {/* Réseaux sociaux */}
            <div className="flex items-center gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900 rounded-xl hover:bg-nexytal-blue hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900 rounded-xl hover:bg-nexytal-blue hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Colonne Entreprises */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-5">
            <h4 className="text-white text-xs font-bold tracking-wider uppercase font-display">Entreprises</h4>
            <ul className="flex flex-col gap-3 text-xs text-slate-400">
              <li><Link href="/entreprises" className="hover:text-white transition-colors">Nos services de recrutement</Link></li>
              <li><Link href="/entreprises#chasse" className="hover:text-white transition-colors">Chasse de têtes Executive</Link></li>
              <li><Link href="/entreprises#regie" className="hover:text-white transition-colors">Régie & Mise à disposition</Link></li>
              <li><Link href="/entreprises#contact" className="hover:text-white transition-colors">Déposer un besoin IT</Link></li>
              <li><Link href="/coaching" className="hover:text-white transition-colors">Coaching & Équipes Tech</Link></li>
            </ul>
          </div>

          {/* Colonne Candidats */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-5">
            <h4 className="text-white text-xs font-bold tracking-wider uppercase font-display">Candidats</h4>
            <ul className="flex flex-col gap-3 text-xs text-slate-400">
              <li><Link href="/offres" className="hover:text-white transition-colors">Voir toutes nos offres d'emploi</Link></li>
              <li><Link href="/candidats#deposer-cv" className="hover:text-white transition-colors">Candidature spontanée</Link></li>
              <li><Link href="/candidats#cooptation" className="hover:text-white transition-colors">Coopter un talent (prime)</Link></li>
              <li><Link href="/coaching#candidats" className="hover:text-white transition-colors">Accompagnement & Carrière</Link></li>
              <li><Link href="/ressources" className="hover:text-white transition-colors">Préparer ses entretiens tech</Link></li>
            </ul>
          </div>

          {/* Colonne Expertises */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-5">
            <h4 className="text-white text-xs font-bold tracking-wider uppercase font-display">Nos Expertises</h4>
            <ul className="flex flex-col gap-3 text-xs text-slate-400">
              <li><Link href="/expertises/cyber" className="hover:text-white transition-colors">Cybersécurité</Link></li>
              <li><Link href="/expertises/devops-cloud" className="hover:text-white transition-colors">DevOps & Cloud</Link></li>
              <li><Link href="/expertises/ia-data" className="hover:text-white transition-colors">IA & Data Science</Link></li>
              <li><Link href="/expertises/reseaux-infra" className="hover:text-white transition-colors">Infrastructures & Réseaux</Link></li>
              <li><Link href="/expertises" className="hover:text-white transition-colors">Toutes nos spécialités IT</Link></li>
            </ul>
          </div>

          {/* Colonne Ressources */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-5">
            <h4 className="text-white text-xs font-bold tracking-wider uppercase font-display">Ressources</h4>
            <ul className="flex flex-col gap-3 text-xs text-slate-400">
              <li><Link href="/ressources" className="hover:text-white transition-colors">Blog & Insights</Link></li>
              <li><Link href="/ressources#salaires" className="hover:text-white transition-colors">Grille des salaires IT 2026</Link></li>
              <li><Link href="/ressources#guides" className="hover:text-white transition-colors">Guides de recrutement</Link></li>
              <li><Link href="/a-propos" className="hover:text-white transition-colors">Le cabinet Nexytal</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ Recrutement IT</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bas de footer : mentions, copyright, retour haut de page */}
      <div className="border-t border-slate-800/80 py-8 text-xs text-slate-500">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            <span>© {new Date().getFullYear()} Nexytal Recrutement IT. Tous droits réservés.</span>
            <Link href="/mentions-legales" className="hover:text-slate-300 transition-colors">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-slate-300 transition-colors">Politique de confidentialité</Link>
            <Link href="/cookies" className="hover:text-slate-300 transition-colors">Cookies</Link>
            <Link href="/accessibilite" className="hover:text-slate-300 transition-colors">Accessibilité (Partiellement conforme)</Link>
          </div>
          <button 
            onClick={scrollToTop}
            className="p-3 bg-slate-900 text-slate-400 hover:text-white hover:bg-nexytal-blue rounded-xl transition-all duration-150 active:scale-95 group flex items-center gap-1.5"
            aria-label="Retour en haut de page"
          >
            <span className="text-[10px] font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">Haut</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
