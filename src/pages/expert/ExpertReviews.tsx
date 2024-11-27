import React from 'react';
import { Star, ThumbsUp, MessageCircle, Flag } from 'lucide-react';

export default function ExpertReviews() {
  const reviews = [
    {
      id: 1,
      courseName: "Advanced AI & Machine Learning",
      studentName: "Michael Brown",
      rating: 5,
      date: "2024-02-15",
      comment: "Dr. Chen's expertise in AI is exceptional. The course content was comprehensive and well-structured. Her real-world examples made complex concepts easy to understand.",
      helpful: 24,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
    },
    {
      id: 2,
      courseName: "Deep Learning Specialization",
      studentName: "Emma Wilson",
      rating: 4,
      date: "2024-02-10",
      comment: "Great course with detailed explanations. The practical assignments were particularly helpful. Would recommend adding more real-world projects.",
      helpful: 18,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
    },
    {
      id: 3,
      courseName: "Computer Vision with TensorFlow",
      studentName: "David Lee",
      rating: 5,
      date: "2024-02-05",
      comment: "Outstanding course! The hands-on approach to computer vision problems was invaluable. Dr. Chen's teaching style is engaging and effective.",
      helpful: 31,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Course Reviews</h1>
          <p className="mt-1 text-sm text-gray-500">
            Monitor and respond to student feedback
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-gray-900">4.8</div>
                <div className="flex justify-center my-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill={star <= 4.8 ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-500">Overall Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900">579</div>
                <div className="text-sm text-gray-500 mt-2">Total Reviews</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-500 mt-2">Positive Feedback</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900">45min</div>
                <div className="text-sm text-gray-500 mt-2">Avg. Response Time</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-start space-x-4">
                <img
                  src={review.avatar}
                  alt={review.studentName}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">{review.studentName}</h3>
                      <p className="text-sm text-gray-500">{review.courseName}</p>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>

                  <div className="flex items-center mt-2 mb-4">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className="w-5 h-5 text-yellow-400"
                        fill={index < review.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 mb-4">{review.comment}</p>

                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-gray-500 hover:text-gray-700">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      <span className="text-sm">{review.helpful} Helpful</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-gray-700">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span className="text-sm">Reply</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-gray-700">
                      <Flag className="w-4 h-4 mr-1" />
                      <span className="text-sm">Report</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}