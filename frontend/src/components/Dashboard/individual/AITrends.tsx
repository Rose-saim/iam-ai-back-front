import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ExternalLink } from 'lucide-react';

const trends = [
  {
    id: 1,
    title: "The Rise of Generative AI in Business",
    source: "AI Industry Report",
    date: "Mar 15, 2024",
    category: "Industry Trends",
    link: "/dashboard/trends/1"
  },
  {
    id: 2,
    title: "New AI Regulations Impact on Implementation",
    source: "Tech News Daily",
    date: "Mar 14, 2024",
    category: "Regulations",
    link: "/dashboard/trends/2"
  }
];

export default function AITrends() {
  return (
    <div className="space-y-4">
      {trends.map((trend) => (
        <Link
          key={trend.id}
          to={trend.link}
          className="block p-4 border rounded-lg hover:bg-gray-50 transition"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium text-gray-900">{trend.title}</h3>
              <p className="text-sm text-gray-500">{trend.source}</p>
              <div className="flex items-center mt-2">
                <span className="text-xs text-gray-500">{trend.date}</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                  {trend.category}
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-blue-600" />
          </div>
        </Link>
      ))}
      
      <Link 
        to="/dashboard/trends"
        className="block text-center text-blue-600 hover:text-blue-700 mt-4"
      >
        View All Trends
      </Link>
    </div>
  );
}