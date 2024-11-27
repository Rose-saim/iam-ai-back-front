import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Users, Briefcase } from 'lucide-react';

const services = [
  {
    title: "B2B Services",
    description: "Transform your business with comprehensive AI implementation services.",
    icon: <Building2 className="w-8 h-8" />,
    link: "/services/b2b",
    features: [
      "Staff Training Programs",
      "AI Tool Integration",
      "Change Management Support"
    ]
  },
  {
    title: "B2C Services",
    description: "Advance your career with personalized AI training and resources.",
    icon: <Users className="w-8 h-8" />,
    link: "/services/b2c",
    features: [
      "Personalized Learning Paths",
      "Industry-Specific Training",
      "Career Development Support"
    ]
  },
  {
    title: "B2G Services",
    description: "Enhance public services with innovative AI solutions.",
    icon: <Briefcase className="w-8 h-8" />,
    link: "/services/b2g",
    features: [
      "Municipal Service Optimization",
      "Employment Program Support",
      "Policy Advisory Services"
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our tailored AI services designed for businesses, individual learners,
            and public sector organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us to learn more about how our AI solutions can benefit your organization.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}