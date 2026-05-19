'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Heart, MapPin, Phone, User, Filter, RotateCcw, Users, Star, Info } from 'lucide-react';

const marriagesData = [
  {
    id: 1,
    name: "Rachel Priya",
    age: 24,
    gender: "Female",
    caste: "BC-C",
    district: "Guntur",
    mandal: "Tenali",
    spiritual_status: "Practicing Christian",
    marital_status: "Single",
    image: null,
    contact_num: "9876543210"
  }
];

export default function MarriagesPage() {
  const [formData, setFormData] = useState({
    denomation_id: '',
    ministry_id: '',
    gender: '',
    status: '',
    caste: '',
    spirti: '',
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
      denomation_id: '',
      ministry_id: '',
      gender: '',
      status: '',
      caste: '',
      spirti: '',
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
          <h1 className="text-4xl font-extrabold text-gray-900 border-l-8 border-pink-500 pl-6 uppercase tracking-tighter italic">Marriages</h1>
          <p className="text-gray-600 mt-2 ml-6 text-lg">వైవాహిక సంబంధాల వివరాలు మరియు శోధన</p>
        </motion.div>

        {/* Search Panel */}
        <div className="bg-white rounded-[2.3rem] shadow-xl p-8 mb-12 border border-pink-50">
          <div className="flex items-center gap-3 mb-8 text-pink-600">
            <Filter size={24} />
            <h2 className="text-xl font-bold uppercase tracking-wider">Find Your Partner</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 ml-1">Denomination</label>
              <select name="denomation_id" value={formData.denomation_id} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border-2 rounded-xl outline-none focus:border-pink-400 text-sm">
                <option value="">Select Denomination</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 ml-1">Ministry</label>
              <select name="ministry_id" value={formData.ministry_id} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border-2 rounded-xl outline-none focus:border-pink-400 text-sm">
                <option value="">Select Ministry</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 ml-1">Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border-2 rounded-xl outline-none focus:border-pink-400 text-sm">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 ml-1">Status</label>
              <select name="status" value={formData.status} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border-2 rounded-xl outline-none focus:border-pink-400 text-sm">
                <option value="">Select Status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorce">Divorce</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 ml-1">Caste</label>
              <select name="caste" value={formData.caste} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border-2 rounded-xl outline-none focus:border-pink-400 text-sm">
                <option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
                <option value="BC">BC</option>
                <option value="OC">OC</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 ml-1">Spiritual Status</label>
              <select name="spirti" value={formData.spirti} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border-2 rounded-xl outline-none focus:border-pink-400 text-sm">
                <option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</option>
                <option value="practicingchristian">Practicing Christian</option>
                <option value="nominalchristian">Nominal Christian</option>
                <option value="festivalchristian">Festival Christian</option>
                <option value="justbelievingjesus">Just Believing Jesus</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 ml-1">District</label>
              <select name="district_id" value={formData.district_id} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border-2 rounded-xl outline-none focus:border-pink-400 text-sm">
                <option value="">District</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 ml-1">Constituency</label>
              <select name="constenncy_id" value={formData.constenncy_id} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border-2 rounded-xl outline-none focus:border-pink-400 text-sm">
                <option value="">Constituency</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 ml-1">Mandal</label>
              <select name="mandal_id" value={formData.mandal_id} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border-2 rounded-xl outline-none focus:border-pink-400 text-sm">
                <option value="">Mandal</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 ml-1">Panchayati</label>
              <select name="panchayati_id" value={formData.panchayati_id} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border-2 rounded-xl outline-none focus:border-pink-400 text-sm">
                <option value="">Panchayati</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button className="flex-1 py-4 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg transition-all">
              <Search size={20} /> Search Profiles
            </button>
            <button onClick={handleReset} className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-2xl border-2 border-gray-200 flex items-center justify-center gap-2 transition-all">
              <RotateCcw size={20} /> Reset
            </button>
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {marriagesData.map((profile) => (
            <motion.div 
              key={profile.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-[2.3rem] overflow-hidden shadow-lg border border-pink-50 group"
            >
              <div className="h-64 bg-pink-50 relative overflow-hidden">
                {profile.image ? (
                  <img src={profile.image} alt={profile.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-pink-200 bg-pink-50">
                    <User size={80} />
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md">
                  <Heart className="text-pink-500 fill-pink-500" size={20} />
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                   <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{profile.gender}</span>
                   <span className="bg-white text-pink-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">{profile.age} Yrs</span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-extrabold text-gray-900 leading-tight">
                    {profile.name}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3 pb-4 border-b border-pink-50">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-gray-400">Marital Status</span>
                    <span className="text-sm font-bold text-gray-700">{profile.marital_status}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-gray-400">Caste</span>
                    <span className="text-sm font-bold text-gray-700">{profile.caste}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-pink-600 bg-pink-50 p-2 rounded-lg">
                    <Star size={14} fill="currentColor" />
                    <span>{profile.spiritual_status}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500 p-2">
                    <MapPin size={14} className="text-red-400" />
                    <span>{profile.district}, {profile.mandal}</span>
                  </div>
                </div>

                <a 
                  href={`tel:${profile.contact_num}`}
                  className="w-full py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-xl flex items-center justify-center gap-2 font-bold transition-all shadow-md active:scale-95"
                >
                  <Phone size={18} /> Call Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

