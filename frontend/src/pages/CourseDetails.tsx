import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Users, BookOpen, Award } from 'lucide-react';

export default function CourseDetails() {
  const { id } = useParams();

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h1 className="text-3xl font-bold mb-4">AI for Business Leaders</h1>
              <p className="text-gray-600 mb-6">
                Master the fundamentals of AI implementation and strategy to transform your business
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-2" />
                  <span>6 weeks</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-blue-600 mr-2" />
                  <span>1,234 enrolled</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                  <span>24 lessons</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-blue-600 mr-2" />
                  <span>Certificate</span>
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
                <p className="mb-4">
                  This comprehensive course is designed for business leaders who want to understand
                  and implement AI solutions in their organizations.
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-8">What You'll Learn</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-2">✓</span>
                    Understanding AI fundamentals and business applications
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-2">✓</span>
                    Developing AI strategy for your organization
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-2">✓</span>
                    Implementation roadmap and best practices
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-2">✓</span>
                    Measuring ROI and performance metrics
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-xl shadow-lg sticky top-24">
                <div className="text-3xl font-bold text-blue-600 mb-4">$499</div>
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition mb-4">
                  Enroll Now
                </button>
                <button className="w-full border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                  Download Syllabus
                </button>
                
                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold mb-4">This course includes:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Video className="w-5 h-5 text-blue-600 mr-2" />
                      24 hours of video content
                    </li>
                    <li className="flex items-center">
                      <FileText className="w-5 h-5 text-blue-600 mr-2" />
                      Downloadable resources
                    </li>
                    <li className="flex items-center">
                      <Award className="w-5 h-5 text-blue-600 mr-2" />
                      Certificate of completion
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}