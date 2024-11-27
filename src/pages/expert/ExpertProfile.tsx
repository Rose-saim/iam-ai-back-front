import React, { useState } from 'react';
import { User, Mail, Phone, Globe, MapPin, Award, Star, Edit2, Save, X } from 'lucide-react';

export default function ExpertProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Dr. Sarah Chen",
    title: "AI & Machine Learning Expert",
    email: "sarah.chen@example.com",
    phone: "+1 234 567 8900",
    location: "San Francisco, CA",
    website: "www.sarahchen.com",
    bio: "Ph.D. in Computer Science with 10+ years of experience in AI and Machine Learning. Specialized in implementing AI solutions for enterprise clients.",
    expertise: ["AI Implementation", "Machine Learning", "Deep Learning", "Neural Networks"],
    certifications: [
      { name: "AI Implementation Specialist", issuer: "Google", year: "2023" },
      { name: "Machine Learning Expert", issuer: "Stanford", year: "2022" }
    ],
    languages: ["English", "Mandarin", "French"],
    availability: "Available for new projects"
  });

  const handleSave = () => {
    // Here you would typically make an API call to save the profile
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Profile Header */}
          <div className="relative h-48 bg-gradient-to-r from-blue-600 to-blue-800">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="absolute top-4 right-4 p-2 bg-white rounded-lg hover:bg-gray-50"
            >
              {isEditing ? <Save className="w-5 h-5" /> : <Edit2 className="w-5 h-5" />}
            </button>
          </div>

          <div className="relative px-6 pb-6">
            <div className="flex flex-col md:flex-row items-center md:items-end -mt-20 mb-6">
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg bg-white">
                <div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center">
                  <User className="w-16 h-16 text-blue-600" />
                </div>
              </div>
              <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
                <p className="text-lg text-gray-600">{profile.title}</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-400 mr-2" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-2" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-gray-400 mr-2" />
                <span>{profile.website}</span>
              </div>
            </div>

            {/* Bio */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">About</h2>
              {isEditing ? (
                <textarea
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  className="w-full p-2 border rounded-lg"
                  rows={4}
                />
              ) : (
                <p className="text-gray-600">{profile.bio}</p>
              )}
            </div>

            {/* Expertise */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Expertise</h2>
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

            {/* Certifications */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Certifications</h2>
              <div className="space-y-4">
                {profile.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <Award className="w-5 h-5 text-yellow-400 mr-2" />
                    <div>
                      <h3 className="font-medium">{cert.name}</h3>
                      <p className="text-sm text-gray-500">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Languages</h2>
              <div className="flex flex-wrap gap-2">
                {profile.languages.map((language, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span className="text-green-700">{profile.availability}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}