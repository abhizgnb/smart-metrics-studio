
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { QueryInterface } from '../components/dashboard/QueryInterface';
import { ChartsGrid } from '../components/dashboard/ChartsGrid';
import { InsightsPanel } from '../components/dashboard/InsightsPanel';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from 'lucide-react';

const DatabaseDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [queryResults, setQueryResults] = useState<any>(null);
  
  const dbType = location.state?.dbType || 'Unknown';

  const handleDisconnect = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={handleDisconnect}
              className="flex items-center"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Disconnect
            </Button>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Database Dashboard</h2>
              <p className="text-gray-600">Connected to {dbType} database</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <QueryInterface onResults={setQueryResults} />
          {queryResults && (
            <>
              <ChartsGrid data={queryResults} />
              <InsightsPanel data={queryResults} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DatabaseDashboard;
