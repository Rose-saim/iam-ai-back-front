import React, { useState } from 'react';
import { Users, Filter, Search, X } from 'lucide-react';
import ConsultantsList from '../../../components/dashboard/business/ConsultantsList';

interface Consultant {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  availability: string;
  image: string;
}

export default function BusinessConsultants() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [filters, setFilters] = useState({
    specialty: '',
    availability: '',
    rating: ''
  });

  const [consultants] = useState<Consultant[]>([
    {
      id: 1,
      name: "Dr. Sarah Chen",
      specialty: "AI Implementation",
      rating: 4.9,
      availability: "Available",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 2,
      name: "Michael Roberts",
      specialty: "Machine Learning",
      rating: 4.8,
      availability: "Available Next Week",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 3,
      name: "Emma Thompson",
      specialty: "Process Automation",
      rating: 4.9,
      availability: "Available",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400"
    }
  ]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredConsultants = consultants.filter(consultant => {
    const matchesSearch = 
      consultant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      consultant.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSpecialty = !filters.specialty || consultant.specialty === filters.specialty;
    const matchesAvailability = !filters.availability || consultant.availability === filters.availability;
    const matchesRating = !filters.rating || consultant.rating >= Number(filters.rating);

    return matchesSearch && matchesSpecialty && matchesAvailability && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Consultants</h1>
            <p className="mt-1 text-sm text-gray-500">
              Find and manage AI implementation experts
            </p>
          </div>
          <button
            onClick={() => setShowRequestModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Request Consultant
          </button>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search consultants..."
                value={searchQuery}
                onChange={handleSearch}
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
                    Specialty
                  </label>
                  <select
                    name="specialty"
                    value={filters.specialty}
                    onChange={handleFilterChange}
                    className="w-full border rounded-lg p-2"
                  >
                    <option value="">All Specialties</option>
                    <option value="AI Implementation">AI Implementation</option>
                    <option value="Machine Learning">Machine Learning</option>
                    <option value="Process Automation">Process Automation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Availability
                  </label>
                  <select
                    name="availability"
                    value={filters.availability}
                    onChange={handleFilterChange}
                    className="w-full border rounded-lg p-2"
                  >
                    <option value="">Any Availability</option>
                    <option value="Available">Available Now</option>
                    <option value="Available Next Week">Available Next Week</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Minimum Rating
                  </label>
                  <select
                    name="rating"
                    value={filters.rating}
                    onChange={handleFilterChange}
                    className="w-full border rounded-lg p-2"
                  >
                    <option value="">Any Rating</option>
                    <option value="4.5">4.5+</option>
                    <option value="4.0">4.0+</option>
                    <option value="3.5">3.5+</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Consultants List */}
        <ConsultantsList consultants={filteredConsultants} />
      </div>

      {/* Request Consultant Modal */}
      {showRequestModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Request a Consultant</h2>
              <button
                onClick={() => setShowRequestModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Type
                </label>
                <select className="w-full border rounded-lg p-2">
                  <option value="">Select Project Type</option>
                  <option value="implementation">AI Implementation</option>
                  <option value="training">Team Training</option>
                  <option value="consulting">Strategic Consulting</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Required Expertise
                </label>
                <select className="w-full border rounded-lg p-2">
                  <option value="">Select Required Expertise</option>
                  <option value="ai">AI Implementation</option>
                  <option value="ml">Machine Learning</option>
                  <option value="automation">Process Automation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Duration
                </label>
                <select className="w-full border rounded-lg p-2">
                  <option value="">Select Duration</option>
                  <option value="1-3">1-3 months</option>
                  <option value="3-6">3-6 months</option>
                  <option value="6+">6+ months</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Requirements
                </label>
                <textarea
                  rows={4}
                  className="w-full border rounded-lg p-2"
                  placeholder="Describe your specific needs..."
                ></textarea>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowRequestModal(false)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}