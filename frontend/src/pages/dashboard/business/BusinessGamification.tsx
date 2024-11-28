import React from 'react';
import { Trophy, Star, Target, Award } from 'lucide-react';

export default function BusinessGamification() {
  const achievements = [
    {
      id: 1,
      title: "AI Pioneer",
      description: "Successfully implemented first AI solution",
      progress: 100,
      completed: true,
      points: 500
    },
    {
      id: 2,
      title: "Team Builder",
      description: "Train 10 team members in AI fundamentals",
      progress: 80,
      completed: false,
      points: 1000
    },
    {
      id: 3,
      title: "Innovation Leader",
      description: "Complete 5 AI implementation projects",
      progress: 60,
      completed: false,
      points: 2000
    }
  ];

  const leaderboard = [
    { name: "Tech Solutions Inc.", points: 2500, rank: 1 },
    { name: "Digital Innovators", points: 2200, rank: 2 },
    { name: "AI Masters Ltd.", points: 2000, rank: 3 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Achievements</h1>
          <p className="mt-1 text-sm text-gray-500">
            Track your progress and earn rewards
          </p>
        </div>

        {/* Points Overview */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-medium text-gray-900">Your Points</h2>
              <p className="text-3xl font-bold text-blue-600 mt-2">1,500</p>
            </div>
            <Trophy className="w-12 h-12 text-yellow-400" />
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <Award className={`w-8 h-8 ${
                  achievement.completed ? 'text-yellow-400' : 'text-gray-400'
                }`} />
                <span className="text-sm font-medium text-blue-600">
                  {achievement.points} pts
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{achievement.description}</p>
              <div className="mt-4">
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
            </div>
          ))}
        </div>

        {/* Leaderboard */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Top Performers</h2>
          <div className="space-y-4">
            {leaderboard.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index === 0 ? 'bg-yellow-100 text-yellow-600' :
                    index === 1 ? 'bg-gray-100 text-gray-600' :
                    'bg-orange-100 text-orange-600'
                  }`}>
                    {company.rank}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">{company.name}</h3>
                    <p className="text-sm text-gray-500">{company.points} points</p>
                  </div>
                </div>
                {index === 0 && (
                  <Trophy className="w-6 h-6 text-yellow-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}