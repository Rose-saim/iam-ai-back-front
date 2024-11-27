import React, { useState } from 'react';
import { BookOpen, Users, Video, Upload, Plus, Search, Filter, Clock, FileText, Download, X } from 'lucide-react';

interface Training {
  id: number;
  title: string;
  description: string;
  level: string;
  participants: number;
  duration: string;
  status: 'active' | 'draft' | 'archived';
  materials: {
    type: 'pdf' | 'video' | 'quiz';
    name: string;
    uploadDate: string;
    fileUrl?: string;
  }[];
}

export default function ExpertTrainings() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showNewTrainingModal, setShowNewTrainingModal] = useState(false);
  const [trainings] = useState<Training[]>([
    {
      id: 1,
      title: "AI Implementation Fundamentals",
      description: "Introduction to AI implementation strategies",
      level: "Beginner",
      participants: 45,
      duration: "6 weeks",
      status: "active",
      materials: [
        { 
          type: "pdf", 
          name: "Course Overview", 
          uploadDate: "2024-02-15",
          fileUrl: "/materials/course-overview.pdf"
        },
        { 
          type: "video", 
          name: "Introduction Lecture", 
          uploadDate: "2024-02-15",
          fileUrl: "/materials/intro-lecture.mp4"
        }
      ]
    },
    {
      id: 2,
      title: "Advanced Machine Learning",
      description: "Deep dive into ML algorithms",
      level: "Advanced",
      participants: 32,
      duration: "8 weeks",
      status: "active",
      materials: [
        { 
          type: "pdf", 
          name: "ML Algorithms Guide", 
          uploadDate: "2024-02-10",
          fileUrl: "/materials/ml-guide.pdf"
        },
        { 
          type: "quiz", 
          name: "Week 1 Assessment", 
          uploadDate: "2024-02-12",
          fileUrl: "/materials/week1-assessment.pdf"
        }
      ]
    }
  ]);

  const handleDownload = (fileUrl: string, fileName: string) => {
    // Create sample content for download
    const content = `Sample content for ${fileName}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleUpload = () => {
    // Create a hidden file input
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.mp4,.doc,.docx';
    input.style.display = 'none';

    // Handle file selection
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        // In a real application, you would upload the file to a server
        alert(`File "${file.name}" would be uploaded in production`);
      }
    };

    // Trigger file selection
    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Training Management</h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage and monitor your training programs
            </p>
          </div>
          <button
            onClick={() => setShowNewTrainingModal(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Plus className="w-5 h-5 mr-2" />
            Create Training
          </button>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search trainings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </button>
          </div>

          {showFilters && (
            <div className="bg-white p-4 rounded-lg border">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Level
                  </label>
                  <select className="w-full border rounded-lg p-2">
                    <option value="">All Levels</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select className="w-full border rounded-lg p-2">
                    <option value="">All Status</option>
                    <option value="active">Active</option>
                    <option value="draft">Draft</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Duration
                  </label>
                  <select className="w-full border rounded-lg p-2">
                    <option value="">Any Duration</option>
                    <option value="short">1-4 weeks</option>
                    <option value="medium">5-8 weeks</option>
                    <option value="long">8+ weeks</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Training List */}
        <div className="space-y-6">
          {trainings.map((training) => (
            <div key={training.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold">{training.title}</h2>
                    <p className="text-gray-600">{training.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    training.status === 'active' ? 'bg-green-100 text-green-800' :
                    training.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {training.status.charAt(0).toUpperCase() + training.status.slice(1)}
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{training.participants} participants</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <BookOpen className="w-5 h-5 mr-2" />
                    <span>{training.level}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{training.duration}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-medium text-gray-900 mb-4">Training Materials</h3>
                  <div className="space-y-2">
                    {training.materials.map((material, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          {material.type === 'pdf' ? (
                            <FileText className="w-5 h-5 text-red-500 mr-2" />
                          ) : material.type === 'video' ? (
                            <Video className="w-5 h-5 text-blue-500 mr-2" />
                          ) : (
                            <BookOpen className="w-5 h-5 text-green-500 mr-2" />
                          )}
                          <span className="text-gray-900">{material.name}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-500">{material.uploadDate}</span>
                          <button 
                            onClick={() => handleDownload(material.fileUrl || '', material.name)}
                            className="text-blue-600 hover:text-blue-700 transition"
                          >
                            <Download className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={handleUpload}
                    className="mt-4 flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <Upload className="w-5 h-5 mr-2" />
                    Upload New Material
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Training Modal */}
      {showNewTrainingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Create New Training</h2>
              <button
                onClick={() => setShowNewTrainingModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Training Title
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter training title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Enter training description"
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Level
                  </label>
                  <select className="w-full border rounded-lg p-2">
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Duration
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 6 weeks"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowNewTrainingModal(false)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Create Training
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}