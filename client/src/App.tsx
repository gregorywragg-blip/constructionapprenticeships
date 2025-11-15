import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import Home from "@/pages/Home";
import Programs from "@/pages/Programs";
import Quiz from "@/pages/Quiz";
import Resources from "@/pages/Resources";
import ResourcesGuides from "@/pages/ResourcesGuides";
import MC3 from "@/pages/MC3";
import Math from "@/pages/Math";
import RaisingTheBar from "@/pages/RaisingTheBar";
import ExpressInterest from "@/pages/ExpressInterest";
import BFDC from "@/pages/BFDC";
import Login from "@/pages/Login";
import Page1 from "@/pages/Page1";
import Page2 from "@/pages/Page2";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/programs" component={Programs} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/resources" component={Resources} />
      <Route path="/resources-guides" component={ResourcesGuides} />
      <Route path="/mc3" component={MC3} />
      <Route path="/math" component={Math} />
      <Route path="/raising-the-bar" component={RaisingTheBar} />
      <Route path="/express-interest" component={ExpressInterest} />
      <Route path="/bf-dc" component={BFDC} />
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AuthenticatedApp() {
  const { status } = useAuth();

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-destructive">Authentication error. Please refresh the page.</p>
        </div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return <Login />;
  }

  return <Router />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <AuthenticatedApp />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
