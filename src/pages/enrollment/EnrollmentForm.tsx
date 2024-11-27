import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BookOpen, CreditCard, Users, FileText } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  jobTitle?: string;
  experience: string;
  background: string;
  goals: string;
  paymentMethod: 'card' | 'invoice';
  acceptTerms: boolean;
}

export default function EnrollmentForm() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    experience: '',
    background: '',
    goals: '',
    paymentMethod: 'card',
    acceptTerms: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Handle form submission
      navigate('/payment/checkout');
    } catch (error) {
      console.error('Enrollment error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-8">
            <div className="flex items-center mb-8">
              <BookOpen className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Course Enrollment</h1>
                <p className="text-gray-600">Complete your enrollment details</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Professional Information</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData(prev => ({ ...prev, jobTitle: e.target.value }))}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Relevant Experience
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.experience}
                    onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Briefly describe your relevant experience..."
                  ></textarea>
                </div>
              </div>

              {/* Learning Goals */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Learning Goals</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What do you hope to achieve from this course?
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.goals}
                    onChange={(e) => setFormData(prev => ({ ...prev, goals: e.target.value }))}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describe your learning objectives..."
                  ></textarea>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
                <div className="space-y-4">
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={(e) => setFormData(prev => ({ ...prev, paymentMethod: 'card' }))}
                      className="w-4 h-4 text-blue-600"
                    />
                    <div className="ml-3">
                      <span className="font-medium">Credit Card</span>
                      <p className="text-sm text-gray-500">Pay now with credit card</p>
                    </div>
                  </label>
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="invoice"
                      checked={formData.paymentMethod === 'invoice'}
                      onChange={(e) => setFormData(prev => ({ ...prev, paymentMethod: 'invoice' }))}
                      className="w-4 h-4 text-blue-600"
                    />
                    <div className="ml-3">
                      <span className="font-medium">Invoice</span>
                      <p className="text-sm text-gray-500">Pay by invoice (business only)</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="border-t pt-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    required
                    checked={formData.acceptTerms}
                    onChange={(e) => setFormData(prev => ({ ...prev, acceptTerms: e.target.checked }))}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    I agree to the{' '}
                    <a href="/terms" className="text-blue-600 hover:text-blue-700">
                      Terms and Conditions
                    </a>
                    {' '}and{' '}
                    <a href="/privacy" className="text-blue-600 hover:text-blue-700">
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Proceed to Payment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}