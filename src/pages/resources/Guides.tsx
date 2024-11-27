import React, { useState } from 'react';
import { Search, Download, BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const guides = [
  {
    id: 1,
    title: "Complete AI Implementation Playbook",
    category: "Implementation",
    level: "Advanced",
    pages: 85,
    description: "A comprehensive guide to implementing AI solutions in your organization.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "AI Training Best Practices",
    category: "Training",
    level: "Intermediate",
    pages: 64,
    description: "Learn how to effectively train your team on AI technologies.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Getting Started with AI",
    category: "Fundamentals",
    level: "Beginner",
    pages: 42,
    description: "Essential concepts and principles for AI beginners.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
  }
];

const categories = ["All", "Implementation", "Training", "Fundamentals"];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export default function Guides() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGuides = guides.filter(guide => {
    const matchesCategory = selectedCategory === "All" || guide.category === selectedCategory;
    const matchesLevel = selectedLevel === "All Levels" || guide.level === selectedLevel;
    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         guide.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            AI Implementation Guides
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Comprehensive resources to help you succeed with AI
          </motion.p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedLevel === level
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGuides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={guide.image}
                alt={guide.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {guide.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {guide.level}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-2 text-gray-900">
                  {guide.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {guide.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    <BookOpen className="w-4 h-4 inline mr-1" />
                    {guide.pages} pages
                  </span>
                  <button className="flex items-center text-blue-600 hover:text-blue-700">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}