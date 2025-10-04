"use client";
import React from "react";
import { useInView } from "../components/useInView";

const tutorFeatures = [
  {
    title: "Earn Great Money",
    description:
      "Set your own rates and earn $15-50+ per hour. Keep 80$ of your earning with transparent pricing.",
    icon: (
      <span className="w-6 h-6 flex items-center justify-center">$</span>
    ),
  },
  {
    title: "Flexible Schedule",
    description:
      "Teach when you want. Set your availability and work around your existing commitments.",
    icon: (
      <span className="w-6 h-6 flex items-center justify-center">&#128197;</span>
    ),
  },
  {
    title: "Find Great Students",
    description:
      "Our matching system connects you with motivated students who need your expertise.",
    icon: (
      <span className="w-6 h-6 flex items-center justify-center">&#128101;</span>
    ),
  },
  {
    title: "Teach From Anywhere",
    description:
      "Work from home or anywhere in the world. All you need is a computer and internet connection.",
    icon: (
      <span className="w-6 h-6 flex items-center justify-center">&#127760;</span>
    ),
  },
  {
    title: "Build Your Reputation",
    description:
      "Shape your tutoring journey with reviews, ratings, and our marketing support.",
    icon: (
      <span className="w-6 h-6 flex items-center justify-center">&#128100;</span>
    ),
  },
  {
    title: "Dedicated Support",
    description:
      "Get help when you need it with our tutor support team and comprehensive resource center.",
    icon: (
      <span className="w-6 h-6 flex items-center justify-center">&#128736;</span>
    ),
  },
];

export function TutorFeatureCardsWithScrollAnimation() {
  return (
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 items-stretch">
      {tutorFeatures.map((feature, idx) => {
        const [ref, inView] = useInView({ threshold: 0.2 });
        return (
          <div
            key={feature.title}
            ref={ref}
            className={`bg-gray-800 rounded-xl p-6 text-white transition-all duration-700 flex flex-col justify-between min-h-[300px] ${inView ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-8'}`}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-300 flex-1">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
}