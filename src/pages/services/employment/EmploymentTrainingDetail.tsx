import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Target, Award, FileText, ArrowRight, Users } from 'lucide-react';
import ContactForm from '../../../components/ContactForm';

const sections = [
  {
    title: "Customized Training Programs",
    icon: <GraduationCap className="w-6 h-6" />,
    description: "Tailor-made courses on AI fundamentals, data analysis, and emerging technologies designed to meet the specific needs of various industries. Our programs ensure participants gain practical, job-ready skills.",
    benefits: [
      "Industry-specific curriculum",
      "Hands-on practical exercises",
      "Real-world project experience",
      "Flexible learning paths"
    ]
  },
  {
    title: "Career Transition Support",
    icon: <Target className="w-6 h-6" />,
    description: "Comprehensive support system to help job seekers transition into high-demand AI-related roles. We provide resources, mentorship, and practical guidance throughout the career change process.",
    benefits: [
      "Career counseling sessions",
      "Job placement assistance",
      "Interview preparation",
      "Industry networking opportunities"
    ]
  },
  {
    title: "Program Analytics & Optimization",
    icon: <Award className="w-6 h-6" />,
    description: "Advanced analytics to track program effectiveness and continuously improve course offerings based on participant feedback and industry demands.",
    benefits: [
      "Real-time progress tracking",
      "Performance analytics",
      "Outcome measurement",
      "Continuous program improvement"
    ]
  }
];

const successMetrics = [
  {
    title: "Program Success Rate",
    metrics: [
      { label: "Job Placement Rate", value: "85%" },
      { label: "Average Salary Increase", value: "40%" },
      { label: "Course Completion Rate", value: "92%" }
    ]
  }
];

export default function EmploymentTrainingDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI-Powered Employment Training Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your workforce with comprehensive AI training programs designed to create
            job-ready professionals. Our solutions combine cutting-edge curriculum with
            practical experience and career support.
          </p>
        </div>

        <div className="space-y-16">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 ml-4">{section.title}</h2>
                </div>
                
                <p className="text-gray-600 mb-8">
                  {section.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Key Benefits:</h3>
                    <ul className="space-y-3">
                      {section.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <ArrowRight className="w-4 h-4 text-blue-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-8">Program Success Metrics</h2>
            {successMetrics.map((metric, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold mb-4">{metric.title}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {metric.metrics.map((m, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-1">
                        {m.value}
                      </div>
                      <div className="text-sm text-gray-600">{m.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center text-blue-600 cursor-pointer">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>Download Detailed Report</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Workforce?</h2>
            <p className="text-lg opacity-90">
              Custom training programs starting from €2,000 per participant
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Request Program Details
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