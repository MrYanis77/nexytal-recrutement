import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Entreprises from "./pages/Entreprises";
import Candidats from "./pages/Candidats";
import Offres from "./pages/Offres";
import DetailOffre from "./pages/DetailOffre";
import Coaching from "./pages/Coaching";
import APropos from "./pages/APropos";
import Ressources from "./pages/Ressources";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/entreprises" component={Entreprises} />
      <Route path="/candidats" component={Candidats} />
      <Route path="/offres" component={Offres} />
      <Route path="/offres/:id" component={DetailOffre} />
      <Route path="/coaching" component={Coaching} />
      <Route path="/a-propos" component={APropos} />
      <Route path="/ressources" component={Ressources} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster position="top-center" closeButton richColors />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
