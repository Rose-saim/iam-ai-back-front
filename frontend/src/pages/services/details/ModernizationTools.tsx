import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, BarChart2, Zap, RefreshCw } from 'lucide-react';
import AppleHero from '../../../components/AppleHero';
import AppleSection from '../../../components/AppleSection';
import AppleButton from '../../../components/AppleButton';

const tools = [
  {
    icon: <BarChart2 className="w-8 h-8" />,
    title: "Analytics Dashboard",
    description: "Real-time insights and performance monitoring for data-driven decisions."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Process Automation",
    description: "Streamline workflows and reduce manual tasks with AI-powered automation."
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Integration Hub",
    description: "Seamlessly connect AI tools with your existing business systems."
  },
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: "Optimization Engine",
    description: "Continuously improve performance with machine learning algorithms."
  }
];

const benefits = [
  {
    title: "Increased Efficiency",
    stats: "45%",
    description: "Average improvement in operational efficiency"
  },
  {
    title: "Cost Reduction",
    stats: "30%",
    description: "Typical reduction in operational costs"
  },
  {
    title: "Time Saved",
    stats: "1000+",
    description: "Hours saved per month through automation"
  }
];

export default function ModernizationTools() {
  return (
    <div className="min-h-screen bg-[#fbfbfd]">
      <AppleHero
        title="AI Modernization Tools"
        subtitle="Transform your business operations with cutting-edge AI solutions"
        image="https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=2940"
        theme="dark"
      />

      <AppleSection
        title="Our Tools"
        subtitle="Comprehensive suite of AI-powered tools for business transformation"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {tool.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{tool.title}</h3>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          ))}
        </div>
      </AppleSection>

      <AppleSection background="bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-16">Impact & Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <div className="text-5xl font-bold text-blue-600 mb-4">
                  {benefit.stats}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AppleSection>

      <AppleSection>
        <div className="text-center">
          <h2 className="text-4xl font-semibold mb-6">
            Ready to Modernize Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join leading companies in the digital transformation journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AppleButton to="/contact" variant="primary" size="large">
              Request Demo
            </AppleButton>
            <AppleButton to="/register-business" variant="secondary" size="large">
              Create Business Account
            </AppleButton>
          </div>
        </div>
      </AppleSection>
    </div>
  );
}