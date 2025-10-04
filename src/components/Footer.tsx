import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
  <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200 mt-auto shadow-inner">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Footer Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Company Info */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-white rounded-xl shadow-lg mr-6">
                <Image
                  src="/ayb-Logo.png"
                  alt="AYB Tutoring Logo"
                  width={72}
                  height={72}
                  className="rounded-lg"
                />
              </div>
              <div>
                <span className="text-gray-900 text-3xl font-bold">AYB Tutoring</span>
                <p className="text-blue-600 text-lg font-medium mt-1">Connect. Learn. Excel.</p>
              </div>
            </div>
            <p className="text-gray-700 text-xl leading-relaxed mb-8 max-w-xl">
              Connecting students with qualified tutors worldwide. Find your perfect tutor or start teaching today.
            </p>
            <div className="mt-2 mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-1">Contact Us</h4>
              <p className="text-gray-700 text-base">Email: <a href="mailto:info@aybtutoring.ca" className="text-blue-600 hover:underline">info@aybtutoring.ca</a></p>
            </div>
            
            {/* Social Links Placeholder */}
              <div className="flex items-center justify-start space-x-6 mb-4">
              <a href="https://www.linkedin.com/company/ayb-tutoring/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.612v5.584z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/aybtutoring?igsh=MTM1Y2hsZnVucDY0OQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.974-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.072-1.276.06-2.637.334-3.608 1.308-.974.974-1.246 2.242-1.308 3.608-.058 1.266-.07 1.646-.07 4.85s.012 3.584.07 4.85c.062 1.366.334 2.633 1.308 3.608.974.975 2.242 1.246 3.608 1.308 1.266.058 1.646.07 4.947.07s3.667-.012 4.947-.07c1.276-.062 2.637-.334 3.608-1.308.974-.974 1.246-2.242 1.308-3.608.058-1.266.07-1.646.07-4.85s-.012-3.584-.07-4.85c-.062-1.366-.334-2.633-1.308-3.608-.974-.974-2.242-1.246-3.608-1.308-1.266-.058-1.646-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.104c.733 0 1.325-.593 1.325-1.326v-21.349c0-.733-.592-1.326-1.325-1.326z"/>
                </svg>
              </a>
            </div>
            
              <div className="text-sm text-gray-500 font-medium mb-8">
              © 2024 AYB Tutoring. All rights reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start md:items-center">
            <h3 className="text-gray-900 font-extrabold text-2xl mb-8 relative tracking-tight">
              Quick Links
              <span className="block w-16 h-1 bg-blue-600 rounded-full mt-2 mx-auto"></span>
            </h3>
            <ul className="space-y-6">
              <li>
                <Link href="/#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/#for-students" className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  For Students
                </Link>
              </li>
              <li>
                <Link href="/#for-tutors" className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  For Tutors
                </Link>
              </li>
            </ul>
          </div>

          {/* For Tutors */}
          {/* For Tutors section removed as requested */}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-700 text-base flex items-center mb-4 md:mb-0">
              Made with <span className="text-red-500 mx-1 text-lg animate-pulse">❤</span> for students around the world
            </p>
            {/* Policy links removed as requested */}
          </div>
        </div>
      </div>
    </footer>
  );
}