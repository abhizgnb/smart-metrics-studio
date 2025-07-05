
import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Navigation } from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      <Hero />
      <Features />
    </div>
  );
};

export default Index;
