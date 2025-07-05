
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { TableIcon, SearchIcon, DatabaseIcon } from 'lucide-react';

interface TableSelectorProps {
  dbType: string;
}

export const TableSelector = ({ dbType }: TableSelectorProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTables, setSelectedTables] = useState<string[]>([]);

  // Mock table data - in real implementation this would come from the database
  const mockTables = [
    { name: 'users', rows: 15420, columns: 8, description: 'User account information' },
    { name: 'orders', rows: 45230, columns: 12, description: 'Customer order data' },
    { name: 'products', rows: 2340, columns: 15, description: 'Product catalog' },
    { name: 'customers', rows: 12890, columns: 10, description: 'Customer details' },
    { name: 'transactions', rows: 89450, columns: 18, description: 'Payment transactions' },
    { name: 'inventory', rows: 3450, columns: 6, description: 'Stock management' }
  ];

  const filteredTables = mockTables.filter(table =>
    table.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    table.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleTableSelection = (tableName: string) => {
    setSelectedTables(prev =>
      prev.includes(tableName)
        ? prev.filter(t => t !== tableName)
        : [...prev, tableName]
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Table Explorer</h2>
        <p className="text-gray-600">Browse and select tables from your {dbType} database</p>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search tables..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        {selectedTables.length > 0 && (
          <Button>
            Create Dashboard ({selectedTables.length} tables)
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTables.map((table) => {
          const isSelected = selectedTables.includes(table.name);
          
          return (
            <Card
              key={table.name}
              className={`cursor-pointer transition-all ${
                isSelected
                  ? 'ring-2 ring-blue-500 bg-blue-50'
                  : 'hover:shadow-md'
              }`}
              onClick={() => toggleTableSelection(table.name)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TableIcon className="h-5 w-5 text-gray-500" />
                    <CardTitle className="text-lg">{table.name}</CardTitle>
                  </div>
                  {isSelected && (
                    <Badge variant="default" className="bg-blue-600">
                      Selected
                    </Badge>
                  )}
                </div>
                <CardDescription>{table.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{table.rows.toLocaleString()} rows</span>
                  <span>{table.columns} columns</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredTables.length === 0 && (
        <div className="text-center py-12">
          <DatabaseIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No tables found</h3>
          <p className="text-gray-600">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  );
};
