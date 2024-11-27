import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Users, Target, ArrowRight } from 'lucide-react';
import AppleHero from '../../components/AppleHero';
import AppleSection from '../../components/AppleSection';
import AppleGrid from '../../components/AppleGrid';
import AppleCard from '../../components/AppleCard';
import AppleButton from '../../components/AppleButton';

const features = [
  {
    icon: Building2,
    title: "Staff Training",
    description: "Transform your business with AI-powered tools and training.",
    link: "/services/details/staff-training"
  },
  {
    icon: Target,
    title: "Modernization of Tools",
    description: "Integration of AI-powered tools and technologies to optimize your production processes.",
    link: "/services/details/modernization-tools"
  },
  {
    icon: Users,
    title: "Change Management",
    description: "Expert guidance in managing the transition to AI-driven operations and processes.",
    link: "/services/details/change-management"
  }
];

const metrics = [
  { label: "Training Success Rate", value: "98%" },
  { label: "Efficiency Improvement", value: "45%" },
  { label: "Cost Reduction", value: "30%" }
];

export default function B2B() {
  return (
    <div className="min-h-screen bg-[#fbfbfd]">
      <AppleHero
        title="Business Solutions"
        subtitle="Transform your business with comprehensive AI implementation services"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2940"
        theme="dark"
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <AppleButton to="/contact" variant="primary">
            Get Started
          </AppleButton>
          <AppleButton to="/services/b2b/learn-more" variant="secondary">
            Learn More
          </AppleButton>
        </div>
      </AppleHero>

      <AppleSection
        title="Our Services"
        subtitle="Comprehensive solutions for your business transformation"
      >
        <AppleGrid>
          {features.map((feature, index) => (
            <AppleCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            >
              <Link 
                to={feature.link}
                className="inline-flex items-center text-blue-600 hover:gap-2 transition-all group mt-4"
              >
                Learn more 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AppleCard>
          ))}
        </AppleGrid>
      </AppleSection>

      <AppleSection background="bg-gray-100">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold mb-8">Proven Results</h2>
          <div className="grid grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <p className="text-5xl font-semibold text-blue-600 mb-2">
                  {metric.value}
                </p>
                <p className="text-gray-600">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </AppleSection>

      <AppleSection>
        <div className="text-center">
          <h2 className="text-4xl font-semibold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join leading companies that have already embraced AI transformation
          </p>
          <AppleButton to="/contact" size="large">
            Contact Our Team
          </AppleButton>
        </div>
      </AppleSection>
    </div>
  );
}