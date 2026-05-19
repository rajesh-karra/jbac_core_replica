'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, MapPin, Filter, RotateCcw, Video, Users, Info, ArrowRight } from 'lucide-react';

const eventsData = [
  {
    id: 1,
    mettingtype_name: "VBS",
    denomation_name: "CSI",
    ministry_name: "Grace Ministries",
    date: "2024-05-20",
    location: "Guntur",
    organizer: "Rev. Paul",
    image: null
  }
];

export default function EventsPage() {
  const [formData, setFormData] = useState({
    mettingtype: '',
    denomation_id: '',
    ministry_id: '',
    startdate: '',
    district_id: '',
    constenncy_id: '',
    mandal_id: '',
    panchayati_id: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleReset = () => {
    setFormData({
      mettingtype: '',
      denomation_id: '',
      ministry_id: '',
      startdate: '',
      district_id: '',
      constenncy_id: '',
      mandal_id: '',
      panchayati_id: ''
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50 uppercase">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 border-l-8 border-amber-600 pl-6 tracking-tighter italic">Meetings & Events</h1>
          <p className="text-gray-600 mt-2 ml-6 text-lg normal-case">ఆంధ్ర రాష్ట్రంలోని జరగబోయే క్రైస్తవ మీటింగ్స్</p>
        </motion.div>

        {/* Search Panel */}
        <div className="bg-white rounded-[2.5rem] shadow-xl p-8 mb-12 border border-amber-50">
          <div className="flex items-center gap-3 mb-8 text-amber-600">
            <Filter size={24} />
            <h2 className="text-xl font-bold tracking-wider">Search Meetings</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 ml-1">Meeting Type</label>
              <select name="mettingtype" value={formData.mettingtype} onChange={handleChange} className="w-full px-5 py-3 bg-gray-50 border-2 rounded-2xl outline-none focus:border-amber-500">
                <option value="">సెలెక్ట్ కూటముల టైపు</option>
                <option value="1">VBS</option>
                <option value="2">ఉజ్జీవ కూటములు</option>
                <option value="3">సువార్త కూటములు</option>
                <option value="4">స్వస్థత కూటములు</option>
                <option value="6">యూత్ మీటింగ్స్</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 ml-1">Denomination</label>
              <select name="denomation_id" value={formData.denomation_id} onChange={handleChange} className="w-full px-5 py-3 bg-gray-50 border-2 rounded-2xl outline-none focus:border-amber-500">
                <option value="">సెలెక్ట్ డినామినేషన్</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 ml-1">Ministry</label>
              <select name="ministry_id" value={formData.ministry_id} onChange={handleChange} className="w-full px-5 py-3 bg-gray-50 border-2 rounded-2xl outline-none focus:border-amber-500">
                <option value="">సెలెక్ట్ మినిస్ట్రీ</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 ml-1">Select Date</label>
              <input type="date" name="startdate" value={formData.startdate} onChange={handleChange} className="w-full px-5 py-3 bg-gray-50 border-2 rounded-2xl outline-none focus:border-amber-500" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 ml-1">District</label>
              <select name="district_id" value={formData.district_id} onChange={handleChange} className="w-full px-5 py-3 bg-gray-50 border-2 rounded-2xl outline-none focus:border-amber-500">
                <option value="">సెలెక్ట్ జిల్లా</option>
              </select>
            </div>
            {/* ... other location fields simplified for brevity ... */}
          </div>

          <div className="flex gap-4 mt-8">
            <button className="flex-1 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg transition-all">
              <Search size={20} /> Search Events
            </button>
            <button onClick={handleReset} className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-2xl border-2 flex items-center justify-center gap-2 transition-all">
              <RotateCcw size={20} /> Reset
            </button>
          </div>
        </div>

        {/* List View */}
        <div className="space-y-6">
          {eventsData.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-[2rem] shadow-lg p-6 border-l-8 border-amber-500 flex flex-col md:flex-row gap-6 items-center"
            >
              <div className="w-full md:w-32 h-32 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-200">
                <Calendar size={48} />
              </div>
              
              <div className="flex-1 space-y-2 text-center md:text-left">
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-[10px] font-black">{item.mettingtype_name}</span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[10px] font-black">{item.denomation_name}</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 tracking-tight">{item.ministry_name}</h3>
                <div className="flex flex-wrap gap-6 justify-center md:justify-start text-sm font-bold text-gray-500 lowercase">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-amber-500" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-red-500" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-auto">
                <button className="w-full md:w-auto px-8 py-4 bg-gray-900 hover:bg-black text-white rounded-xl font-bold flex items-center justify-center gap-2 transform active:scale-95 transition-all">
                  Details <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

