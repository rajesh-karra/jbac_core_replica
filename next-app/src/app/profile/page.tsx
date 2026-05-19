'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, ShieldCheck, Camera } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100"
        >
          {/* Cover Header */}
          <div className="h-48 bg-gradient-to-r from-blue-600 to-indigo-700 relative">
             <div className="absolute -bottom-16 left-12">
                <div className="w-32 h-32 bg-white rounded-[2.5rem] p-1 shadow-2xl">
                   <div className="w-full h-full bg-slate-100 rounded-[2.2rem] flex items-center justify-center text-4xl font-black text-slate-300">
                      JD
                   </div>
                </div>
                <button className="absolute bottom-0 right-0 p-3 bg-white text-blue-600 rounded-2xl shadow-xl hover:bg-blue-50 transition-all">
                   <Camera size={20} />
                </button>
             </div>
          </div>

          <div className="pt-20 px-12 pb-12">
             <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
                <div>
                   <h1 className="text-4xl font-black text-slate-900 mb-2">Pastor John Doe</h1>
                   <p className="text-slate-500 font-bold flex items-center gap-2">
                      <ShieldCheck size={18} className="text-blue-600" /> 
                      Ministry Leader • Guntur, AP
                   </p>
                </div>
                <div className="flex gap-4">
                   <button className="px-8 py-3.5 bg-slate-100 text-slate-700 font-black rounded-2xl hover:bg-slate-200 transition-all">Edit Basic Info</button>
                   <button className="px-8 py-3.5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-100 hover:scale-105 transition-all">Verified Status</button>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-slate-100">
                <div className="space-y-8">
                   <h3 className="text-xl font-black text-slate-900 mb-6">Contact Information</h3>
                   <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-3xl">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm"><Mail size={20} /></div>
                      <div>
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Address</p>
                         <p className="font-bold text-slate-800">john.doe@minister.com</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-3xl">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm"><Phone size={20} /></div>
                      <div>
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Mobile Number</p>
                         <p className="font-bold text-slate-800">+91 99494343XX</p>
                      </div>
                   </div>
                </div>

                <div className="space-y-8">
                   <h3 className="text-xl font-black text-slate-900 mb-6">Ministry Details</h3>
                   <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-3xl">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm"><MapPin size={20} /></div>
                      <div>
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Primary Location</p>
                         <p className="font-bold text-slate-800">Guntur Calvary Church, AP</p>
                      </div>
                   </div>
                   <div className="p-8 bg-blue-50 border border-blue-100 rounded-[2.5rem]">
                      <h4 className="font-black text-blue-900 mb-4">Verification Check</h4>
                      <p className="text-blue-700 text-sm leading-relaxed font-bold">Your account is currently verified for Ministry Posts. You can now publish news and events directly.</p>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
