import React from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface HeaderProps {
  isFavoritesMode?: boolean;
  onToggleFavorites?: () => void;
}

const Header = ({
  isFavoritesMode = false,
  onToggleFavorites = () => {},
}: HeaderProps) => {
  return (
    <header className="w-full h-16 bg-background border-b border-border px-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl font-semibold text-foreground">
          Data Access Studio
        </h1>
      </div>

      <Button
        variant={isFavoritesMode ? "secondary" : "outline"}
        onClick={onToggleFavorites}
        className="flex items-center space-x-2"
      >
        <Star className={`h-4 w-4 ${isFavoritesMode ? "fill-current" : ""}}`} />
        <span>{isFavoritesMode ? "Show All Tables" : "Show Favorites"}</span>
      </Button>
    </header>
  );
};

export default Header;
