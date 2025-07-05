
import React from 'react';
import { Button } from '@/components/ui/button';
import { UserIcon, SettingsIcon } from 'lucide-react';

export const DashboardHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              DataIntel AI
            </h1>
            <span className="ml-4 text-sm text-gray-500">Dashboard</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <SettingsIcon className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <UserIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
