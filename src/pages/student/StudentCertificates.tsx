import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, Download, Share2, Calendar } from 'lucide-react';

export default function StudentCertificates() {
  const navigate = useNavigate();

  const certificates = [
    {
      id: 1,
      title: 'Machine Learning Basics',
      issueDate: 'February 10, 2024',
      instructor: 'Prof. James Wilson',
      image:
        'https://images.unsplash.com/photo-1676277791608-ac54525aa94d?auto=format&fit=crop&q=80&w=400',
      credentialId: 'MLB-2024-1234',
    },
    {
      id: 2,
      title: 'Python Programming',
      issueDate: 'January 15, 2024',
      instructor: 'Dr. Emily Parker',
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400',
      credentialId: 'PYT-2024-5678',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Certificates</h1>
          <p className="mt-1 text-sm text-gray-500">
            View and manage your earned certificates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Award className="w-8 h-8 text-yellow-400" />
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">
                  {certificate.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {certificate.instructor}
                </p>

                <div className="flex items-center mb-4">
                  <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">
                    Issued on {certificate.issueDate}
                  </span>
                </div>

                <div className="text-sm text-gray-500 mb-4">
                  Credential ID: {certificate.credentialId}
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() =>
                      navigate(`/student/certificates/${certificate.id}`)
                    }
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    <Share2 className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {certificates.length === 0 && (
          <div className="text-center py-12">
            <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No Certificates Yet
            </h3>
            <p className="text-gray-500">
              Complete courses to earn your first certificate!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
