import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchAndFiltersProps {
  onSearch?: (term: string) => void;
  onCategoryFilter?: (category: string) => void;
  onModuleFilter?: (module: string) => void;
  onTypeFilter?: (type: string) => void;
}

const SearchAndFilters = ({
  onSearch = () => {},
  onCategoryFilter = () => {},
  onModuleFilter = () => {},
  onTypeFilter = () => {},
}: SearchAndFiltersProps) => {
  const categories = ["All", "Master Data", "Transactions", "Setup", "History"];
  const modules = ["All", "Sales", "Inventory", "Manufacturing", "Finance"];
  const tableTypes = ["All", "Base", "Join", "View", "Temporary"];

  return (
    <div className="w-full bg-background p-6 border-b">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search tables..."
            className="pl-10"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          <Select onValueChange={onCategoryFilter}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category.toLowerCase()}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={onModuleFilter}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select Module" />
            </SelectTrigger>
            <SelectContent>
              {modules.map((module) => (
                <SelectItem key={module} value={module.toLowerCase()}>
                  {module}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={onTypeFilter}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select Table Type" />
            </SelectTrigger>
            <SelectContent>
              {tableTypes.map((type) => (
                <SelectItem key={type} value={type.toLowerCase()}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilters;
