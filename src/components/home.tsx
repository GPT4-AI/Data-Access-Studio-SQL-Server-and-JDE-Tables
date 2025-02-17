import React, { useState } from "react";
import Header from "@/components/TableExplorer/Header";
import SearchAndFilters from "@/components/TableExplorer/SearchAndFilters";
import TableList from "@/components/TableExplorer/TableList";
import TableDetail from "@/components/TableExplorer/TableDetail";

interface TableData {
  id: string;
  name: string;
  description: string;
  schema: string;
  prefix: string;
  columnsCount: number;
  indexesCount: number;
}

export default function Home() {
  const [isFavoritesMode, setIsFavoritesMode] = useState(false);
  const [selectedTable, setSelectedTable] = useState<TableData | null>(null);

  const handleToggleFavorites = () => {
    setIsFavoritesMode(!isFavoritesMode);
  };

  const handleSearch = (term: string) => {
    console.log("Searching for:", term);
  };

  const handleCategoryFilter = (category: string) => {
    console.log("Filtering by category:", category);
  };

  const handleModuleFilter = (module: string) => {
    console.log("Filtering by module:", module);
  };

  const handleTypeFilter = (type: string) => {
    console.log("Filtering by type:", type);
  };

  const handleTableSelect = (table: TableData) => {
    setSelectedTable(table);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        isFavoritesMode={isFavoritesMode}
        onToggleFavorites={handleToggleFavorites}
      />

      <SearchAndFilters
        onSearch={handleSearch}
        onCategoryFilter={handleCategoryFilter}
        onModuleFilter={handleModuleFilter}
        onTypeFilter={handleTypeFilter}
      />

      <div className="p-6 space-y-6">
        <div className="max-w-7xl mx-auto">
          <TableList onTableSelect={handleTableSelect} />
        </div>

        {selectedTable && (
          <div className="max-w-7xl mx-auto mt-6">
            <TableDetail
              tableName={selectedTable.name}
              description={selectedTable.description}
              schema={selectedTable.schema}
            />
          </div>
        )}
      </div>
    </div>
  );
}
