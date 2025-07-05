
import React from 'react';
import { Button } from '@/components/ui/button';
import { DatabaseIcon, ChartBarIcon, BellIcon } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Turn Your Data Into
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Intelligent Insights
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect any database, ask questions in plain English, and get AI-powered analytics, forecasts, and actionable recommendations instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50 px-8 py-3">
              Watch Demo
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <DatabaseIcon className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Universal Database Connector</h3>
            <p className="text-gray-600">Connect MySQL, PostgreSQL, MongoDB and more with secure, encrypted connections.</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <ChartBarIcon className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">AI-Powered Analytics</h3>
            <p className="text-gray-600">Ask questions in natural language and get instant visualizations and insights.</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <BellIcon className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Smart Alerts & Forecasting</h3>
            <p className="text-gray-600">Get proactive alerts and accurate forecasts powered by advanced AI models.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
