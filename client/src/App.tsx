import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { HelmetProvider } from 'react-helmet-async';
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Ansatz from "./pages/Ansatz";
import WeitereEinsatzfelder from "./pages/WeitereEinsatzfelder";
import About from "./pages/About";
import Imprint from "./pages/Imprint";
import Privacy from "./pages/Privacy";
import AdminDashboard from "./pages/AdminDashboard";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/hotels"} component={Hotels} />
      <Route path={"/ansatz"} component={Ansatz} />
      <Route path={"/weitere-einsatzfelder"} component={WeitereEinsatzfelder} />
      <Route path={"/about"} component={About} />
      <Route path={"/impressum"} component={Imprint} />
      <Route path={"/datenschutz"} component={Privacy} />
      <Route path={"/imprint"} component={Imprint} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/admin"} component={AdminDashboard} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider
          defaultTheme="light"
          // switchable
        >
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
