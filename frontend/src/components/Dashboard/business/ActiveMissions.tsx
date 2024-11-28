import React, { useState } from 'react';
import { Clock, Users, CheckCircle, MoreVertical, X } from 'lucide-react';

interface Mission {
  id: number;
  title: string;
  consultant: string;
  progress: number;
  dueDate: string;
  status: string;
}

interface ActiveMissionsProps {
  missions: Mission[];
}

export default function ActiveMissions({ missions }: ActiveMissionsProps) {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);

  const handleViewDetails = (mission: Mission) => {
    setSelectedMission(mission);
    setShowDetailsModal(true);
  };

  return (
    <div className="space-y-4">
      {missions.length === 0 ? (
        <p className="text-center text-gray-500 py-4">No missions found matching your criteria.</p>
      ) : (
        missions.map((mission) => (
          <div key={mission.id} className="p-4 border rounded-lg hover:bg-gray-50 transition">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-gray-900">{mission.title}</h3>
                <p className="text-sm text-gray-500">
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {mission.consultant}
                  </span>
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  mission.status === 'completed' 
                    ? 'bg-green-100 text-green-800'
                    : mission.status === 'active'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {mission.status.charAt(0).toUpperCase() + mission.status.slice(1)}
                </span>
                <div className="relative group">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <MoreVertical className="w-4 h-4 text-gray-500" />
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border hidden group-hover:block">
                    <button
                      onClick={() => handleViewDetails(mission)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      View Details
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Mark as Completed
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                    >
                      Cancel Mission
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-2">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>{mission.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${mission.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-gray-500 flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                Due {mission.dueDate}
              </span>
              <button
                onClick={() => handleViewDetails(mission)}
                className="text-blue-600 hover:text-blue-700 flex items-center"
              >
                <CheckCircle className="w-4 h-4 mr-1" />
                View Details
              </button>
            </div>
          </div>
        ))
      )}

      {/* Mission Details Modal */}
      {showDetailsModal && selectedMission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">{selectedMission.title}</h2>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Consultant</h3>
                <p className="mt-1">{selectedMission.consultant}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Status</h3>
                <p className="mt-1">{selectedMission.status}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Progress</h3>
                <div className="mt-1">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Completion</span>
                    <span>{selectedMission.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${selectedMission.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Due Date</h3>
                <p className="mt-1">{selectedMission.dueDate}</p>
              </div>

              <div className="pt-4 flex justify-end space-x-4">
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}