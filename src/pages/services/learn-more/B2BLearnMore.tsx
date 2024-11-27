import React from 'react';
import { Building2, Users, Target, ArrowRight } from 'lucide-react';
import AppleHero from '../../../components/AppleHero';
import AppleSection from '../../../components/AppleSection';
import AppleButton from '../../../components/AppleButton';

const features = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Enterprise Integration",
    description: "Seamlessly integrate AI solutions into your existing business infrastructure with minimal disruption."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Empowerment",
    description: "Equip your workforce with the skills and tools needed to leverage AI effectively."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Strategic Implementation",
    description: "Develop and execute a comprehensive AI strategy aligned with your business goals."
  }
];

const processSteps = [
  {
    number: "01",
    title: "Assessment",
    description: "We begin with a thorough analysis of your current systems, processes, and needs."
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Create a customized implementation plan tailored to your business objectives."
  },
  {
    number: "03",
    title: "Implementation",
    description: "Execute the plan with our expert guidance and support every step of the way."
  },
  {
    number: "04",
    title: "Optimization",
    description: "Continuously monitor and improve your AI solutions for maximum impact."
  }
];

export default function B2BLearnMore() {
  return (
    <div className="min-h-screen bg-[#fbfbfd]">
      <AppleHero
        title="Transform Your Business"
        subtitle="Comprehensive AI solutions designed for enterprise success"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2940"
        theme="dark"
      />

      <AppleSection
        title="Why Choose Our Business Solutions"
        subtitle="Enterprise-grade AI implementation with proven results"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </AppleSection>

      <AppleSection background="bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-16">Our Implementation Process</h2>
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="text-5xl font-bold text-blue-600 opacity-50">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AppleSection>

      <AppleSection>
        <div className="text-center">
          <h2 className="text-4xl font-semibold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your business with our comprehensive AI solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AppleButton to="/contact" variant="primary" size="large">
              Schedule a Demo
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