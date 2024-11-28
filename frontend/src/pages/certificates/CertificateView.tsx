import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Award, Download, Share2, ArrowLeft } from 'lucide-react';

export default function CertificateView() {
  const { id } = useParams();

  // This would typically come from an API
  const certificate = {
    courseTitle: "AI Fundamentals",
    recipientName: "John Smith",
    issueDate: "February 15, 2024",
    validUntil: "February 15, 2027",
    certificateId: "CERT-2024-001",
    instructor: "Dr. Sarah Chen",
    skills: [
      "Artificial Intelligence Fundamentals",
      "Machine Learning Basics",
      "Neural Networks",
      "AI Implementation"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/dashboard/certifications"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Certificates
        </Link>

        {/* Certificate Preview */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="p-8 text-center border-b">
            <div className="mb-6">
              <Award className="w-16 h-16 text-blue-600 mx-auto" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Certificate of Completion</h1>
            <p className="text-gray-600">This is to certify that</p>
            <p className="text-2xl font-bold text-gray-900 my-4">{certificate.recipientName}</p>
            <p className="text-gray-600">has successfully completed the course</p>
            <p className="text-2xl font-bold text-gray-900 my-4">{certificate.courseTitle}</p>
            <p className="text-gray-600">under the instruction of</p>
            <p className="text-xl font-medium text-gray-900 mt-4">{certificate.instructor}</p>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Issue Date</h3>
                <p className="text-gray-900">{certificate.issueDate}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Valid Until</h3>
                <p className="text-gray-900">{certificate.validUntil}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Certificate ID</h3>
                <p className="text-gray-900">{certificate.certificateId}</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-500 mb-4">Skills Acquired</h3>
              <div className="flex flex-wrap gap-2">
                {certificate.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between">
          <button className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            <Download className="w-5 h-5 mr-2" />
            Download Certificate
          </button>
          <button className="flex items-center px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            <Share2 className="w-5 h-5 mr-2" />
            Share Certificate
          </button>
        </div>

        {/* Verification Info */}
        <div className="mt-8 p-6 bg-gray-50 rounded-xl">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Certificate Verification</h2>
          <p className="text-gray-600 mb-4">
            This certificate can be verified online using the certificate ID:
            <span className="font-medium text-gray-900 ml-2">{certificate.certificateId}</span>
          </p>
          <Link
            to={`/verify/${certificate.certificateId}`}
            className="text-blue-600 hover:text-blue-700"
          >
            Verify Certificate →
          </Link>
        </div>
      </div>
    </div>
  );
}