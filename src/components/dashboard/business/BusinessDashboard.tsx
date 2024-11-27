// ... (début du fichier reste identique)

// Ajoutez après les imports existants
import { useState } from 'react';

export default function BusinessDashboard() {
  // ... (autres states restent identiques)

  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'mission',
      message: 'New consultant assigned to AI Implementation Phase 1',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'course',
      message: 'Team training completion deadline approaching',
      time: '5 hours ago',
      read: false
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  // Ajoutez ces données pour la gamification
  const gamificationData = {
    points: 1500,
    level: 3,
    nextLevel: 2000,
    recentAchievements: [
      {
        title: "AI Pioneer",
        description: "Completed first AI implementation",
        points: 500,
        icon: "🏆"
      },
      {
        title: "Team Leader",
        description: "Trained 10 team members",
        points: 300,
        icon: "👥"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header avec notifications */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Business Dashboard</h1>
            <p className="mt-1 text-sm text-gray-500">
              Welcome back! Here's an overview of your AI implementation progress
            </p>
          </div>
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-gray-400 hover:text-gray-500"
            >
              <Bell className="w-6 h-6" />
              {unreadCount > 0 && (
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
              )}
            </button>

            {/* Dropdown des notifications */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border z-50">
                <div className="p-4 border-b">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Notifications</h3>
                    <button 
                      onClick={handleMarkAllAsRead}
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      Mark all as read
                    </button>
                  </div>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notif) => (
                    <div 
                      key={notif.id}
                      className={`p-4 hover:bg-gray-50 ${!notif.read ? 'bg-blue-50' : ''}`}
                    >
                      <div className="flex justify-between">
                        <p className="text-sm text-gray-900">{notif.message}</p>
                        <button
                          onClick={() => handleMarkAsRead(notif.id)}
                          className="text-xs text-blue-600 hover:text-blue-700"
                        >
                          {!notif.read && 'Mark as read'}
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ... (autres sections existantes) ... */}

        {/* Section Gamification */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-gray-900">Achievements & Progress</h2>
            <Link
              to="/dashboard/gamification"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              View All
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Points et Niveau */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{gamificationData.points} Points</h3>
                  <p className="text-sm text-gray-500">Level {gamificationData.level}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${(gamificationData.points / gamificationData.nextLevel) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                {gamificationData.nextLevel - gamificationData.points} points to next level
              </p>
            </div>

            {/* Achievements récents */}
            <div className="space-y-4">
              {gamificationData.recentAchievements.map((achievement, index) => (
                <div key={index} className="flex items-center bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl mr-4">{achievement.icon}</div>
                  <div>
                    <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                    <p className="text-sm text-gray-500">{achievement.description}</p>
                    <p className="text-sm text-blue-600">+{achievement.points} points</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ... (reste du contenu) ... */}
      </div>
    </div>
  );
}