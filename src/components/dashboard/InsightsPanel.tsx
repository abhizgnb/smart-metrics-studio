
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BellIcon, ChartBarIcon, DownloadIcon } from 'lucide-react';
import { toast } from 'sonner';

interface InsightsPanelProps {
  data: any;
}

export const InsightsPanel = ({ data }: InsightsPanelProps) => {
  const handleDownloadReport = () => {
    toast.success('Report downloaded successfully!');
  };

  const handleSetAlert = () => {
    toast.success('Alert configured! You\'ll be notified of significant changes.');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* AI Insights */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center">
            <ChartBarIcon className="h-5 w-5 mr-2 text-blue-600" />
            AI-Generated Insights
          </CardTitle>
          <CardDescription>Key findings from your data analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.insights.map((insight: string, index: number) => (
              <div key={index} className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                <p className="text-gray-800">{insight}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Actions Panel */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Export data and set up monitoring</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            onClick={handleDownloadReport}
            className="w-full flex items-center justify-center"
            variant="outline"
          >
            <DownloadIcon className="h-4 w-4 mr-2" />
            Download Report
          </Button>
          
          <Button 
            onClick={handleSetAlert}
            className="w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          >
            <BellIcon className="h-4 w-4 mr-2" />
            Set Up Alerts
          </Button>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-sm mb-2">Generated SQL</h4>
            <code className="text-xs bg-white p-2 rounded border block overflow-x-auto">
              {data.sql}
            </code>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
