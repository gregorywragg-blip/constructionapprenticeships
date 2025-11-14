import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { GraduationCap, Users, Calculator, HeartHandshake, Building2, TrendingUp } from "lucide-react";
import mc3Image from "@assets/generated_images/MC3_training_classroom_session_b1a684c4.png";

export default function Home() {
  const features = [
    {
      icon: Building2,
      title: "Union Apprenticeships",
      description: "Searchable database of union construction programs across DC & Maryland",
      link: "/programs",
    },
    {
      icon: Users,
      title: "AI Career Matching",
      description: "Take our quiz to find the perfect apprenticeship based on your skills and interests",
      link: "/quiz",
    },
    {
      icon: HeartHandshake,
      title: "Support Resources",
      description: "Access housing, rehab, food assistance, and other services to help you succeed",
      link: "/resources",
    },
    {
      icon: Calculator,
      title: "Math Practice Center",
      description: "Master construction math with 50+ interactive questions and tutorials",
      link: "/math",
    },
    {
      icon: GraduationCap,
      title: "MC3 Training Info",
      description: "Learn about the Multi-Craft Core Curriculum pre-apprenticeship program",
      link: "/mc3",
    },
    {
      icon: TrendingUp,
      title: "Raising the Bar",
      description: "Free pre-apprenticeship cohort with hands-on training and union introductions",
      link: "/raising-the-bar",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />

      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Your Path to a Career in Construction</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to discover, prepare for, and succeed in union construction apprenticeships
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Link key={index} href={feature.link}>
                  <Card className="hover-elevate active-elevate-2 cursor-pointer h-full" data-testid={`card-feature-${index}`}>
                    <CardHeader className="gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">About Raising the Bar</h2>
                <p className="text-muted-foreground mb-6">
                  CTWI's flagship pre-apprenticeship program uses the Multi-Craft Core Curriculum (MC3) to prepare DC & Maryland residents for union construction careers.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span>Free for all participants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span>Hands-on skills training and jobsite tours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span>Interview preparation and math refreshers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span>OSHA 10 certification and direct union introductions</span>
                  </li>
                </ul>
                <Link href="/raising-the-bar">
                  <Button variant="default" size="lg" data-testid="button-learn-rtb">
                    Learn More About Raising the Bar
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img
                  src={mc3Image}
                  alt="MC3 training classroom"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
              <p className="text-xl mb-8 opacity-95">
                Take our career quiz to find the apprenticeship that's right for you
              </p>
              <Link href="/quiz">
                <Button
                  variant="secondary"
                  size="lg"
                  className="text-lg px-8"
                  data-testid="button-start-quiz"
                >
                  Take the Career Quiz
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
