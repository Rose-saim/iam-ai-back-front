import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Users, Award, BarChart2, Bell, Calendar, Briefcase, 
  GraduationCap, MessageSquare, User, DollarSign, HelpCircle,
  Settings, FileText, Star, Users2
} from 'lucide-react';

export default function ExpertDashboard() {
  const stats = [
    {
      title: "Active Courses",
      value: "4",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />,
      description: "Currently teaching"
    },
    {
      title: "Total Students",
      value: "256",
      icon: <Users className="w-5 h-5 text-blue-600" />,
      description: "Across all courses"
    },
    {
      title: "Average Rating",
      value: "4.8",
      icon: <Award className="w-5 h-5 text-blue-600" />,
      description: "From 180 reviews"
    },
    {
      title: "New Requests",
      value: "12",
      icon: <Briefcase className="w-5 h-5 text-blue-600" />,
      description: "Pending review"
    }
  ];

  const quickActions = [
    {
      icon: Briefcase,
      title: "Mission Management",
      description: "Manage your projects",
      link: "/expert/missions"
    },
    {
      icon: GraduationCap,
      title: "Training Management",
      description: "Manage your courses",
      link: "/expert/trainings"
    },
    {
      icon: Calendar,
      title: "Calendar",
      description: "View schedule",
      link: "/expert/calendar"
    },
    {
      icon: BarChart2,
      title: "Analytics",
      description: "View insights",
      link: "/expert/analytics"
    },
    {
      icon: MessageSquare,
      title: "Messaging",
      description: "Chat with clients",
      link: "/expert/messaging"
    },
    {
      icon: User,
      title: "Profile",
      description: "Manage expertise",
      link: "/expert/profile"
    },
    {
      icon: DollarSign,
      title: "Finance",
      description: "Track earnings",
      link: "/expert/finance"
    },
    {
      icon: HelpCircle,
      title: "Support",
      description: "Get help",
      link: "/expert/support"
    },
    {
      icon: Settings,
      title: "Settings",
      description: "Configure account",
      link: "/expert/settings"
    },
    {
      icon: FileText,
      title: "Reports",
      description: "View analytics",
      link: "/expert/reports"
    },
    {
      icon: Star,
      title: "Feedback",
      description: "View evaluations",
      link: "/expert/feedback"
    },
    {
      icon: Users2,
      title: "Community",
      description: "Connect with experts",
      link: "/expert/community"
    }
  ];

  return (
    <div>
      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-500">{stat.title}</h3>
              {stat.icon}
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-sm text-gray-600">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.link}
              className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <action.icon className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-medium">{action.title}</h3>
              <p className="text-sm text-gray-600">{action.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium text-gray-900">Recent Notifications</h2>
          <Bell className="w-5 h-5 text-gray-400" />
        </div>
        <div className="space-y-4">
          {[
            {
              type: "mission",
              message: "New project request from Tech Corp",
              time: "2 hours ago"
            },
            {
              type: "message",
              message: "New message from student in AI Basics",
              time: "3 hours ago"
            },
            {
              type: "feedback",
              message: "New course feedback received",
              time: "1 day ago"
            }
          ].map((notification, index) => (
            <div
              key={index}
              className="flex items-start p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex-1">
                <p className="text-gray-900">{notification.message}</p>
                <p className="text-sm text-gray-500">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}