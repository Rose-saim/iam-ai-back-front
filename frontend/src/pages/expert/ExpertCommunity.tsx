import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, Share2, Users, Plus, Search } from 'lucide-react';

interface Post {
  id: number;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string;
  date: string;
  likes: number;
  comments: number;
  tags: string[];
}

export default function ExpertCommunity() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [newPost, setNewPost] = useState({
    content: '',
    tags: [] as string[]
  });

  const posts: Post[] = [
    {
      id: 1,
      author: {
        name: "Dr. Sarah Chen",
        role: "AI Implementation Expert",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
      },
      content: "Just completed a successful AI implementation project for a major tech company. Here are some key learnings...",
      date: "2 hours ago",
      likes: 24,
      comments: 8,
      tags: ["AI Implementation", "Best Practices"]
    },
    {
      id: 2,
      author: {
        name: "Michael Roberts",
        role: "Machine Learning Specialist",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
      },
      content: "Looking for collaboration on a new AI training program. Anyone interested in joining forces?",
      date: "5 hours ago",
      likes: 15,
      comments: 12,
      tags: ["Collaboration", "Training"]
    }
  ];

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle post creation
    console.log('Creating new post:', newPost);
    setNewPost({ content: '', tags: [] });
    setShowNewPostModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Expert Community</h1>
            <p className="mt-1 text-sm text-gray-500">
              Connect and collaborate with other AI experts
            </p>
          </div>
          <button
            onClick={() => setShowNewPostModal(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Plus className="w-5 h-5 mr-2" />
            Create Post
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-start space-x-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">{post.author.name}</h3>
                      <p className="text-sm text-gray-500">{post.author.role}</p>
                    </div>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>

                  <p className="mt-4 text-gray-600">{post.content}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4 mt-4 pt-4 border-t">
                    <button className="flex items-center text-gray-500 hover:text-gray-700">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      <span className="text-sm">{post.likes} Likes</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-gray-700">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      <span className="text-sm">{post.comments} Comments</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-gray-700">
                      <Share2 className="w-4 h-4 mr-1" />
                      <span className="text-sm">Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Post Modal */}
      {showNewPostModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-6">
            <h2 className="text-xl font-bold mb-6">Create Post</h2>
            <form onSubmit={handleCreatePost} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                <textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost(prev => ({ ...prev, content: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Share your thoughts, insights, or questions..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags
                </label>
                <input
                  type="text"
                  placeholder="Add tags separated by commas"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setNewPost(prev => ({
                    ...prev,
                    tags: e.target.value.split(',').map(tag => tag.trim())
                  }))}
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowNewPostModal(false)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}