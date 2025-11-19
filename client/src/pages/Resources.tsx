import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Car, 
  Leaf, 
  IdCard, 
  Pill, 
  Home, 
  Heart, 
  Baby, 
  UtensilsCrossed, 
  Scale, 
  Bus, 
  FileCheck, 
  ShoppingBag, 
  GraduationCap 
} from "lucide-react";

type BarrierCategory = {
  id: string;
  title: string;
  description: string;
  pdfPath: string;
  icon: typeof FileText;
};

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const barrierCategories: BarrierCategory[] = [
    {
      id: "car-ownership",
      title: "Car Ownership & Repair Assistance",
      description: "Low-cost vehicle programs and repair assistance for employment",
      pdfPath: "/attached_assets/Car Ownership Repairs_1763590000737.pdf",
      icon: Car,
    },
    {
      id: "quit-cannabis",
      title: "Quit Cannabis",
      description: "Resources to help you pass drug tests and stay clean",
      pdfPath: "/attached_assets/Quit Cannabis_1763590000738.pdf",
      icon: Leaf,
    },
    {
      id: "drivers-license",
      title: "Obtain Driver's License",
      description: "Workforce programs that pay for driving school and licensing",
      pdfPath: "/attached_assets/OBTAIN DRIVER'S LICENSE_1763590000738.pdf",
      icon: IdCard,
    },
    {
      id: "quit-alcohol-drugs",
      title: "Quit Alcohol and/or Drugs",
      description: "Treatment programs and recovery centers in DC & Maryland",
      pdfPath: "/attached_assets/QUIT ALCOHOL DRUGS_1763590000738.pdf",
      icon: Pill,
    },
    {
      id: "shelter",
      title: "Shelter Sufficiency",
      description: "Emergency shelter, rent assistance, and tenant rights",
      pdfPath: "/attached_assets/SHELTER SUFFICIENCY_1763590000738.pdf",
      icon: Home,
    },
    {
      id: "healthcare",
      title: "Healthcare",
      description: "Health insurance programs and community health centers",
      pdfPath: "/attached_assets/HEALTHCARE_1763590000738.pdf",
      icon: Heart,
    },
    {
      id: "childcare",
      title: "Childcare Resources",
      description: "Subsidies and programs for working families",
      pdfPath: "/attached_assets/CHILDCARE RESOURCES_1763590000739.pdf",
      icon: Baby,
    },
    {
      id: "food",
      title: "Food Assistance",
      description: "Emergency food pantries, SNAP benefits, and meal programs",
      pdfPath: "/attached_assets/FOOD ASSISTANCE_1763590000739.pdf",
      icon: UtensilsCrossed,
    },
    {
      id: "record-expungement",
      title: "Record Expungement",
      description: "Free legal help to clear your criminal record",
      pdfPath: "/attached_assets/Record Expungement_1763590000739.pdf",
      icon: Scale,
    },
    {
      id: "transportation",
      title: "Transportation",
      description: "Transit discounts, medical rides, and commuter assistance",
      pdfPath: "/attached_assets/TRANSPORTATION_1763590000739.pdf",
      icon: Bus,
    },
    {
      id: "vital-documents",
      title: "Vital Documents",
      description: "Help obtaining IDs and birth certificates",
      pdfPath: "/attached_assets/Vital Documents_1763590000740.pdf",
      icon: FileCheck,
    },
    {
      id: "work-gear",
      title: "Work Gear & Tools",
      description: "Free or subsidized boots, uniforms, and safety equipment",
      pdfPath: "/attached_assets/Work Gear_1763590000740.pdf",
      icon: ShoppingBag,
    },
    {
      id: "adult-education",
      title: "Adult Education",
      description: "GED programs, literacy classes, and ESL courses",
      pdfPath: "/attached_assets/Adult Education_1763590000740.pdf",
      icon: GraduationCap,
    },
  ];

  const selectedCategoryData = barrierCategories.find(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Supportive Services</h1>
            <p className="text-xl text-muted-foreground mb-4">
              Overcoming barriers to apprenticeship starts here. Select a category below to view resources.
            </p>
            
            <Card className="bg-primary/10 border-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  How to Use This Page
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  <strong>1.</strong> Click on any barrier category below that applies to your situation
                </p>
                <p>
                  <strong>2.</strong> The full resource guide will appear in the viewer below the categories
                </p>
                <p>
                  <strong>3.</strong> Scroll through the PDF to find contact information, addresses, and eligibility details
                </p>
                <p className="text-muted-foreground italic">
                  Note: Only one resource guide can be displayed at a time. Click a different category to switch.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Select a Barrier to Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {barrierCategories.map((category) => {
                const Icon = category.icon;
                const isSelected = selectedCategory === category.id;
                
                return (
                  <Card
                    key={category.id}
                    className={`cursor-pointer transition-all hover-elevate active-elevate-2 ${
                      isSelected ? 'border-primary border-2 bg-primary/5' : ''
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                    data-testid={`barrier-card-${category.id}`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-3 flex-1">
                          <div className={`p-2 rounded-lg ${isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <CardTitle className="text-base leading-tight">
                            {category.title}
                          </CardTitle>
                        </div>
                        {isSelected && (
                          <Badge variant="default" className="text-xs">
                            Selected
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">
                        {category.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {selectedCategoryData && (
            <div className="mb-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {(() => {
                        const Icon = selectedCategoryData.icon;
                        return <Icon className="w-6 h-6 text-primary" />;
                      })()}
                      <div>
                        <CardTitle className="text-2xl">
                          {selectedCategoryData.title}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          Scroll through the resource guide below for detailed information
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="w-full" style={{ height: '800px' }}>
                    <iframe
                      src={selectedCategoryData.pdfPath}
                      className="w-full h-full border-0 rounded-md"
                      title={`${selectedCategoryData.title} Resource Guide`}
                      data-testid="pdf-viewer"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {!selectedCategory && (
            <div className="text-center py-12 bg-muted/30 rounded-lg">
              <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg text-muted-foreground">
                Select a barrier category above to view the resource guide
              </p>
            </div>
          )}

          <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
            <h3 className="font-bold text-lg mb-2">Emergency Hotline: Dial 2-1-1</h3>
            <p className="text-muted-foreground">
              Call 211 or (866) 730-2563 for immediate assistance with housing, food, healthcare, and other social services in DC & Maryland.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
