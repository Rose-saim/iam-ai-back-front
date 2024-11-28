import React, { useState } from 'react';
import { Search, Filter, BookOpen, Star, Clock } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  description: string;
  level: string;
  duration: string;
  rating: number;
  enrolled: number;
  progress: number;
  instructor: string;
  category: string;
}

export default function IndividualCourses() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    level: '',
    category: '',
    duration: ''
  });

  const courses: Course[] = [
    {
      id: 1,
      title: "AI Fundamentals",
      description: "Learn the basics of artificial intelligence",
      level: "Beginner",
      duration: "6 weeks",
      rating: 4.8,
      enrolled: 1234,
      progress: 75,
      instructor: "Dr. Sarah Chen",
      category: "AI"
    },
    {
      id: 2,
      title: "Machine Learning Essentials",
      description: "Master machine learning concepts",
      level: "Intermediate",
      duration: "8 weeks",
      rating: 4.9,
      enrolled: 892,
      progress: 45,
      instructor: "Prof. Michael Roberts",
      category: "Machine Learning"
    }
  ];

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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
          <p className="mt-1 text-sm text-gray-500">
            Continue your learning journey
          </p>
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
                    <option value="AI">AI</option>
                    <option value="Machine Learning">Machine Learning</option>
                    <option value="Deep Learning">Deep Learning</option>
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
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </span>
                  <span className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    {course.rating}
                  </span>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Continue Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```