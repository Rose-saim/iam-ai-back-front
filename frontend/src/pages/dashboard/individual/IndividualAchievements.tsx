import React from 'react';
import { Trophy, Star, Award, Share2 } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: "AI Pioneer",
    description: "Completed first AI certification",
    icon: <Trophy className="w-8 h-8 text-yellow-400" />,
    date: "Mar 15, 2024",
    points: 500,
    badge: "🏆",
    unlocked: true
  },
  {
    id: 2,
    title: "Quick Learner",
    description: "Completed 5 courses in one month",
    icon: <Star className="w-8 h-8 text-blue-400" />,
    date: "Mar 10, 2024",
    points: 300,
    badge: "⚡",
    unlocked: true
  },
  {
    id: 3,
    title: "AI Expert",
    description: "Complete all advanced AI courses",
    icon: <Award className="w-8 h-8 text-gray-400" />,
    points: 1000,
    badge: "👑",
    unlocked: false,
    progress: 75
  }
];

export default function IndividualAchievements() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Achievements</h1>
          <p className="mt-1 text-sm text-gray-500">
            Track your learning milestones and earn rewards
          </p>
        </div>

        {/* Points Overview */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-medium text-gray-900">Total Points</h2>
              <p className="text-3xl font-bold text-blue-600 mt-2">1,500</p>
            </div>
            <Trophy className="w-12 h-12 text-yellow-400" />
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`bg-white rounded-xl shadow-sm p-6 ${
                !achievement.unlocked ? 'opacity-75' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{achievement.badge}</div>
                {achievement.unlocked && (
                  <button className="text-gray-400 hover:text-gray-500">
                    <Share2 className="w-5 h-5" />
                  </button>
                )}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 mb-4">{achievement.description}</p>

              {achievement.unlocked ? (
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{achievement.date}</span>
                  <span className="text-blue-600">+{achievement.points} points</span>
                </div>
              ) : (
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{achievement.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${achievement.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}