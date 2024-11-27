import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Settings, Database, Code, ArrowRight } from 'lucide-react';
import ContactForm from '../../../components/ContactForm';

const toolkits = [
  {
    icon: <Database className="w-6 h-6" />,
    title: "Data Analysis Tools",
    description: "Comprehensive suite of data analysis and visualization tools.",
    features: ["Automated reporting", "Predictive analytics", "Custom dashboards"]
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "AI Development Kit",
    description: "Essential tools for AI implementation and deployment.",
    features: ["Model templates", "Integration APIs", "Testing frameworks"]
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Process Automation",
    description: "Tools for streamlining workflows and operations.",
    features: ["Workflow automation", "Task scheduling", "Performance monitoring"]
  }
];

const benefits = [
  "Industry-specific solutions",
  "Ready-to-use templates",
  "Regular updates and support",
  "Integration assistance",
  "Custom configurations",
  "Technical documentation"
];

export default function IndustryToolkits() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Industry-Specific AI Toolkits
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access powerful, ready-to-use AI tools and resources designed specifically
            for your industry needs. Implement AI solutions quickly and effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {toolkits.map((toolkit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                {toolkit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{toolkit.title}</h3>
              <p className="text-gray-600 mb-4">{toolkit.description}</p>
              <ul className="space-y-2">
                {toolkit.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <ArrowRight className="w-4 h-4 text-blue-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6">Toolkit Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-600 mt-1 mr-2" />
                  <span className="text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Get Started with Our Toolkits</h2>
          <p className="text-lg mb-8 opacity-90">
            Toolkit packages starting from €1,499, with customization options available.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Request Demo
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              View Toolkit Catalog
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