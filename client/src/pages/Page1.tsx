import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { FileText, ArrowLeft } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { usePageLogger } from "@/hooks/use-page-logger";
import { useEffect } from "react";

export default function Page1() {
  const [, setLocation] = useLocation();
  const { status } = useAuth();
  usePageLogger('/page1', 'Visited page 1');

  useEffect(() => {
    if (status === 'unauthenticated' || status === 'error') {
      setLocation('/');
    }
  }, [status, setLocation]);

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

  if (status !== 'authenticated') {
    return null;
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <Link href="/">
          <Button variant="ghost" size="sm" data-testid="button-back">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-3xl">Page 1</CardTitle>
                <CardDescription>Protected Content Area</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              This is a protected page that can only be accessed when you are logged in.
            </p>
            
            <div className="bg-muted p-6 rounded-lg space-y-3">
              <h3 className="font-semibold text-lg">Example Protected Content</h3>
              <p className="text-sm text-muted-foreground">
                This page demonstrates session-based authentication. Only users who have successfully
                logged in with valid credentials can view this content.
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Session data is stored server-side</li>
                <li>Cookies are HTTP-only for security</li>
                <li>Authentication is checked on every request</li>
                <li>Users must re-login after session expires</li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Link href="/page2">
                <Button variant="default" data-testid="link-page2">
                  Go to Page 2
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" data-testid="link-home">
                  Return Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
