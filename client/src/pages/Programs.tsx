import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgramCard from "@/components/ProgramCard";
import SearchFilter from "@/components/SearchFilter";
import DrugTestingDisclaimer from "@/components/DrugTestingDisclaimer";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function Programs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterToggle = (filter: string) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const programs = [
    {
      id: "1",
      name: "Boilermakers",
      trade: "Boilermaker",
      description: "Construction boilermaker training program for heavy industrial construction including power plants, refineries, and commercial buildings.",
      location: "DC/MD",
      website: "https://bdcbt.org/apprenticeship/boilermakers/",
      phone: "Call 2-1-1 for more information",
    },
    {
      id: "2",
      name: "Bricklayers & Allied Craftworkers",
      trade: "Masonry",
      description: "Training in bricklaying, stone masonry, tile setting, and restoration work for commercial and residential projects.",
      location: "DC/MD",
      website: "https://bdcbt.org/apprenticeship/bricklayers",
      phone: "Call 2-1-1 for more information",
    },
    {
      id: "3",
      name: "United Brotherhood of Carpenters",
      trade: "Carpentry",
      description: "Comprehensive carpentry training including framing, finishing, concrete forms, and cabinet making.",
      location: "DC/MD",
      website: "https://bdcbt.org/apprenticeship/carpenters/",
      phone: "Call 2-1-1 for more information",
      videoId: "KbkNul4wQH0",
    },
    {
      id: "4",
      name: "Cement Masons & Plasterers",
      trade: "Concrete",
      description: "Specialized training in concrete finishing, decorative concrete, and plastering techniques.",
      location: "DC/MD",
      website: "https://bdcbt.org/apprenticeship/cement-masons/",
      phone: "Call 2-1-1 for more information",
    },
    {
      id: "5",
      name: "IBEW Local 24 - Electrical Workers",
      trade: "Electrical",
      description: "5-year electrical apprenticeship program with on-the-job training and classroom instruction in commercial and industrial electrical work.",
      location: "DC/MD/VA",
      website: "https://bdcbt.org/apprenticeship/ibew-local-24",
      phone: "Call 2-1-1 for more information",
      videoId: "7mf4h7zB6Lg",
    },
    {
      id: "6",
      name: "Elevator Constructors",
      trade: "Elevator",
      description: "Training in installation, maintenance, and modernization of elevators, escalators, and moving walkways.",
      location: "DC/MD",
      website: "https://bdcbt.org/apprenticeship/elevator-constructors/",
      phone: "Call 2-1-1 for more information",
    },
    {
      id: "7",
      name: "Heat & Frost Insulators",
      trade: "Insulation",
      description: "Specialized training in mechanical insulation, fireproofing, and asbestos abatement for HVAC and industrial systems.",
      location: "DC/MD",
      website: "https://bdcbt.org/apprenticeship/insulators/",
      phone: "Call 2-1-1 for more information",
    },
    {
      id: "8",
      name: "Ironworkers",
      trade: "Structural Steel",
      description: "Training in structural steel erection, reinforcing steel placement, welding, and ornamental ironwork.",
      location: "DC/MD",
      website: "https://bdcbt.org/apprenticeship/ironworkers/",
      phone: "Call 2-1-1 for more information",
    },
    {
      id: "9",
      name: "LIUNA - Construction Laborers",
      trade: "General Labor",
      description: "Earn-as-you-learn program covering site preparation, concrete work, demolition, and general construction tasks.",
      location: "DC/MD",
      website: "https://bdcbt.org/apprenticeship/laborers/",
      phone: "Call 2-1-1 for more information",
      videoId: "nPRHgKGvKU8",
    },
    {
      id: "10",
      name: "Operating Engineers",
      trade: "Heavy Equipment",
      description: "Training in operation of cranes, bulldozers, excavators, and other heavy construction equipment.",
      location: "DC/MD",
      website: "https://bdcbt.org/apprenticeship/operating-engineers/",
      phone: "Call 2-1-1 for more information",
      videoId: "XiwRE77Y0zY",
    },
    {
      id: "11",
      name: "Painters & Allied Trades",
      trade: "Painting",
      description: "Training in commercial and industrial painting, wall covering, glazing, and finishing techniques.",
      location: "DC/MD",
      website: "https://bdcbt.org/apprenticeship/painters/",
      phone: "Call 2-1-1 for more information",
    },
    {
      id: "12",
      name: "United Association - Plumbers, Pipefitters, Steamfitters & Sprinklerfitters",
      trade: "Plumbing/HVAC",
      description: "Comprehensive training in plumbing, pipefitting, HVAC systems, and fire sprinkler installation.",
      location: "DC/MD",
      website: "https://bdcbt.org/apprenticeship/united-association",
      phone: "Call 2-1-1 for more information",
    },
    {
      id: "13",
      name: "Roofers",
      trade: "Roofing",
      description: "Training in commercial and residential roofing systems including flat roofs, shingles, and waterproofing.",
      location: "DC/MD",
      website: "https://bdcbt.org/apprenticeship/roofers/",
      phone: "Call 2-1-1 for more information",
    },
    {
      id: "14",
      name: "SMART - Sheet Metal Workers",
      trade: "Sheet Metal",
      description: "Training in HVAC fabrication and installation, architectural sheet metal, and welding.",
      location: "DC/MD",
      website: "https://bdcbt.org/apprenticeship/sheet-metal-workers/",
      phone: "Call 2-1-1 for more information",
      videoId: "z5LgZ-qy2bU",
    },
  ];

  const filters = [
    { value: "electrical", label: "Electrical" },
    { value: "carpentry", label: "Carpentry" },
    { value: "plumbing", label: "Plumbing/HVAC" },
    { value: "labor", label: "General Labor" },
    { value: "sheet metal", label: "Sheet Metal" },
    { value: "masonry", label: "Masonry" },
    { value: "concrete", label: "Concrete" },
    { value: "elevator", label: "Elevator" },
    { value: "insulation", label: "Insulation" },
    { value: "structural steel", label: "Structural Steel" },
    { value: "heavy equipment", label: "Heavy Equipment" },
    { value: "painting", label: "Painting" },
    { value: "roofing", label: "Roofing" },
    { value: "boilermaker", label: "Boilermaker" },
    { value: "dc", label: "DC" },
    { value: "maryland", label: "Maryland" },
  ];

  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.trade.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilters = selectedFilters.length === 0 || selectedFilters.some(filter => {
      if (filter === "dc" && program.location.includes("DC")) return true;
      if (filter === "maryland" && program.location.includes("MD")) return true;
      return program.trade.toLowerCase().includes(filter.replace("-", " "));
    });

    return matchesSearch && matchesFilters;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Apprenticeship Programs</h1>
            <p className="text-xl text-muted-foreground">
              Explore union construction apprenticeship opportunities in DC & Maryland
            </p>
          </div>

          <div className="mb-8">
            <SearchFilter
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedFilters={selectedFilters}
              onFilterToggle={handleFilterToggle}
              availableFilters={filters}
            />
          </div>

          <div className="mb-8">
            <DrugTestingDisclaimer />
          </div>

          <div className="mb-4 text-sm text-muted-foreground">
            Showing {filteredPrograms.length} of {programs.length} programs
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map(program => (
              <div key={program.id} className="space-y-4">
                <ProgramCard {...program} />
                {program.videoId && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full" data-testid={`button-watch-video-${program.id}`}>
                        Watch Program Video
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>{program.name}</DialogTitle>
                        <DialogDescription>Learn more about this apprenticeship program</DialogDescription>
                      </DialogHeader>
                      <YouTubeEmbed videoId={program.videoId} title={program.name} />
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No programs found. Try adjusting your search or filters.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
