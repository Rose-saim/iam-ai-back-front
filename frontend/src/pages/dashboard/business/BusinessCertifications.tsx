import React, { useState } from 'react';
import { Award, Download, Share2, X } from 'lucide-react';

export default function BusinessCertifications() {
  const [showShareModal, setShowShareModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  const certifications = [
    {
      id: 1,
      title: "AI Implementation Specialist",
      issueDate: "February 15, 2024",
      validUntil: "February 15, 2027",
      status: "Active",
      type: "Professional",
      certificateId: "CERT-2024-001"
    },
    {
      id: 2,
      title: "Change Management in AI",
      issueDate: "January 20, 2024",
      validUntil: "January 20, 2027",
      status: "Active",
      type: "Advanced",
      certificateId: "CERT-2024-002"
    }
  ];

  const availableCertifications = [
    {
      title: "AI Project Management",
      level: "Professional",
      duration: "3 months",
      requirements: ["Basic AI knowledge", "Project management experience"]
    },
    {
      title: "AI Ethics & Governance",
      level: "Advanced",
      duration: "2 months",
      requirements: ["AI Implementation certification", "Business ethics background"]
    }
  ];

  const handleDownload = (certificate: any) => {
    // Créer le contenu du certificat
    const certificateContent = `
Certificate of Achievement

This is to certify that

[Company Name]

has successfully completed the

${certificate.title}

Certificate ID: ${certificate.certificateId}
Issue Date: ${certificate.issueDate}
Valid Until: ${certificate.validUntil}

Type: ${certificate.type}
Status: ${certificate.status}
    `.trim();

    // Créer un Blob avec le contenu
    const blob = new Blob([certificateContent], { type: 'text/plain' });
    
    // Créer un lien de téléchargement
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${certificate.title.toLowerCase().replace(/\s+/g, '_')}_certificate.txt`);
    
    // Déclencher le téléchargement
    document.body.appendChild(link);
    link.click();
    
    // Nettoyer
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const handleShare = (certificate: any) => {
    setSelectedCertificate(certificate);
    setShowShareModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* ... (reste du code jusqu'aux boutons) ... */}

      {/* Active Certifications */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Active Certifications</h2>
        <div className="space-y-6">
          {certifications.map((cert) => (
            <div key={cert.id} className="border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Award className="w-8 h-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{cert.title}</h3>
                    <p className="text-sm text-gray-500">Type: {cert.type}</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  {cert.status}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">Issue Date</p>
                  <p className="text-sm text-gray-600">{cert.issueDate}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">Valid Until</p>
                  <p className="text-sm text-gray-600">{cert.validUntil}</p>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button 
                  onClick={() => handleDownload(cert)}
                  className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </button>
                <button
                  onClick={() => handleShare(cert)}
                  className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Share Certificate</h2>
              <button
                onClick={() => setShowShareModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Share via Email
                </label>
                <input
                  type="email"
                  placeholder="Enter recipient's email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Share Link
                </label>
                <div className="flex">
                  <input
                    type="text"
                    readOnly
                    value={`https://example.com/certificates/${selectedCertificate.certificateId}`}
                    className="flex-1 px-4 py-2 border rounded-l-lg bg-gray-50"
                  />
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
                    Copy
                  </button>
                </div>
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => setShowShareModal(false)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Available Certifications */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        {/* ... (reste du code inchangé) ... */}
      </div>
    </div>
  );
}