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
    title: "Municipal Services",
    description: "AI solutions to enhance public services efficiency and citizen satisfaction.",
    link: "/services/b2g/details/municipal-services"
  },
  {
    icon: Users,
    title: "Employment & Training",
    description: "AI-powered training programs for job seekers and career transition support.",
    link: "/services/b2g/details/employment-training"
  },
  {
    icon: Target,
    title: "Advisory Services",
    description: "Expert guidance for policy makers on implementing responsible AI practices.",
    link: "/services/b2g/details/advisory-services"
  }
];

const metrics = [
  { label: "Service Efficiency", value: "40%" },
  { label: "Cost Reduction", value: "35%" },
  { label: "Citizen Satisfaction", value: "92%" }
];

export default function B2G() {
  return (
    <div className="min-h-screen bg-[#fbfbfd]">
      <AppleHero
        title="Government Services"
        subtitle="Transform public services with innovative AI solutions"
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2940"
        theme="dark"
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <AppleButton to="/contact" variant="primary">
            Schedule Consultation
          </AppleButton>
          <AppleButton to="/services/b2g/learn-more" variant="secondary">
            Learn More
          </AppleButton>
        </div>
      </AppleHero>

      <AppleSection
        title="Our Solutions"
        subtitle="Comprehensive AI solutions for public sector organizations"
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
          <h2 className="text-4xl font-semibold mb-8">Impact Metrics</h2>
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
            Ready to Innovate Public Services?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join leading public organizations that have transformed their services with AI
          </p>
          <AppleButton to="/contact" size="large">
            Contact Our Team
          </AppleButton>
        </div>
      </AppleSection>
    </div>
  );
}