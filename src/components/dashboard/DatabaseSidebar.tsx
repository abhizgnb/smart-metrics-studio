import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { DatabaseIcon, TableIcon, ChartBarIcon, MessageCircleIcon, ArrowLeftIcon } from 'lucide-react';

interface DatabaseSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onDisconnect: () => void;
  dbType: string;
}

export const DatabaseSidebar = ({ activeTab, onTabChange, onDisconnect, dbType }: DatabaseSidebarProps) => {
  const menuItems = [
    {
      id: 'query',
      label: 'Query Interface',
      icon: MessageCircleIcon,
      description: 'Ask questions in natural language'
    },
    {
      id: 'tables',
      label: 'Table Explorer',
      icon: TableIcon,
      description: 'Browse and select database tables'
    },
    {
      id: 'dashboard',
      label: 'Dashboard Builder',
      icon: ChartBarIcon,
      description: 'Create custom dashboards'
    }
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-[calc(100vh-4rem)]">
      <div className="p-4">
        <div className="flex items-center space-x-3 mb-6">
          <DatabaseIcon className="h-6 w-6 text-blue-600" />
          <div>
            <h3 className="font-semibold text-gray-900">Connected Database</h3>
            <p className="text-sm text-gray-600">{dbType}</p>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          onClick={onDisconnect}
          className="w-full flex items-center justify-center mb-6"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Disconnect
        </Button>
        
        <Separator className="mb-6" />
        
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`w-full flex items-start space-x-3 p-3 rounded-lg text-left transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className={`h-5 w-5 mt-0.5 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                <div>
                  <div className={`font-medium ${isActive ? 'text-blue-900' : 'text-gray-900'}`}>
                    {item.label}
                  </div>
                  <div className={`text-sm ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
                    {item.description}
                  </div>
                </div>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
