import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface QRCodeGeneratorProps {
  url: string;
  size?: number;
}

export default function QRCodeGenerator({ url, size = 128 }: QRCodeGeneratorProps) {
  return (
    <div className="inline-block p-4 bg-white rounded-lg shadow-sm">
      <div className="relative group">
        <QRCodeSVG
          value={url}
          size={size}
          level="H"
          includeMargin={true}
          className="rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50 text-white text-sm rounded-lg">
          Scan to sign up
        </div>
      </div>
      <p className="text-center text-sm text-gray-600 mt-2">
        Scan to create an account
      </p>
    </div>
  );
}