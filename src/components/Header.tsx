import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Company Name */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/ayb-Logo.png"
              alt="AYB Tutoring Logo"
              width={40}
              height={40}
              className="mr-3"
            />
            <span className="text-white text-xl font-semibold">AYB Tutoring</span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#how-it-works" className="text-white hover:text-gray-300 transition-colors">
              How It Works
            </Link>
            <Link href="/#about" className="text-white hover:text-gray-300 transition-colors">
              About Us
            </Link>
            <Link href="/#testimonials" className="text-white hover:text-gray-300 transition-colors">
              Reviews
            </Link>
            <Link href="/#contact" className="text-white hover:text-gray-300 transition-colors">
              Contact
            </Link>
            <Link href="/#for-students" className="text-white hover:text-gray-300 transition-colors">
              For Students
            </Link>
            <Link href="/#for-tutors" className="text-white hover:text-gray-300 transition-colors">
              For Tutors
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/signin" 
              className="text-white hover:text-gray-300 transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/get-started" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}