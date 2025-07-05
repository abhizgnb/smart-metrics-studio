
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { toast } from 'sonner';

interface QueryInterfaceProps {
  onResults: (results: any) => void;
}

export const QueryInterface = ({ onResults }: QueryInterfaceProps) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleQuery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    
    // Simulate AI query processing
    setTimeout(() => {
      // Mock data response
      const mockResults = {
        query: query,
        sql: `SELECT month, revenue FROM sales WHERE year = 2024 ORDER BY month;`,
        data: [
          { month: 'Jan', revenue: 50000, customers: 120 },
          { month: 'Feb', revenue: 65000, customers: 145 },
          { month: 'Mar', revenue: 78000, customers: 160 },
          { month: 'Apr', revenue: 82000, customers: 175 },
          { month: 'May', revenue: 95000, customers: 190 },
          { month: 'Jun', revenue: 110000, customers: 220 }
        ],
        insights: [
          "Revenue is showing strong growth with a 47% increase from January to June",
          "Customer acquisition is consistently growing month over month",
          "May showed the highest growth rate of 15.9% compared to the previous month"
        ]
      };
      
      toast.success('Query executed successfully!');
      onResults(mockResults);
      setLoading(false);
    }, 2000);
  };

  const exampleQueries = [
    "Show me revenue trends for the last 6 months",
    "Which products are selling the most?",
    "What's our customer growth rate?",
    "Show me expenses by category this year"
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <SearchIcon className="h-5 w-5 mr-2 text-blue-600" />
          Ask Your Data Anything
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleQuery} className="flex gap-2 mb-4">
          <Input
            placeholder="e.g., Show me revenue trends for the last 6 months"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1"
          />
          <Button 
            type="submit" 
            disabled={loading}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          >
            {loading ? 'Analyzing...' : 'Ask AI'}
          </Button>
        </form>
        
        <div className="space-y-2">
          <p className="text-sm text-gray-600 font-medium">Try these examples:</p>
          <div className="flex flex-wrap gap-2">
            {exampleQueries.map((example, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => setQuery(example)}
                className="text-xs"
              >
                {example}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
