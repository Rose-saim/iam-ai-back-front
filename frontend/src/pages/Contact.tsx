import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Building2, Users, Loader2 } from 'lucide-react';
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
  message: string;
  projectTimeline?: string;
  budget?: string;
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      // Envoi des données à l'administrateur
      await emailjs.send(
        'service_zdd54ua', // Replace with your SERVICE_ID
        'template_awmaaca', // Replace with your TEMPLATE_ID for admin
        {
          ...formData,
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
        },
        'grSHkKwkRUqMZH8f6' // Replace with your PUBLIC_KEY
      );

      // Envoi d'accusé de réception au client
      await emailjs.send(
        'service_zdd54ua',
        'template_e3s8w9k', // TEMPLATE_ID for client
        {
          to_name: `${formData.firstName} ${formData.lastName}`,
          to_email: formData.email,
        },
        'grSHkKwkRUqMZH8f6'
      );

      setSubmitted(true);
      setFormData(initialFormData);
    } catch (error) {
      setErrorMessage('Une erreur est survenue. Veuillez réessayer plus tard.');
      console.error('EmailJS Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfbfd]">
      <AppleHero
        title="Contactez-nous"
        subtitle="Entrez en contact avec notre équipe pour discuter de vos besoins en cybersécurité et IA"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2940"
        theme="dark"
        height="h-[70vh]"
      />

      <AppleSection>
        {submitted ? (
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Merci !</h2>
            <p className="text-xl text-gray-600 mb-8">
              Votre message a été reçu. Nous vous répondrons sous 24 heures.
            </p>
            <AppleButton onClick={() => setSubmitted(false)} variant="secondary">
              Envoyer un autre message
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
              <div className="grid grid-cols-4 gap-4">
                {[
                  { value: 'business', label: 'Entreprise', icon: Building2 },
                  { value: 'individual', label: 'Particulier', icon: Users },
                  { value: 'government', label: 'Gouvernement', icon: Building2 },
                  { value: 'general', label: 'Général', icon: MessageSquare },
                ].map(type => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, inquiryType: type.value as InquiryType }))}
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
              {/* Add form fields from the second code */}
              {/* Adapt layout from the previous code */}

              <div className="pt-6">
                <AppleButton type="submit" variant="primary" fullWidth disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Envoi...</span>
                    </>
                  ) : (
                    'Envoyer le message'
                  )}
                </AppleButton>
              </div>
            </form>
          </div>
        )}
      </AppleSection>
    </div>
  );
}
