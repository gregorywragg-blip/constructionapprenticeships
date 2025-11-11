import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Award, Briefcase, Clock, DollarSign } from "lucide-react";
import { Link } from "wouter";

export default function RaisingTheBar() {
  const highlights = [
    {
      icon: DollarSign,
      title: "Completely Free",
      description: "No cost for participants - fully funded by CTWI"
    },
    {
      icon: Clock,
      title: "6-Week Program",
      description: "Comprehensive training including MC3 curriculum"
    },
    {
      icon: Award,
      title: "Industry Certifications",
      description: "Earn OSHA 10, CPR/First Aid, and MC3 Certificate"
    },
    {
      icon: Users,
      title: "Direct Union Access",
      description: "Meet union representatives and contractors"
    }
  ];

  const features = [
    {
      icon: Briefcase,
      title: "Hands-On Skills Training",
      description: "Practical experience with construction tools and techniques used in the trades"
    },
    {
      icon: Users,
      title: "Jobsite Tours",
      description: "Visit active construction sites and meet working professionals in various trades"
    },
    {
      icon: CheckCircle2,
      title: "Interview Preparation",
      description: "Get ready for apprenticeship interviews with mock interviews and feedback"
    },
    {
      icon: Award,
      title: "Math Refreshers",
      description: "Construction math practice to help you pass apprenticeship entrance exams"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Raising the Bar</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                CTWI's flagship pre-apprenticeship program preparing DC & Maryland residents for successful union construction careers
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-16">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <YouTubeEmbed videoId="_Kt9esc4hLs" title="Raising the Bar Pre-Apprenticeship Program" />
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Watch our program overview to learn how Raising the Bar can launch your construction career
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {highlights.map((highlight, index) => (
                <Card key={index} className="text-center">
                  <CardHeader className="gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{highlight.title}</CardTitle>
                    <CardDescription className="text-sm">{highlight.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">What You'll Get</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => (
                <Card key={index} className="hover-elevate">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center shrink-0">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-2xl">Program Curriculum</CardTitle>
                <CardDescription>
                  Raising the Bar uses the Multi-Craft Core Curriculum (MC3) developed by North America's Building Trades Unions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Workplace Safety & OSHA 10 Certification</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Construction Math and Blueprint Reading</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Hand & Power Tools Training</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Trade Awareness (14+ Construction Trades)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Professional Development & Employability Skills</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Financial Literacy & Career Planning</span>
                </div>
                <div className="pt-4">
                  <Link href="/mc3">
                    <Button variant="outline" size="lg" data-testid="button-learn-mc3">
                      Learn More About MC3
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
