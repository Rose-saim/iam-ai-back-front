import React from 'react';
import { MessageSquare, Users, BarChart3, Briefcase } from 'lucide-react';
import PageHeader from '../../components/PageHeader';

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
          <PageHeader 
            title="AI Consulting Services"
            description="Transform your business with expert guidance on AI implementation"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}