'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Error intentional to trigger reinstall or just use framer-motion
import { Search, Briefcase, GraduationCap, MapPin, Phone, History, DollarSign, Filter, RotateCcw } from 'lucide-react';

const jobsData = [
  {
    id: 1,
    jobtitle: "Software Engineer",
    workinglocation: "Kadapa",
    description: "Looking for a full-stack developer",
    experience: "2-3 Years",
    qualification: "B.Tech",
    salary: "30,000",
    image: null,
    contactnumber: "9876543210",
    google_location: "https://maps.google.com"
  }
];

export default function JobsPage() {
  const [formData, setFormData] = useState({
    jobtile: '',
    qual: '',
    experience: '',
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
      jobtile: '',
      qual: '',
      experience: '',
      district_id: '',
      constenncy_id: '',
      mandal_id: '',
      panchayati_id: ''
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 border-l-8 border-blue-600 pl-6 uppercase tracking-tighter">Jobs Searching</h1>
          <p className="text-gray-600 mt-2 ml-6 text-lg">ఉద్యోగ అవకాశాల శోధన</p>
        </div>

        {/* Search Panel */}
        <div className="bg-white rounded-[2.5rem] shadow-xl p-8 mb-12 border border-blue-50">
          <div className="flex items-center gap-3 mb-8 text-blue-600">
            <Filter size={24} />
            <h2 className="text-xl font-bold uppercase tracking-wider">Refine Search</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600 ml-1">Job Title</label>
              <select name="jobtile" value={formData.jobtile} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500">
                <option value="">Select Title</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600 ml-1">Qualification</label>
              <select name="qual" value={formData.qual} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500">
                <option value="">Select Qualification</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600 ml-1">Experience</label>
              <select name="experience" value={formData.experience} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500">
                <option value="">Select Your Experience</option>
                <option value="fresher">Fresher</option>
                <option value="1-2">1-2</option>
                <option value="2-3">2-3</option>
                <option value="Above 5YEARS">Above 5 YEARS</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
             <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 ml-1">District</label>
                <select name="district_id" value={formData.district_id} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500">
                  <option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</option>
                </select>
             </div>
             <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 ml-1">Constituency</label>
                <select name="constenncy_id" value={formData.constenncy_id} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500">
                  <option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</option>
                </select>
             </div>
             <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 ml-1">Mandal</label>
                <select name="mandal_id" value={formData.mandal_id} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500">
                  <option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</option>
                </select>
             </div>
             <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 ml-1">Panchayati</label>
                <select name="panchayati_id" value={formData.panchayati_id} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50 border-2 rounded-2xl outline-none focus:border-blue-500">
                  <option value="">ఇక్కడ క్లిక్ చేసి ఎంచుకోండి</option>
                </select>
             </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button className="flex-1 py-5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-blue-100 transition-all">
              <Search size={22} /> Search Jobs
            </button>
            <button onClick={handleReset} className="px-8 py-5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-extrabold rounded-2xl border-2 flex items-center justify-center gap-2 transition-all">
              <RotateCcw size={22} /> Reset
            </button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {jobsData.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-100 flex flex-col group"
            >
              <div className="h-56 bg-gray-100 relative overflow-hidden">
                {item.image ? (
                  <img src={item.image} alt={item.jobtitle} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <Briefcase size={64} />
                  </div>
                )}
                <div className="absolute top-4 right-4 px-4 py-1.5 bg-white/90 backdrop-blur rounded-full text-xs font-bold shadow-sm flex items-center gap-2">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Active
                </div>
              </div>
              
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {item.jobtitle}
                </h3>
                
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} className="text-red-500" />
                    <span className="font-medium">{item.workinglocation}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                    <GraduationCap size={16} className="text-blue-500" />
                    <span>{item.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                    <History size={16} className="text-yellow-600" />
                    <span>{item.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-blue-600 font-extrabold">
                    <DollarSign size={16} />
                    <span>₹ {item.salary}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t border-gray-50">
                   <a href={`tel:+91${item.contactnumber}`} className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center gap-2 font-bold transition-all shadow-md">
                    <Phone size={18} /> Call
                  </a>
                   <a href={item.google_location} className="w-12 h-12 bg-gray-50 hover:bg-gray-100 text-red-500 rounded-xl flex items-center justify-center transition-all border-2">
                    <MapPin size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
