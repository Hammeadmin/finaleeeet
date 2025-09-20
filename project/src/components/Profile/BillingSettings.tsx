// src/components/Profile/BillingSettings.tsx
import React from 'react';
import { CreditCard, FileText } from 'lucide-react';
import { toast } from 'react-hot-toast';

export const BillingSettings = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg border">
      <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
        <CreditCard className="w-5 h-5 mr-2 text-gray-500" />
        Fakturering & Abonnemang
      </h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center p-3 bg-white rounded-md border">
          <div>
            <p className="text-sm font-medium text-gray-900">Nuvarande Plan: <span className="font-bold text-primary-600">Standard</span></p>
            <p className="text-xs text-gray-500">Förnyas den 1 oktober 2025</p>
          </div>
          <button className="btn btn-secondary btn-sm" onClick={() => toast.error('Funktionen är inte implementerad än.')}>
            Hantera Abonnemang
          </button>
        </div>
        <div className="p-3 bg-white rounded-md border">
            <p className="text-sm font-medium text-gray-900 mb-2">Fakturor</p>
            <p className="text-xs text-gray-500">Inga fakturor att visa just nu.</p>
            {/* You can map over an invoices array here in the future */}
        </div>
      </div>
    </div>
  );
};