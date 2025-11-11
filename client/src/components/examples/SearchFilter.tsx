import { useState } from 'react'
import SearchFilter from '../SearchFilter'

export default function SearchFilterExample() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const handleFilterToggle = (filter: string) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <SearchFilter
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedFilters={selectedFilters}
        onFilterToggle={handleFilterToggle}
        availableFilters={[
          { value: "electrical", label: "Electrical" },
          { value: "carpentry", label: "Carpentry" },
          { value: "plumbing", label: "Plumbing" },
          { value: "dc", label: "DC" },
          { value: "maryland", label: "Maryland" }
        ]}
      />
    </div>
  )
}
