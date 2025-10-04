
import Link from "next/link";
import { FeatureCardsWithScrollAnimation } from "./FeatureCardsWithScrollAnimation";


export default function Home() {
  return (
    <div className="bg-white">
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="text-center">
          <div className="inline-block bg-yellow-300 text-blue-700 px-8 py-3 rounded-full text-lg font-semibold mb-8 shadow-md flex items-center justify-center gap-2 animate-bounce">
            <span role="img" aria-label="spark">✨</span> Connecting students with expert tutors
          </div>
          <h1 className="text-6xl font-bold mb-8">
            <span className="text-white">Find Your Perfect Tutor Today</span>
          </h1>
          <p className="text-xl text-blue-800 mb-12 max-w-4xl mx-auto leading-relaxed">
            Connect with qualified tutors in minutes. Whether you need help with math, science, languages, or any subject, our platform matches you with the perfect tutor for personalized 1-on-1 learning.
          </p>
          <div className="flex gap-4 justify-center items-center flex-col sm:flex-row">
            <Link
              href="/find-tutor"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg flex items-center gap-2"
            >
              Find a Tutor
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/become-tutor"
              className="bg-gray-200 text-gray-800 px-8 py-4 rounded-lg hover:bg-gray-300 transition-colors font-medium text-lg"
            >
              Become a Tutor
            </Link>
          </div>
        </div>
      </section>

  <section id="for-students" className="bg-blue-50 py-20 animate-fade-in-up">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <div className="text-center mb-16">
            {/* For Students Badge */}
            <div className="inline-block bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              For Students
            </div>
            
            {/* Section Heading */}
            <h2 className="text-4xl font-bold text-white mb-6">
              Find Your Perfect Tutor Today
            </h2>
            
            {/* Description */}
            <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">
              Join thousands of students who have improved their grades and confidence with personalized 
              tutoring. It&#39;s free to sign up and browse tutors.
            </p>
            
            {/* Action Buttons */}
            <div className="flex gap-4 justify-center items-center flex-col sm:flex-row">
              <Link
                href="/browse-tutors"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
              >
                Browse Tutors
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/signup"
                className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                Sign Up Free
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <FeatureCardsWithScrollAnimation />

          {/* Popular Subjects */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-white mb-8">Popular Subjects</h3>
            
            {/* Subject Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors cursor-pointer">
                Mathematics
              </span>
              <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors cursor-pointer">
                Science
              </span>
              <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors cursor-pointer">
                English
              </span>
              <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors cursor-pointer">
                History
              </span>
              <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors cursor-pointer">
                Physics
              </span>
              <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors cursor-pointer">
                Chemistry
              </span>
              <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors cursor-pointer">
                Biology
              </span>
              <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors cursor-pointer">
                French
              </span>
              <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors cursor-pointer">
                Computer Science
              </span>
            </div>

            <p className="text-blue-200 text-sm">
              And many more subjects available with expert tutors
            </p>
          </div>
        </div>
      </section>

  <section id="for-tutors" className="bg-yellow-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">For Tutors</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Earn Money Teaching What You Love</h2>
            <p className="text-gray-800 text-lg mb-8 max-w-3xl mx-auto">Join our community of expert tutors and help students succeed while building a flexible, rewarding career in education.</p>
            <div className="flex gap-4 justify-center items-center flex-col sm:flex-row">
              <Link href="/apply-tutor" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2">
                Apply to Become a Tutor
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/learn-more" className="bg-gray-500 text-white px-8 py-3 rounded-lg hover:bg-gray-600 transition-colors font-medium">Learn More</Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ...feature cards for tutors... */}
            <div className="bg-gray-800 rounded-xl p-6 text-white"><div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" /></svg></div><h3 className="text-xl font-semibold mb-3">Earn Great Money</h3><p className="text-gray-300">Set your own rates and earn $15-50+ per hour. Keep 80$ of your earning with transparent pricing.</p></div>
            <div className="bg-gray-800 rounded-xl p-6 text-white"><div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div><h3 className="text-xl font-semibold mb-3">Flexible Schedule</h3><p className="text-gray-300">Teach when you want. Set your availability and work around your existing commitments.</p></div>
            <div className="bg-gray-800 rounded-xl p-6 text-white"><div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg></div><h3 className="text-xl font-semibold mb-3">Find Great Students</h3><p className="text-gray-300">Our matching system connects you with motivated students who need your expertise.</p></div>
            <div className="bg-gray-800 rounded-xl p-6 text-white"><div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><h3 className="text-xl font-semibold mb-3">Teach From Anywhere</h3><p className="text-gray-300">Work from home or anywhere in the world. All you need is a computer and internet connection.</p></div>
            <div className="bg-gray-800 rounded-xl p-6 text-white"><div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></div><h3 className="text-xl font-semibold mb-3">Build Your Reputation</h3><p className="text-gray-300">Shape your tutoring journey with reviews, ratings, and our marketing support.</p></div>
            <div className="bg-gray-800 rounded-xl p-6 text-white"><div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg></div><h3 className="text-xl font-semibold mb-3">Dedicated Support</h3><p className="text-gray-300">Get help when you need it with our tutor support team and comprehensive resource center.</p></div>
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-12">How to Get Started</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center"><div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"><span className="text-white text-2xl font-bold">1</span></div><h4 className="text-xl font-semibold text-gray-800 mb-4">Apply &amp; Get Verified</h4><p className="text-gray-600 leading-relaxed">Submit your application with your qualifications and teaching experience. We&#39;ll verify your credentials.</p></div>
              <div className="text-center"><div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"><span className="text-white text-2xl font-bold">2</span></div><h4 className="text-xl font-semibold text-gray-800 mb-4">Create Your Profile</h4><p className="text-gray-600 leading-relaxed">Build an attractive profile showcasing your expertise, set your rates, and upload a professional photo.</p></div>
              <div className="text-center"><div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"><span className="text-white text-2xl font-bold">3</span></div><h4 className="text-xl font-semibold text-gray-800 mb-4">Start Teaching</h4><p className="text-gray-600 leading-relaxed">Get matched with students, schedule sessions, and start earning money doing what you love.</p></div>
            </div>
          </div>
        </div>
      </section>

  <section className="bg-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Section Heading */}
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose AYB Tutoring?
            </h2>
            
            {/* Description */}
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              Discover how our platform connects you with the perfect tutor for personalized, effective learning.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* ...feature cards for tutors... */}
            <div className="bg-gray-600 rounded-xl p-6 text-white">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Tutors</h3>
              <p className="text-gray-300 text-sm">
                Connect with verified, qualified tutors who are 
                experts in their subjects and passionate about 
                teaching.
              </p>
            </div>

            {/* Flexible Scheduling */}
            <div className="bg-gray-600 rounded-xl p-6 text-white">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexible Scheduling</h3>
              <p className="text-gray-300 text-sm">
                Book sessions that fit your schedule. Available 
                24/7 with tutors in different time zones.
              </p>
            </div>

            {/* Personalized Matching */}
            <div className="bg-gray-600 rounded-xl p-6 text-white">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Matching</h3>
              <p className="text-gray-300 text-sm">
                Our smart matching system connects you with 
                tutors based on your subject, level, and learning 
                style.
              </p>
            </div>

            {/* Progress Tracking */}
            <div className="bg-gray-600 rounded-xl p-6 text-white">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Progress Tracking</h3>
              <p className="text-gray-300 text-sm">
                Monitor your improvement with session notes, 
                feedback, and progress reports from your tutor.
              </p>
            </div>

            {/* Interactive Sessions */}
            <div className="bg-gray-600 rounded-xl p-6 text-white">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Interactive Sessions</h3>
              <p className="text-gray-300 text-sm">
                Engage in live video sessions with screen sharing, 
                digital whiteboards, and real-time collaboration.
              </p>
            </div>

            {/* All Subjects Covered */}
            <div className="bg-gray-600 rounded-xl p-6 text-white">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">All Subjects Covered</h3>
              <p className="text-gray-300 text-sm">
                From math and science to languages and test 
                prep - find tutors for any subject you need help 
                with.
              </p>
            </div>

            {/* Transparent Pricing */}
            <div className="bg-gray-600 rounded-xl p-6 text-white">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
              <p className="text-gray-300 text-sm">
                Know the cost before you book, with clear pricing and trusted secure payments.
              </p>
            </div>

            {/* Safe & Verified */}
            <div className="bg-gray-600 rounded-xl p-6 text-white">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Safe & Verified</h3>
              <p className="text-gray-300 text-sm">
                All tutors are background-checked and verified. 
                Secure payments and safe learning environment.
              </p>
            </div>
          </div>
        </div>
      </section>

  <section id="how-it-works" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Section Heading */}
            <h2 className="text-4xl font-bold text-white mb-6">
              How AYB Tutoring Works
            </h2>
            
            {/* Description */}
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              Get started in just three simple steps and connect with your ideal tutor today.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 - Find Your Tutor */}
            <div className="bg-gray-800 rounded-xl p-8 text-white relative">
              {/* Step Number */}
              <div className="absolute -top-4 left-8 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center border-4 border-white">
                <span className="text-white font-bold text-lg">01</span>
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-center">Find Your Tutor</h3>
              <p className="text-gray-300 text-center leading-relaxed">
                Browse our database of qualified tutors, filter by subject, 
                experience, price, and availability to find your perfect 
                match.
              </p>
              
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            {/* Step 2 - Book a Session */}
            <div className="bg-gray-800 rounded-xl p-8 text-white relative">
              {/* Step Number */}
              <div className="absolute -top-4 left-8 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center border-4 border-white">
                <span className="text-white font-bold text-lg">02</span>
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-center">Book a Session</h3>
              <p className="text-gray-300 text-center leading-relaxed">
                Schedule a session at your convenience. Many tutors offer 
                free consultation calls to ensure they&#39;re the right fit for you.
              </p>
              
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            {/* Step 3 - Start Learning */}
            <div className="bg-gray-800 rounded-xl p-8 text-white relative">
              {/* Step Number */}
              <div className="absolute -top-4 left-8 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center border-4 border-white">
                <span className="text-white font-bold text-lg">03</span>
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-center">Start Learning</h3>
              <p className="text-gray-300 text-center leading-relaxed">
                Join your live tutoring session with video chat, screen 
                sharing, and interactive tools. Track your progress and book 
                more sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

  <section id="testimonials" className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Section Heading */}
            <h2 className="text-4xl font-bold text-white mb-6">
              What Our Community Says
            </h2>
            
            {/* Description */}
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              Join thousands of students and tutors who have found success through AYB Tutoring.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 - Sarah Chen */}
            <div className="bg-gray-600 rounded-xl p-6 text-white">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-200 mb-6 leading-relaxed">
                &quot;My tutor Jessica helped me improve my calculus grades from 
                C+ to A- in just one semester! Her explanations make complex 
                concepts so much clearer.&quot;
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">SC</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Sarah Chen</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-300 text-sm">High School Student</span>
                    <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Grade 11</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Marcus Johnson */}
            <div className="bg-gray-600 rounded-xl p-6 text-white">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-200 mb-6 leading-relaxed">
                &quot;Found an amazing organic chemistry tutor through 
                AYB Tutoring. Dr. Smith&#39;s step-by-step approach and practice 
                problems were exactly what I needed for my pre-med studies.&quot;
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">MJ</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Marcus Johnson</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-300 text-sm">College Student</span>
                    <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Sophomore</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 - Emma Rodriguez */}
            <div className="bg-gray-600 rounded-xl p-6 text-white">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-200 mb-6 leading-relaxed">
                &quot;My English tutor Maria helped me overcome my fear of 
                writing essays. Now I actually enjoy creative writing! The 
                platform made it so easy to find the right match.&quot;
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">ER</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Emma Rodriguez</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-300 text-sm">Middle School Student</span>
                    <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Grade 8</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 4 - Dr. Michael Foster */}
            <div className="bg-gray-600 rounded-xl p-6 text-white">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-200 mb-6 leading-relaxed">
                &quot;As a tutor on AYB Tutoring, I love how the platform connects 
                me with motivated students. The scheduling and payment 
                system makes everything seamless.&quot;
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">MF</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Dr. Michael Foster</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-300 text-sm">Math Tutor</span>
                    <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">PhD Mathematics</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 5 - Lisa Thompson */}
            <div className="bg-gray-600 rounded-xl p-6 text-white">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-200 mb-6 leading-relaxed">
                &quot;The flexibility to choose tutors based on my schedule and 
                budget is amazing. My Spanish tutor Carlos fits perfectly with 
                my busy college life.&quot;
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">LT</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Lisa Thompson</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-300 text-sm">College Student</span>
                    <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Junior</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 6 - Prof. Amanda Wright */}
            <div className="bg-gray-600 rounded-xl p-6 text-white">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-200 mb-6 leading-relaxed">
                &quot;AYB Tutoring allows me to continue teaching and helping 
                students after retirement. The platform&apos;s tools make online 
                tutoring effective and engaging.&quot;
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">AW</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Prof. Amanda Wright</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-300 text-sm">Science Tutor</span>
                    <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">Former Professor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  <section id="about" className="bg-yellow-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* About Badge */}
            <div className="inline-block bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              About AYB Tutoring
            </div>
            
            {/* Section Heading */}
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Connecting Students with Expert Tutors Worldwide
            </h2>
            
            {/* Main Description */}
            <p className="text-gray-800 text-lg max-w-4xl mx-auto leading-relaxed mb-12">
              Founded with the mission to make quality education accessible to everyone, AYB Tutoring has 
              become the leading platform for connecting students with qualified tutors across all subjects 
              and skill levels.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Mission</h3>
              <p className="text-gray-700 text-xl leading-relaxed mb-8 text-center">
                At AYB, our mission is to make learning personal, reliable, and effective. We know how hard it can be to find a truly qualified tutor, which is why we carefully select skilled and passionate mentors who give students the confidence to succeed.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Journey</h3>
              <p className="text-gray-700 text-xl leading-relaxed mb-8 text-center">
                Our journey began with a simple goal: to support students of all ages with guidance that makes a real difference. From our early days teaching across different grades to building today’s platform, we’ve stayed focused on creating a space where students feel supported, encouraged, and empowered to reach their potential.
              </p>

              {/* Key Points */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Rigorous Tutor Verification</h4>
                  <p className="text-gray-600">Ensuring quality education through comprehensive background checks and credential verification.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Global Availability</h4>
                  <p className="text-gray-600">24/7 platform availability with tutors across different time zones for maximum flexibility.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Secure & Trusted</h4>
                  <p className="text-gray-600">Safe payment processing and satisfaction guarantee for peace of mind in every session.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  <section id="contact" className="py-20" style={{ backgroundColor: 'var(--offwhite)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* Get in Touch Badge */}
            <div className="inline-block bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              Get in Touch
            </div>
            
            {/* Section Heading */}
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              We&apos;re Here to Help
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Have questions about our platform? Need help getting started? Our support team is ready to 
              assist you.
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white text-center mb-8">Send us a Message</h3>
              
              <form className="space-y-6">
                {/* First Name and Last Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* User Type and Subject Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      I am a
                    </label>
                    <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select your role</option>
                      <option value="student">Student</option>
                      <option value="instructor">Instructor</option>
                      <option value="parent">Parent</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select a subject</option>
                      <option value="mathematics">Mathematics</option>
                      <option value="science">Science</option>
                      <option value="english">English</option>
                      <option value="history">History</option>
                      <option value="physics">Physics</option>
                      <option value="chemistry">Chemistry</option>
                      <option value="biology">Biology</option>
                      <option value="spanish">Spanish</option>
                      <option value="french">French</option>
                      <option value="computer-science">Computer Science</option>
                      <option value="sat-prep">SAT Prep</option>
                      <option value="act-prep">ACT Prep</option>
                      <option value="ap-courses">AP Courses</option>
                      <option value="music">Music</option>
                      <option value="art">Art</option>
                      <option value="general">General Inquiry</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us more about your question or how we can help..."
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
