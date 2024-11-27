import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Book, MessageSquare, FileText, HelpCircle, ArrowRight } from 'lucide-react';

const categories = [
  {
    icon: <Book className="w-8 h-8" />,
    title: "Getting Started",
    description: "Learn the basics of using our platform",
    links: [
      { title: "Platform Overview", href: "/help/getting-started/overview" },
      { title: "Account Setup", href: "/help/getting-started/account" },
      { title: "First Steps", href: "/help/getting-started/first-steps" }
    ]
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Documentation",
    description: "Detailed guides and references",
    links: [
      { title: "API Documentation", href: "/help/docs/api" },
      { title: "Integration Guides", href: "/help/docs/integration" },
      { title: "Best Practices", href: "/help/docs/best-practices" }
    ]
  },
  {
    icon: <HelpCircle className="w-8 h-8" />,
    title: "FAQs",
    description: "Common questions and answers",
    links: [
      { title: "General FAQs", href: "/help/faqs/general" },
      { title: "Technical FAQs", href: "/help/faqs/technical" },
      { title: "Billing FAQs", href: "/help/faqs/billing" }
    ]
  }
];

const popularArticles = [
  {
    title: "How to Get Started with AI Implementation",
    views: "2.5k",
    category: "Getting Started"
  },
  {
    title: "Understanding AI Models and Their Applications",
    views: "1.8k",
    category: "Documentation"
  },
  {
    title: "Troubleshooting Common Integration Issues",
    views: "1.2k",
    category: "Technical"
  }
];

export default function Help() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How can we help you?</h1>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Help Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                {category.icon}
              </div>
              <h2 className="text-xl font-bold mb-4">{category.title}</h2>
              <p className="text-gray-600 mb-6">{category.description}</p>
              <ul className="space-y-3">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="flex items-center text-blue-600 hover:text-blue-700"
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Popular Articles */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Popular Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <Link
                key={index}
                to="#"
                className="p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-2">{article.title}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">{article.views} views</span>
                  <span>{article.category}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-lg mb-8 opacity-90">
            Our support team is here to assist you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact-support"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact Support
            </Link>
            <Link
              to="/help/live-chat"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Start Live Chat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}