import React, { useState } from 'react';
import { BookOpen, Filter, Search, X, Users, ArrowRight } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  enrolled: number;
  progress: number;
  level: string;
  category: string;
}

export default function BusinessCourses() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [filters, setFilters] = useState({
    level: '',
    category: '',
    duration: ''
  });

  const courses: Course[] = [
    {
      id: 1,
      title: "AI Implementation Fundamentals",
      description: "Learn the basics of implementing AI in your organization",
      duration: "6 weeks",
      enrolled: 12,
      progress: 45,
      level: "Beginner",
      category: "Implementation"
    },
    {
      id: 2,
      title: "Change Management for AI",
      description: "Master the art of managing organizational change during AI adoption",
      duration: "4 weeks",
      enrolled: 8,
      progress: 60,
      level: "Intermediate",
      category: "Management"
    },
    {
      id: 3,
      title: "AI Tools and Integration",
      description: "Hands-on training with popular AI tools and integration techniques",
      duration: "8 weeks",
      enrolled: 15,
      progress: 30,
      level: "Advanced",
      category: "Technical"
    }
  ];

  const employees = [
    { id: 1, name: "John Smith", role: "Project Manager" },
    { id: 2, name: "Sarah Johnson", role: "Developer" },
    { id: 3, name: "Mike Wilson", role: "Business Analyst" }
  ];

  const handleAssignCourse = (course: Course) => {
    setSelectedCourse(course);
    setShowAssignModal(true);
  };

  const handleViewDetails = (course: Course) => {
    setSelectedCourse(course);
    setShowDetailsModal(true);
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = !filters.level || course.level === filters.level;
    const matchesCategory = !filters.category || course.category === filters.category;
    const matchesDuration = !filters.duration || course.duration.includes(filters.duration);
    
    return matchesSearch && matchesLevel && matchesCategory && matchesDuration;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Training Courses</h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage and track team training progress
            </p>
          </div>
          <button 
            onClick={() => setShowAssignModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Assign Course
          </button>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
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

          {/* Filter Panel */}
          {showFilters && (
            <div className="bg-white p-4 rounded-lg border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Level
                  </label>
                  <select
                    value={filters.level}
                    onChange={(e) => setFilters(prev => ({ ...prev, level: e.target.value }))}
                    className="w-full border rounded-lg p-2"
                  >
                    <option value="">All Levels</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    value={filters.category}
                    onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full border rounded-lg p-2"
                  >
                    <option value="">All Categories</option>
                    <option value="Implementation">Implementation</option>
                    <option value="Management">Management</option>
                    <option value="Technical">Technical</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Duration
                  </label>
                  <select
                    value={filters.duration}
                    onChange={(e) => setFilters(prev => ({ ...prev, duration: e.target.value }))}
                    className="w-full border rounded-lg p-2"
                  >
                    <option value="">All Durations</option>
                    <option value="4">4 weeks</option>
                    <option value="6">6 weeks</option>
                    <option value="8">8 weeks</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  <h3 className="ml-2 text-lg font-medium">{course.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>Duration: {course.duration}</span>
                  <span>{course.enrolled} enrolled</span>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Overall Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <button 
                    onClick={() => handleViewDetails(course)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    View Details
                  </button>
                  <button 
                    onClick={() => handleAssignCourse(course)}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                  >
                    Assign Team
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Details Modal */}
      {showDetailsModal && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">{selectedCourse.title}</h2>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">Description</h3>
                <p className="text-gray-600">{selectedCourse.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-gray-900">Level</h3>
                  <p className="text-gray-600">{selectedCourse.level}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Category</h3>
                  <p className="text-gray-600">{selectedCourse.category}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Duration</h3>
                  <p className="text-gray-600">{selectedCourse.duration}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Enrolled</h3>
                  <p className="text-gray-600">{selectedCourse.enrolled} team members</p>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">Progress</h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${selectedCourse.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => {
                    setShowDetailsModal(false);
                    handleAssignCourse(selectedCourse);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Assign Team Members
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Assign Team Modal */}
      {showAssignModal && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Assign Team Members</h2>
              <button
                onClick={() => setShowAssignModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-2">
                {selectedCourse.title}
              </h3>
              <p className="text-sm text-gray-500">
                Select team members to assign to this course
              </p>
            </div>

            <div className="space-y-4 mb-6">
              {employees.map((employee) => (
                <label key={employee.id} className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">{employee.name}</p>
                    <p className="text-sm text-gray-500">{employee.role}</p>
                  </div>
                </label>
              ))}
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowAssignModal(false)}
                className="px-4 py-2 border rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle assignment
                  setShowAssignModal(false);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Assign Course
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}