import React from 'react';
import { Award, Star, Trophy } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: "AI Pioneer",
    description: "Completed first AI certification",
    icon: <Trophy className="w-6 h-6 text-yellow-400" />,
    date: "Mar 15, 2024",
    points: 500
  },
  {
    id: 2,
    title: "Quick Learner",
    description: "Completed 5 courses in one month",
    icon: <Star className="w-6 h-6 text-blue-400" />,
    date: "Mar 10, 2024",
    points: 300
  }
];

export default function Achievements() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {achievements.map((achievement) => (
        <div key={achievement.id} className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            {achievement.icon}
            <div className="ml-4">
              <h3 className="font-medium text-gray-900">{achievement.title}</h3>
              <p className="text-sm text-gray-500">{achievement.description}</p>
            </div>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">{achievement.date}</span>
            <span className="text-blue-600">+{achievement.points} points</span>
          </div>
        </div>
      ))}
    </div>
  );
}