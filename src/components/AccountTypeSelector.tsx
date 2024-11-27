import React from 'react';
import { Building2, Users, Briefcase } from 'lucide-react';
import { AccountType } from '../lib/auth';

interface AccountTypeSelectorProps {
  selectedType: AccountType | null;
  onSelect: (type: AccountType) => void;
}

const accountTypes = [
  {
    type: 'B2B' as AccountType,
    icon: <Building2 className="w-6 h-6" />,
    title: 'Business Account',
    description: 'For companies seeking AI implementation and training'
  },
  {
    type: 'B2C' as AccountType,
    icon: <Users className="w-6 h-6" />,
    title: 'Individual Account',
    description: 'For professionals looking to enhance their AI skills'
  },
  {
    type: 'B2G' as AccountType,
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Government Account',
    description: 'For public sector organizations and agencies'
  }
];

export default function AccountTypeSelector({ selectedType, onSelect }: AccountTypeSelectorProps) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {accountTypes.map(({ type, icon, title, description }) => (
        <button
          key={type}
          onClick={() => onSelect(type)}
          className={`p-4 rounded-lg border-2 transition-all ${
            selectedType === type
              ? 'border-blue-600 bg-blue-50'
              : 'border-gray-200 hover:border-blue-300'
          }`}
        >
          <div className="flex flex-col items-center text-center">
            <div className={`p-2 rounded-full mb-2 ${
              selectedType === type ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
            }`}>
              {icon}
            </div>
            <h3 className="font-semibold mb-1">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </button>
      ))}
    </div>
  );
}