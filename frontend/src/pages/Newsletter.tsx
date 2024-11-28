import React, { useState } from 'react';
import { Mail, Bell, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState<string[]>([]);
  const [subscribed, setSubscribed] = useState(false);

  const topics = [
    'AI Industry Updates',
    'Implementation Tips',
    'Case Studies',
    'Training Resources',
    'Events & Webinars',
    'Product Updates'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  const togglePreference = (topic: string) => {
    setPreferences(prev => 
      prev.includes(topic) 
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  if (subscribed) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8 text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Thank You for Subscribing!</h2>
          <p className="text-gray-600 mb-6">
            We've sent a confirmation email to {email}. Please check your inbox to complete your subscription.
          </p>
          <button 
            onClick={() => setSubscribed(false)}
            className="text-blue-600 hover:text-blue-700"
          >
            Subscribe another email
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Stay Updated with AI Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Get the latest AI news, implementation tips, and industry insights delivered to your inbox.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Select Your Interests
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                {topics.map((topic) => (
                  <label
                    key={topic}
                    className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${
                      preferences.includes(topic)
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-200'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={preferences.includes(topic)}
                      onChange={() => togglePreference(topic)}
                      className="sr-only"
                    />
                    <Bell className={`w-5 h-5 mr-3 ${
                      preferences.includes(topic) ? 'text-blue-500' : 'text-gray-400'
                    }`} />
                    <span className={preferences.includes(topic) ? 'text-blue-700' : 'text-gray-600'}>
                      {topic}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex items-start">
              <Shield className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
              <p className="text-sm text-gray-500">
                We respect your privacy. You can unsubscribe at any time. 
                View our <a href="/privacy" className="text-blue-600 hover:text-blue-700">Privacy Policy</a>.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition flex items-center justify-center"
            >
              Subscribe to Newsletter
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}