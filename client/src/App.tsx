import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Programs from "@/pages/Programs";
import Quiz from "@/pages/Quiz";
import Resources from "@/pages/Resources";
import MC3 from "@/pages/MC3";
import Math from "@/pages/Math";
import RaisingTheBar from "@/pages/RaisingTheBar";
import ExpressInterest from "@/pages/ExpressInterest";
import BFDC from "@/pages/BFDC";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/programs" component={Programs} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/resources" component={Resources} />
      <Route path="/mc3" component={MC3} />
      <Route path="/math" component={Math} />
      <Route path="/raising-the-bar" component={RaisingTheBar} />
      <Route path="/express-interest" component={ExpressInterest} />
      <Route path="/bf-dc" component={BFDC} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
