import React from 'react';
import { Users, MessageSquare, ThumbsUp, Share2 } from 'lucide-react';

export default function Community() {
  const discussions = [
    {
      id: 1,
      author: "Sarah Chen",
      title: "Best practices for implementing AI in small businesses",
      content: "I'd love to hear your experiences with AI implementation...",
      likes: 24,
      replies: 12,
      time: "2 hours ago"
    },
    {
      id: 2,
      author: "Michael Roberts",
      title: "Machine Learning model optimization tips",
      content: "Here are some tips I've learned about optimizing ML models...",
      likes: 18,
      replies: 8,
      time: "4 hours ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Community</h1>
            <p className="mt-1 text-sm text-gray-500">
              Connect and learn with other AI enthusiasts
            </p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Start Discussion
          </button>
        </div>

        <div className="grid gap-6">
          {discussions.map((discussion) => (
            <div key={discussion.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{discussion.author}</p>
                    <p className="text-sm text-gray-500">{discussion.time}</p>
                  </div>
                </div>

                <h2 className="text-xl font-semibold mb-2">{discussion.title}</h2>
                <p className="text-gray-600 mb-4">{discussion.content}</p>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <button className="flex items-center text-gray-500 hover:text-blue-600">
                      <ThumbsUp className="w-5 h-5 mr-1" />
                      <span>{discussion.likes}</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-blue-600">
                      <MessageSquare className="w-5 h-5 mr-1" />
                      <span>{discussion.replies}</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-blue-600">
                      <Share2 className="w-5 h-5 mr-1" />
                      <span>Share</span>
                    </button>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700">
                    View Discussion
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}