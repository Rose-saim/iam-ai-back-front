import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Building2, Users } from 'lucide-react';
import emailjs from '@emailjs/browser';
import AppleHero from '../components/AppleHero';
import AppleSection from '../components/AppleSection';
import AppleButton from '../components/AppleButton';

type InquiryType = 'business' | 'individual' | 'government' | 'general';

interface FormData {
  inquiryType: InquiryType;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  jobTitle?: string;
  projectTimeline?: string;
  budget?: string;
  message: string;
  preferredContact: 'email' | 'phone';
  newsletter: boolean;
}

const initialFormData: FormData = {
  inquiryType: 'general',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  jobTitle: '',
  message: '',
  projectTimeline: '',
  budget: '',
  preferredContact: 'email',
  newsletter: false,
};

const timelines = [
  'Immediately',
  'Within 1 month',
  'Within 3 months',
  '3+ months',
  'Just exploring',
];

const budgets = [
  'Under $10,000',
  '$10,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000+',
  'Not sure yet',
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleInquiryTypeChange = (type: InquiryType) => {
    setFormData((prev) => ({ ...prev, inquiryType: type }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      await emailjs.send(
        'service_zdd54ua', // Service ID
        'template_awmaaca', // Template ID
        {
          ...formData,
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
        },
        'grSHkKwkRUqMZH8f6' // Public Key
      );

      setSubmitted(true);
      setFormData(initialFormData);
    } catch (error) {
      setErrorMessage('An error occurred while sending the message. Please try again later.');
      console.error('EmailJS Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfbfd]">
      <AppleHero
        title="Contact Us"
        subtitle="Get in touch with our team to discuss how we can help transform your organization with AI"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2940"
        theme="dark"
        height="h-[70vh]"
      />

      <AppleSection>
        {submitted ? (
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Thank You!</h2>
            <p className="text-xl text-gray-600 mb-8">
              We've received your message and will get back to you within 24 hours.
            </p>
            <AppleButton onClick={() => setSubmitted(false)} variant="secondary">
              Send Another Message
            </AppleButton>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            {errorMessage && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Inquiry Type */}
              <div className="grid grid-cols-4 gap-4">
                {[
                  { value: 'business', label: 'Business', icon: Building2 },
                  { value: 'individual', label: 'Individual', icon: Users },
                  { value: 'government', label: 'Government', icon: Building2 },
                  { value: 'general', label: 'General', icon: MessageSquare },
                ].map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => handleInquiryTypeChange(type.value as InquiryType)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      formData.inquiryType === type.value
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <type.icon
                        className={`w-6 h-6 mb-2 ${
                          formData.inquiryType === type.value ? 'text-blue-600' : 'text-gray-600'
                        }`}
                      />
                      <span className="text-sm font-medium">{type.label}</span>
                    </div>
                  </button>
                ))}
              </div>
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
              {/* Conditional Forms */}
              {formData.inquiryType === 'business' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </>
              )}

              {formData.inquiryType === 'individual' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
              )}

              {/* Project Details */}
              {formData.inquiryType !== 'general' && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Timeline
                    </label>
                    <select
                      name="projectTimeline"
                      value={formData.projectTimeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Timeline</option>
                      {timelines.map(timeline => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Budget</option>
                      {budgets.map(budget => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              {/* Preferences */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="ml-2 text-sm text-gray-600">Email</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="ml-2 text-sm text-gray-600">Phone</span>
                    </label>
                  </div>
                </div>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Subscribe to our newsletter for updates and insights
                  </span>
                </label>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className={`w-full bg-blue-600 text-white py-3 px-6 rounded-xl flex items-center justify-center gap-2 ${
                    loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700 transition-colors'
                  }`}
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        )}
      </AppleSection>
    </div>
  );
}

