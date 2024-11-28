import React, { useState } from 'react';
import { useAuth } from '../../lib/auth/context';
import { User, Mail, Building2, MapPin, Briefcase, Edit2 } from 'lucide-react';

export default function UserProfile() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  const profile = {
    name: "John Smith",
    email: "john@example.com",
    company: "Tech Corp International",
    location: "New York, USA",
    role: "AI Implementation Specialist",
    bio: "Experienced professional focused on implementing AI solutions in enterprise environments.",
    expertise: ["AI Implementation", "Machine Learning", "Neural Networks"],
    education: [
      {
        degree: "Master's in Computer Science",
        school: "Stanford University",
        year: "2020"
      }
    ],
    certifications: [
      {
        name: "AI Fundamentals",
        issuer: "I AM'AI",
        date: "2024"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-blue-600" />
                </div>
                <div className="ml-6">
                  <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
                  <p className="text-gray-600">{profile.role}</p>
                </div>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50 transition"
              >
                <Edit2 className="w-4 h-4 mr-2" />
                Edit Profile
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 mr-2" />
                {profile.email}
              </div>
              <div className="flex items-center text-gray-600">
                <Building2 className="w-5 h-5 mr-2" />
                {profile.company}
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2" />
                {profile.location}
              </div>
              <div className="flex items-center text-gray-600">
                <Briefcase className="w-5 h-5 mr-2" />
                {profile.role}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">About</h2>
              <p className="text-gray-600">{profile.bio}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {profile.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="p-8">
            <h2 className="text-lg font-semibold mb-4">Education</h2>
            <div className="space-y-4">
              {profile.education.map((edu, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.school}</p>
                  </div>
                  <span className="text-gray-500">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-8">
            <h2 className="text-lg font-semibold mb-4">Certifications</h2>
            <div className="space-y-4">
              {profile.certifications.map((cert, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-900">{cert.name}</h3>
                    <p className="text-gray-600">{cert.issuer}</p>
                  </div>
                  <span className="text-gray-500">{cert.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}