import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, Video, Users, ArrowRight, Clock } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "AI Implementation Workshop",
    date: "Mar 20, 2024",
    time: "10:00 AM",
    type: "Virtual",
    speaker: "Dr. Sarah Chen",
    link: "https://meet.google.com/abc-defg-hij" // Exemple de lien de réunion
  },
  {
    id: 2,
    title: "Machine Learning Masterclass",
    date: "Mar 25, 2024",
    time: "2:00 PM",
    type: "Virtual",
    speaker: "Prof. Michael Roberts",
    link: "https://meet.google.com/xyz-uvwx-yz" // Exemple de lien de réunion
  }
];

export default function UpcomingEvents() {
  const navigate = useNavigate();

  const handleJoin = (event: typeof events[0]) => {
    if (event.type === "Virtual") {
      window.open(event.link, '_blank');
    } else {
      // Pour les événements en personne, afficher les détails
      navigate(`/dashboard/events/${event.id}`);
    }
  };

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div key={event.id} className="p-4 border rounded-lg hover:bg-gray-50 transition">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium text-gray-900">{event.title}</h3>
              <p className="text-sm text-gray-500">{event.speaker}</p>
            </div>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
              {event.type}
            </span>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-4">
              <span className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                {event.date}
              </span>
              <span className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                {event.time}
              </span>
            </div>
            <button 
              onClick={() => handleJoin(event)}
              className="flex items-center text-blue-600 hover:text-blue-700"
            >
              Join
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      ))}
      
      <Link 
        to="/dashboard/events"
        className="block text-center text-blue-600 hover:text-blue-700 mt-4"
      >
        View All Events
      </Link>
    </div>
  );
}