
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { DatabaseSidebar } from '../components/dashboard/DatabaseSidebar';
import { QueryInterface } from '../components/dashboard/QueryInterface';
import { ChartsGrid } from '../components/dashboard/ChartsGrid';
import { InsightsPanel } from '../components/dashboard/InsightsPanel';
import { TableSelector } from '../components/dashboard/TableSelector';
import { DashboardBuilder } from '../components/dashboard/DashboardBuilder';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from 'lucide-react';

const DatabaseDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [queryResults, setQueryResults] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('query');
  
  const dbType = location.state?.dbType || 'Unknown';

  const handleDisconnect = () => {
    navigate('/dashboard');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'tables':
        return <TableSelector dbType={dbType} />;
      case 'dashboard':
        return <DashboardBuilder dbType={dbType} />;
      case 'query':
      default:
        return (
          <div className="space-y-6">
            <QueryInterface onResults={setQueryResults} />
            {queryResults && (
              <>
                <ChartsGrid data={queryResults} />
                <InsightsPanel data={queryResults} />
              </>
            )}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <div className="flex">
        <DatabaseSidebar 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
          onDisconnect={handleDisconnect}
          dbType={dbType}
        />
        
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseDashboard;
