'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Camera, Check, Loader2, Phone, FileText } from 'lucide-react';

export default function AddAdsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    type: '',
    title: '',
    description: '',
    number: '',
    term: false,
    image: null as File | null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.term) {
      alert('Please accept Terms and Conditions');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Ad submitted successfully!');
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-20 h-20 bg-yellow-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Megaphone className="w-10 h-10 text-yellow-600" />
          </div>
          <h1 className="text-4xl font-extrabold mb-4">Adding Ads</h1>
          <p className="text-xl text-gray-600">యాడ్స్ సమాచారం సబ్ మిషన్</p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">Add Type <span className="text-red-500">*</span></label>
                <select required name="type" value={formData.type} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none">
                  <option value="">Select the Type</option>
                  <option value="Meetings">Meetings</option>
                  <option value="Church">Church</option>
                  <option value="Jobs">Jobs</option>
                  <option value="Marriages">Marriages</option>
                  <option value="Institutes">Institutes</option>
                  <option value="Other">Other</option>
                </select>
              </div>

               <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">Title <span className="text-red-500">*</span></label>
                <input required name="title" value={formData.title} onChange={handleChange} placeholder="Enter Title" className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none" />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">Image Upload <span className="text-red-500">*</span></label>
                <div className="relative group">
                  <input required type="file" onChange={handleFileChange} accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                  <div className="w-full px-5 py-4 bg-gray-50 border-2 border-dashed rounded-2xl flex items-center justify-between group-hover:border-blue-500 transition-colors">
                    <span className="text-gray-400 truncate">{formData.image ? formData.image.name : 'Choose file...'}</span>
                    <Camera className="text-gray-400 group-hover:text-blue-500" />
                  </div>
                </div>
              </div>

               <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">Contact Number <span className="text-red-500">*</span></label>
                <input required name="number" value={formData.number} onChange={handleChange} maxLength={10} placeholder="Contact Number" className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">Ads Description <span className="text-red-500">*</span></label>
              <textarea required name="description" value={formData.description} onChange={handleChange} rows={3} placeholder="Enter Description" className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500" />
            </div>

            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border-2">
              <input required type="checkbox" name="term" checked={formData.term} onChange={handleChange} className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <label className="text-sm font-bold text-gray-700">I agree to the Terms and Conditions <span className="text-red-500">*</span></label>
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
