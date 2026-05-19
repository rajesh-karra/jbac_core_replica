'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Building2, MapPin, Phone, Filter, RotateCcw, Share2, ArrowRight } from 'lucide-react';

const organizationData = [
  {
    id: 1,
    organisation_name: "AP Christian Council",
    org_address: "Vijayawada, AP",
    ward: "MG Road",
    contact_num: "9876543210",
    location: "https://maps.google.com",
    image: null
  }
];

export default function OrganizationPage() {
  const [formData, setFormData] = useState({
    denomation_id: '',
    ministry_id: '',
    service_name: '',
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
      service_name: '',
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
          <h1 className="text-4xl font-extrabold text-gray-900 border-l-8 border-violet-600 pl-6 tracking-tighter italic">Organization</h1>
          <p className="text-gray-600 mt-2 ml-6 text-lg normal-case tracking-normal">క్రైస్తవ సంస్థల వివరాలు మరియు శోధన</p>
        </motion.div>

        {/* Search Panel */}
        <div className="bg-white rounded-[2.5rem] shadow-xl p-8 mb-12 border border-violet-50">
          <div className="flex items-center gap-3 mb-8 text-violet-600">
            <Filter size={24} />
            <h2 className="text-xl font-bold tracking-wider">Filter Organizations</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 ml-1">Denomination</label>
              <select name="denomation_id" value={formData.denomation_id} onChange={handleChange} className="w-full px-5 py-3 bg-gray-50 border-2 rounded-2xl outline-none focus:border-violet-500">
                <option value="">Select Denomination</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 ml-1">Ministry</label>
              <select name="ministry_id" value={formData.ministry_id} onChange={handleChange} className="w-full px-5 py-3 bg-gray-50 border-2 rounded-2xl outline-none focus:border-violet-500">
                <option value="">Select Ministry</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 ml-1">Service Name</label>
              <select name="service_name" value={formData.service_name} onChange={handleChange} className="w-full px-5 py-3 bg-gray-50 border-2 rounded-2xl outline-none focus:border-violet-500">
                <option value="">Select Service</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 ml-1">District</label>
              <select name="district_id" value={formData.district_id} onChange={handleChange} className="w-full px-5 py-3 bg-gray-50 border-2 rounded-2xl outline-none focus:border-violet-500">
                <option value="">District</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 ml-1">Constituency</label>
              <select name="constenncy_id" value={formData.constenncy_id} onChange={handleChange} className="w-full px-5 py-3 bg-gray-50 border-2 rounded-2xl outline-none focus:border-violet-500">
                <option value="">Constituency</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button className="flex-1 py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg transition-all">
              <Search size={20} /> Search Now
            </button>
            <button onClick={handleReset} className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-2xl border-2 flex items-center justify-center gap-2 transition-all">
              <RotateCcw size={20} /> Reset
            </button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizationData.map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-violet-50 group flex flex-col"
            >
              <div className="h-48 bg-violet-50 relative">
                {item.image ? (
                  <img src={item.image} alt={item.organisation_name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-violet-200">
                    <Building2 size={64} />
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-md text-violet-600 cursor-pointer hover:bg-violet-600 hover:text-white transition-all">
                  <Share2 size={18} />
                </div>
              </div>
              
              <div className="p-8 space-y-4 flex-1 flex flex-col">
                <h3 className="text-2xl font-black text-gray-900 group-hover:text-violet-600 transition-colors leading-tight">
                  {item.organisation_name}
                </h3>
                
                <div className="space-y-3 flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
                       <MapPin size={18} className="text-red-500" />
                    </div>
                    <div className="normal-case">
                       <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Address</p>
                       <p className="text-sm font-bold text-gray-600">{item.ward}, {item.org_address}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-6 border-t border-gray-50">
                  <a href={`tel:+91${item.contact_num}`} className="flex-1 py-4 bg-violet-50 text-violet-600 rounded-xl flex items-center justify-center gap-2 font-black hover:bg-violet-100 transition-colors uppercase text-sm">
                    <Phone size={18} /> Contact
                  </a>
                  <a href={item.location} className="w-14 h-14 bg-gray-900 text-white rounded-xl flex items-center justify-center hover:bg-black transition-colors shadow-lg">
                    <MapPin size={20} />
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

