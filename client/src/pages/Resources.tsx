import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResourceCard from "@/components/ResourceCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Resources() {
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [showAssessment, setShowAssessment] = useState(true);

  const needs = [
    { value: "housing", label: "Housing Assistance" },
    { value: "food", label: "Food Assistance" },
    { value: "rehab", label: "Drug/Alcohol Treatment" },
    { value: "transport", label: "Transportation" },
    { value: "childcare", label: "Childcare" },
    { value: "healthcare", label: "Healthcare" },
  ];

  const handleNeedToggle = (value: string) => {
    setSelectedNeeds(prev =>
      prev.includes(value)
        ? prev.filter(n => n !== value)
        : [...prev, value]
    );
  };

  const resources = [
    {
      id: "1",
      name: "DC Housing Search",
      category: "Housing",
      description: "Free affordable housing listings and search engine for DC residents.",
      phone: "(202) 399-7093",
      website: "https://dchousingsearch.org",
    },
    {
      id: "2",
      name: "Maryland Emergency Rental Assistance",
      category: "Housing",
      description: "Emergency rental assistance for Maryland residents facing housing insecurity.",
      phone: "(877) 546-5595",
      website: "https://marylandaccesspoint.211md.org",
    },
    {
      id: "3",
      name: "DC 2-1-1 Warmline",
      category: "Food",
      description: "Dial 211 for food assistance program referrals and emergency food resources.",
      phone: "211",
      website: "https://211warmline.dc.gov",
    },
    {
      id: "4",
      name: "Recovery Centers of America - Capital Region",
      category: "Substance Abuse",
      description: "Inpatient/outpatient treatment serving DC, MD, and VA. Accepts most insurance.",
      phone: "(844) 928-5534",
      website: "https://recoverycentersofamerica.com/locations/waldorf-maryland/",
      address: "Waldorf, MD",
    },
    {
      id: "5",
      name: "Maryland Addiction Recovery Center",
      category: "Substance Abuse",
      description: "Long-term treatment with medication-assisted treatment (MAT) options.",
      phone: "(410) 773-0500",
      address: "8600 Lasalle Rd #212, Towson, MD 21286",
    },
    {
      id: "6",
      name: "SAMHSA National Helpline",
      category: "Substance Abuse",
      description: "24/7 national treatment referral and information service for substance abuse.",
      phone: "(800) 662-4357",
    },
  ];

  const filteredResources = selectedNeeds.length === 0
    ? resources
    : resources.filter(resource => {
        if (selectedNeeds.includes("housing") && resource.category === "Housing") return true;
        if (selectedNeeds.includes("food") && resource.category === "Food") return true;
        if (selectedNeeds.includes("rehab") && resource.category === "Substance Abuse") return true;
        return false;
      });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Support Resources</h1>
            <p className="text-xl text-muted-foreground">
              Access assistance programs to support your journey to apprenticeship
            </p>
          </div>

          {showAssessment && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">What support do you need?</CardTitle>
                <CardDescription>
                  Select all that apply to get personalized resource recommendations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {needs.map(need => (
                    <div key={need.value} className="flex items-center space-x-2">
                      <Checkbox
                        id={need.value}
                        checked={selectedNeeds.includes(need.value)}
                        onCheckedChange={() => handleNeedToggle(need.value)}
                        data-testid={`checkbox-${need.value}`}
                      />
                      <Label
                        htmlFor={need.value}
                        className="cursor-pointer text-base"
                      >
                        {need.label}
                      </Label>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <Button
                    variant="default"
                    onClick={() => setShowAssessment(false)}
                    data-testid="button-show-resources"
                  >
                    Show Resources
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedNeeds([])}
                    data-testid="button-clear-selection"
                  >
                    Clear Selection
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {!showAssessment && selectedNeeds.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm text-muted-foreground">Showing resources for:</span>
                {selectedNeeds.map(need => (
                  <Badge key={need} variant="secondary">
                    {needs.find(n => n.value === need)?.label}
                  </Badge>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAssessment(true)}
                  data-testid="button-edit-needs"
                >
                  Edit
                </Button>
              </div>
            </div>
          )}

          <div className="mb-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
            <h3 className="font-bold text-lg mb-2">Emergency Hotline: Dial 2-1-1</h3>
            <p className="text-muted-foreground">
              Call 211 or (866) 730-2563 for immediate assistance with housing, food, healthcare, and other social services in DC & Maryland.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredResources.map(resource => (
              <ResourceCard key={resource.id} {...resource} />
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Select your support needs above to see relevant resources.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
