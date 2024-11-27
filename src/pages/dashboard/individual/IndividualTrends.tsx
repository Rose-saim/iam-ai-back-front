import React from 'react';
import { TrendingUp, ExternalLink, Download } from 'lucide-react';

const trends = [
  {
    id: 1,
    title: "The Rise of Generative AI in Business",
    source: "AI Industry Report",
    date: "Mar 15, 2024",
    category: "Industry Trends",
    content: "Detailed analysis of how generative AI is transforming business operations...",
    link: "https://example.com/report1"
  },
  {
    id: 2,
    title: "New AI Regulations Impact on Implementation",
    source: "Tech News Daily",
    date: "Mar 14, 2024",
    category: "Regulations",
    content: "Overview of recent regulatory changes affecting AI implementation...",
    link: "https://example.com/report2"
  }
];

export default function IndividualTrends() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">AI Industry Trends</h1>
          <p className="mt-1 text-sm text-gray-500">
            Stay updated with the latest developments in AI
          </p>
        </div>

        <div className="grid gap-6">
          {trends.map((trend) => (
            <div key={trend.id} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{trend.title}</h2>
                  <div className="flex items-center mt-2">
                    <span className="text-sm text-gray-500">{trend.source}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{trend.date}</span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {trend.category}
                </span>
              </div>

              <p className="text-gray-600 mb-6">{trend.content}</p>

              <div className="flex justify-between items-center">
                <a
                  href={trend.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 flex items-center"
                >
                  Read Full Article
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
                <button className="flex items-center text-gray-600 hover:text-gray-700">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}