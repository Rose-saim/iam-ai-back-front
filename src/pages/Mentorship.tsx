import React from 'react';
import { Users, Calendar, Video, MessageSquare } from 'lucide-react';

const mentors = [
  {
    name: "Dr. Sarah Chen",
    role: "AI Strategy Expert",
    expertise: ["Business Strategy", "Digital Transformation", "AI Implementation"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Michael Roberts",
    role: "Machine Learning Specialist",
    expertise: ["Machine Learning", "Data Science", "Neural Networks"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Emma Thompson",
    role: "Industry Transformation Coach",
    expertise: ["Change Management", "Industry 4.0", "Process Optimization"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400"
  }
];

const features = [
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Flexible Scheduling",
    description: "Book sessions that fit your schedule"
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Virtual Sessions",
    description: "Connect with mentors from anywhere"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Network",
    description: "Access to industry-leading professionals"
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Ongoing Support",
    description: "Regular check-ins and guidance"
  }
];

export default function Mentorship() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AI Mentorship Program
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get personalized guidance from industry experts to accelerate your AI journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-8">Meet Our Mentors</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {mentors.map((mentor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{mentor.name}</h3>
                  <p className="text-blue-600 mb-4">{mentor.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <button className="w-full mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Book a Session
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Apply for Mentorship</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What are your goals for mentorship?
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}