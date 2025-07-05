
import React, { useState } from 'react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { DatabaseConnector } from '../components/dashboard/DatabaseConnector';
import { QueryInterface } from '../components/dashboard/QueryInterface';
import { ChartsGrid } from '../components/dashboard/ChartsGrid';
import { InsightsPanel } from '../components/dashboard/InsightsPanel';

const Dashboard = () => {
  const [connectedDb, setConnectedDb] = useState<string | null>(null);
  const [queryResults, setQueryResults] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!connectedDb ? (
          <DatabaseConnector onConnect={setConnectedDb} />
        ) : (
          <div className="space-y-6">
            <QueryInterface onResults={setQueryResults} />
            {queryResults && (
              <>
                <ChartsGrid data={queryResults} />
                <InsightsPanel data={queryResults} />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
