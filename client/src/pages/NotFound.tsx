import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container text-center flex flex-col items-center gap-6 max-w-md">
          <span className="text-8xl font-display font-extrabold text-slate-200 select-none">404</span>
          
          <h1 className="text-2xl md:text-3xl font-display font-extrabold text-nexytal-navy">
            Page introuvable
          </h1>
          
          <p className="text-nexytal-muted text-xs md:text-sm leading-relaxed">
            La page que vous recherchez a peut-être été déplacée, supprimée ou n'existe plus. Nos équipes de recrutement et de cybersécurité restent néanmoins à votre écoute !
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center mt-2">
            <Link href="/">
              <Button className="bg-nexytal-navy text-white hover:bg-nexytal-blue font-semibold px-5 py-5 rounded-xl btn-active-press w-full sm:w-auto flex items-center justify-center gap-1.5 text-xs">
                <Home className="w-4 h-4" /> Retour à l'accueil
              </Button>
            </Link>
            <Link href="/offres">
              <Button variant="outline" className="border-slate-200 text-nexytal-navy hover:bg-white font-semibold px-5 py-5 rounded-xl w-full sm:w-auto flex items-center justify-center gap-1.5 text-xs">
                <ArrowLeft className="w-4 h-4" /> Voir les offres d'emploi
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
