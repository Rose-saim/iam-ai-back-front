import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ArrowLeft } from 'lucide-react';

export default function JobDetail() {
  const { id } = useParams();

  // This would typically come from an API
  const job = {
    title: "AI Implementation Specialist",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: `We're looking for an AI Implementation Specialist to join our growing team. In this role, you'll help our clients successfully implement AI solutions in their organizations.`,
    responsibilities: [
      "Work directly with clients to understand their AI implementation needs",
      "Design and execute AI implementation strategies",
      "Provide technical guidance and support throughout the implementation process",
      "Monitor and optimize AI solution performance",
      "Create documentation and training materials"
    ],
    requirements: [
      "5+ years of experience in AI/ML implementation",
      "Strong understanding of machine learning concepts",
      "Excellent problem-solving skills",
      "Strong communication and presentation skills",
      "Experience with major cloud platforms (AWS, GCP, Azure)"
    ],
    benefits: [
      "Competitive salary and equity",
      "Remote-first work environment",
      "Flexible vacation policy",
      "Health, dental, and vision insurance",
      "Professional development budget"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/careers"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Careers
        </Link>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{job.title}</h1>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-gray-600">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {job.department}
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  {job.type}
                </div>
              </div>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-600 mb-8">{job.description}</p>

              <h2 className="text-xl font-bold text-gray-900 mb-4">Key Responsibilities</h2>
              <ul className="space-y-2 mb-8">
                {job.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">✓</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-bold text-gray-900 mb-4">Requirements</h2>
              <ul className="space-y-2 mb-8">
                {job.requirements.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">✓</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-bold text-gray-900 mb-4">Benefits</h2>
              <ul className="space-y-2 mb-8">
                {job.benefits.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 mt-1">✓</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-8 border-t">
              <Link
                to={`/careers/apply/${id}`}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Apply for this Position
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}