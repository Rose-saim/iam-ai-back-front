import React from 'react';
import { MessageSquare, Users, BarChart3, Briefcase } from 'lucide-react';

const services = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "AI Strategy Consulting",
    description: "Get expert guidance on implementing AI solutions tailored to your business needs."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Training",
    description: "Prepare your team for AI integration with customized training programs."
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Implementation Support",
    description: "End-to-end support for seamless AI implementation in your organization."
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Performance Analysis",
    description: "Measure and optimize the impact of AI on your business processes."
  }
];

export default function Consulting() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AI Consulting Services
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your business with expert guidance on AI implementation and strategy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-blue-600 font-medium hover:text-blue-700">
                  Learn more →
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Schedule a Consultation</h2>
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
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Request Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}