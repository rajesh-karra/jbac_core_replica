'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, MapPin, Filter, RotateCcw, Church, Calendar, ArrowRight } from 'lucide-react';

const timingsData = [
  {
    id: 1,
    church_name: "Calvary Temple",
    denomination: "Independent",
    day: "Sunday",
    timings: "06:00 AM - 08:30 AM",
    location: "Hyderabad",
    image: null
  }
];

export default function ChurchTimingsPage() {
  const [formData, setFormData] = useState({
    denomationid: '',
    ministry_id: '',
    day: '',
    typetime: '',
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
      denomationid: '',
      ministry_id: '',
      day: '',
      typetime: '',
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
          <h1 className="text-4xl font-extrabold text-gray-900 border-l-8 border-cyan-600 pl-6 tracking-tighter italic">Church Timings</h1>
          <p className="text-gray-600 mt-2 ml-6 text-lg normal-case">ఆరాధన సమయాలు మరియు వివరాలు</p>
        </motion.div>

        {/* Search Panel */}
        <div className="bg-white rounded-[2.5rem] shadow-xl p-8 mb-12 border border-cyan-50">
          <div className="flex items-center gap-3 mb-8 text-cyan-600">
            <Filter size={24} />
            <h2 className="text-xl font-bold tracking-wider">Search Timings</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 ml-1">Denomination</label>
              <select name="denomationid" value={formData.denomationid} onChange={handleChange} className="w-full px-5 py-3 bg-gray-50 border-2 rounded-2xl outline-none focus:border-cyan-500">
                <option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 ml-1">Ministry</label>
              <select name="ministry_id" value={formData.ministry_id} onChange={handleChange} className="w-full px-5 py-3 bg-gray-50 border-2 rounded-2xl outline-none focus:border-cyan-500">
                <option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 ml-1">Service Day</label>
              <select name="day" value={formData.day} onChange={handleChange} className="w-full px-5 py-3 bg-gray-50 border-2 rounded-2xl outline-none focus:border-cyan-500">
                <option value="">Select the Day</option>
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wendesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 ml-1">Timing Type</label>
              <select name="typetime" value={formData.typetime} onChange={handleChange} className="w-full px-5 py-3 bg-gray-50 border-2 rounded-2xl outline-none focus:border-cyan-500">
                <option value="">Select Type</option>
                <option value="1">With Timings</option>
                <option value="2">Without Timings</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 ml-1">District</label>
              <select name="district_id" value={formData.district_id} onChange={handleChange} className="w-full px-5 py-3 bg-gray-50 border-2 rounded-2xl outline-none focus:border-cyan-500">
                <option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 ml-1">Constituency</label>
              <select name="constenncy_id" value={formData.constenncy_id} onChange={handleChange} className="w-full px-5 py-3 bg-gray-50 border-2 rounded-2xl outline-none focus:border-cyan-500">
                <option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button className="flex-1 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg transition-all">
              <Search size={20} /> Search Timings
            </button>
            <button onClick={handleReset} className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-2xl border-2 flex items-center justify-center gap-2 transition-all">
              <RotateCcw size={20} /> Reset
            </button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {timingsData.map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[2.5rem] p-8 shadow-lg border border-cyan-50 flex flex-col group transition-all"
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 bg-cyan-50 text-cyan-500 rounded-2xl flex items-center justify-center">
                  <Church size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 group-hover:text-cyan-600 transition-colors uppercase italic">{item.church_name}</h3>
                  <p className="text-xs font-bold text-gray-400 normal-case tracking-widest">{item.denomination}</p>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <Calendar size={20} className="text-cyan-600" />
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Sabbath Day</p>
                    <p className="text-sm font-black text-gray-700">{item.day}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <Clock size={20} className="text-amber-500" />
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Worship Time</p>
                    <p className="text-sm font-black text-gray-700">{item.timings}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <MapPin size={20} className="text-red-500" />
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Location</p>
                    <p className="text-sm font-black text-gray-700">{item.location}</p>
                  </div>
                </div>
              </div>

              <button className="mt-8 w-full py-4 bg-gray-900 text-white rounded-2xl font-black flex items-center justify-center gap-2 transform active:scale-95 transition-all">
                Full Details <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
