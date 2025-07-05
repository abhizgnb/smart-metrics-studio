
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LoginModal } from './LoginModal';
import { SignupModal } from './SignupModal';

export const Navigation = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  DataIntel AI
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => setShowLogin(true)}
                className="text-gray-700 hover:text-blue-600"
              >
                Login
              </Button>
              <Button 
                onClick={() => setShowSignup(true)}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <LoginModal open={showLogin} onOpenChange={setShowLogin} onSignupClick={() => {
        setShowLogin(false);
        setShowSignup(true);
      }} />
      <SignupModal open={showSignup} onOpenChange={setShowSignup} onLoginClick={() => {
        setShowSignup(false);
        setShowLogin(true);
      }} />
    </>
  );
};
