import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, ArrowLeft } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { usePageLogger } from "@/hooks/use-page-logger";
import { useEffect } from "react";

export default function Page2() {
  const [, setLocation] = useLocation();
  const { status } = useAuth();
  usePageLogger('/page2', 'Visited page 2');

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
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-3xl">Page 2</CardTitle>
                <CardDescription>Secure Dashboard</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              This is another protected page requiring authentication to access.
            </p>
            
            <div className="bg-muted p-6 rounded-lg space-y-3">
              <h3 className="font-semibold text-lg">Security Features</h3>
              <p className="text-sm text-muted-foreground">
                The authentication system includes several security best practices:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-background p-4 rounded-md">
                  <h4 className="font-medium mb-2">Session Management</h4>
                  <p className="text-xs text-muted-foreground">
                    Sessions are managed server-side with secure cookies
                  </p>
                </div>
                <div className="bg-background p-4 rounded-md">
                  <h4 className="font-medium mb-2">HTTP-Only Cookies</h4>
                  <p className="text-xs text-muted-foreground">
                    Cookies cannot be accessed via JavaScript
                  </p>
                </div>
                <div className="bg-background p-4 rounded-md">
                  <h4 className="font-medium mb-2">Credential Validation</h4>
                  <p className="text-xs text-muted-foreground">
                    Username and password verified against approved list
                  </p>
                </div>
                <div className="bg-background p-4 rounded-md">
                  <h4 className="font-medium mb-2">Auto Logout</h4>
                  <p className="text-xs text-muted-foreground">
                    Sessions expire after 24 hours of inactivity
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Link href="/page1">
                <Button variant="default" data-testid="link-page1">
                  Go to Page 1
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
