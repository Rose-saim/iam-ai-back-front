import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Shield, RefreshCw } from 'lucide-react';
import AppleHero from '../../../components/AppleHero';
import AppleSection from '../../../components/AppleSection';
import AppleButton from '../../../components/AppleButton';

const phases = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Assessment & Planning",
    description: "Comprehensive analysis of current processes and transformation needs."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Preparation",
    description: "Preparing your workforce for the upcoming changes and new technologies."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Implementation",
    description: "Systematic rollout of new AI systems and processes."
  },
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: "Optimization",
    description: "Continuous improvement and refinement of implemented changes."
  }
];

const benefits = [
  {
    title: "Smooth Transition",
    description: "Minimize disruption during the transformation process",
    metrics: ["90% employee adoption rate", "45% faster implementation", "Reduced resistance to change"]
  },
  {
    title: "Enhanced Performance",
    description: "Improve operational efficiency and productivity",
    metrics: ["35% productivity increase", "25% cost reduction", "Improved team collaboration"]
  },
  {
    title: "Sustainable Results",
    description: "Ensure long-term success of AI implementation",
    metrics: ["98% solution retention", "Continuous improvement", "Long-term scalability"]
  }
];

export default function ChangeManagement() {
  return (
    <div className="min-h-screen bg-[#fbfbfd]">
      <AppleHero
        title="Change Management"
        subtitle="Guide your organization through successful AI transformation"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2940"
        theme="dark"
      />

      <AppleSection
        title="Our Approach"
        subtitle="Comprehensive change management strategy for successful AI adoption"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {phase.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{phase.title}</h3>
              <p className="text-gray-600">{phase.description}</p>
            </div>
          ))}
        </div>
      </AppleSection>

      <AppleSection background="bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-16">Key Benefits</h2>
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 mb-6">{benefit.description}</p>
                <div className="grid md:grid-cols-3 gap-4">
                  {benefit.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      <span className="text-gray-600">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AppleSection>

      <AppleSection>
        <div className="text-center">
          <h2 className="text-4xl font-semibold mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us guide you through a successful AI transformation journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AppleButton to="/contact" variant="primary" size="large">
              Schedule Consultation
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