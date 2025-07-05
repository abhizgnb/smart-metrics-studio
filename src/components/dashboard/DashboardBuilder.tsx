
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlusIcon, LayoutDashboardIcon, BarChart3Icon, PieChartIcon, TableIcon } from 'lucide-react';

interface DashboardBuilderProps {
  dbType: string;
}

export const DashboardBuilder = ({ dbType }: DashboardBuilderProps) => {
  const [dashboards, setDashboards] = useState([
    {
      id: 1,
      name: 'Sales Overview',
      description: 'Key sales metrics and trends',
      widgets: 8,
      lastUpdated: '2 hours ago'
    },
    {
      id: 2,
      name: 'Customer Analytics',
      description: 'Customer behavior and demographics',
      widgets: 6,
      lastUpdated: '1 day ago'
    }
  ]);

  const widgetTypes = [
    {
      type: 'bar',
      name: 'Bar Chart',
      icon: BarChart3Icon,
      description: 'Compare values across categories'
    },
    {
      type: 'pie',
      name: 'Pie Chart',
      icon: PieChartIcon,
      description: 'Show proportions and percentages'
    },
    {
      type: 'table',
      name: 'Data Table',
      icon: TableIcon,
      description: 'Display detailed data in rows'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Builder</h2>
          <p className="text-gray-600">Create and manage custom dashboards for your {dbType} database</p>
        </div>
        <Button>
          <PlusIcon className="h-4 w-4 mr-2" />
          New Dashboard
        </Button>
      </div>

      <Tabs defaultValue="existing" className="w-full">
        <TabsList>
          <TabsTrigger value="existing">My Dashboards</TabsTrigger>
          <TabsTrigger value="widgets">Widget Library</TabsTrigger>
        </TabsList>
        
        <TabsContent value="existing" className="space-y-4">
          {dashboards.length === 0 ? (
            <div className="text-center py-12">
              <LayoutDashboardIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No dashboards yet</h3>
              <p className="text-gray-600 mb-4">Create your first dashboard to get started</p>
              <Button>
                <PlusIcon className="h-4 w-4 mr-2" />
                Create Dashboard
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dashboards.map((dashboard) => (
                <Card key={dashboard.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{dashboard.name}</CardTitle>
                      <Badge variant="secondary">{dashboard.widgets} widgets</Badge>
                    </div>
                    <CardDescription>{dashboard.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Updated {dashboard.lastUpdated}</span>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="widgets" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {widgetTypes.map((widget) => {
              const Icon = widget.icon;
              
              return (
                <Card key={widget.type} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Icon className="h-6 w-6 text-blue-600" />
                      <CardTitle className="text-lg">{widget.name}</CardTitle>
                    </div>
                    <CardDescription>{widget.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">
                      <PlusIcon className="h-4 w-4 mr-2" />
                      Add Widget
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
