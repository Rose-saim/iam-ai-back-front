import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Calendar, Users, BookOpen } from 'lucide-react';

interface Notification {
  id: number;
  type: 'mission' | 'course' | 'consultant' | 'implementation';
  message: string;
  link: string;
  time: string;
  read: boolean;
}

export default function BusinessNotifications() {
  const [notifications, setNotifications] = React.useState<Notification[]>([
    {
      id: 1,
      type: 'mission',
      message: 'New consultant assigned to AI Implementation Phase 1',
      link: '/dashboard/missions/1',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'course',
      message: 'Team training completion deadline approaching',
      link: '/dashboard/courses',
      time: '5 hours ago',
      read: false
    },
    {
      id: 3,
      type: 'implementation',
      message: 'Implementation milestone achieved',
      link: '/dashboard/implementation',
      time: '1 day ago',
      read: true
    }
  ]);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'mission':
        return <Users className="w-5 h-5 text-blue-600" />;
      case 'course':
        return <BookOpen className="w-5 h-5 text-green-600" />;
      case 'consultant':
        return <Users className="w-5 h-5 text-purple-600" />;
      case 'implementation':
        return <Calendar className="w-5 h-5 text-orange-600" />;
      default:
        return <Bell className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <Link
          key={notification.id}
          to={notification.link}
          onClick={() => markAsRead(notification.id)}
          className={`flex items-start p-4 rounded-lg transition ${
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
        </Link>
      ))}
    </div>
  );
}