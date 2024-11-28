import React from 'react';
import { Building, Users, GraduationCap } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const solutions = [
  {
    icon: <Building className="w-6 h-6" />,
    title: "Enterprise Solutions",
    description: "Comprehensive AI implementation for large organizations",
    features: [
      "Custom AI Strategy",
      "Enterprise-wide Integration",
      "Scalable Solutions",
      "24/7 Support"
    ]
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "SMB Solutions",
    description: "Right-sized AI solutions for growing businesses",
    features: [
      "Affordable Packages",
      "Quick Implementation",
      "Essential Features",
      "Growth Support"
    ]
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Educational Institutions",
    description: "AI solutions for academic excellence",
    features: [
      "Learning Management",
      "Research Tools",
      "Student Analytics",
      "Academic Support"
    ]
  }
];

export default function Solutions() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageHeader 
            title="AI Solutions"
            description="Discover the perfect AI solution for your organization"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}