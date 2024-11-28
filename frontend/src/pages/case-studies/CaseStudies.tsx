import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Users, Target, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "AI-Driven Municipal Services Optimization",
    category: "Public Sector",
    client: "City of Springfield",
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
    category: "Business",
    client: "Tech Corp International",
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
    category: "Education",
    client: "Global Learning Institute",
    results: [
      "95% course completion rate",
      "78% career advancement",
      "89% student satisfaction"
    ],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
  }
];

const categories = ["All", "Public Sector", "Business", "Education"];

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredStudies = caseStudies.filter(study => 
    selectedCategory === "All" || study.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how organizations are transforming with our AI solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white rounded-full text-sm font-medium">
                    {study.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.client}</p>
                <div className="space-y-2 mb-6">
                  {study.results.map((result, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {result}
                    </div>
                  ))}
                </div>
                <Link
                  to={`/case-studies/${study.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Read Full Case Study
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Organization?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join these success stories and start your AI journey today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}