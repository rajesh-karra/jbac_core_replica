'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Phone, MapPin, Check, Loader2, Camera } from 'lucide-react';

export default function AddInstitutePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    checkbox: '1',
    believer_id: '',
    ministry: '',
    ministry_id: '',
    institutename: '',
    collegetype: '',
    courses: '',
    phonenumber: '',
    address: '',
    image: '',
    district_id: '',
    constituency_id: '',
    mandal_id: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Institute added successfully!');
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-extrabold mb-4">Adding Institutes</h1>
          <p className="text-xl text-gray-600">మీ మినిస్ట్రీ కింద మీ వింగ్స్ ఆడ్ చెయ్యటం</p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">Type of Owner</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 font-medium">
                    <input type="radio" value="1" name="checkbox" checked={formData.checkbox === '1'} onChange={handleChange} /> Believer
                  </label>
                  <label className="flex items-center gap-2 font-medium">
                    <input type="radio" value="2" name="checkbox" checked={formData.checkbox === '2'} onChange={handleChange} /> Pastor
                  </label>
                </div>
              </div>

               <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">Institute Name <span className="text-red-500">*</span></label>
                <input required name="institutename" value={formData.institutename} onChange={handleChange} placeholder="Institute Name" className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none" />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">College Type <span className="text-red-500">*</span></label>
                <select required name="collegetype" value={formData.collegetype} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none">
                  <option value="">Select College Type</option>
                  <option value="Biblecollege">Bible College</option>
                  <option value="PlaySchool">Play School</option>
                  <option value="HighSchool">High School</option>
                  <option value="Inter">Inter</option>
                  <option value="Degree/Engneering">Degree/ Engneering</option>
                  <option value="PGCollege">PG College</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">Courses Offered <span className="text-red-500">*</span></label>
                <input required name="courses" value={formData.courses} onChange={handleChange} placeholder="Enter Your courses" className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none" />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">Phone Number <span className="text-red-500">*</span></label>
                <input required name="phonenumber" value={formData.phonenumber} onChange={handleChange} maxLength={10} placeholder="Phone Number" className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none" />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">Photo</label>
                <div className="relative group">
                  <input type="file" className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                  <div className="w-full px-5 py-4 bg-gray-50 border-2 border-dashed rounded-2xl flex items-center justify-between group-hover:border-blue-500 transition-colors">
                    <span className="text-gray-400">Choose file...</span>
                    <Camera className="text-gray-400 group-hover:text-blue-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">Address <span className="text-red-500">*</span></label>
              <textarea required name="address" value={formData.address} onChange={handleChange} rows={3} placeholder="Enter Your Address" className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500" />
            </div>

            <button disabled={isSubmitting} type="submit" className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-2xl shadow-xl flex items-center justify-center gap-3">
              {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <Check size={20} />}
              సబ్మిట్ చేయండి
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
