import React from 'react';
import { MessageSquare, Phone, Mail, FileText } from 'lucide-react';

export default function BusinessSupport() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Support & Help</h1>
          <p className="mt-1 text-sm text-gray-500">
            Get help with your AI implementation journey
          </p>
        </div>

        {/* Support Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <MessageSquare className="w-6 h-6 text-blue-600" />
              <h2 className="ml-2 text-lg font-medium">Live Chat</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Chat with our support team in real-time
            </p>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Start Chat
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <h2 className="ml-2 text-lg font-medium">Phone Support</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Call us for immediate assistance
            </p>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Call Now
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <h2 className="ml-2 text-lg font-medium">Email Support</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Send us a detailed message
            </p>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Send Email
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "How do I get started with AI implementation?",
                answer: "Our team will guide you through the initial assessment and create a customized implementation plan."
              },
              {
                question: "What training resources are available?",
                answer: "We offer comprehensive online courses, workshops, and personalized training sessions."
              },
              {
                question: "How can I track implementation progress?",
                answer: "Use our dashboard analytics to monitor progress, metrics, and team performance."
              }
            ].map((faq, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Documentation */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center mb-6">
            <FileText className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-lg font-medium text-gray-900">Documentation</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Getting Started Guide",
              "API Documentation",
              "Implementation Best Practices",
              "Troubleshooting Guide"
            ].map((doc, index) => (
              <button
                key={index}
                className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition"
              >
                <FileText className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-700">{doc}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}