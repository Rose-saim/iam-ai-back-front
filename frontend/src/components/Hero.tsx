import React from 'react';
import { ArrowRight, Brain, Building, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            I AM'
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">AI</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Unlock the power of artificial intelligence. Transform your career, business, and future
            with cutting-edge AI education and implementation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center justify-center hover:bg-blue-700 transition">
              Start Your AI Journey <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
              Explore Solutions
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Mastery</h3>
            <p className="text-gray-600">Master AI concepts and implementation with our expert-led courses.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Building className="w-6 h-6 text-blue-600" />
            </div>
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Building className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Business Integration</h3>
            <p className="text-gray-600">Seamlessly integrate AI solutions into your organization.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Community</h3>
            <p className="text-gray-600">Connect with AI professionals and industry leaders.</p>
          </div>
        </div>
      </div>
    </div>
  );
}