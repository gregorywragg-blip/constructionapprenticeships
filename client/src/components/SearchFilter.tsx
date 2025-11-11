import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, X } from "lucide-react";

export interface SearchFilterProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedFilters: string[];
  onFilterToggle: (filter: string) => void;
  availableFilters: { value: string; label: string }[];
}

export default function SearchFilter({
  searchQuery,
  onSearchChange,
  selectedFilters,
  onFilterToggle,
  availableFilters,
}: SearchFilterProps) {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search programs..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
          data-testid="input-search"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {availableFilters.map((filter) => {
          const isSelected = selectedFilters.includes(filter.value);
          return (
            <Badge
              key={filter.value}
              variant={isSelected ? "default" : "outline"}
              className="cursor-pointer hover-elevate active-elevate-2 gap-1"
              onClick={() => onFilterToggle(filter.value)}
              data-testid={`filter-${filter.value}`}
            >
              {filter.label}
              {isSelected && <X className="h-3 w-3" />}
            </Badge>
          );
        })}
      </div>

      {selectedFilters.length > 0 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => selectedFilters.forEach((f) => onFilterToggle(f))}
          data-testid="button-clear-filters"
        >
          Clear All Filters
        </Button>
      )}
    </div>
  );
}
