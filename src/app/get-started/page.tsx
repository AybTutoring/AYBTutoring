import Link from 'next/link';
import Image from 'next/image';

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          {/* Logo */}
          <div className="mb-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-blue-100">
              <Image
                src="/ayb-Logo.png"
                alt="AYB Tutoring Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
            </div>
            <h1 className="text-3xl font-bold text-blue-600 mb-2">AYB Tutoring</h1>
          </div>

          {/* Coming Soon Message */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Coming Soon</h2>
            <p className="text-gray-600 mb-2">Registration functionality will be available soon.</p>
            <p className="text-gray-600">Stay tuned!</p>
          </div>

          {/* Back to Home Button */}
          <Link
            href="/"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}