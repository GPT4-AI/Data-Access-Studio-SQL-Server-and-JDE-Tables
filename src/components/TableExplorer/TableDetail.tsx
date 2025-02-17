import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Column {
  name: string;
  dataType: string;
  nullable: boolean;
  isPrimaryKey: boolean;
}

interface TableDetailProps {
  tableName?: string;
  description?: string;
  schema?: string;
  columns?: Column[];
  relationships?: Array<{
    fromColumn: string;
    toTable: string;
    toColumn: string;
  }>;
}

const defaultColumns: Column[] = [
  { name: "id", dataType: "int", nullable: false, isPrimaryKey: true },
  {
    name: "name",
    dataType: "varchar(255)",
    nullable: false,
    isPrimaryKey: false,
  },
  {
    name: "created_at",
    dataType: "timestamp",
    nullable: true,
    isPrimaryKey: false,
  },
];

const defaultRelationships = [
  { fromColumn: "id", toTable: "orders", toColumn: "customer_id" },
  { fromColumn: "id", toTable: "addresses", toColumn: "customer_id" },
];

export default function TableDetail({
  tableName = "customers",
  description = "Stores customer information including personal details and account status",
  schema = "dbo",
  columns = defaultColumns,
  relationships = defaultRelationships,
}: TableDetailProps) {
  return (
    <Card className="w-full h-full p-6 bg-white">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">{tableName}</h2>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
          <Badge variant="secondary" className="mt-2">
            {schema}
          </Badge>
        </div>

        <Tabs defaultValue="columns" className="w-full">
          <TabsList>
            <TabsTrigger value="columns">Columns</TabsTrigger>
            <TabsTrigger value="relationships">Relationships</TabsTrigger>
          </TabsList>

          <TabsContent value="columns" className="mt-4">
            <ScrollArea className="h-[500px] w-full rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Data Type</TableHead>
                    <TableHead>Nullable</TableHead>
                    <TableHead>Primary Key</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {columns.map((column) => (
                    <TableRow key={column.name}>
                      <TableCell className="font-medium">
                        {column.name}
                      </TableCell>
                      <TableCell>{column.dataType}</TableCell>
                      <TableCell>
                        <Badge
                          variant={column.nullable ? "default" : "secondary"}
                        >
                          {column.nullable ? "Yes" : "No"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {column.isPrimaryKey && (
                          <Badge variant="default">Primary Key</Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="relationships" className="mt-4">
            <ScrollArea className="h-[500px] w-full rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>From Column</TableHead>
                    <TableHead>To Table</TableHead>
                    <TableHead>To Column</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {relationships.map((rel, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {rel.fromColumn}
                      </TableCell>
                      <TableCell>{rel.toTable}</TableCell>
                      <TableCell>{rel.toColumn}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  );
}
