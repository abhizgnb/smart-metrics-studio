
import React, { useState } from 'react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { DatabaseConnector } from '../components/dashboard/DatabaseConnector';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleConnect = (dbType: string) => {
    // Navigate to the database dashboard page after connection
    navigate('/database-dashboard', { state: { dbType } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DatabaseConnector onConnect={handleConnect} />
      </div>
    </div>
  );
};

export default Dashboard;
