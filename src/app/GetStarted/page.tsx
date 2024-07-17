'use client';

import React, { useState } from 'react';
import NavBar2 from '../components/NavBarGetStarted';
import InputForm from '../components/InputForm';
import InputForm2 from '../components/InputForm2';
import InputForm3 from '../components/InputForm3';
import ProgressBar from '../components/ProgressBar';

export default function CreateResume() {
  const [progress, setProgress] = useState(25); // Start at 25% progress
  const [formStep, setFormStep] = useState(1); // Track form steps

  const handleFormCompletion = () => {
    setFormStep((prevFormStep) => prevFormStep + 1);
  };

  console.log("CreateResume: formStep =", formStep);

  return (
    <>
      <NavBar2 />
      <main className="flex flex-col items-center justify-center min-h-screen bg-white w-full py-10">
        <div className="container mx-auto flex flex-row items-start space-x-10">
          {/* Left Side: Form and Progress Bar */}
          <div className="flex flex-col items-center space-y-10 w-1/2">
            <div className="w-full">
              <ProgressBar progress={progress} />
            </div>
            {formStep === 1 && <InputForm setProgress={setProgress} progress={progress} onComplete={handleFormCompletion} />}
            {formStep === 2 && <InputForm2 setProgress={setProgress} progress={progress} onComplete={handleFormCompletion} />}
            {formStep === 3 && <InputForm3 setProgress={setProgress} progress={progress} onComplete={handleFormCompletion} />}
          </div>
          
          {/* Vertical Line */}
          <div className="border-l-2 border-gray-300 h-full"></div>
          
          {/* Right Side: Placeholder for Generated Resume */}
          <div className="w-1/2 flex items-center justify-center">
            <div className="bg-gray-100 w-full h-full flex items-center justify-center">
              <span className="text-gray-500">Generated Resume will appear here</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
