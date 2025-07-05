
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckIcon } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      title: "Natural Language Queries",
      description: "Ask 'What were our top selling products last month?' and get instant answers",
      benefits: ["No SQL knowledge required", "Conversational interface", "Smart query suggestions"]
    },
    {
      title: "Multi-Database Support",
      description: "Connect to any database type with enterprise-grade security",
      benefits: ["MySQL & PostgreSQL", "MongoDB support", "Encrypted connections"]
    },
    {
      title: "AI-Generated Dashboards",
      description: "Automatically create beautiful dashboards tailored to your data",
      benefits: ["Auto-chart selection", "Responsive layouts", "Export capabilities"]
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends and identify opportunities before they happen",
      benefits: ["Revenue forecasting", "Trend analysis", "Anomaly detection"]
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything you need for data-driven decisions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From connection to insights in minutes, not months. Our AI handles the complexity so you can focus on growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
