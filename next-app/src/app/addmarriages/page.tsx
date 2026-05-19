'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Camera, MapPin, Check, Loader2, Users } from 'lucide-react';

export default function AddMarriagesPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    types: '1',
    believer_id: '',
    self: 'self',
    denomation_id: '',
    ministry_id: '',
    caste: '',
    subcaste: '',
    gender: '',
    status: 'single',
    name: '',
    image: null as File | null,
    dob: '',
    education: '',
    work: '',
    salary: '',
    height: '',
    color: '',
    phonenumber: '',
    description: '',
    district_id: '',
    constituency_id: '',
    mandal_id: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Marriage registration successful!');
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-20 h-20 bg-pink-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-pink-600" />
          </div>
          <h1 className="text-4xl font-extrabold mb-4">Adding Marriages</h1>
          <p className="text-xl text-gray-600">వివాహం కొరకు రిజిస్ట్రేషన్</p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">Marriage Alliance For</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 font-medium">
                    <input type="radio" value="self" name="self" checked={formData.self === 'self'} onChange={handleChange} /> Self
                  </label>
                  <label className="flex items-center gap-2 font-medium">
                    <input type="radio" value="others" name="self" checked={formData.self === 'others'} onChange={handleChange} /> Others
                  </label>
                </div>
              </div>

               <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">Name <span className="text-red-500">*</span></label>
                <input required name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none" />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">Gender <span className="text-red-500">*</span></label>
                <select required name="gender" value={formData.gender} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">Caste <span className="text-red-500">*</span></label>
                <select required name="caste" value={formData.caste} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none">
                  <option value="">Select Caste</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                  <option value="BC">BC</option>
                  <option value="OC">OC</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">Phone Number <span className="text-red-500">*</span></label>
                <input required name="phonenumber" value={formData.phonenumber} onChange={handleChange} maxLength={10} placeholder="Phone Number" className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none" />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">Photo</label>
                <div className="relative group">
                  <input type="file" onChange={handleFileChange} accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                  <div className="w-full px-5 py-4 bg-gray-50 border-2 border-dashed rounded-2xl flex items-center justify-between group-hover:border-blue-500 transition-colors">
                    <span className="text-gray-400 truncate">{formData.image ? formData.image.name : 'Choose file...'}</span>
                    <Camera className="text-gray-400 group-hover:text-blue-500" />
                  </div>
                </div>
              </div>
            </div>

            <button disabled={isSubmitting} type="submit" className="w-full py-5 bg-pink-600 hover:bg-pink-700 text-white font-extrabold rounded-2xl shadow-xl flex items-center justify-center gap-3">
              {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <Check size={20} />}
              సబ్మిట్ చేయండి
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
