import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useDarkModeSchedule } from "./hooks/useDarkModeSchedule";
import Home from "./pages/Home";
import Transcript01Overview from "./pages/Transcript01Overview";
import Transcript01Flow from "./pages/Transcript01Flow";
import Transcript02Overview from "./pages/Transcript02Overview";
import Transcript02Flow from "./pages/Transcript02Flow";
import Transcript03Overview from "./pages/Transcript03Overview";
import Transcript03Flow from "./pages/Transcript03Flow";
import Transcript04Overview from "./pages/Transcript04Overview";
import Transcript04Flow from "./pages/Transcript04Flow";
import Transcript05Overview from "./pages/Transcript05Overview";
import Transcript05Flow from "./pages/Transcript05Flow";
import Bibliography from "./pages/Bibliography";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/transcript/01/overview" component={Transcript01Overview} />
      <Route path="/transcript/01/flow" component={Transcript01Flow} />
      <Route path="/transcript/02/overview" component={Transcript02Overview} />
      <Route path="/transcript/02/flow" component={Transcript02Flow} />
      <Route path="/transcript/03/overview" component={Transcript03Overview} />
      <Route path="/transcript/03/flow" component={Transcript03Flow} />
      <Route path="/transcript/04/overview" component={Transcript04Overview} />
      <Route path="/transcript/04/flow" component={Transcript04Flow} />
      <Route path="/transcript/05/overview" component={Transcript05Overview} />
      <Route path="/transcript/05/flow" component={Transcript05Flow} />
      <Route path="/bibliography" component={Bibliography} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function AppContent() {
  useDarkModeSchedule();
  return <Router />;
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <AppContent />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
