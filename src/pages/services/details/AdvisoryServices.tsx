import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Scale, BookOpen, FileText } from 'lucide-react';
import ContactForm from '../../../components/ContactForm';

const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Strategic Planning",
    description: "Comprehensive AI strategy development and implementation guidance."
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Ethical Framework",
    description: "Development of responsible AI practices and governance structures."
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Policy Development",
    description: "Expert guidance on AI policy creation and implementation."
  }
];

const benefits = [
  "Evidence-based decision making",
  "Risk mitigation strategies",
  "Regulatory compliance",
  "Stakeholder engagement",
  "Performance monitoring",
  "Continuous improvement"
];

export default function AdvisoryServices() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Expert AI Advisory Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic guidance for implementing responsible and effective AI solutions
            in government organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6">Service Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-2">✓</span>
                  <span className="text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
            Advisory services starting from €1,500 per consultation
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Download Service Overview
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Contact Us</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}