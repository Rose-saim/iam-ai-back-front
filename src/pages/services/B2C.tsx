import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Target, ArrowRight } from 'lucide-react';
import AppleHero from '../../components/AppleHero';
import AppleSection from '../../components/AppleSection';
import AppleGrid from '../../components/AppleGrid';
import AppleCard from '../../components/AppleCard';
import AppleButton from '../../components/AppleButton';

const features = [
  {
    icon: GraduationCap,
    title: "AI Training",
    description: "Personalized learning paths designed to build your expertise in artificial intelligence.",
    link: "/services/details/ai-training"
  },
  {
    icon: Target,
    title: "Industry Toolkits",
    description: "Practical resources and tools designed to meet your specific professional needs.",
    link: "/services/details/industry-toolkits"
  },
  {
    icon: BookOpen,
    title: "Learning Resources",
    description: "Comprehensive learning materials and guides for self-paced development.",
    link: "/services/details/learning-resources"
  }
];

const metrics = [
  { label: "Course Completion Rate", value: "96%" },
  { label: "Career Advancement", value: "78%" },
  { label: "Salary Increase", value: "45%" }
];

export default function B2C() {
  return (
    <div className="min-h-screen bg-[#fbfbfd]">
      <AppleHero
        title="Individual Training"
        subtitle="Master AI skills with personalized learning programs"
        image="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2940"
        theme="dark"
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <AppleButton to="/courses" variant="primary">
            Browse Courses
          </AppleButton>
          <AppleButton to="/services/b2c/learn-more" variant="secondary">
            Learn More
          </AppleButton>
        </div>
      </AppleHero>

      <AppleSection
        title="Learning Programs"
        subtitle="Tailored courses to advance your career in AI"
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
          <h2 className="text-4xl font-semibold mb-8">Student Success</h2>
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
            Start Your AI Journey Today
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with our training
          </p>
          <AppleButton to="/courses" size="large">
            Explore Courses
          </AppleButton>
        </div>
      </AppleSection>
    </div>
  );
}