import NavBar from '../components/NavBar';
import Image from 'next/image';

export default function GetStarted() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-white w-full py-24">
        <h1 className="text-4xl font-bold text-center mb-8">Let's start crafting your resume!</h1>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md w-full max-w-md">
            <div className="flex items-center">
              <Image src="/start-from-scratch-icon.png" alt="Start from scratch" width={40} height={40} />
              <div className="ml-4">
                <h2 className="text-xl font-semibold">Start from scratch</h2>
                <p className="text-gray-500">Let's get started</p>
              </div>
            </div>
            <a href="/start-from-scratch" className="text-pink-500 hover:text-purple-500 transition duration-300">
              &rarr;
            </a>
          </div>
          <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md w-full max-w-md">
            <div className="flex items-center">
              <Image src="/already-have-resume-icon.png" alt="Already have a resume?" width={40} height={40} />
              <div className="ml-4">
                <h2 className="text-xl font-semibold">Already have a resume?</h2>
                <p className="text-gray-500">Upload and get started</p>
              </div>
            </div>
            <a href="/upload-resume" className="text-pink-500 hover:text-purple-500 transition duration-300">
              &rarr;
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
