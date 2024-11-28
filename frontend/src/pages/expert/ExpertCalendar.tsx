import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Users, Video, Download } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  type: 'training' | 'meeting' | 'workshop';
  date: string;
  time: string;
  duration: string;
  participants: number;
  location: string;
  description: string;
}

export default function ExpertCalendar() {
  const [events] = useState<Event[]>([
    {
      id: 1,
      title: "AI Implementation Workshop",
      type: "workshop",
      date: "2024-03-20",
      time: "10:00",
      duration: "2 hours",
      participants: 15,
      location: "Virtual",
      description: "Introduction to AI implementation strategies"
    },
    {
      id: 2,
      title: "Team Training Session",
      type: "training",
      date: "2024-03-22",
      time: "14:00",
      duration: "1.5 hours",
      participants: 8,
      location: "Virtual",
      description: "Advanced ML concepts training"
    }
  ]);

  const handleSyncCalendar = async () => {
    try {
      // Check if Google Calendar API is available
      if ('google' in window && 'calendar' in (window as any).google) {
        // Request calendar access
        const response = await (window as any).gapi.auth2.getAuthInstance().signIn();
        if (response) {
          // Create calendar events
          for (const event of events) {
            const calendarEvent = {
              'summary': event.title,
              'description': event.description,
              'start': {
                'dateTime': `${event.date}T${event.time}:00`,
                'timeZone': 'UTC'
              },
              'end': {
                'dateTime': `${event.date}T${event.time}:00`,
                'timeZone': 'UTC'
              }
            };

            await (window as any).gapi.client.calendar.events.insert({
              'calendarId': 'primary',
              'resource': calendarEvent
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

  const handleExportSchedule = () => {
    // Create CSV content
    const csvContent = `
Title,Date,Time,Duration,Participants,Location,Description
${events.map(event => `${event.title},${event.date},${event.time},${event.duration},${event.participants},${event.location},"${event.description}"`).join('\n')}
    `.trim();

    // Create and trigger download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'schedule.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Calendar</h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage your schedule and events
            </p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleSyncCalendar}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <CalendarIcon className="w-5 h-5 mr-2" />
              Sync Calendar
            </button>
            <button
              onClick={handleExportSchedule}
              className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              <Download className="w-5 h-5 mr-2" />
              Export Schedule
            </button>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Upcoming Events</h2>
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg ${
                    event.type === 'workshop' ? 'bg-blue-100 text-blue-600' :
                    event.type === 'training' ? 'bg-green-100 text-green-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    {event.type === 'workshop' ? <Users className="w-5 h-5" /> :
                     event.type === 'training' ? <Video className="w-5 h-5" /> :
                     <CalendarIcon className="w-5 h-5" />}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">{event.title}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {event.date}
                      <Clock className="w-4 h-4 ml-3 mr-1" />
                      {event.time}
                      <Users className="w-4 h-4 ml-3 mr-1" />
                      {event.participants} participants
                    </div>
                  </div>
                </div>
                <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar View */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Calendar</h2>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">Month</button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">Week</button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">Day</button>
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