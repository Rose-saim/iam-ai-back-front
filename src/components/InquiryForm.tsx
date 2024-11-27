import React, { useState } from 'react';
import { Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type UserType = 'individual' | 'business' | 'public';

interface FormData {
  userType: UserType;
  name: string;
  businessName?: string;
  organizationName?: string;
  email: string;
  phone: string;
  contactPerson?: string;
  businessType?: 'SME' | 'Large';
  department?: string;
  service: string;
  requestSubsidy: boolean;
}

const serviceOptions = {
  individual: ['AI Training', 'Toolkit Access'],
  business: ['Staff Training', 'Modernization of Tools', 'Change Management'],
  public: ['Municipal Services', 'Employment and Training Programs', 'Policy Advisory Services']
};

const subsidyInfo = {
  individual: {
    'AI Training': 'Eligible for up to 70% training grant for professional development',
    'Toolkit Access': 'Innovation vouchers available for digital tool adoption'
  },
  business: {
    'Staff Training': 'Up to 60% subsidy for employee upskilling programs',
    'Modernization of Tools': 'Digital transformation grants up to €50,000',
    'Change Management': 'Innovation support funding for organizational change'
  },
  public: {
    'Municipal Services': 'Smart City initiative funding available',
    'Employment and Training Programs': 'Regional development grants',
    'Policy Advisory Services': 'Digital governance transformation funding'
  }
};

export default function InquiryForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    userType: 'individual',
    name: '',
    email: '',
    phone: '',
    service: '',
    requestSubsidy: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Show success message
    alert(t('forms.inquiry.success'));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      service: name === 'userType' ? '' : prev.service // Reset service when user type changes
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">{t('forms.inquiry.title')}</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* User Type Selection */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            {t('forms.inquiry.userType.label')}
          </label>
          <div className="grid grid-cols-3 gap-4">
            {['individual', 'business', 'public'].map(type => (
              <button
                key={type}
                type="button"
                onClick={() => handleChange({
                  target: { name: 'userType', value: type }
                } as any)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  formData.userType === type
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {t(`forms.inquiry.userType.${type}`)}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Fields Based on User Type */}
        <div className="space-y-4">
          {formData.userType === 'individual' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  {t('forms.inquiry.fullName')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </>
          )}

          {formData.userType === 'business' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  {t('forms.inquiry.businessName')}
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName || ''}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  {t('forms.inquiry.businessType')}
                </label>
                <select
                  name="businessType"
                  value={formData.businessType || ''}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">{t('forms.inquiry.select')}</option>
                  <option value="SME">SME</option>
                  <option value="Large">Large Enterprise</option>
                </select>
              </div>
            </>
          )}

          {formData.userType === 'public' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  {t('forms.inquiry.organizationName')}
                </label>
                <input
                  type="text"
                  name="organizationName"
                  value={formData.organizationName || ''}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  {t('forms.inquiry.department')}
                </label>
                <input
                  type="text"
                  name="department"
                  value={formData.department || ''}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </>
          )}

          {/* Common Fields */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t('forms.inquiry.email')}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t('forms.inquiry.phone')}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {t('forms.inquiry.service')}
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">{t('forms.inquiry.select')}</option>
              {serviceOptions[formData.userType].map(service => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* Subsidy Information */}
          {formData.service && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-start">
                <Info className="w-5 h-5 text-blue-600 mt-0.5 mr-2" />
                <div>
                  <h3 className="font-medium text-blue-900">
                    {t('forms.inquiry.subsidyInfo')}
                  </h3>
                  <p className="mt-1 text-sm text-blue-700">
                    {subsidyInfo[formData.userType][formData.service as keyof typeof subsidyInfo[UserType]]}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="requestSubsidy"
                    checked={formData.requestSubsidy}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      requestSubsidy: e.target.checked
                    }))}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-blue-700">
                    {t('forms.inquiry.requestSubsidy')}
                  </span>
                </label>
              </div>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          {t('forms.inquiry.submit')}
        </button>
      </form>
    </div>
  );
}