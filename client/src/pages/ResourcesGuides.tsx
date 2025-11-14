import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { FileText, Users, GraduationCap, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Resource {
  title: string;
  url: string;
}

interface ResourceCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  resources: Resource[];
}

export default function ResourcesGuides() {
  const categories: ResourceCategory[] = [
    {
      title: "For Students & Job Seekers",
      icon: <GraduationCap className="w-8 h-8" />,
      description: "Essential guides to help you understand career opportunities in the construction trades",
      resources: [
        {
          title: "MC3 Student Guide",
          url: "https://tradesfutures.org/wp-content/uploads/2025/06/Careers-in-the-Construction-Trades-Students-Guide-June-2025.pdf"
        },
        {
          title: "NABTU Guide for Students",
          url: "https://nabtu.org/wp-content/uploads/2017/08/MC3-in-Our-Schools-A-Guide-for-Students-and-Parents.pdf"
        }
      ]
    },
    {
      title: "For Parents & Families",
      icon: <Users className="w-8 h-8" />,
      description: "Resources to help families understand and support apprenticeship career paths",
      resources: [
        {
          title: "MC3 Parent Guide",
          url: "https://tradesfutures.org/wp-content/uploads/2025/06/Careers-in-the-Construction-Trades-Parents-Guide-June-2025.pdf"
        },
        {
          title: "NABTU Guide for Parents",
          url: "https://nabtu.org/wp-content/uploads/2017/08/MC3-in-Our-Schools-A-Guide-for-Students-and-Parents.pdf"
        }
      ]
    },
    {
      title: "For Counselors, Teachers & Partners",
      icon: <FileText className="w-8 h-8" />,
      description: "Professional resources for educators and workforce development professionals",
      resources: [
        {
          title: "Guide for School Counselors and CTE Teachers",
          url: "https://tradesfutures.org/wp-content/uploads/2025/07/Careers-in-the-Construction-Trades-Guide-for-School-Counselors-and-CTE-Teachers-July-2025-1.pdf"
        },
        {
          title: "NABTU Guide for CTE Teachers & Administrators",
          url: "https://nabtu.org/wp-content/uploads/2017/08/MC3-in-Our-Schools-A_Guide-for-CTE-and-Teachers.pdf"
        }
      ]
    },
    {
      title: "Frequently Asked Questions",
      icon: <HelpCircle className="w-8 h-8" />,
      description: "Common questions about building trades programs and apprenticeships",
      resources: [
        {
          title: "Building Trades Program Q&A",
          url: "https://nabtu.org/wp-content/uploads/2017/03/Building-Trades-MC3-Program-Q-and-A-April-1-2016.pdf"
        },
        {
          title: "TradesFutures FAQ",
          url: "https://tradesfutures.org/wp-content/uploads/2025/08/TradesFutures-FAQ-in-schools-updated-8.25.pdf"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="heading-resources">
              Resources & Guides
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl" data-testid="text-description">
              Comprehensive guides and resources for students, families, and educators exploring careers in the construction trades.
            </p>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover-elevate"
                  data-testid={`card-category-${index}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-primary flex-shrink-0">
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-medium mb-2" data-testid={`heading-category-${index}`}>
                        {category.title}
                      </h2>
                      <p className="text-muted-foreground text-sm mb-4">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {category.resources.map((resource, resourceIndex) => (
                      <div key={resourceIndex} className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-foreground hover:text-primary transition-colors underline decoration-transparent hover:decoration-current"
                          data-testid={`link-resource-${index}-${resourceIndex}`}
                        >
                          {resource.title}
                        </a>
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          data-testid={`button-download-${index}-${resourceIndex}`}
                        >
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Download
                          </a>
                        </Button>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* Additional Info Section */}
            <Card className="mt-12 p-8 bg-muted/50" data-testid="card-additional-info">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-medium mb-4">
                  About These Resources
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    These guides are provided by TradesFutures and the North America's Building Trades Unions (NABTU) to help students, families, and educators understand the opportunities available in construction apprenticeship programs.
                  </p>
                  <p>
                    <strong className="text-foreground">MC3 (Multi-Craft Core Curriculum)</strong> is a nationally recognized pre-apprenticeship training program that prepares students for careers in the construction industry through hands-on learning and classroom instruction.
                  </p>
                  <p>
                    All documents are provided in PDF format and can be downloaded for offline reference. If you have questions about any of these resources, please contact your school counselor or reach out to the programs directly.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
