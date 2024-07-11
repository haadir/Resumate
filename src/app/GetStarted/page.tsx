'use client';

import NavBar2 from '../components/NavBarGetStarted.jsx';
import Image from 'next/image';

export default function GetStarted() {
  return (
    <>
      <NavBar2 />
      <main className="flex flex-col items-center justify-center min-h-screen bg-white w-full">
        <div className="flex flex-col items-center justify-center flex-grow mt-[-300px]">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-700">Let&apos;s start crafting your resume!</h1>
          <div className="flex flex-col space-y-4 mt-10">
            <a href="/CreateResume" className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md w-full max-w-md">
              <div className="flex items-center">
                <Image src="/Scratch.svg" alt="Start from scratch" width={40} height={40} />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-gray-700">Start from scratch</h2>
                  <p className="text-gray-500">Let&apos;s get started</p>
                </div>
              </div>
            </a>
            {/* <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md w-full max-w-md">
              <div className="flex items-center">
                <Image src="/Upload.svg" alt="Already have a resume?" width={40} height={40} />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-gray-700">Already have a resume?</h2>
                  <p className="text-gray-500">Upload and get started</p>
                </div>
              </div>
              <a href="/upload-resume" className="text-pink-500 hover:text-purple-500 transition duration-300">
                &rarr;
              </a>
            </div> */}
          </div>
        </div>
      </main>
    </>
  );
}
