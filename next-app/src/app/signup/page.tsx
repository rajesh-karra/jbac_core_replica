'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Mail, Building, MapPin, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { jesusService } from '@/services/jesusService';

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    role: 'believer', // Default role
    address: '',
    churchName: '',
  });

  const roles = [
    { id: 'believer', label: 'Believer (విశ్వాసి)', href: '/believerregister', icon: User },
    { id: 'student', label: 'Student (విద్యార్థి)', href: '/studentregister', icon: User },
    { id: 'ministry', label: 'Ministry (మినిస్ట్రీ)', href: '/ministryregister', icon: Building },
    { id: 'pastor', label: 'Pastor (పాస్టర్)', href: '/pastorregister', icon: Building },
    { id: 'church', label: 'Church (చర్చి)', href: '/churchregister', icon: Building },
    { id: 'organization', label: 'Organization (ఆర్గనైజషన్)', href: '/organisationregister', icon: Building },
    { id: 'pastorassociation', label: 'Pastor Association (పాస్టర్ అసోసియేషన్)', href: '/pastorassociationregister', icon: Building },
    { id: 'leader', label: 'Leader (లీడర్)', href: '/leaders', icon: MapPin },
    { id: 'onecrore', label: 'AP 1 Crore Believers (AP 1 కోటి విశ్వాసులు)', href: '/ap1crore-believers', icon: CheckCircle2 },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Map to correct registration endpoint based on role
      const endpointMap: Record<string, string> = {
        believer: 'believerregister/insertRegistrationDetails',
        pastor: 'pastorregister/insertPastorDetails',
        organization: 'organisationregister/insertOrgDetails',
      };
      
      const response = await jesusService.post(endpointMap[formData.role], formData);
      if (response.data.status === 'success' || response.data.responseCode === '200') {
        setStep(3); // Success step
      }
    } catch (error) {
      console.error('Signup failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl px-4">
        {/* Progress Bar */}
        <div className="relative mb-12 flex justify-between">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex flex-col items-center z-10">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                step >= s ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'
              }`}>
                {s < 3 ? s : <CheckCircle2 size={20} />}
              </div>
              <span className={`text-xs font-bold mt-2 ${step >= s ? 'text-blue-600' : 'text-gray-400'}`}>
                {s === 1 ? 'Role' : s === 2 ? 'Details' : 'Done'}
              </span>
            </div>
          ))}
          <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200 -z-0">
            <div className="h-full bg-blue-600 transition-all duration-500" style={{ width: `${(step - 1) * 50}%` }}></div>
          </div>
        </div>

        <motion.div 
          layout
          className="bg-white rounded-3xl shadow-xl overflow-hidden text-gray-900"
        >
          {step === 1 && (
            <div className="p-8 md:p-12">
              <h1 className="text-3xl font-extrabold text-center mb-8">Register As</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {roles.map((role) => (
                  <Link
                    key={role.id}
                    href={role.href}
                    className="flex flex-col items-center p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-600 transition-all group hover:bg-blue-50"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                      <role.icon size={32} />
                    </div>
                    <span className="font-bold text-gray-800 text-center">{role.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="p-8 md:p-12">
              <button 
                onClick={() => setStep(1)}
                className="text-blue-600 font-bold mb-6 hover:underline flex items-center"
              >
                ← Back to Roles
              </button>
              <h1 className="text-3xl font-extrabold mb-8 capitalize">{formData.role} Registration</h1>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600">Full Name</label>
                  <input 
                    required 
                    className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-100"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600">Mobile Number</label>
                  <input 
                    required 
                    className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-100"
                    placeholder="10 digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600">Email Address</label>
                  <input 
                    type="email"
                    required 
                    className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-100"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600">Church/Org Name</label>
                  <input 
                    className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-100"
                    placeholder="Optional"
                    value={formData.churchName}
                    onChange={(e) => setFormData({...formData, churchName: e.target.value})}
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-gray-600">Full Address</label>
                  <textarea 
                    rows={3}
                    className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-100"
                    placeholder="Enter your full address"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>
                <div className="md:col-span-2">
                  <button 
                    disabled={isLoading}
                    className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg disabled:opacity-50"
                  >
                    {isLoading ? 'Processing...' : 'Complete Registration'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className="p-16 text-center">
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={64} />
              </div>
              <h1 className="text-4xl font-extrabold mb-4">Registration Successful!</h1>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Thank you for joining JBAC. Your account is being verified. You can now login to access your dashboard.
              </p>
              <Link href="/login" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors">
                Proceed to Login
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
