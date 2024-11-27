import React from 'react';
import { Bell, Calendar, Users, BookOpen } from 'lucide-react';

interface Notification {
  id: number;
  type: 'mission' | 'course' | 'team' | 'system';
  message: string;
  time: string;
  read: boolean;
}

interface NotificationsListProps {
  notifications: Notification[];
  onNotificationClick: (id: number) => void;
}

export default function NotificationsList({ notifications, onNotificationClick }: NotificationsListProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'mission':
        return <Users className="w-5 h-5 text-blue-600" />;
      case 'course':
        return <BookOpen className="w-5 h-5 text-green-600" />;
      case 'team':
        return <Users className="w-5 h-5 text-purple-600" />;
      default:
        return <Bell className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          onClick={() => onNotificationClick(notification.id)}
          className={`flex items-start p-4 rounded-lg cursor-pointer transition ${
            notification.read ? 'bg-white' : 'bg-blue-50'
          } hover:bg-gray-50`}
        >
          <div className="flex-shrink-0">
            <div className="bg-white p-2 rounded-lg">
              {getIcon(notification.type)}
            </div>
          </div>
          <div className="ml-4 flex-1">
            <p className={`text-sm ${notification.read ? 'text-gray-600' : 'text-gray-900 font-medium'}`}>
              {notification.message}
            </p>
            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
          </div>
          {!notification.read && (
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          )}
        </div>
      ))}
    </div>
  );
}