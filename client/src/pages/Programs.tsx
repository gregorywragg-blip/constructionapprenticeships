import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgramCard from "@/components/ProgramCard";
import SearchFilter from "@/components/SearchFilter";

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
      name: "IBEW Local Union 26",
      trade: "Electrical",
      description: "5-year electrical apprenticeship program with 8,000 hours of on-the-job training and 900 hours of classroom instruction.",
      location: "DC/MD/VA",
      nextDeadline: "March 31, 2025",
      phone: "(301) 725-2400",
      email: "info@ibew26.org",
      website: "https://dcpscareerready.org/opportunities/ibew-local-union-26-electrical-apprenticeship-program/",
    },
    {
      id: "2",
      name: "United Brotherhood of Carpenters",
      trade: "Carpentry",
      description: "Comprehensive carpentry apprenticeship program. Applications accepted first and third Monday of each month.",
      location: "DC/MD",
      nextDeadline: "Ongoing",
      phone: "(301) 725-2400",
      website: "https://www.dclabor.org/apprenticeships",
    },
    {
      id: "3",
      name: "LIUNA Construction Craft Laborer",
      trade: "General Labor",
      description: "Earn-as-you-learn program with commercial and residential construction tracks.",
      location: "Lanham, MD",
      phone: "(202) 726-8820",
      website: "https://www.dclabor.org/apprenticeships",
    },
    {
      id: "4",
      name: "Sheet Metal Workers Apprenticeship",
      trade: "Sheet Metal",
      description: "New classes start every three months. Applications accepted Monday through Friday.",
      location: "DC/MD",
      nextDeadline: "Rolling",
      website: "https://www.dclabor.org/apprenticeships",
    },
    {
      id: "5",
      name: "IUOE Local 77",
      trade: "Operating Engineers",
      description: "Fully accredited apprentice program plus operator upgrade and training. Applications accepted year-round.",
      location: "DC/MD",
      nextDeadline: "Year-round",
      website: "https://www.dclabor.org/apprenticeships",
    },
    {
      id: "6",
      name: "Boilermakers National Apprenticeship",
      trade: "Boilermaker",
      description: "Construction boilermaker training program for heavy industrial construction.",
      location: "DC/MD",
      website: "https://www.dclabor.org/apprenticeships",
    },
  ];

  const filters = [
    { value: "electrical", label: "Electrical" },
    { value: "carpentry", label: "Carpentry" },
    { value: "plumbing", label: "Plumbing" },
    { value: "labor", label: "General Labor" },
    { value: "sheet-metal", label: "Sheet Metal" },
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

          <div className="mb-4 text-sm text-muted-foreground">
            Showing {filteredPrograms.length} of {programs.length} programs
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map(program => (
              <ProgramCard key={program.id} {...program} />
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
