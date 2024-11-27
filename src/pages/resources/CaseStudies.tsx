import React, { useState } from 'react';
import { Search, Building2, BarChart2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    id: 1,
    title: "AI-Driven Municipal Services Optimization",
    organization: "City of Springfield",
    industry: "Public Sector",
    results: [
      "45% reduction in response times",
      "30% decrease in operational costs",
      "92% citizen satisfaction rate"
    ],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Enterprise AI Implementation Success",
    organization: "Tech Corp International",
    industry: "Technology",
    results: [
      "60% increase in productivity",
      "40% cost reduction",
      "85% employee adoption rate"
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "AI Training Program Impact",
    organization: "Global Learning Institute",
    industry: "Education",
    results: [
      "95% course completion rate",
      "78% career advancement",
      "89% student satisfaction"
    ],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
  }
];

const industries = ["All", "Public Sector", "Technology", "Education", "Healthcare", "Finance"];

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === "All" || study.industry === selectedIndustry;
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.organization.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesIndustry && matchesSearch;
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
            AI Implementation Case Studies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Real-world success stories of AI transformation
          </motion.p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search case studies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedIndustry === industry
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg- <boltAction type="file" filePath="src/pages/resources/CaseStudies.tsx">bg-gray-50'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-2 text-gray-900">
                  {study.title}
                </h2>
                <div className="flex items-center text-gray-600 mb-4">
                  <Building2 className="w-4 h-4 mr-2" />
                  {study.organization}
                </div>
                <div className="space-y-2 mb-6">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-gray-600">
                      <BarChart2 className="w-4 h-4 mr-2 text-blue-600" />
                      {result}
                    </div>
                  ))}
                </div>
                <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Read Full Case Study
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}