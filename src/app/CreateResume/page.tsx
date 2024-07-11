// src/app/CreateResume/page.tsx

import NavBar2 from '../components/NavBarGetStarted';

export default function CreateResume() {
  return (
    <>
      <NavBar2 />
      <main className="flex flex-col items-center justify-center min-h-screen bg-white w-full py-10">
        <div className="container mx-auto flex flex-col items-center space-y-10">
          {/* Progress Bar */}
          <div className="w-full max-w-2xl bg-gray-300 rounded-full h-6">
            <div className="bg-yellow-400 h-6 rounded-full" style={{ width: '0%' }}></div>
          </div>
          {/* Content Section */}
          <div className="flex w-full max-w-4xl space-x-10">
            {/* Left Section */}
            <div className="flex flex-col items-center space-y-6 w-1/2">
              {/* Card Placeholder */}
              <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
              {/* Upload Section */}
              <button className="w-full max-w-md py-4 bg-gray-300 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v-4a4 4 0 014-4h3m4 0h3a4 4 0 014 4v4m-6 4l-4-4m0 0l-4 4m4-4v-12"></path>
                </svg>
              </button>
            </div>
            {/* Right Section */}
            <div className="w-1/2 h-96 bg-gray-100 rounded-lg"></div>
          </div>
        </div>
      </main>
    </>
  );
}
