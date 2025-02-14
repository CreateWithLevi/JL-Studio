import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface FilterBarProps {
  categories?: string[];
  selectedCategory?: string;
  onCategorySelect?: (category: string) => void;
}

const FilterBar = ({
  categories = ["All", "Branding", "UI/UX", "Print", "Digital", "Motion"],
  selectedCategory = "All",
  onCategorySelect = () => {},
}: FilterBarProps) => {
  return (
    <div className="w-full py-4 bg-background border-b">
      <div className="container flex flex-wrap items-center gap-2 px-4 mx-auto">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "ghost"}
            size="sm"
            onClick={() => onCategorySelect(category)}
            className="text-sm font-medium transition-colors"
          >
            {category}
          </Button>
        ))}
        <Separator orientation="vertical" className="h-6 mx-2" />
        <span className="text-sm text-gray-500">
          {categories.length} Categories
        </span>
      </div>
    </div>
  );
};

export default FilterBar;
