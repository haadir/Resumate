'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function NavBarGetStarted() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Link href="/" legacyBehavior>
            <a>
              <Image src="/Resumate.svg" alt="Logo" width={40} height={40} />
            </a>
          </Link>
          <span className="ml-2 text-xl font-medium text-black">Resumate</span>
        </div>
        <div className="flex items-center space-x-8 ml-8">
          {/* <a className="text-gray-600 hover:text-gray-900">
            Create New
          </a>
          <a className="text-gray-600 hover:text-gray-900">
            My Resumes
          </a>
          <a className="text-gray-600 hover:text-gray-900">
            Apply
          </a>
          <a className="text-gray-600 hover:text-gray-900">
            Opportunities
          </a> */}
          <a href="mailto:resumateservice@gmail.com" className="text-gray-600 hover:text-gray-900">
            Contact Us
          </a>
        </div>
        <div className="flex space-x-4">
          {/* <Link href="/login" legacyBehavior>
            <a className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">Login</a>
          </Link> */}
          <Link href="/GetStarted" legacyBehavior>
            <a className="px-4 py-2 text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-md hover:from-pink-600 hover:to-purple-600">Get Started</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
