import React, { useState } from 'react';
import {
  Star,
  Calendar,
  CheckCircle,
  X,
  Award,
  MapPin,
  Briefcase,
  FileText,
  Mail,
  Phone,
  Globe,
} from 'lucide-react';

interface Consultant {
  id: number;
  name: string | null;
  specialty: string | null;
  rating: number | null;
  availability: string | null;
  image: string | null;
  experience: string[];
  certifications: string[];
  education: {
    degree: string | null;
    institution: string | null;
    year: string | null;
  }[];
  projects: {
    title: string | null;
    company: string | null;
    description: string | null;
  }[];
  skills: string[];
  languages: string[];
  contact?: {
    email: string | null;
    phone: string | null;
    location: string | null;
    linkedin?: string | null;
  };
}

interface ConsultantsListProps {
  consultants: Consultant[];
}

// Normalisation des consultants
function normalizeConsultants(data: Consultant[]): Consultant[] {
  return data.map((consultant) => ({
    ...consultant,
    name: consultant.name || 'Nom non fourni',
    specialty: consultant.specialty || 'Spécialité non fournie',
    rating: consultant.rating ?? 'Non noté',
    availability: consultant.availability || 'Disponibilité inconnue',
    image: consultant.image || 'https://via.placeholder.com/150',
    contact: {
      email: consultant.contact?.email || 'Email non fourni',
      phone: consultant.contact?.phone || 'Téléphone non fourni',
      location: consultant.contact?.location || 'Localisation non fournie',
      linkedin: consultant.contact?.linkedin || 'Non disponible',
    },
  }));
}

export default function ConsultantsList({ consultants }: ConsultantsListProps) {
  const normalizedConsultants = normalizeConsultants(consultants);

  const [showProfileModal, setShowProfileModal] = useState(false);
  const [selectedConsultant, setSelectedConsultant] =
    useState<Consultant | null>(null);

  const handleViewProfile = (consultant: Consultant) => {
    setSelectedConsultant(consultant);
    setShowProfileModal(true);
  };

  return (
    <div className="space-y-4">
      {normalizedConsultants.length === 0 ? (
        <p className="text-center text-gray-500 py-8">
          Aucun consultant ne correspond à vos critères.
        </p>
      ) : (
        normalizedConsultants.map((consultant) => (
          <div
            key={consultant.id}
            className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition"
          >
            <img
              src={consultant.image!}
              alt={consultant.name!}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-4 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">{consultant.name}</h3>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="ml-1 text-sm text-gray-600">
                    {consultant.rating}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-500">{consultant.specialty}</p>
              <div className="flex items-center mt-1">
                <Calendar className="w-4 h-4 text-gray-400 mr-1" />
                <span className="text-sm text-gray-600">
                  {consultant.availability}
                </span>
              </div>
            </div>
            <button
              onClick={() => handleViewProfile(consultant)}
              className="ml-4 flex items-center text-blue-600 hover:text-blue-700"
            >
              Voir le profil
            </button>
          </div>
        ))
      )}

      {/* Modale de profil */}
      {showProfileModal && selectedConsultant && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-4xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center">
                <img
                  src={selectedConsultant.image!}
                  alt={selectedConsultant.name!}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h2 className="text-2xl font-bold">
                    {selectedConsultant.name}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {selectedConsultant.specialty}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowProfileModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span>{selectedConsultant.rating} Évaluation</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                <span>{selectedConsultant.contact!.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                <span>{selectedConsultant.availability}</span>
              </div>
            </div>

            {/* Contact */}
            <section>
              <h3 className="text-xl font-semibold mb-4">
                Informations de contact
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gray-400 mr-2" />
                  <span>{selectedConsultant.contact!.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gray-400 mr-2" />
                  <span>{selectedConsultant.contact!.phone}</span>
                </div>
                {selectedConsultant.contact!.linkedin && (
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-gray-400 mr-2" />
                    <a
                      href={selectedConsultant.contact!.linkedin}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      LinkedIn
                    </a>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
