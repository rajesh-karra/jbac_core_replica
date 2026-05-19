'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, Check, Loader2, MapPin } from 'lucide-react';

export default function AddChurchTimingsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    day: '',
    service_name: '',
    time_start: '',
    time_end: '',
    district_id: '',
    constituency_id: '',
    mandal_id: '',
    panchayat_id: '',
    church_id: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Church timings added successfully!');
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Clock className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-extrabold mb-4">Adding Church Service Timings</h1>
          <p className="text-xl text-gray-600">మీ చర్చి టైమింగ్స్ ఎంటర్ చేయండి</p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">
                  Service Day <span className="text-red-500">*</span>
                </label>
                <select 
                  required 
                  name="day" 
                  value={formData.day} 
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="">Select the Day</option>
                  <option value="Sunday">Sunday</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">
                  Service Name <span className="text-red-500">*</span>
                </label>
                <select 
                  required 
                  name="service_name" 
                  value={formData.service_name} 
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</option>
                  <option value="FIRST">FIRST</option>
                  <option value="SECOND">SECOND</option>
                  <option value="THIRD">THIRD</option>
                  <option value="WOMENS MEETING">WOMEN&apos;S MEETING</option>
                  <option value="MENS MEETING">MEN&apos;S MEETING</option>
                  <option value="YOUTH MEETING">YOUTH MEETING</option>
                  <option value="FASTING PRAYER">FASTING PRAYER</option>
                  <option value="SUNDAY SCHOOL">SUNDAY SCHOOL</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">
                  Start Time (24h) <span className="text-red-500">*</span>
                </label>
                <input 
                  required 
                  type="time" 
                  name="time_start" 
                  value={formData.time_start} 
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 ml-1">
                  End Time (24h) <span className="text-red-500">*</span>
                </label>
                <input 
                  required 
                  type="time" 
                  name="time_end" 
                  value={formData.time_end} 
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-6 pt-4 border-t">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <MapPin size={20} className="text-blue-600" /> Location Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">District</label>
                  <select name="district_id" className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none">
                    <option>Select District</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Constituency</label>
                  <select name="constituency_id" className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none">
                    <option>Select Constituency</option>
                  </select>
                </div>
              </div>
            </div>

            <button 
              disabled={isSubmitting} 
              type="submit" 
              className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-2xl shadow-xl flex items-center justify-center gap-3 transition-all transform active:scale-[0.98]"
            >
              {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <Check size={20} />}
              సబ్మిట్ చేయండి
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
