'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Mail, MapPin, CheckCircle2, Lock, Briefcase, Loader2 } from 'lucide-react';
import { jesusService } from '@/services/jesusService';

export default function BelieverRegister() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fname: '',
    whatsapp: '',
    dob: '',
    gender: '',
    email: '',
    mobile_number: '',
    status: '',
    income: '',
    caste: '',
    subcaste: '',
    nativeplace: '',
    talent: '',
    education: '',
    designation: '',
    dpartment: '',
    districts: '',
    mandals: '',
    panchayati: '',
    constituencyname: '',
    villagename: '',
    wardnumber: '',
    ward: '',
    nri: 'Non NRI',
    leadership: 'NO',
    denomination_id: '',
    hobbies: '',
    spirti: '',
    lifegoal: '',
    church: '',
    pastor: '',
    password: '',
  });

  const [districts, setDistricts] = useState([]);
  const [denominations, setDenominations] = useState([]);

  useEffect(() => {
    // Mock fetch for now
    setDistricts([{id: 1, name: 'Visakhapatnam'}, {id: 2, name: 'Guntur'}]);
    setDenominations([{id: 1, denomation_name: 'Baptist'}, {id: 2, denomation_name: 'Catholic'}]);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // In a real app, you would call the actual API
      console.log('Submitting:', formData);
      setSubmitted(true);
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-12 flex items-center justify-center bg-gray-50">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-md mx-4"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Registration Successful!</h2>
          <p className="text-gray-600 mb-8">మీ ఖాతా విజయవంతంగా సృష్టించబడింది. మీరు ఇప్పుడు లాగిన్ అవ్వవచ్చు.</p>
          <a href="/login" className="block w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors">
            Login Now
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100"
        >
          <div className="bg-blue-600 p-10 text-white text-center">
            <h1 className="text-4xl font-black mb-4">విశ్వాసి నమోదు</h1>
            <p className="text-blue-100 font-medium">Believer Registration Form - Join our community</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-12">
            {/* Personal Information */}
            <section className="space-y-8">
              <div className="flex items-center space-x-4 border-b border-gray-100 pb-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                  <User size={24} />
                </div>
                <h2 className="text-2xl font-black text-gray-900">Personal Details</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Full Name (ఇంటి పేరుతో సహా) *</label>
                  <input required name="fname" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="Enter Full Name" value={formData.fname} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Date of Birth</label>
                  <input type="date" name="dob" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none" value={formData.dob} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Gender *</label>
                  <select required name="gender" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" value={formData.gender} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="పురుషుడు">పురుషుడు (Male)</option>
                    <option value="స్త్రీ">స్త్రీ (Female)</option>
                    <option value="ట్రాన్స్ జెండర్">ట్రాన్స్ జెండర్ (Other)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Caste</label>
                  <select name="caste" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" value={formData.caste} onChange={handleChange}>
                    <option value="">Select Caste</option>
                    <option value="BC">BC</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                    <option value="OC">OC</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Sub Caste</label>
                  <input name="subcaste" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" placeholder="Enter Sub Caste" value={formData.subcaste} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Marital Status *</label>
                  <select required name="status" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" value={formData.status} onChange={handleChange}>
                    <option value="">Select Status</option>
                    <option value="Married">Married</option>
                    <option value="Unmarried">Unmarried</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="space-y-8">
              <div className="flex items-center space-x-4 border-b border-gray-100 pb-4">
                <div className="p-3 bg-green-50 text-green-600 rounded-2xl">
                  <Phone size={24} />
                </div>
                <h2 className="text-2xl font-black text-gray-900">Contact Details</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Mobile Number *</label>
                  <input required name="mobile_number" maxLength={10} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" placeholder="10 Digit Number" value={formData.mobile_number} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">WhatsApp Number</label>
                  <input name="whatsapp" maxLength={10} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" placeholder="WhatsApp Number" value={formData.whatsapp} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Email Address</label>
                  <input type="email" name="email" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" placeholder="example@mail.com" value={formData.email} onChange={handleChange} />
                </div>
              </div>
            </section>

            {/* Location Details */}
            <section className="space-y-8">
              <div className="flex items-center space-x-4 border-b border-gray-100 pb-4">
                <div className="p-3 bg-red-50 text-red-600 rounded-2xl">
                  <MapPin size={24} />
                </div>
                <h2 className="text-2xl font-black text-gray-900">Address Information</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">District *</label>
                  <select required name="districts" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" value={formData.districts} onChange={handleChange}>
                    <option value="">Select District</option>
                    {districts.map((d: any) => <option key={d.id} value={d.id}>{d.name}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Constituency *</label>
                  <input required name="constituencyname" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" placeholder="Enter Constituency" value={formData.constituencyname} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Mandal *</label>
                  <input required name="mandals" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" placeholder="Enter Mandal" value={formData.mandals} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Village/Town *</label>
                  <input required name="villagename" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" placeholder="Enter Village" value={formData.villagename} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Ward Number</label>
                  <input name="wardnumber" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" placeholder="Ward Number" value={formData.wardnumber} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Native Place</label>
                  <input name="nativeplace" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" placeholder="Enter Native Place" value={formData.nativeplace} onChange={handleChange} />
                </div>
              </div>
            </section>

            {/* Professional & Spiritual Information */}
            <section className="space-y-8">
              <div className="flex items-center space-x-4 border-b border-gray-100 pb-4">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl">
                  <Briefcase size={24} />
                </div>
                <h2 className="text-2xl font-black text-gray-900">Education & Work</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Education *</label>
                  <select required name="education" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" value={formData.education} onChange={handleChange}>
                    <option value="">Select Education</option>
                    <option value="SSC">SSC</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Degree">Degree</option>
                    <option value="Post Graduate">Post Graduate</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Designation *</label>
                  <input required name="designation" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" placeholder="e.g. Teacher, Clerk" value={formData.designation} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Department *</label>
                  <input required name="dpartment" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" placeholder="Private/Govt" value={formData.dpartment} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Income</label>
                  <input name="income" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" placeholder="Monthly Income" value={formData.income} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Denomination *</label>
                  <select required name="denomination_id" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" value={formData.denomination_id} onChange={handleChange}>
                    <option value="">Select Denomination</option>
                    {denominations.map((i: any) => <option key={i.id} value={i.id}>{i.denomation_name}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Spiritual Status</label>
                  <select name="spirti" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" value={formData.spirti} onChange={handleChange}>
                    <option value="">Select Status</option>
                    <option value="practicingchristian">Practicing Christian</option>
                    <option value="nominalchristian">Nominal Christian</option>
                    <option value="festivalchristian">Festival Christian</option>
                    <option value="justbelievingjesus">Just Believing Jesus</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Account Security */}
            <section className="space-y-8 bg-gray-50 p-8 rounded-3xl">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
                  <Lock size={24} />
                </div>
                <h2 className="text-2xl font-black text-gray-900">Security</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Set Password *</label>
                  <input required type="password" name="password" minLength={6} className="w-full p-4 bg-white border border-gray-200 rounded-xl outline-none" placeholder="Minimum 6 characters" value={formData.password} onChange={handleChange} />
                </div>
                <div className="flex items-end pb-1 text-sm text-gray-500 font-medium">
                  Your password will be used for logging into your profile later.
                </div>
              </div>
            </section>

            <div className="pt-8">
              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xl shadow-xl hover:bg-blue-700 transition-all transform hover:-translate-y-1 active:scale-95 disabled:opacity-50 flex items-center justify-center space-x-3"
              >
                {loading ? <Loader2 className="animate-spin" /> : null}
                <span>REGISTER NOW (నమోదు చేయండి)</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
