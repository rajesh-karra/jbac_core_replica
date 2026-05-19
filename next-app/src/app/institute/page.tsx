'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, GraduationCap, MapPin, Phone, Building2, Filter, RotateCcw, BookOpen, School } from 'lucide-react';

const institutesData = [
  {
    id: 1,
    institue_name: "Hope Christian Institute",
    institue_address: "Vijayawada, AP",
    contact_num: "9876543210",
    course_offered: "Theology",
    college_type: "Private",
    image: null,
    location: "https://maps.google.com"
  }
];

export default function InstitutePage() {
  const [formData, setFormData] = useState({
    denomination_id: '',
    ministry_id: '',
    course_offered: '',
    college_type: '',
    district_id: '',
    constenncy_id: '',
    mandal_id: '',
    panchayati_id: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleReset = () => {
    setFormData({
      denomination_id: '',
      ministry_id: '',
      course_offered: '',
      college_type: '',
      district_id: '',
      constenncy_id: '',
      mandal_id: '',
      panchayati_id: ''
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 border-l-8 border-indigo-600 pl-6 uppercase tracking-tighter italic">Institute</h1>
          <p className="text-gray-600 mt-2 ml-6 text-lg">విద్యా సంస్థల వివరాలు మరియు శోధన</p>
        </motion.div>

        {/* Search Panel */}
        <div className="bg-white rounded-[2.5rem] shadow-xl p-8 mb-12 border border-indigo-50">
          <div className="flex items-center gap-3 mb-8 text-indigo-600">
            <Filter size={24} />
            <h2 className="text-xl font-bold uppercase tracking-wider">Search Filters</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600 ml-1">Denomination</label>
              <select name="denomination_id" value={formData.denomination_id} onChange={handleChange} className="w-full px-5 py-3 bg-gray-50 border-2 rounded-2xl outline-none focus:border-indigo-500">
                <option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600 ml-1">Ministry</label>
              <select name="ministry_id" value={formData.ministry_id} onChange={handleChange} className="w-full px-5 py-3 bg-gray-50 border-2 rounded-2xl outline-none focus:border-indigo-500">
                <option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600 ml-1">Course Offered</label>
              <select name="course_offered" value={formData.course_offered} onChange={handleChange} className="w-full px-5 py-3 bg-gray-50 border-2 rounded-2xl outline-none focus:border-indigo-500">
                <option value="">Select Institute</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600 ml-1">College Type</label>
              <select name="college_type" value={formData.college_type} onChange={handleChange} className="w-full px-5 py-3 bg-gray-50 border-2 rounded-2xl outline-none focus:border-indigo-500">
                <option value="">Select College Type</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600 ml-1">District</label>
              <select name="district_id" value={formData.district_id} onChange={handleChange} className="w-full px-5 py-3 bg-gray-50 border-2 rounded-2xl outline-none focus:border-indigo-500">
                <option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600 ml-1">Constituency</label>
              <select name="constenncy_id" value={formData.constenncy_id} onChange={handleChange} className="w-full px-5 py-3 bg-gray-50 border-2 rounded-2xl outline-none focus:border-indigo-500">
                <option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600 ml-1">Mandal</label>
              <select name="mandal_id" value={formData.mandal_id} onChange={handleChange} className="w-full px-5 py-3 bg-gray-50 border-2 rounded-2xl outline-none focus:border-indigo-500">
                <option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600 ml-1">Panchayati</label>
              <select name="panchayati_id" value={formData.panchayati_id} onChange={handleChange} className="w-full px-5 py-3 bg-gray-50 border-2 rounded-2xl outline-none focus:border-indigo-500">
                <option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button className="flex-1 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg transition-all">
              <Search size={20} /> Search Institutes
            </button>
            <button onClick={handleReset} className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-2xl border-2 flex items-center justify-center gap-2 transition-all">
              <RotateCcw size={20} /> Reset
            </button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {institutesData.map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-100 group flex flex-col"
            >
              <div className="h-48 bg-indigo-50 relative overflow-hidden">
                {item.image ? (
                  <img src={item.image} alt={item.institue_name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-indigo-200">
                    <School size={64} />
                  </div>
                )}
                <div className="absolute bottom-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                   {item.college_type}
                </div>
              </div>
              
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {item.institue_name}
                </h3>
                
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                    <BookOpen size={16} className="text-indigo-500" />
                    <span>{item.course_offered}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600 font-medium">
                    <MapPin size={16} className="text-red-500 shrink-0 mt-0.5" />
                    <span>{item.institue_address}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t border-gray-50">
                  <a href={`tel:+91${item.contact_num}`} className="flex-1 py-3 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center gap-2 font-bold hover:bg-indigo-100 transition-colors">
                    <Phone size={18} /> Call
                  </a>
                  <a href={item.location} className="w-12 h-12 bg-gray-50 text-red-500 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors border-2">
                    <MapPin size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
