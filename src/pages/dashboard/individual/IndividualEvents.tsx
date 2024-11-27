import React from 'react';
import { Calendar, Video, Users, ArrowRight, Clock } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "AI Implementation Workshop",
    date: "Mar 20, 2024",
    time: "10:00 AM",
    type: "Virtual",
    speaker: "Dr. Sarah Chen",
    description: "Learn best practices for implementing AI in your organization",
    link: "https://meet.google.com/abc-defg-hij"
  },
  {
    id: 2,
    title: "Machine Learning Masterclass",
    date: "Mar 25, 2024",
    time: "2:00 PM",
    type: "Virtual",
    speaker: "Prof. Michael Roberts",
    description: "Deep dive into advanced machine learning concepts",
    link: "https://meet.google.com/xyz-uvwx-yz"
  }
];

export default function IndividualEvents() {
  const handleJoin = (event: typeof events[0]) => {
    window.open(event.link, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Upcoming Events</h1>
          <p className="mt-1 text-sm text-gray-500">
            Join live sessions and workshops with industry experts
          </p>
        </div>

        <div className="grid gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{event.title}</h2>
                  <p className="text-gray-600 mt-1">{event.description}</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {event.type}
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-2" />
                  <span>{event.speaker}</span>
                </div>
              </div>

              <button
                onClick={() => handleJoin(event)}
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
              >
                Join Event
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}