import React, { useState } from 'react';
import { MessageSquare, Mail, Phone, FileText, HelpCircle } from 'lucide-react';

export default function ExpertSupport() {
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketDescription, setTicketDescription] = useState('');

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle ticket submission
    alert('Support ticket submitted successfully!');
    setTicketSubject('');
    setTicketDescription('');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Support</h1>
          <p className="mt-1 text-sm text-gray-500">
            Get help and support for your expert account
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Support Options */}
          <div className="col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Submit a Support Ticket</h2>
              <form onSubmit={handleSubmitTicket} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={ticketSubject}
                    onChange={(e) => setTicketSubject(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={ticketDescription}
                    onChange={(e) => setTicketDescription(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Submit Ticket
                </button>
              </form>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Documentation</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Getting Started Guide",
                  "Expert Dashboard Tutorial",
                  "Course Creation Guide",
                  "Mission Management Guide"
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

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-medium">Email Support</p>
                    <a href="mailto:support@example.com" className="text-blue-600">
                      support@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-medium">Phone Support</p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-medium">Live Chat</p>
                    <p>Available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">FAQ</h2>
              <div className="space-y-4">
                {[
                  {
                    question: "How do I create a new course?",
                    answer: "Navigate to Training Management and click 'Create Course'"
                  },
                  {
                    question: "How are payments processed?",
                    answer: "Payments are processed monthly via direct deposit"
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                    <h3 className="font-medium text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}