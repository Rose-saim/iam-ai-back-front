import React, { useState, useMemo } from 'react';
import { Plus, Filter, Search, X } from 'lucide-react';
import ActiveMissions from '../../../components/dashboard/business/ActiveMissions';

interface Mission {
  id: number;
  title: string;
  consultant: string;
  progress: number;
  dueDate: string;
  status: string;
  approvalStatus: 'pending' | 'approved' | 'rejected'; // Status of consultant's response
  responsePending: boolean; // New field to track if the response is pending
}

interface FilterOptions {
  status: string;
  consultant: string;
  date: string;
}

export default function BusinessMissions() {
  const [missions, setMissions] = useState<Mission[]>([
    {
      id: 1,
      title: 'AI Implementation Phase 1',
      consultant: 'sarah',
      progress: 75,
      dueDate: '2024-03-15',
      status: 'active',
      approvalStatus: 'approved',
      responsePending: false,
    },
    {
      id: 2,
      title: 'Team Training Program',
      consultant: 'michael',
      progress: 45,
      dueDate: '2024-03-20',
      status: 'pending',
      approvalStatus: 'pending',
      responsePending: true, // Waiting for consultant's response
    },
    {
      id: 3,
      title: 'Process Automation',
      consultant: 'emma',
      progress: 90,
      dueDate: '2024-03-10',
      status: 'completed',
      approvalStatus: 'rejected',
      responsePending: false,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [showNewMissionModal, setShowNewMissionModal] = useState(false);

  const [newMission, setNewMission] = useState({
    title: '',
    consultant: '',
    dueDate: '',
    description: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setNewMission((prev) => ({ ...prev, [name]: value }));
  };

  const simulateConsultantResponse = (missionId: number) => {
    // Simulate a delayed response from the consultant
    setTimeout(() => {
      const isAccepted = Math.random() > 0.5; // Randomly accept or reject the mission
      setMissions((prev) =>
        prev.map((mission) =>
          mission.id === missionId
            ? {
                ...mission,
                approvalStatus: isAccepted ? 'approved' : 'rejected',
                responsePending: false,
              }
            : mission
        )
      );
    }, 3000); // Simulate 3 seconds delay
  };

  const handleCreateMission = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newMission.title || !newMission.consultant || !newMission.dueDate) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const newMissionData: Mission = {
      id: missions.length + 1,
      title: newMission.title,
      consultant: newMission.consultant,
      dueDate: newMission.dueDate,
      progress: 0,
      status: 'active',
      approvalStatus: 'pending',
      responsePending: true, // Start with a pending response
    };

    setMissions((prev) => [...prev, newMissionData]);
    setNewMission({ title: '', consultant: '', dueDate: '', description: '' });
    setShowNewMissionModal(false);

    // Simulate sending the mission to the consultant
    simulateConsultantResponse(newMissionData.id);
  };

  const filteredMissions = useMemo(() => {
    return missions.filter((mission) => {
      const matchesSearch = mission.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [missions, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Missions</h1>
            <p className="mt-1 text-sm text-gray-500">
              Track and manage your AI implementation projects
            </p>
          </div>
          <button
            onClick={() => setShowNewMissionModal(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Plus className="w-5 h-5 mr-2" />
            New Mission
          </button>
        </div>

        {/* Active Missions */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-6">
            Active Missions
          </h2>
          <div className="space-y-4">
            {filteredMissions.map((mission) => (
              <div
                key={mission.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {mission.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Consultant: {mission.consultant}
                  </p>
                  <p className="text-sm text-gray-500">
                    Due: {mission.dueDate}
                  </p>
                  <p
                    className={`text-sm font-semibold ${
                      mission.responsePending
                        ? 'text-yellow-500'
                        : mission.approvalStatus === 'approved'
                        ? 'text-green-500'
                        : 'text-red-500'
                    }`}
                  >
                    {mission.responsePending
                      ? 'Awaiting Consultant Response'
                      : mission.approvalStatus === 'approved'
                      ? 'Approved'
                      : 'Rejected'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Mission Modal */}
      {showNewMissionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Create New Mission</h2>
              <button
                onClick={() => setShowNewMissionModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form className="space-y-6" onSubmit={handleCreateMission}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mission Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={newMission.title}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter mission title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Assign Consultant
                </label>
                <select
                  name="consultant"
                  value={newMission.consultant}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg p-2"
                >
                  <option value="">Select Consultant</option>
                  <option value="sarah">Sarah Chen</option>
                  <option value="michael">Michael Roberts</option>
                  <option value="emma">Emma Thompson</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Due Date
                </label>
                <input
                  type="date"
                  name="dueDate"
                  value={newMission.dueDate}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={newMission.description}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Enter mission description"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowNewMissionModal(false)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Create Mission
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
