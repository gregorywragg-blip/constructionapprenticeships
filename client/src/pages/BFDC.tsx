import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Phone, Mail, ExternalLink, Calendar, FileText } from "lucide-react";
import type { BFDCProgram } from "@/types/bfdc";
import bfdcProgramsData from "../../../shared/data/bfdc-programs.json";

const bfdcPrograms = bfdcProgramsData as BFDCProgram[];

export default function BFDC() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCraft, setSelectedCraft] = useState<string | null>(null);

  const filteredPrograms = bfdcPrograms.filter((program) => {
    const matchesSearch = 
      program.union.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.craft.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCraft = !selectedCraft || program.craft.toLowerCase().includes(selectedCraft.toLowerCase());
    
    return matchesSearch && matchesCraft;
  });

  const uniqueCrafts = Array.from(new Set(bfdcPrograms.map(p => p.craft.split(',')[0].trim()))).filter(Boolean);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4" data-testid="heading-bfdc">BF-DC Apprenticeship Programs</h1>
            <p className="text-xl text-muted-foreground">
              Building Futures in DC - Comprehensive directory of union apprenticeship programs in the DC area
            </p>
          </div>

          <div className="mb-8">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search programs by union, craft, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-search-bfdc"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <Button
                variant={selectedCraft === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCraft(null)}
                data-testid="button-filter-all"
              >
                All Programs
              </Button>
              {uniqueCrafts.map((craft) => (
                <Button
                  key={craft}
                  variant={selectedCraft === craft ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCraft(craft)}
                  data-testid={`button-filter-${craft.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {craft}
                </Button>
              ))}
            </div>

            <p className="text-sm text-muted-foreground" data-testid="text-program-count">
              Showing {filteredPrograms.length} of {bfdcPrograms.length} programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program) => (
              <Card key={program.id} className="flex flex-col h-full" data-testid={`card-${program.id}`}>
                <CardHeader className="gap-2">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <Badge variant="secondary" className="shrink-0" data-testid={`badge-union-${program.id}`}>
                      {program.union}
                    </Badge>
                    {program.hasHelperStepUps.toUpperCase().startsWith('Y') && (
                      <Badge variant="outline" className="shrink-0">Helper/Step-Up</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl" data-testid={`text-union-name-${program.id}`}>
                    {program.union}
                  </CardTitle>
                  {program.craft && (
                    <CardDescription data-testid={`text-craft-${program.id}`}>
                      {program.craft}
                    </CardDescription>
                  )}
                </CardHeader>
                
                <CardContent className="flex-1 space-y-3">
                  {program.description && (
                    <p className="text-sm text-foreground" data-testid={`text-description-${program.id}`}>
                      {program.description}
                    </p>
                  )}

                  {program.whenOpens && (
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-foreground" data-testid={`text-opens-${program.id}`}>
                        Opens: {program.whenOpens}
                      </span>
                    </div>
                  )}

                  {program.address && (
                    <div className="flex items-start gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-foreground" data-testid={`text-address-${program.id}`}>
                        {program.address}
                      </span>
                    </div>
                  )}

                  {program.phone && (
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-foreground" data-testid={`text-phone-${program.id}`}>
                        {program.phone}
                      </span>
                    </div>
                  )}

                  {program.email && (
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a 
                        href={`mailto:${program.email}`}
                        className="text-primary hover:underline"
                        data-testid={`link-email-${program.id}`}
                      >
                        {program.email}
                      </a>
                    </div>
                  )}

                  {program.website && (
                    <div className="flex items-center gap-2 text-sm">
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      <a 
                        href={program.website.startsWith('http') ? program.website : `https://${program.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                        data-testid={`link-website-${program.id}`}
                      >
                        Visit Website
                      </a>
                    </div>
                  )}

                  {program.howToApply && (
                    <div className="flex items-start gap-2 text-sm bg-muted p-3 rounded-md">
                      <FileText className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-foreground mb-1">How to Apply:</p>
                        <p className="text-foreground" data-testid={`text-how-to-apply-${program.id}`}>
                          {program.howToApply}
                        </p>
                      </div>
                    </div>
                  )}

                  {program.requirements && (
                    <div className="pt-2 border-t border-border">
                      <p className="text-xs font-medium text-muted-foreground mb-1">Requirements:</p>
                      <p className="text-xs text-foreground" data-testid={`text-requirements-${program.id}`}>
                        {program.requirements}
                      </p>
                    </div>
                  )}
                </CardContent>
                
                <CardFooter className="gap-2 flex-wrap">
                  {program.website && (
                    <Button
                      variant="default"
                      className="flex-1"
                      onClick={() => window.open(program.website.startsWith('http') ? program.website : `https://${program.website}`, '_blank')}
                      data-testid={`button-apply-${program.id}`}
                    >
                      Apply Online
                    </Button>
                  )}
                  {program.phone && (
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.location.href = `tel:${program.phone}`}
                      data-testid={`button-call-${program.id}`}
                    >
                      Call
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No programs found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
