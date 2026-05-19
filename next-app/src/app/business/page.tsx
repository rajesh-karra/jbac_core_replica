'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Phone, Globe, Search, Plus } from 'lucide-react';

export default function BusinessPage() {
  const businesses = [
    { name: 'Grace Sol Solutions', category: 'IT Services', location: 'Guntur', phone: '9848012345' },
    { name: 'Zion Book Store', category: 'Books & Media', location: 'Vijayawada', phone: '9949434312' },
    { name: 'St. Marys Prints', category: 'Printing', location: 'Hyderabad', phone: '9000011111' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-2 font-telugu">క్రిస్టియన్ బిజినెస్ డైరెక్టరీ</h1>
            <p className="text-slate-500 text-lg">Support and connect with Christian-owned businesses.</p>
          </motion.div>
          <button className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-100 hover:scale-105 transition-all">
             <Plus size={20} /> Register My Business
          </button>
        </div>

        <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 mb-12 flex items-center gap-4">
           <Search className="text-slate-400 ml-4" />
           <input type="text" placeholder="Search businesses, categories, or cities..." className="flex-1 bg-transparent border-none outline-none py-4 text-lg" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((biz, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all">
               <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Briefcase size={28} />
               </div>
               <h3 className="text-2xl font-bold text-slate-900 mb-1">{biz.name}</h3>
               <p className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-6">{biz.category}</p>
               
               <div className="space-y-4 border-t border-slate-50 pt-6">
                  <div className="flex items-center gap-3 text-slate-600"><MapPin size={18} className="text-slate-400" /> {biz.location}</div>
                  <div className="flex items-center gap-3 text-slate-600"><Phone size={18} className="text-slate-400" /> {biz.phone}</div>
               </div>
               
               <button className="w-full mt-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all">View Details</button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
