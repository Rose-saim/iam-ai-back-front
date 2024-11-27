import React from 'react';
import { Calendar, Users, Video, Clock } from 'lucide-react';

export default function BusinessWorkshops() {
  // const workshops = [
    
  //       { id: 1, name: "Workshop 1", date: "2024-12-01" },
  //       { id: 2, name: "Workshop 2", date: "2024-12-05" }]

  const workshops = [
    {
      id: 1,
      title: "AI Implementation Best Practices",
      date: "March 15, 2024",
      time: "10:00 AM - 12:00 PM",
      instructor: "Dr. Sarah Chen",
      attendees: 24,
      type: "Virtual",
      status: "Upcoming"
    },
    {
      id: 2,
      title: "Change Management Workshop",
      date: "March 20, 2024",
      time: "2:00 PM - 4:00 PM",
      instructor: "Michael Roberts",
      attendees: 18,
      type: "Virtual",
      status: "Open"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Workshops & Events</h1>
          <p className="mt-1 text-sm text-gray-500">
            Interactive sessions to support your AI implementation journey
          </p>
        </div>

        {/* Upcoming Workshops */}
        <div className="grid gap-6 mb-8">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold mb-1">{workshop.title}</h2>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{workshop.date}</span>
                      <Clock className="w-4 h-4 ml-4 mr-1" />
                      <span>{workshop.time}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    workshop.status === 'Upcoming'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {workshop.status}
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{workshop.instructor}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{workshop.attendees} Attendees</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Video className="w-5 h-5 mr-2" />
                    <span>{workshop.type}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Register Now
                  </button>
                  <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar View */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Workshop Calendar</h2>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition">
                Month
              </button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition">
                Week
              </button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition">
                Day
              </button>
            </div>
          </div>
          
          {/* Calendar placeholder - You would typically integrate a calendar component here */}
          <div className="h-96 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Calendar View Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}