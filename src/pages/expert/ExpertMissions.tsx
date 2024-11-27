import React, { useState } from 'react';
import { Calendar, Users, FileText, Clock, Download, Search, Filter, X } from 'lucide-react';

interface Mission {
  id: number;
  title: string;
  client: {
    name: string;
    type: 'B2B' | 'B2C' | 'B2G';
  };
  status: 'pending' | 'in-progress' | 'completed';
  startDate: string;
  endDate: string;
  deliverables: {
    name: string;
    status: 'pending' | 'submitted' | 'approved';
    date: string;
    fileUrl?: string;
  }[];
}

export default function ExpertMissions() {
  const [missions] = useState<Mission[]>([
    {
      id: 1,
      title: "AI Implementation Strategy",
      client: {
        name: "Tech Corp",
        type: "B2B"
      },
      status: "in-progress",
      startDate: "2024-02-01",
      endDate: "2024-04-30",
      deliverables: [
        {
          name: "Initial Assessment Report",
          status: "approved",
          date: "2024-02-15",
          fileUrl: "/documents/initial-assessment.pdf"
        },
        {
          name: "Implementation Plan",
          status: "submitted",
          date: "2024-03-01",
          fileUrl: "/documents/implementation-plan.pdf"
        }
      ]
    },
    {
      id: 2,
      title: "AI Training Program",
      client: {
        name: "City Council",
        type: "B2G"
      },
      status: "pending",
      startDate: "2024-03-15",
      endDate: "2024-06-15",
      deliverables: [
        {
          name: "Training Materials",
          status: "pending",
          date: "2024-03-30",
          fileUrl: "/documents/training-materials.pdf"
        }
      ]
    }
  ]);

  const handleSyncCalendar = async () => {
    try {
      // Check if Google Calendar API is available
      if ('google' in window && 'calendar' in (window as any).google) {
        // Request calendar access
        const response = await (window as any).gapi.auth2.getAuthInstance().signIn();
        if (response) {
          // Create calendar events for missions
          for (const mission of missions) {
            const event = {
              'summary': mission.title,
              'description': `Client: ${mission.client.name}\nType: ${mission.client.type}`,
              'start': {
                'date': mission.startDate
              },
              'end': {
                'date': mission.endDate
              }
            };

            await (window as any).gapi.client.calendar.events.insert({
              'calendarId': 'primary',
              'resource': event
            });
          }

          alert('Calendar successfully synced!');
        }
      } else {
        // Fallback for demo
        alert('Calendar sync simulated - In production, this would sync with Google Calendar');
      }
    } catch (error) {
      console.error('Calendar sync error:', error);
      alert('Failed to sync calendar. Please try again.');
    }
  };

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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Mission Management</h1>
            <p className="mt-1 text-sm text-gray-500">
              Track and manage your consulting missions
            </p>
          </div>
          <button 
            onClick={handleSyncCalendar}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Sync Calendar
          </button>
        </div>

        {/* Mission List */}
        <div className="space-y-6">
          {missions.map((mission) => (
            <div key={mission.id} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold">{mission.title}</h2>
                  <div className="flex items-center mt-2">
                    <Users className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{mission.client.name}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                      {mission.client.type}
                    </span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  mission.status === 'completed' ? 'bg-green-100 text-green-800' :
                  mission.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {mission.status.charAt(0).toUpperCase() + mission.status.slice(1)}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>
                    {mission.startDate} - {mission.endDate}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Deliverables</h4>
                {mission.deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{deliverable.name}</p>
                      <p className="text-sm text-gray-500">Due: {deliverable.date}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                        deliverable.status === 'approved' ? 'bg-green-100 text-green-800' :
                        deliverable.status === 'submitted' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {deliverable.status.charAt(0).toUpperCase() + deliverable.status.slice(1)}
                      </span>
                      <button 
                        onClick={() => handleDownload(deliverable.fileUrl || '', deliverable.name)}
                        className="text-blue-600 hover:text-blue-700 transition"
                      >
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}