import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Star, Clock, Award, MessageSquare } from 'lucide-react';

export default function MentorProfile() {
  const { id } = useParams();

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-8">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
                  alt="Dr. Sarah Chen"
                  className="w-24 h-24 rounded-full object-cover mr-6"
                />
                <div>
                  <h1 className="text-3xl font-bold mb-2">Dr. Sarah Chen</h1>
                  <p className="text-blue-600 text-lg">AI Strategy Expert</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <span>4.9 Rating</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-2" />
                  <span>500+ Hours</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-5 h-5 text-blue-600 mr-2" />
                  <span>150+ Sessions</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-blue-600 mr-2" />
                  <span>Top Mentor</span>
                </div>
              </div>

              <div className="prose max-w-none mb-8">
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p className="text-gray-600">
                  Dr. Chen is a renowned AI strategy expert with over 15 years of experience
                  helping organizations implement AI solutions. She has worked with Fortune 500
                  companies and startups alike, guiding them through digital transformation.
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-8">Expertise</h2>
                <div className="flex flex-wrap gap-2">
                  {['AI Strategy', 'Digital Transformation', 'Change Management', 'Enterprise AI', 'Machine Learning'].map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-xl shadow-lg sticky top-24">
                <h3 className="text-xl font-bold mb-4">Book a Session</h3>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Session Type
                  </label>
                  <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>1:1 Consultation (60 min)</option>
                    <option>Strategy Workshop (90 min)</option>
                    <option>Implementation Review (45 min)</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition mb-4">
                  Book Now
                </button>
                <button className="w-full border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                  View Calendar
                </button>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-4">Available Times (EST):</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'].map((time, index) => (
                      <button
                        key={index}
                        className="px-4 py-2 text-sm border rounded hover:bg-blue-50"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}