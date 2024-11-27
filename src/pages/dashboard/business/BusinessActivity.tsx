import React, { useState } from 'react';
import { Users, Award, Settings, Filter, Search, Calendar } from 'lucide-react';

interface Activity {
  id: number;
  action: string;
  detail: string;
  time: string;
  date: string;
  type: 'consultant' | 'training' | 'implementation' | 'system';
  icon: JSX.Element;
}

export default function BusinessActivity() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    type: '',
    date: ''
  });

  const activities: Activity[] = [
    {
      id: 1,
      action: "New consultant assigned",
      detail: "Dr. Sarah Chen joined Project Alpha",
      time: "2 hours ago",
      date: "2024-03-15",
      type: "consultant",
      icon: <Users className="w-5 h-5 text-blue-600" />
    },
    {
      id: 2,
      action: "Training milestone reached",
      detail: "Team completed AI Fundamentals module",
      time: "5 hours ago",
      date: "2024-03-15",
      type: "training",
      icon: <Award className="w-5 h-5 text-green-600" />
    },
    {
      id: 3,
      action: "Implementation update",
      detail: "Phase 1 successfully completed",
      time: "1 day ago",
      date: "2024-03-14",
      type: "implementation",
      icon: <Settings className="w-5 h-5 text-purple-600" />
    }
  ];

  const filteredActivities = activities.filter(activity => {
    const matchesSearch = 
      activity.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.detail.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = !filters.type || activity.type === filters.type;
    const matchesDate = !filters.date || activity.date === filters.date;

    return matchesSearch && matchesType && matchesDate;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Recent Activity</h1>
          <p className="mt-1 text-sm text-gray-500">
            Track all activities related to your AI implementation
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search activities..."
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Activity Type
                  </label>
                  <select
                    value={filters.type}
                    onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
                    className="w-full border rounded-lg p-2"
                  >
                    <option value="">All Types</option>
                    <option value="consultant">Consultant</option>
                    <option value="training">Training</option>
                    <option value="implementation">Implementation</option>
                    <option value="system">System</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={filters.date}
                    onChange={(e) => setFilters(prev => ({ ...prev, date: e.target.value }))}
                    className="w-full border rounded-lg p-2"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Activity Timeline */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="relative">
            <div className="absolute top-0 left-8 h-full w-0.5 bg-gray-200"></div>
            <div className="space-y-8">
              {filteredActivities.map((activity) => (
                <div key={activity.id} className="relative flex items-start">
                  <div className="absolute left-8 w-0.5 h-full bg-gray-200"></div>
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-gray-200">
                    {activity.icon}
                  </div>
                  <div className="ml-6">
                    <div className="flex items-center">
                      <h3 className="text-lg font-medium text-gray-900">{activity.action}</h3>
                      <span className="ml-4 text-sm text-gray-500">{activity.time}</span>
                    </div>
                    <p className="mt-1 text-gray-600">{activity.detail}</p>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {activity.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}