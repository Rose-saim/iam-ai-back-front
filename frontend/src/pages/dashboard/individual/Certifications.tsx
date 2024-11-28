import React from 'react';
import { Award, Download, Share2, Eye } from 'lucide-react';

export default function Certifications() {
  const certificates = [
    {
      id: 1,
      course: "AI Fundamentals",
      issueDate: "Feb 15, 2024",
      validUntil: "Feb 15, 2027",
      status: "Valid"
    },
    {
      id: 2,
      course: "Machine Learning Basics",
      issueDate: "Jan 20, 2024",
      validUntil: "Jan 20, 2027",
      status: "Valid"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Certifications</h1>
          <p className="mt-1 text-sm text-gray-500">
            View and download your earned certificates
          </p>
        </div>

        <div className="grid gap-6">
          {certificates.map((cert) => (
            <div key={cert.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Award className="w-8 h-8 text-blue-600 mr-3" />
                    <div>
                      <h2 className="text-xl font-semibold">{cert.course}</h2>
                      <p className="text-sm text-gray-500">
                        Issued on {cert.issueDate}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    {cert.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm font-medium">Issue Date</p>
                    <p className="text-sm text-gray-600 mt-1">{cert.issueDate}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm font-medium">Valid Until</p>
                    <p className="text-sm text-gray-600 mt-1">{cert.validUntil}</p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                  <div className="flex space-x-2">
                    <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </button>
                    <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}