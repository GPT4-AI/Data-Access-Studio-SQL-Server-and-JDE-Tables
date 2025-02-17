import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

interface TableData {
  id: string;
  name: string;
  description: string;
  schema: string;
  prefix: string;
  columnsCount: number;
  indexesCount: number;
}

interface TableListProps {
  tables?: TableData[];
  onTableSelect?: (table: TableData) => void;
}

const defaultTables: TableData[] = [
  {
    id: "1",
    name: "F0101",
    description: "Address Book Master",
    schema: "PRODDTA",
    prefix: "AB",
    columnsCount: 123,
    indexesCount: 5,
  },
  {
    id: "2",
    name: "F4211",
    description: "Sales Order Detail",
    schema: "PRODDTA",
    prefix: "SO",
    columnsCount: 145,
    indexesCount: 8,
  },
  {
    id: "3",
    name: "F0911",
    description: "Account Ledger",
    schema: "PRODDTA",
    prefix: "GL",
    columnsCount: 98,
    indexesCount: 6,
  },
];

const TableList: React.FC<TableListProps> = ({
  tables = defaultTables,
  onTableSelect = () => {},
}) => {
  return (
    <Card className="w-full h-[600px] bg-white p-4 overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Schema</TableHead>
            <TableHead>Prefix</TableHead>
            <TableHead className="text-right">Columns</TableHead>
            <TableHead className="text-right">Indexes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tables.map((table) => (
            <TableRow
              key={table.id}
              className="cursor-pointer hover:bg-gray-100"
              onClick={() => onTableSelect(table)}
            >
              <TableCell className="font-medium">{table.name}</TableCell>
              <TableCell>{table.description}</TableCell>
              <TableCell>{table.schema}</TableCell>
              <TableCell>{table.prefix}</TableCell>
              <TableCell className="text-right">{table.columnsCount}</TableCell>
              <TableCell className="text-right">{table.indexesCount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TableList;
