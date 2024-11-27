import React from 'react';
import { Bell, Calendar, Users, BookOpen } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: "mission",
    message: "New consultant assigned to AI Implementation Phase 1",
    time: "2 hours ago",
    icon: <Users className="w-5 h-5 text-blue-600" />
  },
  {
    id: 2,
    type: "course",
    message: "Team training completion deadline approaching",
    time: "5 hours ago",
    icon: <BookOpen className="w-5 h-5 text-green-600" />
  },
  {
    id: 3,
    type: "event",
    message: "Upcoming AI Strategy Workshop next week",
    time: "1 day ago",
    icon: <Calendar className="w-5 h-5 text-purple-600" />
  }
];

export default function NotificationCenter() {
  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="flex items-start p-4 border rounded-lg hover:bg-gray-50 transition cursor-pointer"
        >
          <div className="flex-shrink-0">
            <div className="bg-gray-50 p-2 rounded-lg">
              {notification.icon}
            </div>
          </div>
          <div className="ml-4 flex-1">
            <p className="text-sm text-gray-900">{notification.message}</p>
            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
          </div>
          <button className="ml-4 text-gray-400 hover:text-gray-500">
            <Bell className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}