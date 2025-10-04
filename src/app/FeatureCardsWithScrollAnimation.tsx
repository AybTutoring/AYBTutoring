"use client";
import React from "react";
import { useInView } from "../components/useInView";

const features = [
  {
    title: "Easy Tutor Discovery",
    description:
      "Browse hundreds of qualified tutors, filter by subject, price, and availability to find your perfect match.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Flexible Scheduling",
    description:
      "Book sessions that fit your schedule. Many tutors offer evening and weekend availability.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Interactive Learning",
    description:
      "High-quality video sessions with screen sharing, digital whiteboards, and file sharing capabilities.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Safe & Secure",
    description:
      "All tutors are verified and background-checked. Your safety and privacy are our top priorities.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    description:
      "See exact prices upfront. Pay only after your session with secure payment processing.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Track Progress",
    description:
      "Monitor your improvement with session notes, feedback, and progress tracking tools.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

function FeatureCardsWithScrollAnimation() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, idx) => (
        <FeatureCardWithAnimation key={feature.title} feature={feature} idx={idx} />
      ))}
    </div>
  );
}

export { FeatureCardsWithScrollAnimation };

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

interface FeatureCardWithAnimationProps {
  feature: Feature;
  idx: number;
}

function FeatureCardWithAnimation({ feature, idx }: FeatureCardWithAnimationProps) {
  const [ref, inView] = useInView({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      className={`bg-gray-800 rounded-xl p-6 text-white transition-all duration-700 ${inView ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'}`}
      style={{ animationDelay: `${idx * 0.1}s` }}
    >
      <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
        <span className="text-white">{feature.icon}</span>
      </div>
      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
      <p className="text-base text-white">{feature.description}</p>
    </div>
  );
}