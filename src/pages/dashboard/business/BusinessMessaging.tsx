import React, { useState } from 'react';
import { Send, Search, Phone, Video } from 'lucide-react';

export default function BusinessMessaging() {
  const [message, setMessage] = useState('');

  const contacts = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "AI Consultant",
      online: true,
      lastMessage: "Let's review the implementation plan",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 2,
      name: "Michael Roberts",
      role: "Training Specialist",
      online: false,
      lastMessage: "Training materials are ready",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "Dr. Sarah Chen",
      content: "Hi! How's the implementation going?",
      time: "10:30 AM",
      isSender: false
    },
    {
      id: 2,
      sender: "You",
      content: "Going well! The team is making good progress.",
      time: "10:32 AM",
      isSender: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Messaging</h1>
          <p className="mt-1 text-sm text-gray-500">
            Communicate with your team and consultants
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-3 h-[600px]">
            {/* Contacts List */}
            <div className="border-r">
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search contacts..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="overflow-y-auto h-[calc(600px-73px)]">
                {contacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="p-4 hover:bg-gray-50 cursor-pointer border-b"
                  >
                    <div className="flex items-center">
                      <div className="relative">
                        <img
                          src={contact.image}
                          alt={contact.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                          contact.online ? 'bg-green-400' : 'bg-gray-400'
                        }`}></span>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-gray-900">{contact.name}</h3>
                        <p className="text-sm text-gray-500">{contact.role}</p>
                        <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="col-span-2 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={contacts[0].image}
                    alt={contacts[0].name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">{contacts[0].name}</h3>
                    <p className="text-sm text-gray-500">{contacts[0].role}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-500 rounded-full hover:bg-gray-100">
                    <Phone className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-500 rounded-full hover:bg-gray-100">
                    <Video className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isSender ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[70%] rounded-lg px-4 py-2 ${
                      message.isSender
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100'
                    }`}>
                      <p>{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.isSender ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}