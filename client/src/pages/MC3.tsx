import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Award, DollarSign, Users, Briefcase } from "lucide-react";
import mc3Image from "@assets/generated_images/MC3_training_classroom_session_b1a684c4.png";

export default function MC3() {
  const benefits = [
    { icon: DollarSign, title: "Tuition-Free", description: "Zero cost to participants - fully funded" },
    { icon: Clock, title: "120-160 Hours", description: "Typically 10 weeks of comprehensive training" },
    { icon: Award, title: "Certifications", description: "OSHA 10, CPR/First Aid, MC3 Certificate" },
    { icon: Users, title: "80% Placement", description: "Direct pathway to union apprenticeships" },
  ];

  const trades = [
    "Boilermakers", "Bricklayers", "Carpenters", "Cement Masons",
    "Electricians", "Elevator Constructors", "Glaziers", "Insulators",
    "Ironworkers", "Laborers", "Operating Engineers", "Painters",
    "Pipefitters", "Plumbers", "Roofers", "Sheet Metal Workers",
  ];

  const topics = [
    "Workplace Safety & OSHA 10 Certification",
    "Construction Math (Fractions, Measurements, Geometry)",
    "Blueprint Reading & Interpretation",
    "Hand & Power Tools Identification and Use",
    "Labor History & Union Heritage",
    "Diversity & Equal Employment Opportunity",
    "Trade Awareness (14+ Construction Trades)",
    "Professional Development & Employability Skills",
    "Financial Literacy & Career Planning",
    "Green Construction & Sustainable Practices",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Multi-Craft Core Curriculum (MC3)</h1>
              <p className="text-xl text-muted-foreground">
                A nationally recognized pre-apprenticeship program preparing you for union construction careers
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img
                  src={mc3Image}
                  alt="MC3 training classroom"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">What is MC3?</h2>
                <p className="text-muted-foreground mb-4">
                  The Multi-Craft Core Curriculum (MC3) is developed by North America's Building Trades Unions (NABTU) to provide foundational knowledge, hands-on training, and industry credentials.
                </p>
                <p className="text-muted-foreground mb-6">
                  This program gives you everything you need to succeed in a union apprenticeship, including safety certifications, construction math skills, and direct connections to local unions.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <Card key={index} className="text-center">
                      <CardHeader className="gap-2 pb-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                          <benefit.icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-base">{benefit.title}</CardTitle>
                        <CardDescription className="text-xs">{benefit.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Curriculum Topics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topics.map((topic, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-card-border">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Construction Trades Covered</h2>
              <p className="text-muted-foreground mb-6">
                MC3 provides exposure to 14+ skilled trades, helping you understand different career paths:
              </p>
              <div className="flex flex-wrap gap-2">
                {trades.map((trade, index) => (
                  <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                    {trade}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-3xl">Raising the Bar Program</CardTitle>
                  <CardDescription className="text-primary-foreground/90 text-lg">
                    CTWI's flagship pre-apprenticeship cohort in DC & Maryland
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Briefcase className="h-5 w-5 shrink-0 mt-1" />
                      <div>
                        <p className="font-medium mb-1">Hands-On Skills Training</p>
                        <p className="text-sm opacity-90">Practical experience with tools and techniques</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 shrink-0 mt-1" />
                      <div>
                        <p className="font-medium mb-1">Jobsite Tours</p>
                        <p className="text-sm opacity-90">Visit active construction sites and meet professionals</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-1" />
                      <div>
                        <p className="font-medium mb-1">Interview Preparation</p>
                        <p className="text-sm opacity-90">Get ready for apprenticeship interviews</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 shrink-0 mt-1" />
                      <div>
                        <p className="font-medium mb-1">Direct Union Introductions</p>
                        <p className="text-sm opacity-90">Meet union representatives and contractors</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={() => window.location.href = "tel:211"}
                      data-testid="button-contact-rtb"
                    >
                      Contact Raising the Bar Program
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
                  <CardDescription>
                    Contact your local Building & Construction Trades Council or call 2-1-1 to find MC3 programs in your area.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Find a local MC3 program</p>
                      <p className="text-sm text-muted-foreground">Contact your regional Building Trades Council</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-medium">Attend an info session</p>
                      <p className="text-sm text-muted-foreground">Sign up via program website or phone</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-medium">Complete assessments</p>
                      <p className="text-sm text-muted-foreground">Math test and drug screening</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-primary font-bold">4</span>
                    </div>
                    <div>
                      <p className="font-medium">Interview for enrollment</p>
                      <p className="text-sm text-muted-foreground">Final step to begin your training</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
